import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import membershipImg from "@/assets/membership-key.jpg";

const BENEFITS = [
  "Suite upgrades, where availability allows",
  "Private check-in & a personal concierge",
  "Curated cellar evenings, by invitation",
  "Reciprocal privileges across the collection",
];

export const MembershipTeaser = () => {
  return (
    <section className="relative bg-panel py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal>
          <div>
            <span className="eyebrow mb-5 block">The Inner Circle</span>
            <h2 className="font-serif-display text-soft text-4xl md:text-5xl lg:text-[3.75rem] font-light leading-[1.05] tracking-wide mb-7">
              REGALIA <span className="italic text-gold/95">Privileges.</span>
              <span className="block text-3xl md:text-4xl lg:text-[2.5rem] mt-3 text-soft-dim font-light">
                A membership of restraint.
              </span>
            </h2>
            <p className="text-warm/90 leading-relaxed font-light max-w-lg mb-10">
              An invitation extended to the few. Recognition that travels with you,
              from the marble halls of Udaipur to the quiet shores of the Riviera.
            </p>

            <ul className="space-y-4 mb-10">
              {BENEFITS.map((b, i) => (
                <li key={i} className="flex items-start gap-4 text-soft-dim/90 font-light">
                  <span className="mt-[0.6rem] inline-block w-6 h-px bg-gold shrink-0" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <Link to="/join-the-circle">
              <button className="btn-gold">
                <span>Join the Circle</span>
                <ArrowRight size={14} strokeWidth={1.2} />
              </button>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              src={membershipImg}
              alt="Embossed gold membership key card"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover slow-zoom"
            />
            <div className="absolute inset-0 border border-gold/20" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-gold/60" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gold/60" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
