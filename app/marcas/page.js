import { getMarcas } from "@/lib/db";
import { MARCAS_INFO } from "@/lib/marcas";
import { fmtPreco } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function MarcasPage() {
  const marcas = await getMarcas();
  const comFipe = marcas.filter((m) => m.versoes_com_fipe > 0);
  const referencia = marcas.map((m) => m.fipe_referencia).find(Boolean);

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight">Marcas no catálogo</h1>
      <p className="text-muted mt-1 mb-6">
        {marcas.length} marcas com modelo zero-km cadastrado ·{" "}
        {comFipe.length > 0
          ? `${comFipe.length} já com preço FIPE sincronizado (referência ${referencia})`
          : "preço FIPE ainda não sincronizado pra nenhuma"}
        .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {marcas.map((m) => {
          const info = MARCAS_INFO[m.slug];
          const temFipe = m.versoes_com_fipe > 0;
          return (
            <div
              key={m.slug}
              className="bg-surface rounded-md border border-black/[0.07] overflow-hidden flex flex-col"
            >
              <div className={`h-1.5 ${temFipe ? "bg-primary" : "bg-ink/10"}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-bold tracking-tight text-ink">{m.marca}</h3>
                  {info?.pais && (
                    <span className="text-[11px] text-muted uppercase tracking-[0.08em] font-medium shrink-0">
                      {info.pais}
                    </span>
                  )}
                </div>

                <p className="text-[14px] text-ink/80 mt-2.5 leading-relaxed flex-1">
                  {info?.resumo || "Marca presente no catálogo do Carvo."}
                </p>

                <div className="mt-4 pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-2 text-[12px]">
                  <span className="text-muted">
                    {m.total_modelos > 0
                      ? `${m.total_modelos} ${m.total_modelos === 1 ? "modelo" : "modelos"} · a partir de ${fmtPreco(m.preco_min)}`
                      : "Nenhum modelo cadastrado ainda"}
                  </span>
                  {m.total_versoes > 0 && (
                    <span
                      className={`font-semibold px-2 py-0.5 rounded-full ${
                        temFipe ? "bg-primary-light text-primary-dark" : "bg-ink/[0.05] text-muted"
                      }`}
                      title={temFipe ? `${m.versoes_com_fipe} de ${m.total_versoes} versões com preço FIPE` : "Nenhuma versão casada com a FIPE ainda"}
                    >
                      {temFipe ? `${m.versoes_com_fipe}/${m.total_versoes} c/ FIPE` : "sem FIPE ainda"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
