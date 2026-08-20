"use client";
import { GLOSSARIO } from "@/lib/glossario";
import { POWERTRAIN_ICON } from "@/components/Icons";

const BG = {
  combustao: "bg-pw-combustao/15 text-pw-combustao",
  flex: "bg-pw-flex/15 text-pw-flex",
  mhev: "bg-pw-mhev/15 text-pw-mhev",
  hev: "bg-pw-hev/15 text-pw-hev",
  phev: "bg-pw-phev/15 text-pw-phev",
  bev: "bg-pw-bev/15 text-pw-bev",
};

export default function PowertrainBadge({ tipo, size = "md" }) {
  const g = GLOSSARIO[tipo];
  const Icon = POWERTRAIN_ICON[tipo];
  const pad = size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs";
  const iconSize = size === "sm" ? 13 : 15;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-semibold ${BG[tipo]} ${pad}`}
    >
      <Icon width={iconSize} height={iconSize} strokeWidth={2.2} />
      {g.nome}
    </span>
  );
}
