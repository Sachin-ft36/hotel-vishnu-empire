import { GoldDivider } from "./GoldDivider";
import phoneVideo from "@/assets/phonehome.mp4";
import hotelVideo from "@/assets/hotel.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-[110vh] w-full overflow-hidden bg-ink">
      {/* Background Video */}
      <div className="absolute inset-0">
        {/* Desktop Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block h-full w-full object-cover scale-105 slow-zoom"
        >
          <source
            src={hotelVideo}
            type="video/mp4"
          />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="md:hidden h-full w-full object-cover scale-105 slow-zoom"
        >
          <source
            src={phoneVideo}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/90" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
      </div>

      {/* Hero Content - Responsive Layout with Precise Alignment */}
      <div className="relative z-10 h-full container mx-auto px-6 lg:px-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* HEADING & EYEBROW - Left on Desktop, Shifted Up */}
          <div className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:translate-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="flex items-center gap-4 mb-6">
                <GoldDivider width="40px" />
                <span className="eyebrow">A New Standard of Royalty</span>
              </div>

              <h1 className="font-serif-display text-soft font-light leading-[1.1] tracking-[0.05em] text-[clamp(2.75rem,6.40vw,5.5rem)] uppercase">
                Exclusively <br />
                <span className="text-gold italic normal-case tracking-normal">for You</span>
              </h1>
            </motion.div>
          </div>

          {/* DESCRIPTION & BUTTONS - Right on Desktop, Aligned with Heading */}
          <div className="order-2 flex flex-col items-center text-center lg:pt-16">
            <p className="text-soft-dim/80 text-sm md:text-base leading-relaxed font-light tracking-wide max-w-md mb-12">
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
              <Link to="/gallery">
                <button className="btn-ghost-gold">
                  <span>Explore More</span>
                </button>
              </Link>
            </div>
          </div>

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
