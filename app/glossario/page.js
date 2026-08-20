import { getModelos } from "@/lib/db";
import { GLOSSARIO } from "@/lib/glossario";
import { fmtPreco } from "@/lib/format";
import CarSilhueta from "@/components/CarSilhouette";

export const dynamic = "force-dynamic";

// Tailwind needs full literal class names to detect them at build time —
// can't interpolate `bg-pw-${key}` dynamically, so map them explicitly.
const BAR = {
  combustao: "bg-pw-combustao",
  flex: "bg-pw-flex",
  mhev: "bg-pw-mhev",
  hev: "bg-pw-hev",
  phev: "bg-pw-phev",
  bev: "bg-pw-bev",
};
const TEXT = {
  combustao: "text-pw-combustao",
  flex: "text-pw-flex",
  mhev: "text-pw-mhev",
  hev: "text-pw-hev",
  phev: "text-pw-phev",
  bev: "text-pw-bev",
};

export default async function GlossarioPage() {
  const modelos = await getModelos();

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight">O que cada sigla quer dizer</h1>
      <p className="text-muted mt-1 mb-6">
        Explicação simples + um carro real do catálogo como exemplo prático.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {Object.entries(GLOSSARIO).map(([key, g]) => {
          const exemplo = modelos.find((c) => c.powertrain === key);
          return (
            <div
              key={key}
              className="bg-surface rounded-md border border-black/[0.07] overflow-hidden"
            >
              <div className={`h-1.5 ${BAR[key]}`} />
              <div className="p-6">
                <div className="flex items-baseline gap-2.5">
                  <h3 className={`text-3xl font-bold tracking-tight ${TEXT[key]}`}>{g.nome}</h3>
                  <span className="text-[13px] text-muted font-medium">{g.full}</span>
                </div>
                <p className="text-[15px] text-ink/80 mt-2.5 leading-relaxed">{g.def}</p>
                {exemplo && (
                  <div className="mt-4 pt-4 border-t border-black/[0.06] text-sm">
                    <CarSilhueta
                      categoria={exemplo.categoria}
                      className={`w-full max-w-[150px] h-auto mb-2 ${TEXT[key]}`}
                    />
                    <span className="font-semibold text-primary-dark">Exemplo real: </span>
                    <span className="text-ink/70">
                      {exemplo.marca} {exemplo.modelo} (a partir de {fmtPreco(exemplo.preco_min)}) — {exemplo.pratico}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
