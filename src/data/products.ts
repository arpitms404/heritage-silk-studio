import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import bridal from "@/assets/cat-bridal.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  fabric: string;
  isNew?: boolean;
};

export const products: Product[] = [
  {
    id: "banarasi-bordeaux-gold",
    name: "Banarasi Silk Bordeaux & Gold",
    price: 14900,
    image: p1,
    fabric: "Banarasi",
    isNew: true,
  },
  {
    id: "kanjivaram-emerald",
    name: "Kanjivaram Emerald",
    price: 18500,
    image: p2,
    fabric: "Kanjivaram",
    isNew: true,
  },
  {
    id: "tissue-champagne",
    name: "Tissue Silk Champagne",
    price: 11200,
    image: p3,
    fabric: "Silk",
  },
  {
    id: "paithani-wine-peacock",
    name: "Paithani Wine Peacock",
    price: 16400,
    image: p4,
    fabric: "Paithani",
    isNew: true,
  },
  {
    id: "bridal-rani-zari",
    name: "Bridal Rani Zari",
    price: 8900,
    image: bridal,
    fabric: "Bridal",
  },
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
