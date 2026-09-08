import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import heroSaree from "@/assets/hero-saree.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ishwar Sarees — Silk & Heritage | Handwoven Luxury Sarees" },
      {
        name: "description",
        content:
          "Ishwar Sarees crafts handwoven Banarasi, Kanjivaram and bridal silk sarees. Silk that remembers — discover the heritage collection.",
      },
      { property: "og:title", content: "Ishwar Sarees — Silk & Heritage" },
      {
        property: "og:description",
        content: "Handwoven Banarasi, Kanjivaram and bridal silk sarees. Silk that remembers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const HEADLINE = ["Silk", "that"];

function Index() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 40, on: false });

  return (
    <main className="bg-ivory font-body">
      <section className="relative flex min-h-screen flex-col overflow-hidden lg:flex-row">
        {/* top & bottom zari strips */}
        <div className="zari-strip pointer-events-none absolute inset-x-0 top-0 z-30 h-[6px] opacity-80" />
        <div className="zari-strip pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[6px] opacity-80" />

        {/* Image — right on desktop, top on mobile */}
        <div
          ref={imageRef}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setGlow({
              x: ((e.clientX - r.left) / r.width) * 100,
              y: ((e.clientY - r.top) / r.height) * 100,
              on: true,
            });
          }}
          onMouseLeave={() => setGlow((g) => ({ ...g, on: false }))}
          className="relative order-1 h-[52vh] w-full overflow-hidden lg:order-2 lg:h-auto lg:min-h-screen lg:w-[55%]"
          style={{ animation: "unfurl 1000ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
        >
          <img
            src={heroSaree}
            alt="Woman draped in a maroon and gold handwoven Banarasi silk saree"
            width={1024}
            height={1536}
            className="h-full w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-wine/70 via-transparent to-transparent lg:from-wine/60" />
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: glow.on ? 1 : 0,
              background: `radial-gradient(240px circle at ${glow.x}% ${glow.y}%, oklch(0.865 0.069 88.5 / 0.35), transparent 70%)`,
            }}
          />
        </div>

        {/* Maroon text panel */}
        <div
          className="relative order-2 flex w-full flex-1 items-center overflow-hidden lg:order-1 lg:w-[45%]"
          style={{ animation: "panel-in 900ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(150deg,var(--color-ink),var(--color-wine)_45%,var(--color-bordeaux))]" />
          {/* living cloth shimmer */}
          <div
            className="pointer-events-none absolute -inset-1/2 opacity-40"
            style={{
              background:
                "linear-gradient(105deg, transparent 42%, oklch(0.865 0.069 88.5 / 0.16) 50%, transparent 58%)",
              animation: "silk-flow 14s ease-in-out infinite",
            }}
          />

          <div className="relative z-10 w-full px-8 py-20 sm:px-14 lg:px-20 lg:py-0">
            <p
              className="text-[0.7rem] font-light tracking-[0.42em] text-gold"
              style={{ animation: "rise-in 800ms 200ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              WEAVE • DRAPE • BELONG
            </p>

            <h1 className="mt-7 font-display text-[clamp(3rem,7vw,5.75rem)] leading-[1.02] font-light text-ivory">
              {HEADLINE.map((w, i) => (
                <span
                  key={w}
                  className="mr-4 inline-block"
                  style={{
                    animation: `rise-in 900ms ${400 + i * 160}ms cubic-bezier(0.22,1,0.36,1) both`,
                  }}
                >
                  {w}
                </span>
              ))}
              <span
                className="inline-block"
                style={{ animation: "rise-in 900ms 720ms cubic-bezier(0.22,1,0.36,1) both" }}
              >
                <em className="text-shimmer font-display italic">remembers.</em>
              </span>
            </h1>

            <p
              className="mt-7 max-w-md text-sm leading-relaxed font-light tracking-[0.14em] text-ivory/70"
              style={{ animation: "rise-in 900ms 900ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              Handwoven Banarasi & Kanjivaram silks, carrying six generations of the loom.
            </p>

            <div style={{ animation: "rise-in 900ms 1050ms cubic-bezier(0.22,1,0.36,1) both" }}>
              <a
                href="#collection"
                className="group relative mt-11 inline-block overflow-hidden border border-gold px-10 py-4 text-[0.72rem] tracking-[0.3em] text-gold-light transition-colors duration-700 outline-none hover:text-wine focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
                <span className="relative">DISCOVER THE COLLECTION</span>
              </a>
            </div>
          </div>

          {/* scroll cue */}
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
            <span className="text-[0.6rem] tracking-[0.34em] text-gold/70">SCROLL</span>
            <span
              className="block h-10 w-px bg-gradient-to-b from-gold to-transparent"
              style={{ animation: "scroll-pulse 2.6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
