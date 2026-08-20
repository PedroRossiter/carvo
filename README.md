# Carvo

Consultor online de compra de carros zero-km no Brasil. Catálogo, comparador e
glossário simples pra escolher entre combustão, flex, híbrido e elétrico —
com dados reais de ficha técnica, origem/fábrica, estimativa de isenção PCD
e preço de referência da Tabela FIPE.

## Stack

- Next.js 16 (App Router) + React 19 + Tailwind CSS
- PostgreSQL (Neon em produção)

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha DATABASE_URL e SYNC_TOKEN
psql "$DATABASE_URL" -f scripts/schema.sql
node scripts/gen_seed.js && psql "$DATABASE_URL" -f scripts/seed_full.sql
npm run dev
```

## Estrutura

- `app/` — páginas (catálogo, comparador, glossário, assistente) e a rota
  de sincronização com a FIPE (`app/api/sync-fipe`)
- `components/` — UI (cards, modal de ficha técnica, comparador)
- `lib/` — acesso a banco, formatação, glossário, estimativa de PCD
- `scripts/` — gerador do seed (`gen_seed.js`) a partir dos datasets de
  carros, versões, fichas técnicas e origem/fábrica

## Dados

O catálogo é mantido manualmente nos arquivos de `scripts/` (carros,
versões, especificações, origem/fábrica) e depois combinado num
`seed_full.sql`. O preço de Tabela FIPE é sincronizado à parte, via
`/api/sync-fipe`, e fica num campo separado do preço sugerido — a FIPE é
referência de mercado, não o preço de tabela da montadora.
