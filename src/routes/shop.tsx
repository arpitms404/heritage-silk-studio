import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { PageBanner, PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { COLOURS, FABRICS, OCCASIONS, inr, products } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All Sarees — Ishwar Sarees" },
      {
        name: "description",
        content:
          "Browse handwoven Banarasi, Kanjivaram, Paithani, silk and bridal sarees. Filter by fabric, colour, price and occasion.",
      },
      { property: "og:title", content: "Shop All Sarees — Ishwar Sarees" },
      {
        property: "og:description",
        content: "Handwoven silk sarees for weddings, festivals and every day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

const SORTS = [
  { key: "new", label: "Newest" },
  { key: "asc", label: "Price: low to high" },
  { key: "desc", label: "Price: high to low" },
];

function ShopPage() {
  const [fabrics, setFabrics] = useState<string[]>([]);
  const [colours, setColours] = useState<string[]>([]);
  const [occasions, setOccasions] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [sort, setSort] = useState("new");
  const [openFilters, setOpenFilters] = useState(false);
  const [shown, setShown] = useState(8);

  const toggle = (arr: string[], set: (v: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const filtered = useMemo(() => {
    const list = products.filter(
      (p) =>
        (fabrics.length === 0 || fabrics.includes(p.fabric)) &&
        (colours.length === 0 || colours.includes(p.colour)) &&
        (occasions.length === 0 || occasions.includes(p.occasion)) &&
        p.price <= maxPrice,
    );
    if (sort === "asc") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "desc") return [...list].sort((a, b) => b.price - a.price);
    return [...list].sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
  }, [fabrics, colours, occasions, maxPrice, sort]);

  const clear = () => {
    setFabrics([]);
    setColours([]);
    setOccasions([]);
    setMaxPrice(20000);
  };

  return (
    <PageShell>
      <PageBanner title="All Sarees" crumb={[{ label: "Home", to: "/" }, { label: "Sarees" }]} />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[240px_1fr] lg:px-10">
        <div>
          <button
            onClick={() => setOpenFilters((v) => !v)}
            className="flex w-full items-center justify-between border border-gold/40 px-4 py-3 text-[0.65rem] tracking-[0.28em] text-wine lg:hidden"
          >
            FILTERS <SlidersHorizontal size={15} strokeWidth={1.4} />
          </button>

          <aside className={`${openFilters ? "block" : "hidden"} mt-5 lg:mt-0 lg:block`}>
            <FilterGroup title="Fabric">
              {FABRICS.map((f) => (
                <Check
                  key={f}
                  label={f}
                  checked={fabrics.includes(f)}
                  onChange={() => toggle(fabrics, setFabrics, f)}
                />
              ))}
            </FilterGroup>

            <FilterGroup title="Colour">
              <div className="flex flex-wrap gap-3">
                {COLOURS.map((c) => (
                  <button
                    key={c.name}
                    aria-label={c.name}
                    onClick={() => toggle(colours, setColours, c.name)}
                    className={`h-7 w-7 rounded-full border transition-transform duration-300 hover:scale-110 ${
                      colours.includes(c.name) ? "border-gold ring-1 ring-gold" : "border-ink/20"
                    }`}
                    style={{ background: c.hex }}
                  />
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title={`Price up to ${inr(maxPrice)}`}>
              <input
                type="range"
                min={5000}
                max={20000}
                step={500}
                value={maxPrice}
                aria-label="Maximum price"
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#c9a24b]"
              />
            </FilterGroup>

            <FilterGroup title="Occasion">
              {OCCASIONS.map((o) => (
                <Check
                  key={o}
                  label={o}
                  checked={occasions.includes(o)}
                  onChange={() => toggle(occasions, setOccasions, o)}
                />
              ))}
            </FilterGroup>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setOpenFilters(false)}
                className="flex-1 bg-wine py-3 text-[0.62rem] tracking-[0.26em] text-gold-light transition-colors hover:bg-bordeaux"
              >
                APPLY
              </button>
              <button
                onClick={clear}
                className="flex-1 border border-gold py-3 text-[0.62rem] tracking-[0.26em] text-wine transition-colors hover:bg-gold hover:text-wine"
              >
                CLEAR
              </button>
            </div>
          </aside>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold/25 pb-5">
            <p className="text-[0.65rem] tracking-[0.24em] text-ink/60">
              {filtered.length} SAREES
            </p>
            <label className="flex items-center gap-3 text-[0.62rem] tracking-[0.24em] text-ink/60">
              SORT
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-gold/40 bg-transparent px-3 py-2 text-[0.65rem] tracking-[0.2em] text-wine focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {SORTS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.slice(0, shown).map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-20 text-center text-sm font-light tracking-[0.16em] text-ink/60">
              No sarees match these filters yet.
            </p>
          ) : null}

          {shown < filtered.length ? (
            <div className="mt-14 text-center">
              <button
                onClick={() => setShown((n) => n + 8)}
                className="group relative inline-block overflow-hidden border border-gold px-10 py-4 text-[0.65rem] tracking-[0.3em] text-wine transition-colors duration-700 hover:text-wine"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
                <span className="relative">LOAD MORE</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </PageShell>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-gold/20 py-6">
      <h3 className="text-[0.62rem] tracking-[0.3em] text-wine">{title.toUpperCase()}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-xs font-light text-ink/70">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 accent-[#7a1230]"
      />
      {label}
    </label>
  );
}
