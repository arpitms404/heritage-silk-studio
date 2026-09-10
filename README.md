# Heritage Silk Studio

# Lovable Prompt Pack — Luxury Saree E-Commerce

Use these prompts **in order**. Paste PROMPT 1 first, let Lovable finish, then paste the next one. Building page-by-page keeps the quality high.

> **Do the HERO first.** Paste PROMPT 0 below, iterate until the hero looks jaw-dropping, THEN move to PROMPT 1 for the rest of the homepage.

---

## PROMPT 0 — The Jaw-Dropping Hero (perfect this first)

Build ONLY the hero section (top of the homepage) for a luxury Indian saree brand called **Ishwar Sarees — Silk & Heritage**. This must be the "aankh fat jaye" moment — cinematic, elegant, and premium. Ignore the rest of the site for now.

**Palette (exact):** deep wine `#3d0a17`, bordeaux `#7a1230`, antique gold `#c9a24b`, light gold `#e6cd8a`, warm ivory `#f6efe0`, ink `#2a0a12`.
**Fonts:** headings = **Cormorant** (high-contrast serif), body/UI = **Jost** (light, letter-spaced).

**Layout (full viewport height):**
- Split hero. **Right ~55%:** a tall, richly-lit photo of a woman draped in a maroon-and-gold Banarasi saree (portrait, elegant). **Left ~45%:** a deep maroon gradient panel with the text.
- A thin **gold zari border strip** runs along the very top and bottom edges of the hero.
- Left panel content: small gold kicker "WEAVE • DRAPE • BELONG", then a huge headline **"Silk that remembers."** (the word "remembers." in italic gold), a one-line subtitle, and a gold-outlined button **"Discover the Collection"**. A subtle "Scroll ↓" cue sits centered at the bottom.

**The animations (make these exceptional, timing 700–1000ms, smooth easing, never bouncy):**
1. **On load — silk unfurl:** the hero photo reveals via a top→bottom clip-path wipe, like a saree being draped open. At the same time the maroon panel slides in from the left.
2. **Headline:** the words rise and fade in one after another (staggered), and the gold word has a slow shimmer sweeping across it continuously.
3. **Living cloth:** give the maroon panel a very subtle, slow flowing-fabric shimmer (a soft moving highlight, like light catching silk). Keep it gentle, not distracting.
4. **Cursor glow:** a soft warm-gold glow follows the cursor over the hero image.
5. **Button:** on hover, gold fills up from the bottom and the text turns wine-colored.
6. **Scroll cue:** a thin gold line gently pulses down.

Fully responsive — on mobile, stack the image on top and the maroon text panel below, keep the unfurl + shimmer. Respect `prefers-reduced-motion`. Use a high-quality placeholder saree image I can replace later.

Make it feel like the opening of a luxury fashion film.

---

## PROMPT 1 — Foundation, Design System & Homepage

Build a **luxury Indian saree e-commerce website** called **Ishwar Sarees — Silk & Heritage**. This is a premium brand selling ONLY sarees (Banarasi, Kanjivaram, Paithani, silk, bridal). The feeling should be rich, royal, and handcrafted — like walking into a heritage boutique. Make it visually stunning and animated, not a plain template.

### Brand & Design System (use these EXACT values everywhere)
- Deep wine / maroon (primary): `#3d0a17`
- Bordeaux (secondary): `#7a1230`
- Antique gold (accent): `#c9a24b`
- Light gold / champagne (highlights): `#e6cd8a`
- Warm ivory background: `#f6efe0`
- Ink text: `#2a0a12`
- Headings font: **Cormorant** (elegant high-contrast serif)
- Body / UI font: **Jost** (clean, light, letter-spaced)
- Style: generous whitespace, thin gold hairline dividers, gold `✦` and small lotus motifs as section markers, subtle gold borders. NO harsh shadows — use soft, warm depth.

### Signature animations (this is the "wow" — do these carefully)
1. **Hero on load:** the main saree image reveals with a smooth silk-drape "unfurl" (clip-path wipe top→bottom), while the headline fades and rises word by word.
2. **Gold shimmer:** brand name and key headings have a slow gold sheen sweeping across the text.
3. **Scroll reveals:** each section fades + rises gently as it enters view (use Framer Motion / intersection observer).
4. **Product cards:** on hover, image zooms slightly, a gold border draws in, and a "Quick View" bar slides up. Add a soft 3D tilt toward the cursor.
5. **Nav:** transparent over hero, then turns to a frosted ivory blur bar with gold underline hovers after scrolling.
6. Keep motion elegant and slow (600–900ms), never bouncy. Respect `prefers-reduced-motion`.

### Global layout
- **Announcement ticker** (wine bg, gold text, scrolling): "Free shipping over ₹4999 • Handwoven Banarasi & Kanjivaram • New festive edit live".
- **Sticky navbar:** left = Ishwar Sarees logo with "SILK & HERITAGE" subtitle; center = Home, Shop, Collections, New In, About, Contact; right = search, wishlist ♡, account, cart icon with item count.
- **Footer** (wine bg, gold accents): brand blurb, newsletter email signup, link columns (Boutique / Information / Legal), social icons (Instagram, Facebook, Pinterest, YouTube), payment badges (Visa, Mastercard, PayPal, UPI), copyright line.

