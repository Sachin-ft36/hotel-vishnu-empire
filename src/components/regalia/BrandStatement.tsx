import { Reveal } from "./Reveal";
import statementImg from "@/assets/statement-bg.jpg";

export const BrandStatement = () => {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={statementImg}
          alt="Grand palatial hall with chandeliers"
          loading="lazy"
          className="slow-zoom h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <Reveal>
          <span className="eyebrow mb-7 block">Our Heritage</span>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex items-center gap-5 md:gap-8 mb-7">
            <span className="gold-line-solid w-16 md:w-28 h-px" />
            <span className="small-caps text-gold">— II —</span>
            <span className="gold-line-solid w-16 md:w-28 h-px" />
          </div>
        </Reveal>

        <Reveal delay={220}>
          <h2 className="font-serif-display text-soft font-light leading-[1.05] tracking-wide text-[clamp(2.25rem,6vw,5rem)] max-w-5xl">
            India's Pride.
            <span className="block italic text-gold/95">The World's Welcome.</span>
          </h2>
        </Reveal>

        <Reveal delay={360}>
          <p className="mt-8 max-w-2xl text-soft-dim/85 text-base md:text-lg font-light leading-relaxed">
            For more than a century, REGALIA has been the keeper of stories — of
            kings and travelers, of artisans and dreamers. Each property, a chapter.
            Each stay, a quiet inheritance.
          </p>
        </Reveal>

        <Reveal delay={500}>
          <button className="btn-ghost-gold mt-10">
            <span>Discover Our Story</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
};
