import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { PageBanner, PageShell } from "@/components/PageShell";
import { FreeShipBar } from "@/components/CartDrawer";
import { inr } from "@/data/products";
import { productOf, useShop } from "@/context/ShopContext";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Ishwar Sarees" },
      { name: "description", content: "Review the handwoven sarees in your Ishwar Sarees cart." },
      { property: "og:title", content: "Your Cart — Ishwar Sarees" },
      { property: "og:description", content: "Review your selected handwoven silk sarees." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { cart, subtotal, setQty, removeFromCart } = useShop();

  return (
    <PageShell>
      <PageBanner title="Your Cart" crumb={[{ label: "Home", to: "/" }, { label: "Cart" }]} />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {cart.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-display text-3xl font-light text-wine">
              Your cart is waiting for something beautiful.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block border border-wine px-10 py-4 text-[0.65rem] tracking-[0.3em] text-wine transition-colors hover:bg-wine hover:text-ivory"
            >
              BROWSE SAREES
            </Link>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            <div>
              <div className="hidden grid-cols-[1fr_120px_120px_40px] gap-4 border-b border-gold/30 pb-4 text-[0.6rem] tracking-[0.26em] text-ink/50 sm:grid">
                <span>SAREE</span>
                <span>QUANTITY</span>
                <span className="text-right">TOTAL</span>
                <span />
              </div>
              <ul>
                {cart.map((item) => {
                  const p = productOf(item.id);
                  if (!p) return null;
                  return (
                    <li
                      key={`${item.id}-${item.colour}`}
                      className="grid grid-cols-1 items-center gap-4 border-b border-gold/20 py-6 sm:grid-cols-[1fr_120px_120px_40px]"
                    >
                      <div className="flex gap-4">
                        <Link to="/product/$id" params={{ id: p.id }} className="w-20 shrink-0">
                          <img src={p.image} alt={p.name} className="h-24 w-20 object-cover" />
                        </Link>
                        <div>
                          <Link
                            to="/product/$id"
                            params={{ id: p.id }}
                            className="font-display text-lg text-ink transition-colors hover:text-bordeaux"
                          >
                            {p.name}
                          </Link>
                          <p className="mt-1 text-[0.6rem] tracking-[0.22em] text-ink/50">
                            {item.colour.toUpperCase()} · {inr(p.price)}
                          </p>
                        </div>
                      </div>

                      <div className="flex w-fit items-center border border-gold/40">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => setQty(item.id, item.colour, item.qty - 1)}
                          className="px-2 py-1 text-wine"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs">{item.qty}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => setQty(item.id, item.colour, item.qty + 1)}
                          className="px-2 py-1 text-wine"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="text-xs tracking-[0.18em] text-bordeaux sm:text-right">
                        {inr(p.price * item.qty)}
                      </span>

                      <button
                        aria-label="Remove item"
                        onClick={() => removeFromCart(item.id, item.colour)}
                        className="w-fit text-ink/40 transition-colors hover:text-bordeaux"
                      >
                        <Trash2 size={15} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <aside className="h-fit border border-gold/30 p-7">
              <h2 className="font-display text-2xl font-light text-wine">Order Summary</h2>
              <div className="mt-6 flex justify-between text-xs tracking-[0.2em] text-ink/70">
                <span>SUBTOTAL</span>
                <span>{inr(subtotal)}</span>
              </div>
              <div className="mt-3 flex justify-between text-xs tracking-[0.2em] text-ink/70">
                <span>SHIPPING</span>
                <span>{subtotal >= 4999 ? "FREE" : inr(249)}</span>
              </div>
              <div className="mt-5 border-t border-gold/25 pt-5">
                <FreeShipBar subtotal={subtotal} />
              </div>
              <div className="mt-6 flex justify-between text-sm tracking-[0.2em] text-wine">
                <span>TOTAL</span>
                <span>{inr(subtotal + (subtotal >= 4999 || subtotal === 0 ? 0 : 249))}</span>
              </div>
              <Link
                to="/checkout"
                className="mt-7 block bg-wine py-4 text-center text-[0.65rem] tracking-[0.3em] text-gold-light transition-colors hover:bg-bordeaux"
              >
                PROCEED TO CHECKOUT
              </Link>
              <Link
                to="/shop"
                className="mt-4 block text-center text-[0.62rem] tracking-[0.24em] text-bordeaux hover:text-gold"
              >
                CONTINUE SHOPPING
              </Link>
            </aside>
          </div>
        )}
      </div>
    </PageShell>
  );
}
