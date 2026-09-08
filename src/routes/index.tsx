import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Gem, Truck, ShieldCheck, Headphones } from "lucide-react";
import heroSaree from "@/assets/hero-saree.jpg";
import catBanarasi from "@/assets/cat-banarasi.jpg";
import catKanjivaram from "@/assets/cat-kanjivaram.jpg";
import catPaithani from "@/assets/cat-paithani.jpg";
import catBridal from "@/assets/cat-bridal.jpg";
import bannerEdit from "@/assets/banner-edit.jpg";
import bannerBridal from "@/assets/banner-bridal.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ishwar Sarees — Silk & Heritage | Handwoven Luxury Sarees" },
      {
        name: "description",
        content:
          "Ishwar Sarees crafts handwoven Banarasi, Kanjivaram, Paithani and bridal silk sarees. Silk that remembers — discover the heritage collection.",
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

const CATEGORIES = [
  { name: "Banarasi", image: catBanarasi },
  { name: "Kanjivaram", image: catKanjivaram },
  { name: "Paithani", image: catPaithani },
  { name: "Bridal", image: catBridal },
];

const FEATURES = [
  { icon: Gem, title: "Premium Quality", copy: "Pure silk, artisan-woven" },
  { icon: Truck, title: "Fast Delivery", copy: "Free over ₹4999" },
  { icon: ShieldCheck, title: "Secure Payment", copy: "100% protected" },
  { icon: Headphones, title: "Client Care", copy: "Mon–Sat, 10am–7pm" },
];

const INSTA = [p1, catBanarasi, p2, catBridal, p4, p3];

function Index() {
  return (
    <div className="bg-ivory font-body text-ink">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-50">
          <SiteHeader />
        </div>
        <Hero />
      </div>
      <Categories />
      <Favourites />
      <FeatureStrip />
      <SplitBanners />
      <InstagramStrip />
      <SiteFooter />
    </div>
  );
}

/* ---------------- Hero ---------------- */

const HEADLINE = ["Silk", "that"];

function Hero() {
  const [glow, setGlow] = useState({ x: 50, y: 40, on: false });

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden lg:flex-row">
      <div className="zari-strip pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[6px] opacity-80" />

      <div
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

      <div
        className="relative order-2 flex w-full flex-1 items-center overflow-hidden lg:order-1 lg:w-[45%]"
        style={{ animation: "panel-in 900ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(150deg,var(--color-ink),var(--color-wine)_45%,var(--color-bordeaux))]" />
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
              href="#favourites"
              className="group relative mt-11 inline-block overflow-hidden border border-gold px-10 py-4 text-[0.72rem] tracking-[0.3em] text-gold-light transition-colors duration-700 outline-none hover:text-wine focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
              <span className="relative">DISCOVER THE COLLECTION</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[0.6rem] tracking-[0.34em] text-gold/70">SCROLL</span>
          <span
            className="block h-10 w-px bg-gradient-to-b from-gold to-transparent"
            style={{ animation: "scroll-pulse 2.6s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sections ---------------- */

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.name} delay={i * 110}>
            <a href="#favourites" className="group block text-center">
              <div className="relative mx-auto aspect-square w-36 overflow-hidden rounded-full border border-gold p-1 sm:w-44">
                <img
                  src={c.image}
                  alt={`${c.name} sarees`}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="h-full w-full rounded-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
              </div>
              <h3 className="mt-6 text-[0.7rem] tracking-[0.34em] text-wine">
                {c.name.toUpperCase()}
              </h3>
              <span className="mt-2 inline-block text-xs font-light text-bordeaux/70 transition-colors group-hover:text-gold">
                View collection →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Favourites() {
  return (
    <section id="favourites" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <Reveal>
        <SectionHeading kicker="THE EDIT" title="Our Favourites" />
      </Reveal>
      <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-5">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={i * 90}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-14 text-center">
        <a
          href="#favourites"
          className="group relative inline-block overflow-hidden border border-wine px-10 py-4 text-[0.68rem] tracking-[0.3em] text-wine transition-colors duration-700 hover:text-ivory"
        >
          <span className="absolute inset-0 origin-bottom scale-y-0 bg-wine transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
          <span className="relative">VIEW ENTIRE BOUTIQUE</span>
        </a>
      </Reveal>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className="bg-[oklch(0.925_0.045_88)] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-10">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 100} className="text-center">
            <f.icon size={26} strokeWidth={1} className="mx-auto text-gold" />
            <h3 className="mt-4 text-[0.65rem] tracking-[0.3em] text-wine">
              {f.title.toUpperCase()}
            </h3>
            <p className="mt-2 text-xs font-light text-ink/60">{f.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SplitBanners() {
  const banners = [
    { title: "The Saree Edit", copy: "Everyday silks, festive weaves and quiet luxury.", image: bannerEdit },
    { title: "Bridal Sarees", copy: "Heirloom zari for the day you will always remember.", image: bannerBridal },
  ];

  return (
    <section className="grid lg:grid-cols-2">
      {banners.map((b, i) => (
        <Reveal key={b.title} delay={i * 140}>
          <div className="group relative h-[420px] overflow-hidden">
            <img
              src={b.image}
              alt={b.title}
              loading="lazy"
              width={1280}
              height={800}
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-wine/85 via-wine/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16">
              <h3 className="font-display text-4xl font-light text-ivory">{b.title}</h3>
              <p className="mt-3 max-w-xs text-xs leading-relaxed font-light tracking-[0.14em] text-ivory/70">
                {b.copy}
              </p>
              <a
                href="#favourites"
                className="mt-7 w-fit border border-gold px-8 py-3 text-[0.65rem] tracking-[0.3em] text-gold-light transition-transform duration-500 hover:scale-105"
              >
                DISCOVER
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

function InstagramStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal>
        <SectionHeading kicker="FOLLOW US" title="@ishwarsarees" />
      </Reveal>
      <div className="mt-12 grid grid-cols-3 gap-3 lg:grid-cols-6">
        {INSTA.map((src, i) => (
          <Reveal key={i} delay={i * 70}>
            <a href="#" className="group block aspect-square overflow-hidden">
              <img
                src={src}
                alt="Ishwar Sarees on Instagram"
                loading="lazy"
                width={640}
                height={640}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
