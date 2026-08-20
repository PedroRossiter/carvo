"use client";
import { useEffect, useMemo, useState } from "react";
import CarCard from "@/components/CarCard";
import CarModal from "@/components/CarModal";
import { GLOSSARIO } from "@/lib/glossario";
import { CATEGORIA_LABEL } from "@/lib/categorias";
import { IconFilter, IconX, IconSearch } from "@/components/Icons";
import { pcdStatus } from "@/lib/pcd";

const COMPARE_KEY = "amc_compare_versoes";
const MAX_COMPARE = 3;

// Cor do pontinho de cada motorização — precisa ser hex literal (não dá pra
// interpolar classe Tailwind dinamicamente).
const PW_HEX = {
  combustao: "#9CA3AF",
  flex: "#4F63F0",
  mhev: "#38BDF8",
  hev: "#14B8A6",
  phev: "#A855F7",
  bev: "#22C55E",
};

// Tira acento e caixa pra busca casar "sedã"/"seda", "citroën"/"citroen".
function norm(t) {
  return (t || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function toggle(set, value) {
  const next = new Set(set);
  next.has(value) ? next.delete(value) : next.add(value);
  return next;
}

function CheckRow({ label, count, checked, onChange, dot }) {
  return (
    <label className="flex items-center justify-between gap-2 py-1.5 cursor-pointer select-none">
      <span className="flex items-center gap-2 text-[13.5px] text-ink/80">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-[15px] h-[15px] rounded border-black/25 text-primary focus:ring-primary/30 focus:ring-offset-0"
        />
        {dot && <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: dot }} />}
        {label}
      </span>
      <span className="text-xs text-muted tabular-nums">{count}</span>
    </label>
  );
}

