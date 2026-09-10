import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex min-h-screen flex-col bg-ivory font-body text-ink"
      style={{ animation: "rise-in 600ms cubic-bezier(0.22,1,0.36,1) both" }}
    >
      <SiteHeader solid />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageBanner({
  title,
  crumb,
}: {
  title: string;
  crumb: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(150deg,var(--color-ink),var(--color-wine)_50%,var(--color-bordeaux))] py-16 text-center">
      <div className="zari-strip pointer-events-none absolute inset-x-0 bottom-0 h-[5px] opacity-70" />
      <h1 className="font-display text-4xl font-light text-ivory sm:text-5xl">{title}</h1>
      <nav className="mt-4 text-[0.62rem] tracking-[0.28em] text-gold/80">
        {crumb.map((c, i) => (
          <span key={c.label}>
            {i > 0 ? <span className="px-2 text-gold/50">/</span> : null}
            {c.to ? (
              <Link to={c.to} className="transition-colors hover:text-gold-light">
                {c.label.toUpperCase()}
              </Link>
            ) : (
              <span className="text-ivory/70">{c.label.toUpperCase()}</span>
            )}
          </span>
        ))}
      </nav>
    </section>
  );
}
