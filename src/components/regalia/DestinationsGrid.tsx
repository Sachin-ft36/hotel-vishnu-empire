import { Reveal } from "./Reveal";
import { GoldDivider } from "./GoldDivider";
import udaipur from "@/assets/dest-udaipur.jpg";
import jaipur from "@/assets/dest-jaipur.jpg";
import mumbai from "@/assets/dest-mumbai.jpg";
import goa from "@/assets/dest-goa.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import london from "@/assets/dest-london.jpg";

const DESTS = [
  { img: "/vijayvillas.png", name: "The Vijay Villas", region: "The Estate", span: "tall" },
  { img: "/tiger.png", name: "White Tiger Sanctuary", region: "Rewa Wilds", span: "short" },
  { img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800", name: "Govindgarh Palace", region: "Lake Heritage", span: "short" },
  { img: "/rewafort.jpg", name: "Rewa Fort", region: "The Museum", span: "tall" },
  { img: "https://images.unsplash.com/photo-1621262102003-87625170d30f?auto=format&fit=crop&q=80&w=800", name: "Royal Heritage Wing", region: "The Estate", span: "short" },
  { img: "/chaco-fall.jpg", name: "Chachai Falls", region: "Natural Wonder", span: "short" },
];

export const DestinationsGrid = () => {
  return (
    <section className="relative bg-ink-deep pb-24 md:pb-32 pt-0">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="eyebrow mb-4">Discover Rewa</span>
            <div className="flex items-center gap-5">
              <GoldDivider width="40px" />
              <h2 className="font-serif-display text-soft text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                Royal <span className="italic text-gold/95">Landmarks</span>
              </h2>
              <GoldDivider width="40px" />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-[220px] md:auto-rows-[280px]">
          {DESTS.map((d, i) => (
            <Reveal
              key={d.name}
              delay={i * 90}
              className={`${d.span === "tall" ? "row-span-2" : "row-span-1"} ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <article className="group relative h-full w-full overflow-hidden cursor-pointer">
                <img
                  src={d.img}
                  alt={`${d.name}, ${d.region}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-[1400ms] group-hover:scale-105"
                  style={{ transitionTimingFunction: "var(--ease-luxe)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-700" />

                <div className="absolute bottom-0 left-0 p-5 md:p-7">
                  <span className="small-caps text-gold/90 text-[0.65rem] block mb-2">
                    {d.region}
                  </span>
                  <h3 className="font-serif-display text-soft text-2xl md:text-3xl font-light tracking-wider link-underline">
                    {d.name}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
