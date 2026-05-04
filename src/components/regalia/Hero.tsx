import heroImg from "@/assets/hero-palace.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Grand candle-lit palace courtyard at dusk"
          className="ken-burns h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />

      {/* Side rule */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4">
        <span className="gold-line-solid w-px h-24" />
        <span
          className="small-caps text-gold rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          Est · MCMXCIX
        </span>
        <span className="gold-line-solid w-px h-24" />
      </div>

      {/* Right rotating place label */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4">
        <span className="gold-line-solid w-px h-16" />
        <span
          className="small-caps text-soft/70"
          style={{ writingMode: "vertical-rl" }}
        >
          Udaipur · Rajasthan
        </span>
        <span className="gold-line-solid w-px h-16" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 lg:px-16 flex items-center">
        <div className="max-w-3xl">
          <div className="enter-up delay-1 flex items-center gap-4 mb-7">
            <span className="gold-line-solid w-12 h-px" />
            <span className="eyebrow">An Invitation</span>
          </div>

          <h1 className="enter-up delay-2 font-serif-display text-soft font-light leading-[1.05] tracking-[0.02em] text-[clamp(2.75rem,7vw,6rem)]">
            Exclusively
            <span className="block italic text-gold/95 font-light">for You</span>
          </h1>

          <div className="enter-up delay-3 mt-8 max-w-md">
            <p className="text-soft-dim/85 text-base md:text-[1.05rem] leading-[1.85] font-light tracking-wide">
              A collection of palaces, sanctuaries and journeys — composed in the
              quiet language of true luxury. Crafted by hand, refined by time,
              offered to a discerning few.
            </p>
          </div>

          <div className="enter-up delay-4 mt-10 flex flex-col sm:flex-row gap-4">
            <button className="btn-gold">
              <span>Reserve a Suite</span>
            </button>
            <button className="btn-ghost-gold">
              <span>Explore the Collection</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 enter-up delay-5">
        <span className="small-caps text-soft/60 text-[0.65rem]">Scroll</span>
        <span className="relative block w-px h-14 bg-soft/15 scroll-cue" />
      </div>
    </section>
  );
};
