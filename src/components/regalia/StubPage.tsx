import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { Reveal } from "@/components/regalia/Reveal";
import { Link } from "react-router-dom";

interface StubProps {
  eyebrow: string;
  title: string;
  italic: string;
  description: string;
  bgImage: string;
}

export const StubPage = ({ eyebrow, title, italic, description, bgImage }: StubProps) => {
  return (
    <div className="min-h-screen bg-ink text-soft">
      <Navbar />
      <main>
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover ken-burns"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />

          <div className="relative z-10 h-full container mx-auto px-6 flex flex-col items-center justify-center text-center">
            <Reveal>
              <span className="eyebrow mb-6 block">{eyebrow}</span>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex items-center gap-5 mb-7">
                <GoldDivider width="56px" />
                <span className="small-caps text-gold">— Coming Soon —</span>
                <GoldDivider width="56px" />
              </div>
            </Reveal>
            <Reveal delay={220}>
              <h1 className="font-serif-display text-soft font-light leading-[1.05] text-[clamp(2.5rem,7vw,5.5rem)] max-w-4xl tracking-wide">
                {title}
                <span className="block italic text-gold/95">{italic}</span>
              </h1>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-8 max-w-xl text-soft-dim/85 text-base md:text-lg font-light leading-relaxed">
                {description}
              </p>
            </Reveal>
            <Reveal delay={500}>
              <Link to="/" className="btn-ghost-gold mt-10 inline-flex">
                <span>Return to Homepage</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
