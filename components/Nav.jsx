"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconGrid, IconScale, IconTag, IconBook, IconChat } from "@/components/Icons";
import Logo from "@/components/Logo";

const ITEMS = [
  { href: "/", label: "Catálogo", Icon: IconGrid },
  { href: "/comparador", label: "Comparador", Icon: IconScale },
  { href: "/marcas", label: "Marcas", Icon: IconTag },
  { href: "/glossario", label: "Glossário", Icon: IconBook },
  { href: "/assistente", label: "Assistente", Icon: IconChat },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <Fragment>
      <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center text-ink" aria-label="Carvo — início">
              <Logo className="text-[26px] sm:text-[30px]" />
            </Link>
            <nav className="hidden sm:flex items-center gap-8">
              {ITEMS.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-[13px] uppercase tracking-[0.08em] font-medium pb-1 border-b transition-colors ${
                      active
                        ? "text-primary-dark border-primary"
                        : "text-muted border-transparent hover:text-ink"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
      {/* mobile bottom bar — sibling of header on purpose: header's backdrop-blur creates a
          containing block for fixed descendants, which would break bottom:0 positioning */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-black/5 flex justify-around py-2">
        {ITEMS.map(({ href, label, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[11px] font-medium ${
                active ? "text-primary" : "text-muted"
              }`}
            >
              <Icon width={19} height={19} />
              {label}
            </Link>
          );
        })}
      </nav>
    </Fragment>
  );
}