function FilterPanel({
  marcas, countsMarca, marcasSel, setMarcasSel,
  countsPowertrain, powertrainsSel, setPowertrainsSel,
  categorias, countsCategoria, categoriasSel, setCategoriasSel,
  precoMin, setPrecoMin, precoMax, setPrecoMax,
  soPcd, setSoPcd, countPcd,
  onClear, activeCount, hideTitle,
}) {
  return (
    <div>
      <div className={`flex items-center mb-5 ${hideTitle ? "justify-end" : "justify-between"}`}>
        {!hideTitle && <h2 className="text-sm font-semibold text-ink uppercase tracking-[0.08em]">Filtros</h2>}
        {activeCount > 0 && (
          <button onClick={onClear} className="text-xs text-primary-dark font-semibold hover:underline">
            Limpar ({activeCount})
          </button>
        )}
      </div>

      <div className="mb-6 pb-6 border-b border-black/[0.07]">
        <h3 className="text-[12px] font-semibold text-ink uppercase tracking-[0.06em] mb-3">Faixa de preço</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            inputMode="numeric"
            placeholder="De"
            value={precoMin}
            onChange={(e) => setPrecoMin(e.target.value)}
            className="w-full min-w-0 bg-transparent border border-black/15 rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-primary"
          />
          <span className="text-muted text-sm shrink-0">—</span>
          <input
            type="number"
            inputMode="numeric"
            placeholder="Até"
            value={precoMax}
            onChange={(e) => setPrecoMax(e.target.value)}
            className="w-full min-w-0 bg-transparent border border-black/15 rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-6 pb-6 border-b border-black/[0.07]">
        <h3 className="text-[12px] font-semibold text-ink uppercase tracking-[0.06em] mb-2">PCD</h3>
        <CheckRow
          label="Tem alguma isenção"
          count={countPcd}
          checked={soPcd}
          onChange={() => setSoPcd(!soPcd)}
        />
        <p className="text-[11px] text-muted leading-snug mt-1">
          Estimativa por preço e origem. IPI só isenta nacional até R$ 200 mil; ICMS varia por estado.
        </p>
      </div>

      <div className="mb-6 pb-6 border-b border-black/[0.07]">
        <h3 className="text-[12px] font-semibold text-ink uppercase tracking-[0.06em] mb-2">Motorização</h3>
        {Object.entries(GLOSSARIO).map(([key, g]) => (
          <CheckRow
            key={key}
            label={g.nome}
            count={countsPowertrain[key] || 0}
            checked={powertrainsSel.has(key)}
            onChange={() => setPowertrainsSel(toggle(powertrainsSel, key))}
            dot={PW_HEX[key]}
          />
        ))}
      </div>

      <div className="mb-6 pb-6 border-b border-black/[0.07]">
        <h3 className="text-[12px] font-semibold text-ink uppercase tracking-[0.06em] mb-2">Carroceria</h3>
        {categorias.map((c) => (
          <CheckRow
            key={c}
            label={CATEGORIA_LABEL[c] || c}
            count={countsCategoria[c] || 0}
            checked={categoriasSel.has(c)}
            onChange={() => setCategoriasSel(toggle(categoriasSel, c))}
          />
        ))}
      </div>

      <div>
        <h3 className="text-[12px] font-semibold text-ink uppercase tracking-[0.06em] mb-2">Marca</h3>
        <div className="max-h-56 overflow-y-auto pr-1">
          {marcas.map((m) => (
            <CheckRow
              key={m}
              label={m}
              count={countsMarca[m] || 0}
              checked={marcasSel.has(m)}
              onChange={() => setMarcasSel(toggle(marcasSel, m))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CatalogClient({ modelos }) {
  const [marcasSel, setMarcasSel] = useState(new Set());
  const [powertrainsSel, setPowertrainsSel] = useState(new Set());
  const [categoriasSel, setCategoriasSel] = useState(new Set());
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [busca, setBusca] = useState("");
  const [soPcd, setSoPcd] = useState(false);
  const [ordem, setOrdem] = useState("preco-asc");
  const [openModelo, setOpenModelo] = useState(null);
  const [compareIds, setCompareIds] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(COMPARE_KEY) || "[]");
      setCompareIds(stored);
    } catch {}
  }, []);

  function persist(ids) {
    setCompareIds(ids);
    localStorage.setItem(COMPARE_KEY, JSON.stringify(ids));
  }

  function toggleCompare(id) {
    if (compareIds.includes(id)) {
      persist(compareIds.filter((x) => x !== id));
    } else {
      if (compareIds.length >= MAX_COMPARE) return;
      persist([...compareIds, id]);
    }
  }

  const marcas = useMemo(() => [...new Set(modelos.map((c) => c.marca))].sort(), [modelos]);
  const categorias = useMemo(() => [...new Set(modelos.map((c) => c.categoria))].sort(), [modelos]);

  const countsMarca = useMemo(() => {
    const m = {};
    modelos.forEach((c) => (m[c.marca] = (m[c.marca] || 0) + 1));
    return m;
  }, [modelos]);
  const countsPowertrain = useMemo(() => {
    const m = {};
    modelos.forEach((c) => (m[c.powertrain] = (m[c.powertrain] || 0) + 1));
    return m;
  }, [modelos]);
  const countsCategoria = useMemo(() => {
    const m = {};
    modelos.forEach((c) => (m[c.categoria] = (m[c.categoria] || 0) + 1));
    return m;
  }, [modelos]);

  const filtered = useMemo(() => {
    const min = precoMin ? Number(precoMin) : null;
    const max = precoMax ? Number(precoMax) : null;
    // Cada palavra digitada precisa aparecer em algum campo do carro.
    const termos = norm(busca).split(/\s+/).filter(Boolean);

    // O modelo entra se PELO MENOS UMA versão dele couber na faixa de preço.
    let list = modelos.filter((c) => {
      if (marcasSel.size && !marcasSel.has(c.marca)) return false;
      if (powertrainsSel.size && !powertrainsSel.has(c.powertrain)) return false;
      if (categoriasSel.size && !categoriasSel.has(c.categoria)) return false;
      if (min !== null && c.preco_max < min) return false;
      if (max !== null && c.preco_min > max) return false;
      if (soPcd && !c.versoes.some((v) => pcdStatus({ preco: v.preco, origem: c.origem }).elegivel)) return false;
      if (termos.length) {
        const alvo = norm(
          [c.marca, c.modelo, c.categoria, c.powertrain, c.fabrica, ...c.versoes.map((v) => `${v.nome} ${v.motor}`)].join(" ")
        );
        if (!termos.every((t) => alvo.includes(t))) return false;
      }
      return true;
    });
    list.sort((a, b) =>
      ordem === "preco-asc" ? a.preco_min - b.preco_min : b.preco_max - a.preco_max
    );
    return list;
  }, [modelos, marcasSel, powertrainsSel, categoriasSel, precoMin, precoMax, ordem, busca, soPcd]);

  const totalVersoes = useMemo(() => filtered.reduce((a, m) => a + m.versoes.length, 0), [filtered]);

  const countPcd = useMemo(
    () =>
      modelos.filter((c) => c.versoes.some((v) => pcdStatus({ preco: v.preco, origem: c.origem }).elegivel)).length,
    [modelos]
  );

  const activeCount =
    marcasSel.size + powertrainsSel.size + categoriasSel.size + (precoMin ? 1 : 0) + (precoMax ? 1 : 0) + (soPcd ? 1 : 0);

  function clearFilters() {
    setMarcasSel(new Set());
    setPowertrainsSel(new Set());
    setCategoriasSel(new Set());
    setPrecoMin("");
    setPrecoMax("");
    setSoPcd(false);
  }

  const panelProps = {
    marcas, countsMarca, marcasSel, setMarcasSel,
    countsPowertrain, powertrainsSel, setPowertrainsSel,
    categorias, countsCategoria, categoriasSel, setCategoriasSel,
    precoMin, setPrecoMin, precoMax, setPrecoMax,
    soPcd, setSoPcd, countPcd,
    onClear: clearFilters, activeCount,
  };

  return (
    <div>
      <div className="relative mb-10 max-w-2xl">
        <div
          aria-hidden
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary/[0.08] blur-3xl -z-10"
        />
        <span className="text-[13px] uppercase tracking-[0.14em] text-primary-dark font-semibold">
          Catálogo completo
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold text-ink tracking-tight leading-[1.05] mt-3">
          Todos os carros, numa linguagem simples.
        </h1>
        <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed">
          Combustão, híbrido ou elétrico — filtra, entende o termo e vê o dado prático antes de decidir.
        </p>

        <div className="relative mt-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
            <IconSearch width={18} height={18} />
          </span>
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Busque por marca, modelo ou versão — ex: onix turbo, suv elétrico, byd"
            aria-label="Buscar carro"
            className="w-full bg-surface border border-black/10 rounded-full pl-11 pr-11 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-shadow"
          />
          {busca && (
            <button
              onClick={() => setBusca("")}
              aria-label="Limpar busca"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink p-1"
            >
              <IconX width={16} height={16} />
            </button>
          )}
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="hidden lg:block">
          <FilterPanel {...panelProps} />
        </aside>

        <div>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.06]">
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden flex items-center gap-1.5 text-sm font-semibold text-ink border border-black/15 rounded-full px-3.5 py-1.5"
            >
              <IconFilter width={15} height={15} strokeWidth={2.2} />
              Filtros
              {activeCount > 0 && (
                <span className="bg-primary text-white text-[11px] font-bold rounded-full w-[18px] h-[18px] min-w-[18px] px-1 flex items-center justify-center">
                  {activeCount}
                </span>
              )}
            </button>
            <span className="hidden lg:block text-sm text-muted">
              {filtered.length} modelo{filtered.length === 1 ? "" : "s"} · {totalVersoes} vers{totalVersoes === 1 ? "ão" : "ões"}
            </span>
            <select
              value={ordem}
              onChange={(e) => setOrdem(e.target.value)}
              className="bg-transparent border-b border-black/15 px-1 py-1.5 text-sm font-medium text-ink focus:outline-none focus:border-ink"
            >
              <option value="preco-asc">Preço: menor primeiro</option>
              <option value="preco-desc">Preço: maior primeiro</option>
            </select>
          </div>

          <p className="lg:hidden text-sm text-muted mb-4">
            {filtered.length} modelo{filtered.length === 1 ? "" : "s"} · {totalVersoes} vers{totalVersoes === 1 ? "ão" : "ões"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((m) => (
              <CarCard
                key={m.id}
                modelo={m}
                onOpen={setOpenModelo}
                versoesComparando={m.versoes.filter((v) => compareIds.includes(v.id)).length}
              />
            ))}
            {filtered.length === 0 && (
              <div className="text-muted col-span-full text-center py-16">
                <p className="mb-3">
                  {busca ? <>Nada encontrado para “{busca}”.</> : "Nenhum carro com esses filtros."}
                </p>
                <button
                  onClick={() => {
                    clearFilters();
                    setBusca("");
                  }}
                  className="text-primary-dark font-semibold text-sm hover:underline"
                >
                  Limpar busca e filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setDrawerOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[86%] max-w-sm bg-surface flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.07] shrink-0">
              <span className="font-semibold text-ink">Filtrar carros</span>
              <button onClick={() => setDrawerOpen(false)} className="text-muted hover:text-ink">
                <IconX width={20} height={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5">
              <FilterPanel {...panelProps} hideTitle />
            </div>
            <div className="p-4 border-t border-black/[0.07] shrink-0">
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-full bg-ink text-white text-sm font-semibold rounded-full py-3"
              >
                Ver {filtered.length} modelo{filtered.length === 1 ? "" : "s"}
              </button>
            </div>
          </div>
        </div>
      )}

      {compareIds.length > 0 && (
        <div className="fixed bottom-16 sm:bottom-0 left-0 right-0 bg-ink text-white py-3 px-5 flex items-center justify-center gap-4 z-30">
          <span className="text-sm">{compareIds.length} vers{compareIds.length === 1 ? "ão" : "ões"} selecionada{compareIds.length === 1 ? "" : "s"}</span>
          <a href="/comparador" className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-1.5 rounded-full">
            Ver comparação
          </a>
        </div>
      )}

      <CarModal
        modelo={openModelo}
        onClose={() => setOpenModelo(null)}
        comparando={compareIds}
        onToggleCompare={toggleCompare}
        compareCheio={compareIds.length >= MAX_COMPARE}
      />
    </div>
  );
}
