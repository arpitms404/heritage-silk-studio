import { createFileRoute, Link, useNavigate, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Minus, Plus, Truck, ShieldCheck, RefreshCw, Ruler, Scissors, Sparkles, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, inr, products } from "@/data/products";
import { useShop } from "@/context/ShopContext";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [{ title: "Saree not found — Ishwar Sarees" }, { name: "robots", content: "noindex" }],
      };
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Ishwar Sarees` },
        { name: "description", content: p.description.slice(0, 155) },
        { property: "og:title", content: `${p.name} — Ishwar Sarees` },
        { property: "og:description", content: p.description.slice(0, 155) },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, inWishlist, setDrawerOpen } = useShop();

  const [active, setActive] = useState(0);
  const [colour, setColour] = useState(product.colours[0]?.name ?? "Default");
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState({ x: 50, y: 50, on: false });
  const [openPanel, setOpenPanel] = useState<string | null>("Product Details");

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const specs = [
    { icon: Sparkles, label: "Material", value: `100% pure ${product.fabric.toLowerCase()} silk` },
    { icon: Scissors, label: "Colour", value: product.colour },
    { icon: Ruler, label: "Length", value: product.length },
    { icon: RefreshCw, label: "Care", value: product.care },
    { icon: MapPin, label: "Origin", value: product.origin },
  ];

  const panels = [
    { title: "Product Details", body: product.description },
    {
      title: "Shipping & Returns",
      body: "Dispatched in 2–3 working days. Free shipping over ₹4999. Easy 7-day returns on unworn sarees with tags intact.",
    },
    { title: "Care Guide", body: product.care },
    { title: "Size Guide", body: product.length },
  ];

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
        <nav className="text-[0.62rem] tracking-[0.24em] text-ink/50">
          <Link to="/" className="hover:text-gold">
            HOME
          </Link>
          <span className="px-2">/</span>
          <Link to="/shop" className="hover:text-gold">
            SAREES
          </Link>
          <span className="px-2">/</span>
          <span className="text-wine">{product.name.toUpperCase()}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-2 lg:px-10">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`h-20 w-16 overflow-hidden border transition-colors ${
                  active === i ? "border-gold" : "border-transparent"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <div
            className="relative flex-1 overflow-hidden bg-ivory"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setZoom({
                x: ((e.clientX - r.left) / r.width) * 100,
                y: ((e.clientY - r.top) / r.height) * 100,
                on: true,
              });
            }}
            onMouseLeave={() => setZoom((z) => ({ ...z, on: false }))}
          >
            {product.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={product.name}
                className="h-full w-full object-cover transition-opacity duration-700"
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  inset: i === 0 ? undefined : 0,
                  opacity: active === i ? 1 : 0,
                  transform: zoom.on && active === i ? "scale(1.6)" : "scale(1)",
                  transformOrigin: `${zoom.x}% ${zoom.y}%`,
                  transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            ))}
            {product.isNew ? (
              <span className="absolute top-4 left-4 bg-gold px-3 py-1 text-[0.6rem] tracking-[0.28em] text-wine">
                NEW
              </span>
            ) : null}
          </div>
        </div>

        <div>
          <h1 className="font-display text-4xl font-light text-wine sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg tracking-[0.16em] text-bordeaux">{inr(product.price)}</p>
          <p className="mt-1 text-[0.62rem] tracking-[0.2em] text-ink/50">
            Taxes included, shipping at checkout
          </p>
          <p className="mt-6 max-w-lg text-sm leading-relaxed font-light text-ink/70">
            {product.description}
          </p>

          <ul className="mt-8 space-y-3 border-y border-gold/25 py-6">
            {specs.map((s) => (
              <li key={s.label} className="flex items-start gap-3 text-xs font-light text-ink/70">
                <s.icon size={15} strokeWidth={1.3} className="mt-0.5 shrink-0 text-gold" />
                <span className="w-24 shrink-0 tracking-[0.2em] text-wine">
                  {s.label.toUpperCase()}
                </span>
                <span>{s.value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="text-[0.62rem] tracking-[0.28em] text-wine">COLOUR — {colour.toUpperCase()}</p>
            <div className="mt-3 flex gap-3">
              {product.colours.map((c) => (
                <button
                  key={c.name}
                  aria-label={c.name}
                  onClick={() => setColour(c.name)}
                  className={`h-8 w-8 rounded-full border transition-transform duration-300 hover:scale-110 ${
                    colour === c.name ? "border-gold ring-1 ring-gold" : "border-ink/20"
                  }`}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center border border-gold/40">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-wine"
              >
                <Minus size={13} />
              </button>
              <span className="px-4 text-sm">{qty}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-2 text-wine"
              >
                <Plus size={13} />
              </button>
            </div>
            <span className="text-[0.62rem] tracking-[0.24em] text-bordeaux">
              {product.inStock ? "IN STOCK" : "MADE TO ORDER"}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => {
                addToCart(product.id, qty, colour);
                setDrawerOpen(true);
              }}
              className="flex-1 bg-wine py-4 text-[0.68rem] tracking-[0.3em] text-gold-light transition-colors duration-500 hover:bg-bordeaux"
            >
              ADD TO CART
            </button>
            <button
              onClick={() => {
                addToCart(product.id, qty, colour);
                navigate({ to: "/checkout" });
              }}
              className="flex-1 border border-wine py-4 text-[0.68rem] tracking-[0.3em] text-wine transition-colors duration-500 hover:bg-wine hover:text-ivory"
            >
              BUY NOW
            </button>
          </div>

          <button
            onClick={() => toggleWishlist(product.id)}
            className="mt-5 flex items-center gap-2 text-[0.65rem] tracking-[0.24em] text-bordeaux transition-colors hover:text-gold"
          >
            <Heart size={14} strokeWidth={1.4} fill={inWishlist(product.id) ? "currentColor" : "none"} />
            {inWishlist(product.id) ? "SAVED TO WISHLIST" : "ADD TO WISHLIST"}
          </button>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gold/25 pt-6 text-center">
            {[
              { icon: Truck, label: "Fast Delivery" },
              { icon: ShieldCheck, label: "Secure Payment" },
              { icon: RefreshCw, label: "Easy Returns" },
            ].map((t) => (
              <div key={t.label}>
                <t.icon size={18} strokeWidth={1.1} className="mx-auto text-gold" />
                <p className="mt-2 text-[0.58rem] tracking-[0.22em] text-ink/60">
                  {t.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-gold/25">
            {panels.map((p) => (
              <div key={p.title} className="border-b border-gold/25">
                <button
                  onClick={() => setOpenPanel(openPanel === p.title ? null : p.title)}
                  className="flex w-full items-center justify-between py-4 text-[0.65rem] tracking-[0.26em] text-wine"
                >
                  {p.title.toUpperCase()}
                  <span className="text-gold">{openPanel === p.title ? "−" : "+"}</span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    maxHeight: openPanel === p.title ? 240 : 0,
                    opacity: openPanel === p.title ? 1 : 0,
                  }}
                >
                  <p className="pb-5 text-xs leading-relaxed font-light text-ink/70">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <Reveal>
          <SectionHeading kicker="MORE FROM THE LOOM" title="You may also like" />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {related.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
