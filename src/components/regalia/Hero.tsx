import { GoldDivider } from "./GoldDivider";
import hotelVideo from "@/assets/hotel.mp4";
import { Link } from "./LinkStub";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover scale-105 slow-zoom"
        >
          <source
            src={hotelVideo}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/90" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
      </div>

      {/* Hero Content - Centered Layout */}
      <div className="relative z-10 h-full container mx-auto px-6 lg:px-16 flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <GoldDivider width="40px" />
              <span className="eyebrow">A New Standard of Royalty</span>
              <GoldDivider width="40px" />
            </div>

            <h1 className="font-serif-display text-soft font-light leading-[1.1] tracking-[0.05em] text-[clamp(2.75rem,6.40vw,5rem)] uppercase mb-8">
              Exclusively <br />
              <span className="text-gold italic normal-case tracking-normal">for You</span>
            </h1>

            <p className="text-soft-dim/80 text-base md:text-lg leading-relaxed font-light tracking-wide max-w-2xl mb-12">
              Experience the storied legacy of Baghelkhand, where the majesty 
              of white tigers meets the pinnacle of royal hospitality. 
              A sanctuary crafted for the discerning few in Rewa, Madhya Pradesh.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <Link to="/book">
                <button className="btn-gold group">
                  <span>Book a Stay</span>
                </button>
              </Link>
              <button className="btn-ghost-gold">
                <span>Explore More</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="small-caps text-soft/60 text-[0.65rem]">Scroll</span>
        <span className="relative block w-px h-14 bg-soft/15 scroll-cue" />
      </div>
    </section>
  );
};
