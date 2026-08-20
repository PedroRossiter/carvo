"use client";
import { useState } from "react";
import { GLOSSARIO } from "@/lib/glossario";
import { SPEC_GROUPS } from "@/lib/specs";
import PowertrainBadge from "@/components/PowertrainBadge";
import { fmtPreco } from "@/lib/format";
import CarSilhueta from "@/components/CarSilhouette";
import { PW_TEXT } from "@/lib/pwColors";
import { achatar } from "@/lib/achatar";
import { IconCheck, IconPlus } from "@/components/Icons";

export default function CarModal({ modelo, onClose, comparando = [], onToggleCompare, compareCheio }) {
  const [idx, setIdx] = useState(0);
  if (!modelo) return null;

  const versao = modelo.versoes[Math.min(idx, modelo.versoes.length - 1)];
  const carro = achatar(modelo, versao);
  const g = GLOSSARIO[modelo.powertrain];

  // "Preço" já aparece no cabeçalho; some com as linhas sem dado.
  const grupos = SPEC_GROUPS.filter((gr) => gr.titulo !== "Preço")
    .map((gr) => ({
      ...gr,
      linhas: gr.linhas
        .map((l) => ({ label: l.label, valor: l.fmt(carro) }))
        .filter((l) => l.valor !== null && l.valor !== undefined && l.valor !== ""),
    }))
    .filter((gr) => gr.linhas.length > 0);

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/40 flex items-start sm:items-center justify-center p-4 overflow-auto"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-md border border-black/10 max-w-lg w-full my-10 sm:my-6 max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pb-4 border-b border-black/[0.07] shrink-0">
          <div className="flex items-start justify-between">
            <PowertrainBadge tipo={modelo.powertrain} />
            <button onClick={onClose} className="text-muted hover:text-ink text-2xl leading-none">
              ×
            </button>
          </div>
          <CarSilhueta
            categoria={modelo.categoria}
            className={`w-full max-w-[240px] h-auto mx-auto my-3 ${PW_TEXT[modelo.powertrain]}`}
          />
          <div className="text-[11px] text-muted uppercase tracking-[0.1em] font-semibold">{modelo.marca}</div>
          <h2 className="text-2xl font-semibold text-ink tracking-tight">{modelo.modelo}</h2>
          <div className="text-ink font-medium text-xl mt-1">{fmtPreco(versao.preco)}</div>
          <div className="text-[13px] text-muted">{versao.nome}</div>
          {versao.preco_fipe ? (
            <div className="text-[12px] text-muted mt-1.5">
              Tabela FIPE 0 km: <span className="text-ink font-medium">{fmtPreco(versao.preco_fipe)}</span>
              {versao.fipe_referencia ? ` · ${versao.fipe_referencia}` : ""}
            </div>
          ) : null}
        </div>

        <div className="overflow-y-auto p-6 pt-5">
          <h3 className="text-[11px] font-semibold text-ink uppercase tracking-[0.08em] mb-2">
            Versões ({modelo.versoes.length})
          </h3>
          <div className="space-y-2">
            {modelo.versoes.map((v, i) => {
              const ativa = v.id === versao.id;
              const cmp = comparando.includes(v.id);
              return (
                <div
                  key={v.id}
                  className={`flex items-center gap-3 rounded-md border p-3 transition-colors ${
                    ativa ? "border-primary bg-primary-light/40" : "border-black/[0.08] hover:border-black/20"
                  }`}
                >
                  <button onClick={() => setIdx(i)} className="flex-1 text-left min-w-0">
                    <div className={`text-sm font-semibold truncate ${ativa ? "text-primary-dark" : "text-ink"}`}>
                      {v.nome}
                    </div>
                    <div className="text-[12px] text-muted mt-0.5">
                      {fmtPreco(v.preco)} · {v.potencia_cv} cv
                    </div>
                  </button>
                  {onToggleCompare && (
                    <button
                      onClick={() => onToggleCompare(v.id)}
                      disabled={!cmp && compareCheio}
                      title={cmp ? "Remover da comparação" : "Adicionar à comparação"}
                      className={`shrink-0 flex items-center gap-1 text-[11px] uppercase tracking-[0.06em] font-semibold px-2.5 py-1.5 rounded-full border transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                        cmp
                          ? "bg-ink text-white border-ink"
                          : "text-ink border-black/15 hover:border-ink"
                      }`}
                    >
                      {cmp ? <IconCheck width={11} height={11} strokeWidth={3} /> : <IconPlus width={11} height={11} strokeWidth={3} />}
                      {cmp ? "Comparando" : "Comparar"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-primary-light rounded-md p-4 text-sm mt-5">
            <div className="font-semibold text-primary-dark mb-1">
              O que é {g.nome}? ({g.full})
            </div>
            <p className="text-ink/80">{g.def}</p>
          </div>

          <div className="bg-accent-light rounded-md p-4 text-sm mt-3">
            <div className="font-semibold text-accent-dark mb-1">Na prática</div>
            <p className="text-ink/80">{modelo.pratico}</p>
          </div>

          <h3 className="text-[11px] font-semibold text-ink uppercase tracking-[0.08em] mt-6 mb-1">
            Ficha técnica — {versao.nome}
          </h3>
          {grupos.map((gr) => (
            <div key={gr.titulo} className="mt-4">
              <div className="text-[11px] font-semibold text-muted uppercase tracking-[0.06em] pb-1.5 border-b border-black/[0.07]">
                {gr.titulo}
              </div>
              <dl className="text-sm">
                {gr.linhas.map((l) => (
                  <div key={l.label} className="flex justify-between gap-4 py-1.5 border-b border-black/[0.04]">
                    <dt className="text-muted shrink-0">{l.label}</dt>
                    <dd className="font-medium text-ink text-right">{l.valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          <p className="text-[11px] text-muted leading-relaxed mt-5 pt-3 border-t border-black/[0.07]">
            Preço sugerido é o de tabela da marca. A Tabela FIPE 0 km é referência de mercado
            (fonte: FIPE, {versao.fipe_referencia || "referência mais recente"}) e pode divergir do
            preço da loja. PCD é estimativa por preço e origem — a isenção real depende do laudo,
            do estado e da política da montadora.
          </p>
        </div>
      </div>
    </div>
  );
}
