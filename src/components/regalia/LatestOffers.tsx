import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { GoldDivider } from "./GoldDivider";
import offer1 from "@/assets/offer-suite.jpg";
import offer2 from "@/assets/offer-spa.jpg";
import offer3 from "@/assets/offer-dining.jpg";

const OFFERS = [
  {
    img: offer1,
    eyebrow: "Stay Longer",
    title: "Three Nights in Residence",
    dates: "Through 31 March",
    desc: "Complimentary breakfast, evening cocktails, and a private heritage tour.",
  },
  {
    img: offer2,
    eyebrow: "Wellness",
    title: "The Sanctuary Sojourn",
    dates: "Year-round",
    desc: "A four-day rejuvenation set against the Aravallis with ayurvedic rituals.",
  },
  {
    img: offer3,
    eyebrow: "Maison",
    title: "Chef's Table Privé",
    dates: "Select weekends",
    desc: "Eight courses, paired with wines from our cellar of three centuries.",
  },
];

export const LatestOffers = () => {
  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="eyebrow mb-4">Privileges</span>
            <div className="flex items-center gap-5 mb-6">
              <GoldDivider width="56px" />
              <h2 className="font-serif-display text-soft text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                Latest <span className="italic text-gold/95">Offers</span>
              </h2>
              <GoldDivider width="56px" />
            </div>
            <p className="text-warm/90 max-w-xl font-light leading-relaxed">
              Composed for those who travel slowly — a season of considered
              indulgences across the collection.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-9">
          {OFFERS.map((o, i) => (
            <Reveal key={o.title} delay={i * 140}>
              <article className="group relative bg-panel lift-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={o.img}
                    alt={o.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.06]"
                    style={{ transitionTimingFunction: "var(--ease-luxe)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                </div>

                {/* Overlay content card sliding up */}
                <div className="relative -mt-20 mx-5 bg-soft text-ink p-7 md:p-8 transition-transform duration-700 group-hover:-translate-y-2"
                     style={{ transitionTimingFunction: "var(--ease-luxe)" }}>
                  <span className="block text-[0.65rem] uppercase tracking-[0.32em] text-gold-deep font-medium mb-3">
                    {o.eyebrow} · {o.dates}
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-[1.7rem] font-normal leading-tight mb-4 text-ink">
                    {o.title}
                  </h3>
                  <p className="text-ink/70 text-sm leading-relaxed font-light mb-6">
                    {o.desc}
                  </p>
                  <button className="link-underline small-caps text-gold-deep inline-flex items-center gap-2 hover:text-gold transition-colors">
                    View Offer <ArrowRight size={14} strokeWidth={1.2} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
