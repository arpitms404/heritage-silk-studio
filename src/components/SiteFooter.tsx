import { Instagram, Facebook, Youtube, Send } from "lucide-react";

const COLUMNS = [
  { title: "Boutique", links: ["Banarasi", "Kanjivaram", "Paithani", "Bridal", "New In"] },
  { title: "Information", links: ["Shipping & Returns", "Care Guide", "Size Guide", "FAQ", "Contact"] },
  { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Refund Policy"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-wine text-ivory/70">
      <div className="zari-strip h-[5px] opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.12em] text-ivory">ISHWAR SAREES</p>
          <p className="mt-1 text-[0.55rem] tracking-[0.44em] text-gold">SILK &amp; HERITAGE</p>
          <p className="mt-5 max-w-xs text-xs leading-relaxed font-light">
            Six generations at the loom. Every saree we send is handwoven, hand-finished and made to
            be passed down.
          </p>
          <div className="mt-6 flex gap-4 text-gold">
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-gold-light">
              <Instagram size={17} strokeWidth={1.4} />
            </a>
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-gold-light">
              <Facebook size={17} strokeWidth={1.4} />
            </a>
            <a href="#" aria-label="YouTube" className="transition-colors hover:text-gold-light">
              <Youtube size={17} strokeWidth={1.4} />
            </a>
          </div>
        </div>

        {COLUMNS.map((c) => (
          <div key={c.title}>
            <h3 className="text-[0.62rem] tracking-[0.34em] text-gold">{c.title.toUpperCase()}</h3>
            <ul className="mt-5 space-y-3 text-xs font-light">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-gold-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl border-t border-gold/20 px-6 py-10 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-xl text-ivory">Join the atelier list</h3>
            <p className="mt-1 text-xs font-light">New weaves and private previews, once a month.</p>
          </div>
          <form
            className="flex w-full max-w-sm border border-gold/40"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="news" className="sr-only">
              Email address
            </label>
            <input
              id="news"
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-3 text-xs tracking-widest text-ivory placeholder:text-ivory/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-gold px-4 text-wine transition-colors hover:bg-gold-light"
            >
              <Send size={15} strokeWidth={1.6} />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-gold/20 px-6 py-6 text-[0.62rem] tracking-[0.22em] lg:flex-row lg:px-10">
        <p>© {new Date().getFullYear()} ISHWAR SAREES · ALL RIGHTS RESERVED</p>
        <div className="flex gap-3 text-gold/80">
          {["VISA", "MASTERCARD", "PAYPAL", "UPI"].map((p) => (
            <span key={p} className="border border-gold/30 px-2 py-1">
              {p}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
