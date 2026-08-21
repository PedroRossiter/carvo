// Resumo curto de cada marca do catálogo. Chave = slug (igual ao de `marcas.slug`
// no banco, gerado a partir do mesmo array MARCAS em scripts/gen_seed.js).
//
// Não é uma lista exaustiva de propósito: só cobre marcas com modelo zero-km no catálogo hoje.
// Pra saber quais dessas marcas já têm preço FIPE de fato sincronizado, ver
// getMarcas() em lib/db.js — isso vem do banco, não daqui.
export const MARCAS_INFO = {
  chevrolet: {
    pais: "Estados Unidos",
    resumo:
      "Maior fábrica de carros populares do Brasil, em Gravataí (RS). O Onix é o mais vendido do país há mais de uma década.",
  },
  fiat: {
    pais: "Itália",
    resumo:
      "Fabrica no Brasil desde 1976, em Betim (MG) — a montadora com maior volume histórico de vendas no país, forte em compactos e picapes.",
  },
  volkswagen: {
    pais: "Alemanha",
    resumo:
      "Uma das pioneiras a fabricar localmente, desde 1953 em São Bernardo do Campo (SP). Linha nacional concentrada em hatches, sedãs e SUVs compactos.",
  },
  hyundai: {
    pais: "Coreia do Sul",
    resumo:
      "Fábrica própria em Piracicaba (SP) desde 2012. Cresceu rápido no Brasil puxada pelo HB20 e pelo SUV Creta.",
  },
  toyota: {
    pais: "Japão",
    resumo:
      "Referência em confiabilidade e pioneira dos híbridos sem plugar no Brasil (Corolla Cross, RAV4). Fábricas em Sorocaba e Indaiatuba (SP).",
  },
  honda: {
    pais: "Japão",
    resumo:
      "Fabrica em Itirapina (SP) e aposta forte em híbridos leves que não precisam plugar, como City e Civic.",
  },
  renault: {
    pais: "França",
    resumo:
      "Fábrica em São José dos Pinhais (PR) desde 1998. Tradição em carros de entrada acessíveis, como Kwid e Sandero.",
  },
  nissan: {
    pais: "Japão",
    resumo: "Fabrica em Resende (RJ). Linha compacta enxuta, com destaque pro SUV Kicks.",
  },
  jeep: {
    pais: "Estados Unidos",
    resumo:
      "Parte da Stellantis, fábrica em Goiana (PE). Maior polo de SUVs da marca no mundo, com Renegade, Compass e Commander.",
  },
  peugeot: {
    pais: "França",
    resumo: "Também Stellantis, fábrica em Porto Real (RJ). Linha compacta 208/2008 e o elétrico e-208.",
  },
  citroen: {
    pais: "França",
    resumo:
      "Stellantis, divide a fábrica de Porto Real (RJ) com a Peugeot. O ë-C3 é hoje um dos carros elétricos mais baratos do mercado brasileiro.",
  },
  byd: {
    pais: "China",
    resumo:
      "Maior fabricante de elétricos do mundo. Já produz em Camaçari (BA) e tem a linha mais ampla de elétricos e híbridos plugáveis do Brasil.",
  },
  gwm: {
    pais: "China",
    resumo:
      "Great Wall Motors, instalada na antiga fábrica da Mercedes-Benz em Iracemápolis (SP). Aposta em híbridos e SUVs eletrificados.",
  },
  chery: {
    pais: "China",
    resumo: "Fábrica própria em Anápolis (GO). Linha de SUVs Tiggo com boa relação de equipamentos por preço.",
  },
  mitsubishi: {
    pais: "Japão",
    resumo:
      "Fabrica em Catalão (GO). Tradição em picapes (L200 Triton) e um dos poucos híbridos plugáveis do segmento, o Outlander PHEV.",
  },
  kia: {
    pais: "Coreia do Sul",
    resumo: "100% importada no Brasil. Linha de SUVs que inclui o elétrico EV6.",
  },
  volvo: {
    pais: "Suécia",
    resumo:
      "Hoje do grupo chinês Geely, 100% importada. Uma das primeiras marcas a anunciar meta de virar 100% elétrica.",
  },
  ford: {
    pais: "Estados Unidos",
    resumo: "Encerrou produção própria no Brasil em 2021 — hoje só importa, com destaque pra picape Ranger.",
  },
  "land-rover": {
    pais: "Reino Unido",
    resumo: "Do grupo indiano Tata Motors (JLR), 100% importada. Especialista em SUVs de luxo off-road.",
  },
  bmw: {
    pais: "Alemanha",
    resumo: "Fábrica local em Araquari (SC) para parte da linha (X1, 320i). Segmento premium, com mild-hybrid.",
  },
  "mercedes-benz": {
    pais: "Alemanha",
    resumo: "Marca de luxo 100% importada na linha de passeio, ainda que tenha fábrica de utilitários no Brasil.",
  },
  audi: {
    pais: "Alemanha",
    resumo: "Do grupo Volkswagen, 100% importada. Linha premium com mild-hybrid e o elétrico Q4 e-tron.",
  },
  suzuki: {
    pais: "Japão",
    resumo: "100% importada, conhecida quase exclusivamente pelo Jimny, off-road compacto.",
  },
  jac: {
    pais: "China",
    resumo: "Uma das pioneiras chinesas no Brasil, hoje aposta em elétricos de entrada como o e-JS1.",
  },
  omoda: {
    pais: "China",
    resumo: "Marca do grupo Chery lançada recentemente no Brasil, com SUVs de design mais arrojado.",
  },
  neta: {
    pais: "China",
    resumo: "Fabricante focada só em elétricos, uma das mais recentes a chegar ao mercado brasileiro.",
  },
  ram: {
    pais: "Estados Unidos",
    resumo:
      "Da Stellantis, especializada em picapes robustas. Monta a Rampage em Goiana (PE) e importa a 1500 dos EUA.",
  },
  geely: {
    pais: "China",
    resumo: "Dona da Volvo, chegou ao Brasil em 2025 com SUVs e hatches elétricos como o EX5 e o EX2.",
  },
};
