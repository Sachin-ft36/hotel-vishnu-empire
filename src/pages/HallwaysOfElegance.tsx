import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { ArrowRight, History, Image, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HallwaysOfElegance = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Signature Experiences/corridor.jpg"
            alt="Hallways of Elegance"
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
              <span className="eyebrow text-gold">Sanctuary of Stories</span>
              <GoldDivider width="40px" />
            </div>
            <h1 className="font-serif-display text-[clamp(2.5rem,8vw,5rem)] leading-none uppercase tracking-widest mb-8">
              Hallways <br />
              <span className="text-gold italic normal-case tracking-normal">of Elegance</span>
            </h1>
            <p className="text-soft-dim max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed italic">
              "A journey through time, where every corridor whispers stories of a storied past."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-32 px-6 lg:px-12 bg-ink-deep">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
             >
                <h2 className="font-serif-display text-4xl md:text-6xl text-soft mb-10 leading-tight">
                  The Art of <br />
                  <span className="text-gold italic normal-case">Transition</span>
                </h2>
                <p className="text-soft-dim/80 text-xl leading-relaxed font-light mb-10">
                  Our hallways are not mere passages; they are curated galleries of 
                  Baghelkhandi heritage. From hand-painted frescoes to original 
                  lithographs, every step is an encounter with the extraordinary.
                </p>
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <History size={20} className="text-gold" />
                      <span className="small-caps text-[0.75rem] tracking-widest text-soft/70">Archival Collections</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <Image size={20} className="text-gold" />
                      <span className="small-caps text-[0.75rem] tracking-widest text-soft/70">Hand-painted Murals</span>
                   </div>
                </div>
             </motion.div>
             
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative"
             >
                <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                   <img src="/Signature Experiences/corridor.jpg" className="w-full h-full object-cover" alt="Corridor Detail" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-ink border border-gold/10 p-8 hidden md:block">
                   <Sparkles size={32} className="text-gold mb-6" />
                   <p className="text-sm font-light italic text-soft-dim">"Atmospheric lighting designed to evoke a sense of timelessness."</p>
                </div>
             </motion.div>
          </div>

          {/* Vision Section */}
          <div className="text-center max-w-3xl mx-auto py-20 border-t border-gold/10">
             <Eye size={40} className="text-gold/40 mx-auto mb-10" />
             <h3 className="font-serif-display text-3xl md:text-5xl text-soft mb-8">A Symphony of Perspective</h3>
             <p className="text-soft-dim/70 text-lg leading-relaxed font-light">
               Experience the play of light and shadow across our vaulted ceilings and 
               Italian marble floors. These hallways are designed for slow movement, 
               allowing guests to absorb the quiet majesty of the estate.
             </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-ink text-center px-6 border-t border-gold/5">
          <Link to="/request-invitation">
            <button className="btn-gold px-12 py-5 h-auto group">
              <span className="tracking-[0.2em] text-sm">Explore More Legends</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </Link>
      </section>

      <Footer />
    </div>
  );
};

export default HallwaysOfElegance;
