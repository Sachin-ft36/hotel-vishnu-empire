
# REGALIA — Ultra-Premium Hotel Homepage

A cinematic, royal-luxury homepage in the spirit of Taj Hotels — calm, expensive, serif-driven, with deep black, royal gold (#C8A96A), and soft white. Every interaction restrained and intentional.

## Design system

- **Palette**: bg `#0B0B0B`, gold `#C8A96A`, soft white `#F5F5F5`, warm gray `#A8A29E`, deep panel `#141312`
- **Typography**: Playfair Display (display serif, thin weights, wide letter-spacing for headings) + Inter (body, light weight, tracked-out small caps for labels)
- **Motifs**: thin gold hairlines, small caps eyebrow labels, gold underline-grow on links, generous negative space, asymmetric layouts
- **Motion**: slow ease-out fades + translateY on scroll (IntersectionObserver), no bouncy springs, subtle hover lifts only

## Sections (top to bottom)

1. **Floating navbar**
   - Transparent over hero, fades to translucent black with hairline border on scroll
   - Left: REGALIA gold serif wordmark
   - Center: DESTINATIONS · HOTELS · EXPERIENCES · OFFERS · MEMBERSHIPS · MORE (small caps, tracked, gold underline-grow on hover; MORE opens a fade dropdown)
   - Right: Login / Join (text) + "BOOK A STAY" gold pill button with soft glow on hover
   - Mobile: minimal bar + hamburger that slides in a full-height black drawer

2. **Hero (100vh, cinematic)**
   - Background: high-res palace/suite still with slow Ken Burns zoom (scale 1 → 1.12 over 20s, ease-in-out, infinite alternate)
   - Top-to-bottom dark gradient overlay + subtle vignette
   - Left column: thin gold divider line, eyebrow "AN INVITATION", giant serif "Exclusively / For You" (two lines, wide tracking, thin weight), short description in soft white with max-width
   - Right column: vertical gold rule + rotating small label (e.g. "UDAIPUR · RAJASTHAN")
   - Bottom-center: thin scroll indicator (animated gold line drop)
   - Entrance: staggered fade + translateY on mount

3. **Featured carousel — "Signature Experiences"**
   - Horizontal scroll-snap row of large image cards (Timeless Weddings, Regalia Holidays, Wellness, Culinary Journeys, Private Yachts)
   - Each card: full image with overlay serif title bottom-left; on hover image zooms 1.05, white content panel slides up from bottom with title, short description, and "MORE →" with gold arrow
   - Custom prev/next arrows in gold; thin progress rail under the row

4. **Latest Offers**
   - Centered serif heading flanked by thin gold lines + small-caps eyebrow
   - 3-up grid of tall cards: image with white overlay box at bottom containing title, dates, and gold "VIEW OFFER →"
   - Fade + slide-up on scroll, slight parallax on the images

5. **Brand statement**
   - Full-width cinematic image background, slow scale animation
   - Centered: thin gold lines · serif headline "INDIA'S PRIDE, THE WORLD'S WELCOME" · subtext · gold outlined CTA "DISCOVER OUR STORY"

6. **Destinations grid**
   - Asymmetric mosaic (varied heights) of destinations: Udaipur, Jaipur, Mumbai, Goa, Kerala, London, Dubai
   - Black-and-white images that color in on hover; gold caption underline grows; label fades up

7. **Membership teaser**
   - Two-column: dark serif pitch for "REGALIA NEEROO Privileges" with bullet list of benefits + gold "JOIN THE CIRCLE" button; right side a refined product/key-card visual

8. **Footer**
   - Deep black, gold hairline top border
   - 4 columns (Explore, Stay, Company, Connect) + newsletter input with gold submit
   - Bottom: gold wordmark, fine-print, social icons (thin line icons)

## Routing

- `/` — homepage with all sections above
- Stub pages with shared navbar/footer and a refined "Coming soon" hero per section: `/destinations`, `/hotels`, `/experiences`, `/offers`, `/memberships`
- 404 stays as-is but restyled to match the dark luxury aesthetic

## Interactions & micro-details

- Gold underline-grow on every nav link and inline link
- Buttons: gold pill with subtle inner highlight, on hover slight scale + warm glow shadow
- Cards: lift (translateY -6px) + soft shadow on hover
- All scroll-in animations via a small `useReveal` IntersectionObserver hook (fade + 24px rise, 700ms ease-out, once)
- Reduced-motion: all zoom/parallax disabled via `prefers-reduced-motion`

## Responsiveness

- Mobile: hero text stacks left-aligned, carousel becomes swipe with snap, offers grid collapses to single column with horizontal swipe option, mosaic becomes 2-col then 1-col, hamburger drawer for nav

## Performance

- Use optimized Unsplash images with width params + `loading="lazy"` except hero
- No heavy libraries; pure CSS keyframes for Ken Burns; IntersectionObserver for reveals
- Limit reveal animations per viewport, no continuous JS animation loops

## Technical notes

- React 18 + Vite + Tailwind, all colors via HSL tokens added to `index.css` and `tailwind.config.ts` (`--gold`, `--ink`, `--soft`, `--warm-gray`, `--panel`)
- Fonts: Playfair Display + Inter via Google Fonts `<link>` in `index.html`
- New components under `src/components/regalia/`: `Navbar`, `Hero`, `FeaturedCarousel`, `LatestOffers`, `BrandStatement`, `DestinationsGrid`, `MembershipTeaser`, `Footer`, plus `RevealOnScroll` and `GoldDivider` primitives
- New pages under `src/pages/`: `Destinations`, `Hotels`, `Experiences`, `Offers`, `Memberships`; routes added to `src/App.tsx` above the catch-all
- Replace `src/pages/Index.tsx` with the composed homepage
- All images sourced from Unsplash (royalty-free) with hotel/palace/interior themes
