// Silhuetas originais desenhadas à mão, por tipo de carroceria.
// Não são imagens das montadoras (material com direito autoral) — são formas
// genéricas que dão leitura visual rápida do formato do carro.
// A cor vem por currentColor, então herda a cor da motorização.

const SHAPES = {
  // Compacto: traseira quase vertical, balanço traseiro curtíssimo.
  hatch: {
    body:
      "M24,60 L24,50 C24,46 27,43 31,43 L66,42 L86,24 C87,22.5 89,22 91,22 L124,22 C127,22 129,23 130,25 L152,48 L160,50 C163,51 164,53 164,56 L164,60 Z",
    janelas: ["M90,26 L108,26 L108,40 L82,40 Z", "M112,26 L125,26 L138,40 L112,40 Z"],
    rodas: [[54, 60, 12], [136, 60, 12]],
  },
  // Três volumes: mais comprido, com porta-malas longo bem abaixo do teto.
  sedan: {
    body:
      "M8,60 L8,50 C8,46 11,43 15,43 L70,42 L90,26 C91,24.5 93,24 95,24 L122,24 C125,24 127,25 128,27 L140,42 L184,44 C189,45 192,47 192,51 L192,60 Z",
    janelas: ["M94,28 L110,28 L110,41 L86,41 Z", "M114,28 L123,28 L134,41 L114,41 Z"],
    rodas: [[46, 60, 12], [154, 60, 12]],
  },
  // Alto e quadrado: teto longo, vidros altos, rodas grandes e vão livre visível.
  suv: {
    body:
      "M14,52 L14,40 C14,35 17,32 21,31 L64,32 L80,10 C81,8.5 83,8 85,8 L144,8 C148,8 151,9 153,12 L168,31 L180,33 C185,34 188,37 188,41 L188,52 Z",
    janelas: ["M84,12 L108,12 L108,29 L76,29 Z", "M112,12 L144,12 L156,29 L112,29 Z"],
    rodas: [[50, 57, 15], [152, 57, 15]],
    linhas: ["M86,6 L142,6"],
  },
  // Cabine curta + caçamba aberta atrás.
  picape: {
    body:
      "M6,60 L6,50 C6,46 9,43 13,43 L56,41 L72,18 C73,17 75,16 77,16 L114,16 C117,16 119,17 120,19 L130,41 L130,34 L194,34 L194,60 Z",
    janelas: ["M76,20 L96,20 L96,39 L68,39 Z", "M100,20 L112,20 L122,39 L100,39 Z"],
    rodas: [[44, 60, 12], [164, 60, 12]],
    linhas: ["M134,42 L190,42"],
  },
};

export default function CarSilhueta({ categoria, className = "", ...props }) {
  const s = SHAPES[categoria] || SHAPES.hatch;
  return (
    <svg viewBox="0 0 200 76" fill="none" className={className} aria-hidden {...props}>
      <path
        d={s.body}
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {s.janelas.map((d, i) => (
        <path key={i} d={d} fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      ))}
      {(s.linhas || []).map((d, i) => (
        <path key={`l${i}`} d={d} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
      ))}
      {s.rodas.map(([cx, cy, r], i) => (
        <g key={`r${i}`}>
          <circle cx={cx} cy={cy} r={r} fill="#FFF" stroke="currentColor" strokeWidth="2.5" />
          <circle cx={cx} cy={cy} r={r * 0.42} fill="currentColor" fillOpacity="0.35" />
        </g>
      ))}
    </svg>
  );
}
