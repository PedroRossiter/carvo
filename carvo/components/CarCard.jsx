"use client";
import PowertrainBadge from "@/components/PowertrainBadge";
import { fmtPreco } from "@/lib/format";
import { CATEGORIA_LABEL } from "@/lib/categorias";
import CarSilhueta from "@/components/CarSilhouette";
import { PW_TEXT } from "@/lib/pwColors";
import { pcdStatus } from "@/lib/pcd";

// Tailwind precisa das classes literais em tempo de build.
const TOP_BAR = {
  combustao: "bg-pw-combustao",
  flex: "bg-pw-flex",
  mhev: "bg-pw-mhev",
  hev: "bg-pw-hev",
  phev: "bg-pw-phev",
  bev: "bg-pw-bev",
};

export default function CarCard({ modelo, onOpen, versoesComparando = 0 }) {
  const n = modelo.versoes.length;
  const faixa = modelo.preco_max > modelo.preco_min;
  // A versão mais barata é a que tem mais chance de isenção.
  const pcd = pcdStatus({ preco: modelo.preco_min, origem: modelo.origem });

  return (
    <div
      className="bg-surface rounded-md border border-black/[0.07] hover:border-ink/30 hover:-translate-y-0.5 transition-all overflow-hidden cursor-pointer flex flex-col"
      onClick={() => onOpen(modelo)}
    >
      <div className={`h-[3px] ${TOP_BAR[modelo.powertrain]}`} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <PowertrainBadge tipo={modelo.powertrain} />
          <span className="text-[11px] uppercase tracking-[0.1em] text-muted font-medium mt-1">
            {CATEGORIA_LABEL[modelo.categoria] || modelo.categoria}
          </span>
        </div>

        <div className="mt-4">
          <div className="text-[11px] text-muted uppercase tracking-[0.1em] font-medium">{modelo.marca}</div>
          <h3 className="text-xl font-semibold text-ink leading-tight tracking-tight mt-0.5">{modelo.modelo}</h3>
        </div>

        <CarSilhueta
          categoria={modelo.categoria}
          className={`w-full max-w-[180px] h-auto mt-2 -mb-2 ${PW_TEXT[modelo.powertrain]}`}
        />

        <div className="mt-2">
          <div className="text-[11px] text-muted">{faixa ? "A partir de" : "Preço"}</div>
          <div className="text-ink font-medium text-lg leading-tight">{fmtPreco(modelo.preco_min)}</div>
          {faixa && (
            <div className="text-[12px] text-muted mt-0.5">até {fmtPreco(modelo.preco_max)}</div>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-muted">
          <span>{modelo.lugares} lugares</span>
          {modelo.porta_malas_l && <span>{modelo.porta_malas_l} L de mala</span>}
        </div>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          <span
            className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
              modelo.origem === "nacional" ? "bg-ink/[0.06] text-ink/70" : "bg-ink/[0.04] text-muted"
            }`}
            title={modelo.fabrica || ""}
          >
            {modelo.origem === "nacional" ? "Nacional" : "Importado"}
          </span>
          {pcd.elegivel && (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-primary-light text-primary-dark">
              PCD
            </span>
          )}
        </div>

        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">{modelo.pratico}</p>

        <div className="mt-auto pt-4 border-t border-black/[0.06] flex items-center justify-between">
          <span className="text-[12px] text-muted">
            {n} {n === 1 ? "versão" : "versões"}
            {versoesComparando > 0 && (
              <span className="text-primary-dark font-semibold"> · {versoesComparando} comparando</span>
            )}
          </span>
          <span className="text-[12px] uppercase tracking-[0.06em] font-semibold text-ink">
            Ver versões
          </span>
        </div>
      </div>
    </div>
  );
}
