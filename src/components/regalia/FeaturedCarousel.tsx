import { useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GoldDivider } from "./GoldDivider";

const ITEMS = [
  {
    img: "/Signature Experiences/wedding.jpg",
    video: "/weeding.mp4",
    eyebrow: "Signature",
    title: "Timeless Celebrations",
    desc: "A bespoke destination for weddings, celebrations, dining, and unforgettable experiences.",
    id: "weddings"
  },
  {
    img: "/Signature Experiences/room.jpg",
    video: "/bedroom.mp4",
    eyebrow: "Heritage",
    title: "Luxury Suites",
    desc: "Sanctuaries of refined comfort, where historical grandeur meets modern luxury.",
    id: "suites"
  },
  {
    img: "/vishnu_vilas/hall.webp",
    eyebrow: "Sanctuary",
    title: "Hallways of Elegance",
    desc: "A journey through time, where every corridor whispers stories of a storied past.",
    id: "hallways"
  },
  {
    img: "/Signature Experiences/food.jpg",
    video: "/food.mp4",
    eyebrow: "Maison",
    title: "Culinary Journeys",
    desc: "Tables set by master chefs, vintages drawn from a vault of three centuries.",
    id: "culinary"
  },
];

export const FeaturedCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const isPaused = useRef(false);

  const DOUBLED_ITEMS = [...ITEMS, ...ITEMS];

  const animate = () => {
    if (!isPaused.current && scrollRef.current) {
      const el = scrollRef.current;
      el.scrollLeft += 0.5; // Slow, continuous speed

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const itemWidth = el.querySelector('article')?.clientWidth || 500;
    el.scrollBy({ left: (itemWidth + 32) * dir, behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-ink pb-24 md:pb-32 pt-0 overflow-hidden"
      onMouseEnter={() => isPaused.current = true}
      onMouseLeave={() => isPaused.current = false}
      onTouchStart={() => isPaused.current = true}
      onTouchEnd={() => isPaused.current = false}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal is-visible">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <GoldDivider width="32px" />
              <span className="eyebrow">Signature Experiences</span>
            </div>
            <h2 className="font-serif-display text-soft text-4xl md:text-5xl lg:text-7xl font-light leading-[1.1] max-w-3xl">
              A collection composed <br />
              <span className="italic text-gold/95">with quiet intention.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="w-14 h-14 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-all duration-500 rounded-full"
            >
              <ChevronLeft size={20} strokeWidth={1.2} />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="w-14 h-14 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-all duration-500 rounded-full"
            >
              <ChevronRight size={20} strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar pb-12 px-6 lg:px-10"
        style={{ scrollPaddingLeft: "2.5rem" }}
      >
        {DOUBLED_ITEMS.map((item, i) => (
          <article
            key={`${item.title}-${i}`}
            className="group shrink-0 relative w-[85vw] sm:w-[60vw] md:w-[500px] lg:w-[600px] aspect-[4/5] overflow-hidden bg-panel cursor-pointer shadow-2xl reveal is-visible"
            style={{ transitionDelay: `${(i % ITEMS.length) * 100}ms` }}
          >
            <div className="absolute inset-0 overflow-hidden">
              {(item as any).video ? (
                <video
                  src={(item as any).video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
              ) : (
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
            </div>

            <div className="absolute top-8 left-8">
              <span className="eyebrow text-soft bg-black/40 backdrop-blur-md px-4 py-2 rounded-sm border border-soft/10">
                {item.eyebrow}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <div className="bg-soft p-5 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />

                <h3 className="font-serif-display text-ink text-xl md:text-4xl font-normal leading-tight mb-2 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-ink/70 text-xs md:text-base leading-relaxed font-light mb-4 md:mb-8 max-w-md">
                  {item.desc}
                </p>

                <Link to={
                  item.id === "weddings" ? "/celebrations" :
                    item.id === "suites" ? "/luxury-suites" :
                      item.id === "hallways" ? "/hallways-of-elegance" :
                        item.id === "culinary" ? "/culinary-journeys" :
                          `/signature-experiences#${item.id}`
                }>
                  <button className="flex items-center gap-3 text-gold-deep font-medium tracking-widest uppercase text-xs group/btn">
                    Explore More
                    <span className="w-10 h-[1px] bg-gold-deep group-hover/btn:w-16 transition-all duration-500" />
                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