### Homepage sections (in this order)
1. **Hero:** large draped-saree lifestyle image on the right, maroon gradient panel on the left with headline "Silk that remembers." + subline + gold-bordered "Discover the Collection" button. Small "Scroll ↓" cue at bottom.
2. **Category circles:** 4 round gold-ringed thumbnails — Banarasi, Kanjivaram, Paithani, Bridal — each with "View collection →".
3. **Featured collection grid** ("Our Favourites"): 4–5 saree product cards with a "NEW" gold tag, name, and price in ₹. "View entire boutique" button below.
4. **Feature strip** (champagne bg): 4 items with gold icons — Premium Quality (pure silk, artisan-woven), Fast Delivery (free over ₹4999), Secure Payment (100% protected), Client Care (Mon–Sat).
5. **Two split banners:** "The Saree Edit" and "Bridal Sarees", each with a rich background image, overlay text, and a "Discover" button that scales on hover.
6. **Instagram strip:** "Follow us @ishwarsarees" with 6 square saree photos.

Fully responsive (mobile → desktop). Add clean placeholder saree images. Use realistic sample product data (names like "Banarasi Silk Bordeaux & Gold", "Kanjivaram Emerald", prices ₹8,900–₹18,500).

---

## PROMPT 2 — Shop / Collection (product listing) page

Add a **Shop page** at `/shop` for browsing all sarees, in the same maroon-gold-ivory theme.

- Page header with a small maroon banner: "All Sarees" + breadcrumb (Home / Sarees).
- **Left sidebar filters** (collapsible on mobile): Fabric (Banarasi, Kanjivaram, Paithani, Silk, Cotton Silk), Colour (swatches), Price range slider, Occasion (Wedding, Festive, Daily). Gold "Apply / Clear" controls.
- **Sort dropdown**: Newest, Price low→high, Price high→low.
- **Responsive product grid** (2 col mobile, 3–4 col desktop) using the same animated cards as the homepage (hover zoom, gold border draw-in, Quick View, 3D tilt, "NEW" tag).
- Each card links to the product detail page.
- Pagination or "Load more" button in gold style at the bottom.
- Cards should stagger-reveal on scroll.

---

## PROMPT 3 — Product Detail page

Add a **Product Detail page** at `/product/:id`, matching this layout:

- Breadcrumb: Home / Sarees / [product name].
- **Left:** large main saree image with a vertical thumbnail strip (4–5 thumbnails incl. one video icon). Clicking a thumbnail swaps the main image with a soft crossfade. Add a zoom-on-hover magnifier.
- **Right:** "NEW" gold tag, product title in Cormorant, price in ₹ (with "Taxes included, shipping at checkout"), short description, then a **spec list** with gold icons: Material (100% pure silk), Colour, Length (5.5m with matching blouse), Care (dry clean only), Origin (handwoven in India).
- **Colour selector** (round swatches), **quantity stepper**, "In stock" badge.
- Two buttons: solid maroon **"Add to Cart"** and outlined **"Buy Now"**, plus a "♡ Add to wishlist" link.
- Small trust row: Fast Delivery, Secure Payment, Easy Returns.
- Below: an **accordion** ("Product Details", "Shipping & Returns", "Care Guide", "Size Guide") that expands smoothly.
- **"You may also like"** section: 4 related saree cards.
- Adding to cart should animate the cart icon count in the navbar.

---

## PROMPT 4 — Cart, Checkout & Wishlist

Add full **cart and checkout** flow, same theme.

- **Cart drawer** that slides in from the right when the cart icon is clicked: line items (thumbnail, name, colour, qty stepper, price, remove), order subtotal, "Proceed to Checkout" button, free-shipping progress bar toward ₹4999.
- **Cart page** `/cart` with the same items in a full-width table plus an order summary card.
- **Checkout page** `/checkout`: shipping address form, delivery options, payment method selection (Card / UPI / PayPal — UI only), and an order summary. Clean, single-column, gold accents, clear validation states.
- **Order confirmation** screen with a subtle gold confetti / shimmer moment and order number.
- **Wishlist page** `/wishlist`: saved sarees in a grid with "Move to cart".
- Cart state should persist across pages (use context/state). Empty states should be friendly ("Your cart is waiting for something beautiful").

---

## PROMPT 5 — About, Contact & polish

- **About page** `/about`: brand story about heritage weaving, a "Meet the weavers" section with small round avatars, mission statement, and a maroon call-to-action banner. Elegant, editorial layout with the gold shimmer heading.
- **Contact page** `/contact`: contact form (name, email, message), store details, map placeholder, and social links.
- **Final polish pass:** make sure every page is fully responsive, all hover/scroll animations feel smooth and slow, mobile menu is a clean slide-in drawer, focus states are visible, and the maroon-gold-ivory palette is 100% consistent across every page. Add a subtle page-transition fade between routes.

---

### How to use
1. Paste **PROMPT 1**, wait for the full build.
2. Then paste **PROMPT 2 → 5** one at a time.
3. To tweak anything, tell Lovable exactly what to change ("make the hero image taller", "gold border thinner on cards", etc.) — small, specific edits work best.
4. Keep repeating the exact hex codes if any page drifts off-palette.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bed0a832-16f9-4dc7-8d48-c60a155a269a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
