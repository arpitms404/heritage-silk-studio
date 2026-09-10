import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
  { label: "New In", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);
  const { cartCount, setDrawerOpen } = useShop();
  const [bump, setBump] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    if (cartCount === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 450);
    return () => clearTimeout(t);
  }, [cartCount]);

  const dark = scrolled || solid;

  return (
    <>
      <div className="relative z-50 overflow-hidden bg-wine py-2">
        <div
          className="flex w-max gap-16 text-[0.62rem] tracking-[0.34em] whitespace-nowrap text-gold"
          style={{ animation: "ticker 32s linear infinite" }}
        >
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-16">
              <span>FREE SHIPPING OVER ₹4999</span>
              <span>✦</span>
              <span>HANDWOVEN BANARASI &amp; KANJIVARAM</span>
              <span>✦</span>
              <span>NEW FESTIVE EDIT LIVE</span>
              <span>✦</span>
            </span>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-700 ${
          dark
            ? "border-b border-gold/30 bg-ivory/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link to="/" className="leading-none">
            <span
              className={`font-display text-2xl tracking-[0.12em] ${dark ? "text-wine" : "text-ivory"}`}
            >
              ISHWAR SAREES
            </span>
            <span className="mt-1 block text-[0.55rem] tracking-[0.44em] text-gold">
              SILK &amp; HERITAGE
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className={`group relative text-[0.68rem] tracking-[0.26em] transition-colors ${
                  dark ? "text-ink/80 hover:text-wine" : "text-ivory/85 hover:text-gold-light"
                }`}
              >
                {n.label.toUpperCase()}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div
            className={`flex items-center gap-5 ${dark ? "text-wine" : "text-ivory"}`}
            aria-label="Account and cart"
          >
            <Link to="/shop" aria-label="Search" className="transition-colors hover:text-gold">
              <Search size={18} strokeWidth={1.4} />
            </Link>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="hidden transition-colors hover:text-gold sm:block"
            >
              <Heart size={18} strokeWidth={1.4} />
            </Link>
            <Link
              to="/checkout"
              aria-label="Account"
              className="hidden transition-colors hover:text-gold sm:block"
            >
              <User size={18} strokeWidth={1.4} />
            </Link>
            <button
              aria-label="Cart"
              onClick={() => setDrawerOpen(true)}
              className="relative transition-colors hover:text-gold"
            >
              <ShoppingBag size={18} strokeWidth={1.4} />
              <span
                className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[0.55rem] text-wine transition-transform duration-300"
                style={{ transform: bump ? "scale(1.45)" : "scale(1)" }}
              >
                {cartCount}
              </span>
            </button>
            <button aria-label="Menu" className="lg:hidden" onClick={() => setOpen((v) => !v)}>
              {open ? <X size={20} strokeWidth={1.4} /> : <Menu size={20} strokeWidth={1.4} />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/50 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <nav
          className={`absolute top-0 right-0 flex h-full w-72 flex-col bg-ivory px-7 py-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-wine">MENU</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-wine">
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>
          <div className="mt-8 flex flex-col">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-gold/20 py-4 text-[0.7rem] tracking-[0.28em] text-ink/80"
              >
                {n.label.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="border-b border-gold/20 py-4 text-[0.7rem] tracking-[0.28em] text-ink/80"
            >
              WISHLIST
            </Link>
            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="border-b border-gold/20 py-4 text-[0.7rem] tracking-[0.28em] text-ink/80"
            >
              CART
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
