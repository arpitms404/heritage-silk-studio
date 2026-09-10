import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { inr } from "@/data/products";
import { FREE_SHIPPING_THRESHOLD, productOf, useShop } from "@/context/ShopContext";

export function FreeShipBar({ subtotal }: { subtotal: number }) {
  const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const left = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  return (
    <div>
      <p className="text-[0.62rem] tracking-[0.22em] text-ink/60">
        {left > 0 ? `${inr(left)} AWAY FROM FREE SHIPPING` : "YOU HAVE FREE SHIPPING ✦"}
      </p>
      <div className="mt-2 h-px w-full bg-gold/25">
        <div
          className="h-px bg-gold transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function CartDrawer() {
  const { cart, subtotal, drawerOpen, setDrawerOpen, setQty, removeFromCart } = useShop();

  return (
    <div className={`fixed inset-0 z-[70] ${drawerOpen ? "" : "pointer-events-none"}`}>
      <div
        onClick={() => setDrawerOpen(false)}
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-500 ${drawerOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-ivory transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gold/25 px-6 py-5">
          <h2 className="font-display text-2xl font-light text-wine">Your Cart</h2>
          <button aria-label="Close cart" onClick={() => setDrawerOpen(false)} className="text-wine">
            <X size={20} strokeWidth={1.4} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <p className="mt-16 text-center text-sm font-light tracking-[0.14em] text-ink/60">
              Your cart is waiting for something beautiful.
            </p>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => {
                const p = productOf(item.id);
                if (!p) return null;
                return (
                  <li key={`${item.id}-${item.colour}`} className="flex gap-4">
                    <Link
                      to="/product/$id"
                      params={{ id: p.id }}
                      onClick={() => setDrawerOpen(false)}
                      className="w-20 shrink-0"
                    >
                      <img src={p.image} alt={p.name} className="h-24 w-20 object-cover" />
                    </Link>
                    <div className="flex-1">
                      <h3 className="font-display text-lg leading-tight text-ink">{p.name}</h3>
                      <p className="mt-1 text-[0.62rem] tracking-[0.22em] text-ink/50">
                        {item.colour.toUpperCase()}
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <div className="flex items-center border border-gold/40">
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
                        <span className="text-xs tracking-[0.18em] text-bordeaux">
                          {inr(p.price * item.qty)}
                        </span>
                        <button
                          aria-label="Remove item"
                          onClick={() => removeFromCart(item.id, item.colour)}
                          className="ml-auto text-ink/40 transition-colors hover:text-bordeaux"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-gold/25 px-6 py-5">
          <FreeShipBar subtotal={subtotal} />
          <div className="mt-5 flex items-center justify-between text-sm tracking-[0.18em] text-wine">
            <span>SUBTOTAL</span>
            <span>{inr(subtotal)}</span>
          </div>
          <div className="mt-5 flex gap-3">
            <Link
              to="/cart"
              onClick={() => setDrawerOpen(false)}
              className="flex-1 border border-wine py-3 text-center text-[0.65rem] tracking-[0.28em] text-wine transition-colors hover:bg-wine hover:text-ivory"
            >
              VIEW CART
            </Link>
            <Link
              to="/checkout"
              onClick={() => setDrawerOpen(false)}
              className="flex-1 bg-wine py-3 text-center text-[0.65rem] tracking-[0.28em] text-gold-light transition-colors hover:bg-bordeaux"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
