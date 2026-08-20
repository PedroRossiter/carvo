DROP TABLE IF EXISTS versoes;
DROP TABLE IF EXISTS modelos;
DROP TABLE IF EXISTS carros;
DROP TABLE IF EXISTS marcas;

CREATE TABLE marcas (
  id SERIAL PRIMARY KEY,
  nome TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL
);

-- O que não muda entre versões do mesmo modelo.
CREATE TABLE modelos (
  id SERIAL PRIMARY KEY,
  marca_id INTEGER NOT NULL REFERENCES marcas(id),
  modelo TEXT NOT NULL,
  powertrain TEXT NOT NULL CHECK (powertrain IN ('combustao','flex','mhev','hev','phev','bev')),
  categoria TEXT NOT NULL,
  autonomia_oficial TEXT,
  bateria_kwh NUMERIC(5,1),
  recarga TEXT,
  tanque_l INTEGER,
  portas INTEGER,
  lugares INTEGER,
  porta_malas_l INTEGER,
  comprimento_mm INTEGER,
  entre_eixos_mm INTEGER,
  peso_kg INTEGER,
  garantia_anos INTEGER,
  origem TEXT CHECK (origem IN ('nacional','importado')),
  fabrica TEXT,
  pratico TEXT NOT NULL,
  fonte TEXT DEFAULT 'seed-manual',
  atualizado_em TIMESTAMPTZ DEFAULT now(),
  UNIQUE (marca_id, modelo)
);

-- O que varia de versão pra versão.
CREATE TABLE versoes (
  id SERIAL PRIMARY KEY,
  modelo_id INTEGER NOT NULL REFERENCES modelos(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  preco NUMERIC(12,2) NOT NULL,
  motor TEXT,
  potencia_cv INTEGER,
  torque_kgfm NUMERIC(5,1),
  cambio TEXT,
  tracao TEXT,
  acel_0100_s NUMERIC(4,1),
  consumo_cidade NUMERIC(4,1),
  consumo_estrada NUMERIC(4,1),
  airbags INTEGER,
  -- Preenchido pelo sync da FIPE (ver app/api/sync-fipe). NULL = ainda não casou.
  preco_fipe NUMERIC(12,2),
  fipe_codigo TEXT,
  fipe_referencia TEXT,
  fipe_atualizado_em TIMESTAMPTZ,
  atualizado_em TIMESTAMPTZ DEFAULT now(),
  UNIQUE (modelo_id, nome)
);

CREATE INDEX idx_modelos_marca ON modelos(marca_id);
CREATE INDEX idx_modelos_powertrain ON modelos(powertrain);
CREATE INDEX idx_modelos_categoria ON modelos(categoria);
CREATE INDEX idx_versoes_modelo ON versoes(modelo_id);
CREATE INDEX idx_versoes_preco ON versoes(preco);
