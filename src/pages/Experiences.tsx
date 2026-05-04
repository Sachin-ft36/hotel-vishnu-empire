import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import expSpa from "@/assets/exp_spa.png";
import expSafari from "@/assets/exp_safari.png";
import expCellar from "@/assets/exp_cellar.png";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Ancient Spa Rituals",
    subtitle: "Healing with Intention",
    description: "Venture into a sanctuary of stillness where centuries-old Indian traditions meet modern wellness. Our signature rituals use hand-picked botanicals and sacred oils to restore balance to the spirit.",
    image: expSpa,
    tag: "Wellness"
  },
  {
    id: 2,
    title: "Royal Desert Safari",
    subtitle: "The Whispers of the Sands",
    description: "An intimate journey into the golden heart of Rajasthan. Spend your evening under a canopy of stars with a private bonfire, traditional folk music, and a feast fit for royalty.",
    image: expSafari,
    tag: "Adventure"
  },
  {
    id: 3,
    title: "Private Cellar Evenings",
    subtitle: "A Celebration of the Vine",
    description: "Descend into our historic cellars for an evening of rare vintages and bespoke culinary pairings. A discreet, candle-lit setting designed for those who appreciate the finer notes of life.",
    image: expCellar,
    tag: "Culinary"
  }
];

const Experiences = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={expSpa} 
            alt="Curated Experiences" 
            className="w-full h-full object-cover scale-105 slow-zoom opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow mb-6 block text-gold">Bespoke</span>
            <h1 className="font-serif-display text-[clamp(2.8rem,7vw,5rem)] leading-none uppercase tracking-wider mb-6">
              Curated <br />
              <span className="text-gold italic normal-case tracking-normal">Experiences</span>
            </h1>
            <p className="text-soft-dim max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Private journeys, cellar evenings, and ancient rituals — 
              composed with quiet intention for the discerning few.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences List */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 lg:mb-48 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-3/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-700" />
                  
                  {/* Subtle tag */}
                  <div className="absolute bottom-8 right-8">
                    <span className="text-[0.6rem] eyebrow text-soft/40 tracking-[0.4em]">
                      {exp.tag}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-2/5 text-left"
              >
                <div className="mb-6 flex items-center gap-4">
                  <GoldDivider width="40px" />
                  <span className="small-caps text-gold text-[0.7rem]">{exp.subtitle}</span>
                </div>
                
                <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-soft mb-8 leading-[1.1]">
                  {exp.title}
                </h2>
                
                <p className="text-soft-dim/80 text-lg leading-relaxed font-light mb-10">
                  {exp.description}
                </p>
                
                <button className="btn-ghost-gold">
                  <span>Inquire Details</span>
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Teaser */}
      <section className="py-32 bg-panel/30 border-y border-gold/10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="eyebrow text-gold mb-8 block">Plan Your Journey</span>
          <h2 className="font-serif-display text-4xl md:text-6xl text-soft mb-12">
            A life composed of <br />
            <span className="text-gold italic normal-case">extraordinary</span> moments.
          </h2>
          <button className="btn-gold px-12">
            <span>Contact Concierge</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;
