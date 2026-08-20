// Estimativa de isenção PCD a partir do preço e da origem do carro.
//
// Regras vigentes em 2026 (fonte: legislação de IPI/ICMS atual):
//  - IPI: isenção total só para carro de FABRICAÇÃO NACIONAL com preço
//    público até R$ 200.000.
//  - ICMS: isenção total até R$ 70.000; proporcional entre R$ 70.001 e
//    R$ 120.000; nada acima de R$ 120.000. É imposto estadual, então o teto
//    e as condições variam de estado para estado.
//
// Isto é uma ESTIMATIVA baseada em preço e origem. A isenção real ainda
// depende do laudo médico, do estado do comprador e de a montadora oferecer
// venda direta PCD para aquela versão.

export const TETO_IPI = 200000;
export const ICMS_TOTAL = 70000;
export const ICMS_TETO = 120000;

export function pcdStatus({ preco, origem }) {
  const ipi = origem === "nacional" && preco <= TETO_IPI;

  let icms;
  if (preco <= ICMS_TOTAL) icms = "total";
  else if (preco <= ICMS_TETO) icms = "parcial";
  else icms = "nao";

  const icmsLabel =
    icms === "total" ? "Isenção total" : icms === "parcial" ? "Isenção proporcional" : "Sem isenção";

  let resumo;
  if (ipi && icms === "total") resumo = "Isenção de IPI e ICMS";
  else if (ipi && icms === "parcial") resumo = "IPI isento, ICMS proporcional";
  else if (ipi) resumo = "Isento de IPI (ICMS não)";
  else if (icms !== "nao") resumo = origem === "importado" ? "Só ICMS (importado não isenta IPI)" : "Só ICMS";
  else resumo = "Fora dos limites de isenção";

  return {
    ipi,
    icms,
    icmsLabel,
    resumo,
    elegivel: ipi || icms !== "nao",
    motivoIpi: ipi
      ? `Nacional e até ${fmt(TETO_IPI)}`
      : origem === "importado"
      ? "Importado — IPI não isenta"
      : `Acima de ${fmt(TETO_IPI)}`,
  };
}

function fmt(v) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
