import { Pool } from "pg";

let pool;

// A integração Neon↔Vercel injeta a conexão como POSTGRES_URL; o .env.example
// deste projeto usa DATABASE_URL. Aceita os dois pra não depender de qual dos
// dois caminhos configurou o ambiente.
function connectionString() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) {
    throw new Error(
      "Falta a variável de ambiente DATABASE_URL (ou POSTGRES_URL). " +
        "Em produção, configure em Vercel > Settings > Environment Variables; " +
        "local, copie .env.example para .env.local."
    );
  }
  return url;
}

export function getPool() {
  if (!pool) {
    const url = connectionString();
    const isLocal = /127\.0\.0\.1|localhost/.test(url);
    pool = new Pool({
      connectionString: url,
      ssl: isLocal ? false : { rejectUnauthorized: false },
    });
  }
  return pool;
}

// Um registro por modelo, com o array de versões aninhado e ordenado por preço.
// precoMin/precoMax servem pro card ("a partir de") e pro filtro de faixa.
export async function getModelos() {
  const { rows } = await getPool().query(`
    SELECT
      m.id, b.nome AS marca, m.modelo, m.powertrain, m.categoria,
      m.autonomia_oficial, m.bateria_kwh::float AS bateria_kwh, m.recarga,
      m.tanque_l, m.portas, m.lugares, m.porta_malas_l,
      m.comprimento_mm, m.entre_eixos_mm, m.peso_kg, m.garantia_anos,
      m.origem, m.fabrica, m.pratico, m.atualizado_em,
      v.preco_min::float AS preco_min,
      v.preco_max::float AS preco_max,
      v.versoes
    FROM modelos m
    JOIN marcas b ON b.id = m.marca_id
    JOIN LATERAL (
      SELECT
        min(x.preco) AS preco_min,
        max(x.preco) AS preco_max,
        json_agg(
          json_build_object(
            'id', x.id,
            'nome', x.nome,
            'preco', x.preco::float,
            'motor', x.motor,
            'potencia_cv', x.potencia_cv,
            'torque_kgfm', x.torque_kgfm::float,
            'cambio', x.cambio,
            'tracao', x.tracao,
            'acel_0100_s', x.acel_0100_s::float,
            'consumo_cidade', x.consumo_cidade::float,
            'consumo_estrada', x.consumo_estrada::float,
            'airbags', x.airbags,
            'preco_fipe', x.preco_fipe::float,
            'fipe_referencia', x.fipe_referencia
          ) ORDER BY x.preco
        ) AS versoes
      FROM versoes x
      WHERE x.modelo_id = m.id
    ) v ON TRUE
    ORDER BY v.preco_min ASC
  `);
  return rows;
}

// Uma linha por marca, com o que dá pra ver de status FIPE sem sair do banco:
// quantas versões já têm preco_fipe preenchido (ver app/api/sync-fipe) e a
// referência mais recente. LEFT JOIN de propósito — marca sem modelo ainda
// aparece na lista, só com contagem zerada, em vez de sumir.
export async function getMarcas() {
  const { rows } = await getPool().query(`
    SELECT
      b.nome AS marca, b.slug,
      count(DISTINCT m.id)::int AS total_modelos,
      count(v.id)::int AS total_versoes,
      count(v.id) FILTER (WHERE v.preco_fipe IS NOT NULL)::int AS versoes_com_fipe,
      min(v.preco)::float AS preco_min,
      max(v.preco)::float AS preco_max,
      max(v.fipe_referencia) AS fipe_referencia
    FROM marcas b
    LEFT JOIN modelos m ON m.marca_id = b.id
    LEFT JOIN versoes v ON v.modelo_id = m.id
    GROUP BY b.id, b.nome, b.slug
    ORDER BY b.nome ASC
  `);
  return rows;
}

