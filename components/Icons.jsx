function base(props) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
  };
}

export function IconFuel(props) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="10" height="16" rx="1.5" />
      <path d="M8 8h2" />
      <path d="M14 9l3 2v6a1.5 1.5 0 0 0 3 0v-5l-2.5-3" />
      <path d="M4 20h10" />
    </svg>
  );
}

export function IconLeaf(props) {
  return (
    <svg {...base(props)}>
      <path d="M5 19c8 0 14-6 14-14 0 0-11-1-14 6-2 4 0 8 0 8z" />
      <path d="M5 19c0-4 2-8 6-10" />
    </svg>
  );
}

export function IconBattery(props) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="7" width="16" height="10" rx="1.5" />
      <path d="M21 10v4" />
      <path d="M8 10v4" />
      <path d="M11 10v4" />
    </svg>
  );
}

export function IconPlug(props) {
  return (
    <svg {...base(props)}>
      <path d="M9 3v5" />
      <path d="M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0V8z" />
      <path d="M12 17v4" />
    </svg>
  );
}

export function IconGauge(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15l4-5" />
      <circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCar(props) {
  return (
    <svg {...base(props)}>
      <path d="M3 13l2-5a2 2 0 0 1 2-1.3h10A2 2 0 0 1 19 8l2 5" />
      <rect x="2.5" y="13" width="19" height="5" rx="1.5" />
      <circle cx="7" cy="18.5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="17" cy="18.5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconGrid(props) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
    </svg>
  );
}

export function IconScale(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v18" />
      <path d="M6 6h12" />
      <path d="M6 6l-3 6a3 3 0 0 0 6 0l-3-6z" />
      <path d="M18 6l-3 6a3 3 0 0 0 6 0l-3-6z" />
    </svg>
  );
}

export function IconBook(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
    </svg>
  );
}

export function IconChat(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8z" />
      <circle cx="9" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 12.5l5 5L20 6" />
    </svg>
  );
}

export function IconPlus(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconFilter(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 5h16" />
      <path d="M7 12h10" />
      <path d="M10 19h4" />
    </svg>
  );
}

export function IconX(props) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export const POWERTRAIN_ICON = {
  combustao: IconFuel,
  flex: IconFuel,
  mhev: IconBattery,
  hev: IconLeaf,
  phev: IconPlug,
  bev: IconPlug,
};

export function IconSearch(props) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
}
