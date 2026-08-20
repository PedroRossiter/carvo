import { Pool } from "pg";

let pool;

export function getPool() {
  if (!pool) {
    const isLocal = /127\.0\.0\.1|localhost/.test(process.env.DATABASE_URL || "");
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
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

