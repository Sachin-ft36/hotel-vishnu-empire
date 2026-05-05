import { GoldDivider } from "./GoldDivider";
const palaceBg = "/vijayvillas.png";

export const BrandStatement = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-12 lg:pt-20 pb-12 lg:pb-20">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0">
        <img
          src={palaceBg}
          alt="Grand Indian Palace Architecture"
          className="h-full w-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <div className="reveal is-visible">
          <span className="eyebrow mb-10 block text-gold tracking-[0.4em]">Our Legacy</span>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-10 mb-10 w-full max-w-4xl reveal is-visible" style={{ transitionDelay: '200ms' }}>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold" />
          <span className="small-caps text-gold px-4">SINCE 2024</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <div className="reveal is-visible" style={{ transitionDelay: '400ms' }}>
          <div className="flex items-center justify-center gap-6 md:gap-16">
            <div className="hidden lg:block h-[1px] w-32 bg-gradient-to-r from-transparent to-gold" />
            <h2 className="font-serif-display text-soft font-light leading-[1.05] tracking-[0.05em] text-[clamp(2.5rem,7vw,6.5rem)] uppercase">
              India's Pride <br />
              <span className="text-gold italic normal-case tracking-normal">World's Strongest</span>
            </h2>
            <div className="hidden lg:block h-[1px] w-32 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto reveal is-visible" style={{ transitionDelay: '600ms' }}>
          <p className="text-soft-dim/90 text-lg md:text-xl font-light leading-relaxed tracking-wide italic">
            "To the guests, we offer the world. To the world, we offer India."
          </p>
          <p className="mt-6 text-soft-dim/70 text-base font-light leading-relaxed max-w-lg mx-auto">
            A century of stories, a thousand years of culture, and a future
            defined by the timeless grace of Indian hospitality.
          </p>
        </div>

        <div className="reveal is-visible" style={{ transitionDelay: '800ms' }}>
          <button className="btn-gold mt-14">
            <span>Our Heritage</span>
          </button>
        </div>
      </div>
    </section>
  );
};
