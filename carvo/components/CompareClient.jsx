"use client";
import { Fragment, useEffect, useState } from "react";
import PowertrainBadge from "@/components/PowertrainBadge";
import { SPEC_GROUPS, bestIndexes } from "@/lib/specs";
import { IconCheck } from "@/components/Icons";
import CarSilhueta from "@/components/CarSilhouette";
import { PW_TEXT } from "@/lib/pwColors";
import { achatar } from "@/lib/achatar";

const COMPARE_KEY = "amc_compare_versoes";

export default function CompareClient({ modelos }) {
  const [ids, setIds] = useState(null);
  const [soDiferencas, setSoDiferencas] = useState(false);

  useEffect(() => {
    try {
      setIds(JSON.parse(localStorage.getItem(COMPARE_KEY) || "[]"));
    } catch {
      setIds([]);
    }
  }, []);

  function remove(id) {
    const next = ids.filter((x) => x !== id);
    setIds(next);
    localStorage.setItem(COMPARE_KEY, JSON.stringify(next));
  }

  // Resolve cada id de versão pro par modelo+versão, já achatado.
  const cars = (ids || [])
    .map((vid) => {
      const m = modelos.find((mo) => mo.versoes.some((v) => v.id === vid));
      if (!m) return null;
      return achatar(m, m.versoes.find((v) => v.id === vid));
    })
    .filter(Boolean);

  // Monta as linhas visíveis já com formatação e destaque calculados.
  const grupos = SPEC_GROUPS.map((g) => {
    const linhas = g.linhas
      .map((l) => {
        const valores = cars.map((c) => l.fmt(c));
        const temDado = valores.some((v) => v !== null && v !== undefined && v !== "");
        const iguais = valores.every((v) => v === valores[0]);
        return { ...l, valores, temDado, iguais, best: bestIndexes(l, cars) };
      })
      .filter((l) => l.temDado && (!soDiferencas || !l.iguais));
    return { ...g, linhas };
  }).filter((g) => g.linhas.length > 0);

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight">Comparador</h1>
      <p className="text-muted mt-1 mb-6">
        Escolha até 3 versões no catálogo e veja a ficha técnica lado a lado.
      </p>

      {ids === null ? null : cars.length === 0 ? (
        <div className="bg-surface rounded-md border border-black/[0.07] p-10 text-center text-muted">
          Nenhuma versão selecionada ainda.{" "}
          <a href="/" className="text-primary-dark font-semibold hover:underline">
            Ir pro catálogo
          </a>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <label className="flex items-center gap-2 text-sm text-ink/80 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={soDiferencas}
                onChange={(e) => setSoDiferencas(e.target.checked)}
                className="w-[15px] h-[15px] rounded border-black/25 text-primary focus:ring-primary/30 focus:ring-offset-0"
              />
              Mostrar só o que é diferente
            </label>
            <span className="text-xs text-muted flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary-light text-primary-dark">
                <IconCheck width={10} height={10} strokeWidth={3} />
              </span>
              melhor da comparação
            </span>
          </div>

          <div className="overflow-x-auto bg-surface rounded-md border border-black/[0.07]">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left p-4 w-[150px] border-b border-black/[0.07]"></th>
                  {cars.map((c) => (
                    <th key={c.versao_id} className="text-left p-4 align-top border-b border-black/[0.07]">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <CarSilhueta
                            categoria={c.categoria}
                            className={`w-full max-w-[170px] h-auto mb-2 ${PW_TEXT[c.powertrain]}`}
                          />
                          <div className="text-[11px] text-muted uppercase tracking-[0.08em] font-semibold">
                            {c.marca}
                          </div>
                          <div className="font-semibold text-ink text-base leading-tight mt-0.5">
                            {c.modelo}
                          </div>
                          <div className="text-[12px] text-muted leading-snug mt-0.5 mb-2">{c.versao}</div>
                          <PowertrainBadge tipo={c.powertrain} size="sm" />
                        </div>
                        <button
                          onClick={() => remove(c.versao_id)}
                          className="text-muted hover:text-accent text-xl leading-none shrink-0"
                          title="Remover"
                        >
                          ×
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {grupos.map((g) => (
                  <Fragment key={g.titulo}>
                    <tr>
                      <td
                        colSpan={cars.length + 1}
                        className="bg-bg px-4 py-2 text-[11px] font-semibold text-ink uppercase tracking-[0.08em] border-y border-black/[0.06]"
                      >
                        {g.titulo}
                      </td>
                    </tr>
                    {g.linhas.map((l) => (
                      <tr key={l.key} className="border-b border-black/[0.05] last:border-0">
                        <th className="text-left px-4 py-2.5 text-muted font-medium align-top">{l.label}</th>
                        {l.valores.map((v, i) => {
                          const destaque = l.best.includes(i);
                          return (
                            <td key={i} className="px-4 py-2.5 align-top">
                              {v === null || v === undefined || v === "" ? (
                                <span className="text-muted/50">—</span>
                              ) : destaque ? (
                                <span className="inline-flex items-center gap-1.5 font-semibold text-primary-dark">
                                  <IconCheck width={12} height={12} strokeWidth={3} />
                                  {v}
                                </span>
                              ) : (
                                <span className="text-ink/80">{v}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr>
                  <td
                    colSpan={cars.length + 1}
                    className="bg-bg px-4 py-2 text-[11px] font-semibold text-ink uppercase tracking-[0.08em] border-y border-black/[0.06]"
                  >
                    Na prática
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 text-muted font-medium align-top">No dia a dia</th>
                  {cars.map((c) => (
                    <td key={c.versao_id} className="px-4 py-3 align-top text-ink/80 leading-relaxed">
                      {c.pratico}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-muted leading-relaxed mt-4">
            Preço sugerido é o de tabela da marca; a Tabela FIPE 0 km é referência de mercado e pode
            divergir do preço da loja. PCD é estimativa por preço e origem — a isenção real depende do
            laudo, do estado e da política da montadora.
          </p>

          {cars.length < 3 && (
            <p className="text-sm text-muted mt-4">
              Dá pra comparar até 3 versões —{" "}
              <a href="/" className="text-primary-dark font-semibold hover:underline">
                adicionar mais um
              </a>
              .
            </p>
          )}
        </>
      )}
    </div>
  );
}
