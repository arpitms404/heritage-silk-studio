import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/" },
  { label: "Collections", to: "/" },
  { label: "New In", to: "/" },
  { label: "About", to: "/" },
  { label: "Contact", to: "/" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* announcement ticker */}
      <div className="relative z-50 overflow-hidden bg-wine py-2">
        <div
          className="flex w-max gap-16 text-[0.62rem] tracking-[0.34em] whitespace-nowrap text-gold"
          style={{ animation: "ticker 32s linear infinite" }}
        >
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-16">
              <span>FREE SHIPPING OVER ₹4999</span>
              <span>✦</span>
              <span>HANDWOVEN BANARASI & KANJIVARAM</span>
              <span>✦</span>
              <span>NEW FESTIVE EDIT LIVE</span>
              <span>✦</span>
            </span>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-gold/30 bg-ivory/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link to="/" className="leading-none">
            <span
              className={`font-display text-2xl tracking-[0.12em] ${scrolled ? "text-wine" : "text-ivory"}`}
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
                  scrolled ? "text-ink/80 hover:text-wine" : "text-ivory/85 hover:text-gold-light"
                }`}
              >
                {n.label.toUpperCase()}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div
            className={`flex items-center gap-5 ${scrolled ? "text-wine" : "text-ivory"}`}
            aria-label="Account and cart"
          >
            <button aria-label="Search" className="transition-colors hover:text-gold">
              <Search size={18} strokeWidth={1.4} />
            </button>
            <button aria-label="Wishlist" className="hidden transition-colors hover:text-gold sm:block">
              <Heart size={18} strokeWidth={1.4} />
            </button>
            <button aria-label="Account" className="hidden transition-colors hover:text-gold sm:block">
              <User size={18} strokeWidth={1.4} />
            </button>
            <button aria-label="Cart" className="relative transition-colors hover:text-gold">
              <ShoppingBag size={18} strokeWidth={1.4} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[0.55rem] text-wine">
                0
              </span>
            </button>
            <button
              aria-label="Menu"
              className="lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} strokeWidth={1.4} /> : <Menu size={20} strokeWidth={1.4} />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-gold/25 bg-ivory/95 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col px-6 py-4">
              {NAV.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-gold/15 py-3 text-[0.7rem] tracking-[0.28em] text-ink/80"
                >
                  {n.label.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
