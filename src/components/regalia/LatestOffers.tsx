import { ArrowRight } from "lucide-react";
import { GoldDivider } from "./GoldDivider";
import { Link } from "react-router-dom";

const OFFERS = [
  {
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    eyebrow: "Stay Longer",
    title: "Three Nights in Residence",
    dates: "Through 31 March",
    desc: "Complimentary breakfast, evening cocktails, and a private heritage tour.",
  },
  {
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    eyebrow: "Wellness",
    title: "The Sanctuary Sojourn",
    dates: "Year-round",
    desc: "A four-day rejuvenation set against the Aravallis with ayurvedic rituals.",
  },
  {
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    eyebrow: "Maison",
    title: "Chef's Table Privé",
    dates: "Select weekends",
    desc: "Eight courses, paired with wines from our cellar of three centuries.",
  },
];

export const LatestOffers = () => {
  return (
    <section className="relative bg-ink pb-24 md:pb-40 pt-0">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-28 reveal is-visible">
          <span className="eyebrow mb-6 block">Privileges</span>
          <div className="flex items-center gap-8 md:gap-12 mb-8">
            <GoldDivider width="80px" />
            <h2 className="font-serif-display text-soft text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
              Latest <span className="italic text-gold/95">Offers</span>
            </h2>
            <GoldDivider width="80px" />
          </div>
          <p className="text-warm/90 max-w-2xl text-lg font-light leading-relaxed">
            Composed for those who travel slowly — a season of considered
            indulgences across the collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {OFFERS.map((offer, i) => (
            <Link to="/offers" key={offer.title}>
              <article
                className="group relative bg-panel overflow-hidden reveal is-visible"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                </div>

                <div className="absolute inset-x-6 bottom-6 bg-soft p-8 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                  <span className="block text-[0.65rem] uppercase tracking-[0.32em] text-gold-deep font-medium mb-3">
                    {offer.eyebrow} · {offer.dates}
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-normal leading-tight mb-4 text-ink">
                    {offer.title}
                  </h3>
                  <p className="text-ink/70 text-sm leading-relaxed font-light mb-6">
                    {offer.desc}
                  </p>
                  <button className="flex items-center gap-2 text-gold-deep font-medium tracking-widest uppercase text-[10px] group/btn">
                    View Offer 
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
