import { GoldDivider } from "./GoldDivider";
import hotelVideo from "@/assets/hotel.mp4";
import { Link } from "./LinkStub";

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

      {/* Hero Content - Split Layout */}
      <div className="relative z-10 h-full container mx-auto px-6 lg:px-16 flex flex-col justify-center translate-y-6 lg:translate-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* LEFT SIDE */}
          <div className="-translate-y-3 lg:-translate-y-6">
            <div className="flex flex-col items-start enter-up delay-1">
              <div className="flex items-center gap-4 mb-6">
                <GoldDivider width="40px" />
                <span className="eyebrow">A New Standard of Royalty</span>
              </div>

              <h1 className="font-serif-display text-soft font-light leading-[1.1] tracking-[0.05em] text-[clamp(2.75rem,6.40vw,5rem)] uppercase">
                Exclusively <br />
                <span className="text-gold italic normal-case tracking-normal">for You</span>
              </h1>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="-translate-y-6 lg:-translate-y-12">
            <div className="flex flex-col items-start lg:items-end lg:text-right enter-up delay-2 lg:pt-[4.5rem]">
              <p className="text-soft-dim/90 text-lg md:text-xl leading-relaxed font-light tracking-wide max-w-md">
                A collection of palaces, sanctuaries and journeys — composed in the
                quiet language of true luxury. Crafted by hand, refined by time,
                offered to a discerning few.
              </p>

              <div className="mt-10 flex gap-3 md:gap-5 justify-start lg:justify-end">
                <Link to="/book">
                  <button className="btn-gold group">
                    <span>Book a Stay</span>
                  </button>
                </Link>
                <button className="btn-ghost-gold">
                  <span>Explore More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 enter-up delay-3">
        <span className="small-caps text-soft/60 text-[0.65rem]">Scroll</span>
        <span className="relative block w-px h-14 bg-soft/15 scroll-cue" />
      </div>
    </section>
  );
};
