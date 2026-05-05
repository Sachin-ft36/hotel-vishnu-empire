import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { ArrowRight, Landmark, Shield, History, Map } from "lucide-react";
import { Link } from "react-router-dom";

const HERITAGE_CHAPTERS = [
  {
    id: "architecture",
    title: "Architectural Grandeur",
    eyebrow: "The Living Stone",
    description: "Every arch, pillar, and facade at The Vijay Villas is a custodian of history. Our restoration process meticulously preserves the original craftsmanship while ensuring the highest standards of luxury.",
    image: "/oldphoto.jpg",
    highlights: ["Hand-carved marble details", "Period-accurate restorations", "Heritage lighting design"]
  },
  {
    id: "royal-legacy",
    title: "Royal Patronage",
    eyebrow: "Centuries of Grace",
    description: "Built under the vision of the royal family, our palaces reflect the elegance and strength of the Rewa dynasty. We continue to uphold these traditions through curated rituals and unparalleled hospitality.",
    image: "/vijayvillas.png",
    highlights: ["Royal family involvement", "Traditional welcome rituals", "Archival library access"]
  }
];

const Heritage = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/oldphoto.jpg"
            alt="Heritage & Legacy"
            className="w-full h-full object-cover scale-105 slow-zoom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/20 to-ink" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <GoldDivider width="40px" />
              <span className="eyebrow text-gold">The Soul of the Estate</span>
              <GoldDivider width="40px" />
            </div>
            <h1 className="font-serif-display text-[clamp(2.5rem,8vw,6rem)] leading-none uppercase tracking-widest mb-8">
              Heritage <br />
              <span className="text-gold italic normal-case tracking-normal">& Legends</span>
            </h1>
            <p className="text-soft-dim max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed italic">
              "Custodians of time, where history breathes through every corridor."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-32 bg-ink-deep border-b border-gold/10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col items-center">
            <History size={24} className="text-gold mb-6" />
            <span className="text-3xl font-serif-display text-soft mb-2">19th Cent.</span>
            <span className="small-caps text-[0.6rem] text-soft/40 tracking-[0.2em]">Foundation</span>
          </div>
          <div className="flex flex-col items-center">
            <Landmark size={24} className="text-gold mb-6" />
            <span className="text-3xl font-serif-display text-soft mb-2">Restored</span>
            <span className="small-caps text-[0.6rem] text-soft/40 tracking-[0.2em]">Architecture</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield size={24} className="text-gold mb-6" />
            <span className="text-3xl font-serif-display text-soft mb-2">Royal</span>
            <span className="small-caps text-[0.6rem] text-soft/40 tracking-[0.2em]">Patronage</span>
          </div>
          <div className="flex flex-col items-center">
            <Map size={24} className="text-gold mb-6" />
            <span className="text-3xl font-serif-display text-soft mb-2">Madhya P.</span>
            <span className="small-caps text-[0.6rem] text-soft/40 tracking-[0.2em]">Location</span>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-32 px-6 lg:px-12 bg-ink">
        <div className="max-w-[1400px] mx-auto">
          {HERITAGE_CHAPTERS.map((chapter, index) => (
            <div 
              key={chapter.id}
              className={`flex flex-col lg:flex-row gap-20 lg:gap-32 mb-48 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="w-full lg:w-3/5 relative group overflow-hidden shadow-2xl"
              >
                <img 
                  src={chapter.image}
                  alt={chapter.title}
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-700" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full lg:w-2/5 flex flex-col justify-center"
              >
                <span className="eyebrow text-gold mb-6 block tracking-[0.3em]">{chapter.eyebrow}</span>
                <h2 className="font-serif-display text-4xl md:text-6xl text-soft mb-8 leading-tight">
                  {chapter.title}
                </h2>
                <p className="text-soft-dim/80 text-xl leading-relaxed font-light mb-10">
                  {chapter.description}
                </p>

                <div className="space-y-4 mb-12">
                  {chapter.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-4 text-soft/70 text-sm font-light italic">
                      <div className="w-1.5 h-[1px] bg-gold" />
                      {h}
                    </div>
                  ))}
                </div>

                <Link to="/request-invitation">
                  <button className="btn-gold group px-10">
                    <span>Contact Concierge</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-40 bg-ink-deep text-center px-6 border-t border-gold/10">
        <div className="max-w-4xl mx-auto">
          <blockquote className="font-serif-display text-4xl md:text-7xl text-soft leading-tight italic font-light tracking-wide">
            "To understand our future, we must first honor the walls that witnessed our past."
          </blockquote>
          <div className="mt-12 flex flex-col items-center gap-4">
             <GoldDivider width="60px" />
             <span className="small-caps text-gold tracking-widest text-xs font-medium">The Royal Decree</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Heritage;
