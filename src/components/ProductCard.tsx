import { useRef, useState } from "react";
import { inr, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState("");

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
        setTilt(`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`);
      }}
      onMouseLeave={() => setTilt("")}
      style={{ transform: tilt, transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-ivory">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />

        {product.isNew ? (
          <span className="absolute top-3 left-3 bg-gold px-3 py-1 text-[0.6rem] tracking-[0.28em] text-wine">
            NEW
          </span>
        ) : null}

        {/* gold border draw-in */}
        <span className="pointer-events-none absolute inset-x-3 top-3 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
        <span className="pointer-events-none absolute inset-x-3 bottom-3 h-px origin-right scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
        <span className="pointer-events-none absolute inset-y-3 left-3 w-px origin-bottom scale-y-0 bg-gold transition-transform duration-700 group-hover:scale-y-100" />
        <span className="pointer-events-none absolute inset-y-3 right-3 w-px origin-top scale-y-0 bg-gold transition-transform duration-700 group-hover:scale-y-100" />

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-wine/90 py-3 text-center text-[0.65rem] tracking-[0.3em] text-gold-light transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          QUICK VIEW
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-display text-xl font-light text-ink">{product.name}</h3>
        <p className="mt-1 text-xs tracking-[0.2em] text-bordeaux">{inr(product.price)}</p>
      </div>
    </div>
  );
}
