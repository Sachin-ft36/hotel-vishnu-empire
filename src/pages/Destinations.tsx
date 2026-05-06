import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { motion } from "framer-motion";

const Destinations = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft overflow-hidden">
      <Navbar />

      <main className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-40 pb-20">
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100vh] opacity-20 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_60%)] animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <GoldDivider width="60px" />
            <span className="eyebrow text-gold uppercase tracking-[0.4em] text-xs">Journeys</span>
            <GoldDivider width="60px" />
          </div>

          <h1 className="font-serif-display text-[clamp(2.5rem,8vw,6rem)] leading-none uppercase tracking-tighter mb-8">
            Coming <br />
            <span className="text-gold italic normal-case tracking-normal">Soon</span>
          </h1>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-soft-dim/80 text-lg md:text-xl font-light leading-relaxed italic">
              "We are mapping out extraordinary royal routes and legendary landmarks for your next escape."
            </p>
            
            <div className="pt-8">
              <p className="text-[0.65rem] small-caps text-gold/60 tracking-[0.3em] mb-4">The World of Vishnu Empire Awaits</p>
              <div className="flex justify-center">
                <motion.div 
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="h-px bg-gold/30"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;
