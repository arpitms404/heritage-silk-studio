import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import catBanarasi from "@/assets/cat-banarasi.jpg";
import catKanjivaram from "@/assets/cat-kanjivaram.jpg";
import catPaithani from "@/assets/cat-paithani.jpg";
import catBridal from "@/assets/cat-bridal.jpg";
import bannerEdit from "@/assets/banner-edit.jpg";
import bannerBridal from "@/assets/banner-bridal.jpg";
import hero from "@/assets/hero-saree.jpg";

export type Product = {
  id: string;
  name: string;
  fabric: string;
  colour: string;
  colours: { name: string; hex: string }[];
  occasion: string;
  price: number;
  image: string;
  images: string[];
  isNew?: boolean;
  description: string;
  length: string;
  care: string;
  origin: string;
  inStock: boolean;
};

const base = {
  length: "5.5m saree with 0.8m matching blouse piece",
  care: "Dry clean only. Store wrapped in muslin.",
  origin: "Handwoven in India",
  inStock: true,
};

export const products: Product[] = [
  {
    ...base,
    id: "banarasi-bordeaux-gold",
    name: "Banarasi Silk Bordeaux & Gold",
    fabric: "Banarasi",
    colour: "Maroon",
    colours: [
      { name: "Bordeaux", hex: "#7a1230" },
      { name: "Wine", hex: "#3d0a17" },
      { name: "Gold", hex: "#c9a24b" },
    ],
    occasion: "Wedding",
    price: 14900,
    image: p1,
    images: [p1, catBanarasi, bannerEdit, p3],
    isNew: true,
    description:
      "A deep bordeaux Banarasi woven with fine antique zari butis and a broad brocade border — a piece made to be worn at the biggest moments and passed on.",
  },
  {
    ...base,
    id: "kanjivaram-emerald",
    name: "Kanjivaram Emerald",
    fabric: "Kanjivaram",
    colour: "Green",
    colours: [
      { name: "Emerald", hex: "#0f5132" },
      { name: "Gold", hex: "#c9a24b" },
    ],
    occasion: "Festive",
    price: 18500,
    image: p2,
    images: [p2, catKanjivaram, p4, bannerBridal],
    isNew: true,
    description:
      "Pure mulberry silk from Kanchipuram in a jewelled emerald, finished with a contrast korvai border and temple motifs.",
  },
  {
    ...base,
    id: "tissue-champagne",
    name: "Tissue Silk Champagne",
    fabric: "Silk",
    colour: "Gold",
    colours: [
      { name: "Champagne", hex: "#e6cd8a" },
      { name: "Ivory", hex: "#f6efe0" },
    ],
    occasion: "Festive",
    price: 11200,
    image: p3,
    images: [p3, bannerEdit, p1, catPaithani],
    description:
      "Featherlight tissue silk with a champagne sheen that catches candlelight — the quietest kind of luxury.",
  },
  {
    ...base,
    id: "paithani-wine-peacock",
    name: "Paithani Wine Peacock",
    fabric: "Paithani",
    colour: "Maroon",
    colours: [
      { name: "Wine", hex: "#3d0a17" },
      { name: "Peacock", hex: "#12626b" },
    ],
    occasion: "Wedding",
    price: 16400,
    image: p4,
    images: [p4, catPaithani, p2, hero],
    isNew: true,
    description:
      "The famous Paithani peacock pallu, hand-woven in wine and gold over many months on a traditional Maharashtrian loom.",
  },
  {
    ...base,
    id: "bridal-rani-zari",
    name: "Bridal Rani Zari",
    fabric: "Bridal",
    colour: "Pink",
    colours: [
      { name: "Rani Pink", hex: "#a01248" },
      { name: "Gold", hex: "#c9a24b" },
    ],
    occasion: "Wedding",
    price: 8900,
    image: catBridal,
    images: [catBridal, bannerBridal, p1, p2],
    description:
      "A rani pink bridal saree dense with zari work, made for the mandap and the photographs that follow.",
  },
  {
    ...base,
    id: "banarasi-ivory-gold",
    name: "Banarasi Ivory & Gold",
    fabric: "Banarasi",
    colour: "Ivory",
    colours: [
      { name: "Ivory", hex: "#f6efe0" },
      { name: "Gold", hex: "#c9a24b" },
    ],
    occasion: "Wedding",
    price: 13500,
    image: catBanarasi,
    images: [catBanarasi, p3, bannerEdit, p1],
    isNew: true,
    description:
      "Warm ivory Banarasi silk with a gold jaal across the body — restrained, ceremonial and endlessly wearable.",
  },
  {
    ...base,
    id: "kanjivaram-royal-blue",
    name: "Kanjivaram Royal Blue",
    fabric: "Kanjivaram",
    colour: "Blue",
    colours: [
      { name: "Royal Blue", hex: "#1b2c6b" },
      { name: "Gold", hex: "#c9a24b" },
    ],
    occasion: "Festive",
    price: 17200,
    image: catKanjivaram,
    images: [catKanjivaram, p2, p4, bannerBridal],
    description:
      "A deep royal blue Kanjivaram with a wide gold border and rich pallu — regal without shouting.",
  },
  {
    ...base,
    id: "paithani-teal-heritage",
    name: "Paithani Teal Heritage",
    fabric: "Paithani",
    colour: "Green",
    colours: [
      { name: "Teal", hex: "#12626b" },
      { name: "Gold", hex: "#c9a24b" },
    ],
    occasion: "Festive",
    price: 15600,
    image: catPaithani,
    images: [catPaithani, p4, p2, bannerEdit],
    description:
      "Teal Paithani with the classic muniya border, woven entirely by hand with pure zari.",
  },
  {
    ...base,
    id: "cotton-silk-rose",
    name: "Cotton Silk Rose Dust",
    fabric: "Cotton Silk",
    colour: "Pink",
    colours: [
      { name: "Rose", hex: "#c98a8a" },
      { name: "Ivory", hex: "#f6efe0" },
    ],
    occasion: "Daily",
    price: 6400,
    image: bannerEdit,
    images: [bannerEdit, p3, catBanarasi, p1],
    description:
      "A soft cotton-silk in dusty rose that drapes beautifully all day — light enough for warm afternoons.",
    care: "Gentle hand wash or dry clean.",
  },
  {
    ...base,
    id: "silk-midnight-wine",
    name: "Mysore Silk Midnight Wine",
    fabric: "Silk",
    colour: "Maroon",
    colours: [
      { name: "Wine", hex: "#3d0a17" },
      { name: "Ink", hex: "#2a0a12" },
    ],
    occasion: "Festive",
    price: 9800,
    image: hero,
    images: [hero, p1, bannerBridal, catBridal],
    description:
      "Pure Mysore silk in midnight wine with a slim zari edge — the saree for evenings that run late.",
  },
  {
    ...base,
    id: "bridal-crimson-heirloom",
    name: "Bridal Crimson Heirloom",
    fabric: "Bridal",
    colour: "Red",
    colours: [
      { name: "Crimson", hex: "#8d0f22" },
      { name: "Gold", hex: "#c9a24b" },
    ],
    occasion: "Wedding",
    price: 18200,
    image: bannerBridal,
    images: [bannerBridal, catBridal, p1, hero],
    isNew: true,
    description:
      "A crimson bridal heirloom with hand-embroidered zardozi borders, finished by a single artisan family.",
  },
  {
    ...base,
    id: "cotton-silk-indigo",
    name: "Cotton Silk Indigo Weave",
    fabric: "Cotton Silk",
    colour: "Blue",
    colours: [
      { name: "Indigo", hex: "#25406b" },
      { name: "Ivory", hex: "#f6efe0" },
    ],
    occasion: "Daily",
    price: 5900,
    image: p2,
    images: [p2, catKanjivaram, bannerEdit, p3],
    description:
      "Handloom cotton-silk in indigo with a fine woven stripe — an everyday saree with quiet character.",
    care: "Gentle hand wash or dry clean.",
    inStock: false,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const FABRICS = ["Banarasi", "Kanjivaram", "Paithani", "Silk", "Cotton Silk", "Bridal"];
export const COLOURS = [
  { name: "Maroon", hex: "#7a1230" },
  { name: "Gold", hex: "#c9a24b" },
  { name: "Ivory", hex: "#f6efe0" },
  { name: "Green", hex: "#0f5132" },
  { name: "Blue", hex: "#1b2c6b" },
  { name: "Pink", hex: "#a01248" },
  { name: "Red", hex: "#8d0f22" },
];
export const OCCASIONS = ["Wedding", "Festive", "Daily"];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
