"use client";
import { useEffect, useRef, useState } from "react";
import { GLOSSARIO } from "@/lib/glossario";
import { fmtPreco } from "@/lib/format";
import { IconChat } from "@/components/Icons";
import CarSilhueta from "@/components/CarSilhouette";
import { PW_TEXT } from "@/lib/pwColors";
import { achatar } from "@/lib/achatar";

function Msg({ from, children }) {
  const isBot = from === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
          isBot
            ? "bg-primary-light text-ink rounded-bl-sm"
            : "bg-primary text-white rounded-br-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function ChatAssistant({ modelos }) {
  const [msgs, setMsgs] = useState([]);
  const [options, setOptions] = useState([]);
  const [state, setState] = useState({});
  const scrollRef = useRef(null);

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, options]);

  function addBot(text) {
    setMsgs((m) => [...m, { from: "bot", text }]);
  }
  function addMe(text) {
    setMsgs((m) => [...m, { from: "me", text }]);
  }
  function addCarro(carro) {
    setMsgs((m) => [...m, { from: "bot", carro }]);
  }

  function start() {
    setMsgs([]);
    setState({});
    addBot("Oi! Vou te ajudar a achar um carro. Pra começar: qual é sua prioridade?");
    setOptions([
      { label: "Economizar combustível", action: () => advance("prioridade", "economia", {}, askUso) },
      { label: "Rodar sem depender de combustível", action: () => advance("prioridade", "eletrico", {}, askUso) },
      { label: "Espaço pra família", action: () => advance("prioridade", "espaco", {}, askUso) },
    ]);
  }

  function advance(key, value, prevState, next) {
    const ns = { ...prevState, [key]: value };
    setState(ns);
    next(ns);
  }

  function askUso(s) {
    addBot("Entendi. Seu uso é mais dentro da cidade ou também estrada/viagem?");
    setOptions([
      { label: "Principalmente cidade", action: () => advance("uso", "cidade", s, askOrcamento) },
      { label: "Cidade + estrada", action: () => advance("uso", "misto", s, askOrcamento) },
    ]);
  }

  function askOrcamento(s) {
    addBot("Qual faixa de orçamento?");
    setOptions([
      { label: "Até R$ 120 mil", action: () => advance("orcamento", 120000, s, recomendar) },
      { label: "Até R$ 180 mil", action: () => advance("orcamento", 180000, s, recomendar) },
      { label: "Até R$ 230 mil", action: () => advance("orcamento", 230000, s, recomendar) },
    ]);
  }

  function recomendar(s) {
    // Trabalha em cima de versões: expande cada modelo e filtra pelo preço da versão.
    let candidatos = modelos.flatMap((m) => m.versoes.map((v) => achatar(m, v)));
    candidatos = candidatos.filter((c) => c.preco <= s.orcamento);
    if (s.prioridade === "eletrico") candidatos = candidatos.filter((c) => ["bev", "phev"].includes(c.powertrain));
    if (s.prioridade === "economia") candidatos = candidatos.filter((c) => ["hev", "bev", "phev"].includes(c.powertrain));
    if (s.prioridade === "espaco") candidatos = candidatos.filter((c) => c.categoria === "suv" || (c.lugares || 0) >= 7);
    // Dentro do orçamento, pega a versão mais bem equipada (a mais cara que cabe).
    candidatos.sort((a, b) => b.preco - a.preco);
    const escolha = candidatos[0];

    if (!escolha) {
      addBot("Não achei nada com esses critérios na base atual — quanto mais carros cadastrados, melhor a recomendação.");
    } else {
      const g = GLOSSARIO[escolha.powertrain];
      addBot(`Baseado no que você disse, recomendo o ${escolha.marca} ${escolha.modelo} ${escolha.versao} — ${g.nome} (${fmtPreco(escolha.preco)}).`);
      addCarro(escolha);
      addBot(`Ficha: ${escolha.motor}, ${escolha.potencia_cv} cv, ${escolha.cambio}, ${escolha.porta_malas_l} L de porta-malas.`);
      addBot(`Na prática: ${escolha.pratico}`);
    }
    addBot("Quer refazer com outros critérios?");
    setOptions([{ label: "Recomeçar", action: start }]);
  }

  function handleOption(opt) {
    addMe(opt.label);
    setOptions([]);
    opt.action();
  }

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight">Assistente de recomendação</h1>
      <p className="text-muted mt-1 mb-6">
        Simulação do fluxo do bot (regras fixas neste protótipo — na versão real, roda sobre a base completa via API da Claude com RAG).
      </p>

      <div className="bg-surface rounded-md border border-black/[0.07] max-w-xl mx-auto flex flex-col h-[520px] overflow-hidden">
        <div className="bg-primary text-white px-5 py-3 flex items-center gap-2 font-semibold">
          <IconChat width={18} height={18} />
          Assistente
        </div>
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {msgs.map((m, i) =>
            m.carro ? (
              <div key={i} className="flex justify-start">
                <CarSilhueta
                  categoria={m.carro.categoria}
                  className={`w-[190px] h-auto ${PW_TEXT[m.carro.powertrain]}`}
                />
              </div>
            ) : (
              <Msg key={i} from={m.from}>
                {m.text}
              </Msg>
            )
          )}
        </div>
        <div className="p-3 border-t border-black/5 flex flex-wrap gap-2">
          {options.map((o, i) => (
            <button
              key={i}
              onClick={() => handleOption(o)}
              className="bg-primary-light text-primary-dark text-sm font-semibold px-3.5 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
