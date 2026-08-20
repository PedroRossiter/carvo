import { getPool } from "@/lib/db";

// Sincroniza o preço de tabela FIPE (0 km) de cada versão.
//
// Roda na Vercel (que tem internet), não neste projeto local. Protegido por
// token: chame com  ?token=<SYNC_TOKEN>  ou header Authorization: Bearer <token>.
//
// A FIPE é uma referência de mercado, não o preço de tabela da montadora —
// por isso o valor entra num campo separado (preco_fipe), sem sobrescrever o
// preço sugerido que já está no catálogo.

export const dynamic = "force-dynamic";
export const maxDuration = 300;

const BASE = "https://parallelum.com.br/fipe/api/v1/carros";
const PAUSA_MS = 120; // educação com a API pública

const dorme = (ms) => new Promise((r) => setTimeout(r, ms));

async function json(url) {
  const r = await fetch(url, { headers: { accept: "application/json" } });
  if (!r.ok) throw new Error(`${r.status} em ${url}`);
  return r.json();
}

// Normaliza pra comparar: sem acento, sem pontuação, minúsculo.
const norm = (t) =>
  (t || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

// Quantos tokens da nossa versão aparecem no nome do modelo FIPE.
function score(nossoModelo, nossaVersao, nomeFipe) {
  const alvo = norm(nomeFipe);
  if (!alvo.includes(norm(nossoModelo).split(" ")[0])) return 0;

  const tokens = norm(`${nossoModelo} ${nossaVersao}`)
    .split(" ")
    .filter((t) => t.length > 1 && !["de", "da", "do", "e"].includes(t));
  if (!tokens.length) return 0;

  const achou = tokens.filter((t) => alvo.includes(t)).length;
  return achou / tokens.length;
}

export async function GET(req) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") || (req.headers.get("authorization") || "").replace(/^Bearer /, "");
  if (!process.env.SYNC_TOKEN || token !== process.env.SYNC_TOKEN) {
    return Response.json({ erro: "token inválido" }, { status: 401 });
  }
  const soMarca = url.searchParams.get("marca"); // opcional, pra testar de leve
  const minScore = Number(url.searchParams.get("min") || 0.6);

  const pool = getPool();
  const { rows: versoes } = await pool.query(`
    SELECT v.id, v.nome, v.preco::float AS preco, m.modelo, b.nome AS marca
    FROM versoes v
    JOIN modelos m ON m.id = v.modelo_id
    JOIN marcas b ON b.id = m.marca_id
    ${soMarca ? "WHERE b.nome ILIKE $1" : ""}
    ORDER BY b.nome, m.modelo, v.preco
  `, soMarca ? [soMarca] : []);

  const marcasFipe = await json(`${BASE}/marcas`);
  const acharMarca = (nome) => {
    const n = norm(nome);
    return marcasFipe.find((m) => norm(m.nome) === n) || marcasFipe.find((m) => norm(m.nome).includes(n));
  };

  const cacheModelos = new Map();
  const resultado = { atualizadas: 0, semMatch: 0, erros: [], referencia: null };

  for (const v of versoes) {
    try {
      const marca = acharMarca(v.marca);
      if (!marca) { resultado.semMatch++; continue; }

      if (!cacheModelos.has(marca.codigo)) {
        const r = await json(`${BASE}/marcas/${marca.codigo}/modelos`);
        cacheModelos.set(marca.codigo, r.modelos || []);
        await dorme(PAUSA_MS);
      }
      const modelos = cacheModelos.get(marca.codigo);

      let melhor = null;
      let melhorScore = 0;
      for (const m of modelos) {
        const sc = score(v.modelo, v.nome, m.nome);
        if (sc > melhorScore) { melhorScore = sc; melhor = m; }
      }
      if (!melhor || melhorScore < minScore) { resultado.semMatch++; continue; }

      const anos = await json(`${BASE}/marcas/${marca.codigo}/modelos/${melhor.codigo}/anos`);
      await dorme(PAUSA_MS);
      // "32000-x" é como a FIPE identifica o zero-quilômetro.
      const zeroKm = anos.find((a) => String(a.codigo).startsWith("32000"));
      if (!zeroKm) { resultado.semMatch++; continue; }

      const det = await json(`${BASE}/marcas/${marca.codigo}/modelos/${melhor.codigo}/anos/${zeroKm.codigo}`);
      await dorme(PAUSA_MS);

      const valor = Number(String(det.Valor).replace(/[^0-9,]/g, "").replace(",", "."));
      if (!valor) { resultado.semMatch++; continue; }

      resultado.referencia = det.MesReferencia;
      await pool.query(
        `UPDATE versoes
         SET preco_fipe = $1, fipe_codigo = $2, fipe_referencia = $3, fipe_atualizado_em = now()
         WHERE id = $4`,
        [valor, det.CodigoFipe, det.MesReferencia, v.id]
      );
      resultado.atualizadas++;
    } catch (e) {
      resultado.erros.push(`${v.marca} ${v.modelo} ${v.nome}: ${e.message}`);
    }
  }

  return Response.json({ ...resultado, total: versoes.length, erros: resultado.erros.slice(0, 10) });
}
