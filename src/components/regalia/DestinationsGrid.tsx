import { Reveal } from "./Reveal";
import { GoldDivider } from "./GoldDivider";
import udaipur from "@/assets/dest-udaipur.jpg";
import jaipur from "@/assets/dest-jaipur.jpg";
import mumbai from "@/assets/dest-mumbai.jpg";
import goa from "@/assets/dest-goa.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import london from "@/assets/dest-london.jpg";

const DESTS = [
  { img: udaipur, name: "Udaipur", region: "Rajasthan", span: "tall" },
  { img: jaipur, name: "Jaipur", region: "Rajasthan", span: "short" },
  { img: mumbai, name: "Mumbai", region: "Maharashtra", span: "short" },
  { img: goa, name: "Goa", region: "South India", span: "tall" },
  { img: kerala, name: "Kerala", region: "Backwaters", span: "short" },
  { img: london, name: "London", region: "United Kingdom", span: "short" },
];

export const DestinationsGrid = () => {
  return (
    <section className="relative bg-ink-deep pb-24 md:pb-32 pt-0">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="eyebrow mb-4">Around the World</span>
            <div className="flex items-center gap-5">
              <GoldDivider width="40px" />
              <h2 className="font-serif-display text-soft text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                Storied <span className="italic text-gold/95">Destinations</span>
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
                  className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1400ms] group-hover:scale-105"
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
