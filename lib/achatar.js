// Junta modelo + versão num objeto único (sem tocar no banco — pode rodar no cliente).
export function achatar(modelo, versao) {
  const { versoes, preco_min, preco_max, id, ...base } = modelo;
  return {
    ...base,
    modelo_id: id,
    versao_id: versao.id,
    versao: versao.nome,
    preco: versao.preco,
    motor: versao.motor,
    potencia_cv: versao.potencia_cv,
    torque_kgfm: versao.torque_kgfm,
    cambio: versao.cambio,
    tracao: versao.tracao,
    acel_0100_s: versao.acel_0100_s,
    consumo_cidade: versao.consumo_cidade,
    consumo_estrada: versao.consumo_estrada,
    airbags: versao.airbags,
    preco_fipe: versao.preco_fipe,
    fipe_referencia: versao.fipe_referencia,
  };
}
