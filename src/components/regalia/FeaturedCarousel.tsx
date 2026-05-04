import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { GoldDivider } from "./GoldDivider";
import weddingsImg from "@/assets/feature-weddings.jpg";
import holidaysImg from "@/assets/feature-holidays.jpg";
import wellnessImg from "@/assets/feature-wellness.jpg";
import culinaryImg from "@/assets/feature-culinary.jpg";
import yachtImg from "@/assets/feature-yacht.jpg";

const ITEMS = [
  {
    img: weddingsImg,
    eyebrow: "Signature",
    title: "Timeless Weddings",
    desc: "A bespoke atelier of weddings, set within palaces, beachfronts and private estates.",
  },
  {
    img: holidaysImg,
    eyebrow: "Curated",
    title: "Regalia Holidays",
    desc: "Editorial itineraries through India's most storied destinations and beyond.",
  },
  {
    img: wellnessImg,
    eyebrow: "Sanctuary",
    title: "Wellness & Spa",
    desc: "Ancient rituals, modern science — restoration shaped to your essence.",
  },
  {
    img: culinaryImg,
    eyebrow: "Maison",
    title: "Culinary Journeys",
    desc: "Tables set by master chefs, vintages drawn from a vault of three centuries.",
  },
  {
    img: yachtImg,
    eyebrow: "Voyage",
    title: "Private Yachts",
    desc: "Discreet seafaring along the Konkan, the Aegean, and the French Riviera.",
  },
];

export const FeaturedCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <GoldDivider width="32px" />
                <span className="eyebrow">Signature Experiences</span>
              </div>
              <h2 className="font-serif-display text-soft text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] max-w-2xl">
                A collection composed
                <span className="block italic text-gold/95">with quiet intention.</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                aria-label="Previous"
                onClick={() => scrollBy(-1)}
                className="w-12 h-12 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-all duration-500"
              >
                <ChevronLeft size={18} strokeWidth={1.2} />
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollBy(1)}
                className="w-12 h-12 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-all duration-500"
              >
                <ChevronRight size={18} strokeWidth={1.2} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-6 lg:px-10"
          style={{ scrollPaddingLeft: "2.5rem" }}
        >
          {ITEMS.map((item, i) => (
            <article
              key={item.title}
              className="group snap-start shrink-0 relative w-[80vw] sm:w-[60vw] md:w-[480px] lg:w-[520px] aspect-[4/5] overflow-hidden bg-panel cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                style={{ transitionTimingFunction: "var(--ease-luxe)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

              {/* Number */}
              <div className="absolute top-6 left-6 small-caps text-gold/80">
                0{i + 1} / 0{ITEMS.length}
              </div>

              {/* Title overlay (visible by default) */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <span className="eyebrow block mb-3">{item.eyebrow}</span>
                <h3 className="font-serif-display text-soft text-3xl md:text-4xl font-light leading-tight tracking-wide">
                  {item.title}
                </h3>

                {/* Slide-up content panel */}
                <div className="mt-5 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700"
                     style={{ transitionTimingFunction: "var(--ease-luxe)" }}>
                  <p className="text-soft-dim/80 text-sm leading-relaxed font-light mb-4 max-w-md">
                    {item.desc}
                  </p>
                  <button className="link-underline small-caps text-gold inline-flex items-center gap-2">
                    Discover <ArrowRight size={14} strokeWidth={1.2} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
