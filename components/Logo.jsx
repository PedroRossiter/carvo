// Wordmark "Carvo" — traço grosso, pontas arredondadas, no estilo bubble/groovy
// da marca. Usa currentColor de propósito (igual aos ícones em Icons.jsx), então
// a cor vem de uma classe Tailwind tipo `text-ink` em quem usa o componente.
export default function Logo(props) {
  return (
    <svg viewBox="0 0 900 240" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round">
        {/* C */}
        <path d="M140,82 A59,59 0 1 0 140,158" />
        {/* A — pernas */}
        <path d="M200,200 L275,40 L350,200" />
        {/* A — travessão */}
        <path d="M228,140 L322,140" />
        {/* R — haste */}
        <path d="M410,40 L410,200" />
        {/* R — bojo */}
        <path d="M410,40 A50,50 0 0 1 410,140" />
        {/* R — perna */}
        <path d="M410,145 C442,157 434,178 478,197" />
        {/* V */}
        <path d="M530,40 L595,200 L660,40" />
        {/* O */}
        <path d="M736,120 A59,59 0 1 1 854,120 A59,59 0 1 1 736,120 Z" />
      </g>
      {/* gotinha pendurada no ápice do A — o detalhe "melting" da marca */}
      <path
        d="M270,55 C264,72 259,88 263,102 C265,109 285,109 287,102 C291,88 286,72 280,55 Z"
        fill="currentColor"
      />
    </svg>
  );
}
