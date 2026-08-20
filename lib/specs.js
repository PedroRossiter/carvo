import { CATEGORIA_LABEL } from "@/lib/categorias";
import { fmtPreco } from "@/lib/format";
import { pcdStatus } from "@/lib/pcd";

const n = (v, suf, dec = 0) =>
  v === null || v === undefined ? null : `${Number(v).toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec })}${suf}`;

// best: "max" | "min" | null  → destaca o melhor valor da linha na comparação
export const SPEC_GROUPS = [
  {
    titulo: "Preço",
    linhas: [
      { key: "preco", label: "Preço sugerido", fmt: (c) => fmtPreco(c.preco), val: (c) => c.preco, best: "min" },
      {
        key: "preco_fipe",
        label: "Tabela FIPE (0 km)",
        fmt: (c) => (c.preco_fipe ? `${fmtPreco(c.preco_fipe)}${c.fipe_referencia ? ` · ${c.fipe_referencia}` : ""}` : null),
      },
    ],
  },
  {
    titulo: "Onde é feito e PCD",
    linhas: [
      { key: "origem", label: "Origem", fmt: (c) => (c.origem === "nacional" ? "Nacional" : c.origem === "importado" ? "Importado" : null) },
      { key: "fabrica", label: "Fábrica", fmt: (c) => c.fabrica },
      { key: "pcd", label: "PCD (estimativa)", fmt: (c) => (c.origem ? pcdStatus(c).resumo : null) },
      { key: "pcd_icms", label: "ICMS PCD", fmt: (c) => (c.origem ? pcdStatus(c).icmsLabel : null) },
    ],
  },
  {
    titulo: "Motor e desempenho",
    linhas: [
      { key: "motor", label: "Motor", fmt: (c) => c.motor },
      { key: "potencia_cv", label: "Potência", fmt: (c) => n(c.potencia_cv, " cv"), val: (c) => c.potencia_cv, best: "max" },
      { key: "torque_kgfm", label: "Torque", fmt: (c) => n(c.torque_kgfm, " kgfm", 1), val: (c) => c.torque_kgfm, best: "max" },
      { key: "cambio", label: "Câmbio", fmt: (c) => c.cambio },
      { key: "tracao", label: "Tração", fmt: (c) => c.tracao },
      { key: "acel_0100_s", label: "0 a 100 km/h", fmt: (c) => n(c.acel_0100_s, " s", 1), val: (c) => c.acel_0100_s, best: "min" },
    ],
  },
  {
    titulo: "Consumo e autonomia",
    linhas: [
      {
        key: "consumo_cidade",
        label: "Consumo cidade",
        fmt: (c) => n(c.consumo_cidade, c.powertrain === "bev" ? " km/kWh" : " km/l", 1),
        val: (c) => c.consumo_cidade,
        best: "max",
        unidade: (c) => (c.powertrain === "bev" ? "kwh" : "liquido"),
      },
      {
        key: "consumo_estrada",
        label: "Consumo estrada",
        fmt: (c) => n(c.consumo_estrada, c.powertrain === "bev" ? " km/kWh" : " km/l", 1),
        val: (c) => c.consumo_estrada,
        best: "max",
        unidade: (c) => (c.powertrain === "bev" ? "kwh" : "liquido"),
      },
      { key: "tanque_l", label: "Tanque", fmt: (c) => n(c.tanque_l, " L") },
      { key: "bateria_kwh", label: "Bateria", fmt: (c) => n(c.bateria_kwh, " kWh", 1) },
      { key: "autonomia_oficial", label: "Autonomia oficial", fmt: (c) => c.autonomia_oficial },
      { key: "recarga", label: "Recarga", fmt: (c) => c.recarga },
    ],
  },
  {
    titulo: "Espaço e dimensões",
    linhas: [
      { key: "categoria", label: "Carroceria", fmt: (c) => CATEGORIA_LABEL[c.categoria] || c.categoria },
      { key: "porta_malas_l", label: "Porta-malas", fmt: (c) => n(c.porta_malas_l, " L"), val: (c) => c.porta_malas_l, best: "max" },
      { key: "lugares", label: "Lugares", fmt: (c) => n(c.lugares, ""), val: (c) => c.lugares, best: "max" },
      { key: "portas", label: "Portas", fmt: (c) => n(c.portas, "") },
      { key: "comprimento_mm", label: "Comprimento", fmt: (c) => n(c.comprimento_mm, " mm") },
      { key: "entre_eixos_mm", label: "Entre-eixos", fmt: (c) => n(c.entre_eixos_mm, " mm"), val: (c) => c.entre_eixos_mm, best: "max" },
      { key: "peso_kg", label: "Peso", fmt: (c) => n(c.peso_kg, " kg") },
    ],
  },
  {
    titulo: "Segurança e garantia",
    linhas: [
      { key: "airbags", label: "Airbags", fmt: (c) => n(c.airbags, ""), val: (c) => c.airbags, best: "max" },
      { key: "garantia_anos", label: "Garantia", fmt: (c) => (c.garantia_anos ? `${c.garantia_anos} anos` : null), val: (c) => c.garantia_anos, best: "max" },
    ],
  },
];

// Índice do(s) carro(s) com o melhor valor da linha. Só destaca se houver diferença real.
export function bestIndexes(linha, cars) {
  if (!linha.best || !linha.val) return [];
  // Não faz sentido eleger "melhor" comparando unidades diferentes (km/l vs km/kWh).
  if (linha.unidade) {
    const us = new Set(cars.map(linha.unidade));
    if (us.size > 1) return [];
  }
  const vals = cars.map((c) => {
    const v = linha.val(c);
    return v === null || v === undefined ? null : Number(v);
  });
  const validos = vals.filter((v) => v !== null);
  if (validos.length < 2) return [];
  const alvo = linha.best === "max" ? Math.max(...validos) : Math.min(...validos);
  if (validos.every((v) => v === alvo)) return [];
  return vals.map((v, i) => (v === alvo ? i : -1)).filter((i) => i >= 0);
}
