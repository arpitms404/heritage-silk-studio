import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageBanner, PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { productOf, useShop } from "@/context/ShopContext";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — Ishwar Sarees" },
      { name: "description", content: "The handwoven sarees you have saved for later." },
      { property: "og:title", content: "Wishlist — Ishwar Sarees" },
      { property: "og:description", content: "Sarees saved for later at Ishwar Sarees." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, setDrawerOpen } = useShop();
  const items = wishlist.map(productOf).filter(Boolean);

  return (
    <PageShell>
      <PageBanner title="Wishlist" crumb={[{ label: "Home", to: "/" }, { label: "Wishlist" }]} />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-display text-3xl font-light text-wine">
              Nothing saved yet — go find something you love.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block border border-wine px-10 py-4 text-[0.65rem] tracking-[0.3em] text-wine transition-colors hover:bg-wine hover:text-ivory"
            >
              BROWSE SAREES
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {items.map((p, i) =>
              p ? (
                <Reveal key={p.id} delay={i * 90}>
                  <div className="relative">
                    <button
                      aria-label="Remove from wishlist"
                      onClick={() => removeFromWishlist(p.id)}
                      className="absolute top-3 right-3 z-10 bg-ivory/90 p-1.5 text-wine transition-colors hover:text-bordeaux"
                    >
                      <X size={14} />
                    </button>
                    <ProductCard product={p} />
                    <button
                      onClick={() => {
                        addToCart(p.id);
                        removeFromWishlist(p.id);
                        setDrawerOpen(true);
                      }}
                      className="mt-4 w-full border border-wine py-3 text-[0.62rem] tracking-[0.26em] text-wine transition-colors hover:bg-wine hover:text-ivory"
                    >
                      MOVE TO CART
                    </button>
                  </div>
                </Reveal>
              ) : null,
            )}
          </div>
        )}
      </div>
    </PageShell>
  );
}
