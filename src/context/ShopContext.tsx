import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "@/data/products";

export type CartItem = { id: string; qty: number; colour: string };

type ShopValue = {
  cart: CartItem[];
  cartCount: number;
  subtotal: number;
  addToCart: (id: string, qty?: number, colour?: string) => void;
  setQty: (id: string, colour: string, qty: number) => void;
  removeFromCart: (id: string, colour: string) => void;
  clearCart: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  inWishlist: (id: string) => boolean;
  removeFromWishlist: (id: string) => void;
};

const ShopContext = createContext<ShopValue | null>(null);

const read = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export const FREE_SHIPPING_THRESHOLD = 4999;

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(read<CartItem[]>("ishwar-cart", []));
    setWishlist(read<string[]>("ishwar-wishlist", []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("ishwar-cart", JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("ishwar-wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const value = useMemo<ShopValue>(() => {
    const priceOf = (id: string) => products.find((p) => p.id === id)?.price ?? 0;
    return {
      cart,
      cartCount: cart.reduce((n, i) => n + i.qty, 0),
      subtotal: cart.reduce((n, i) => n + priceOf(i.id) * i.qty, 0),
      addToCart: (id, qty = 1, colour) => {
        const c = colour ?? products.find((p) => p.id === id)?.colours[0]?.name ?? "Default";
        setCart((prev) => {
          const found = prev.find((i) => i.id === id && i.colour === c);
          if (found)
            return prev.map((i) => (i === found ? { ...i, qty: i.qty + qty } : i));
          return [...prev, { id, qty, colour: c }];
        });
      },
      setQty: (id, colour, qty) =>
        setCart((prev) =>
          prev
            .map((i) => (i.id === id && i.colour === colour ? { ...i, qty: Math.max(1, qty) } : i))
            .filter((i) => i.qty > 0),
        ),
      removeFromCart: (id, colour) =>
        setCart((prev) => prev.filter((i) => !(i.id === id && i.colour === colour))),
      clearCart: () => setCart([]),
      drawerOpen,
      setDrawerOpen,
      wishlist,
      toggleWishlist: (id) =>
        setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id])),
      inWishlist: (id) => wishlist.includes(id),
      removeFromWishlist: (id) => setWishlist((prev) => prev.filter((w) => w !== id)),
    };
  }, [cart, wishlist, drawerOpen]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}

export const productOf = (id: string): Product | undefined => products.find((p) => p.id === id);
