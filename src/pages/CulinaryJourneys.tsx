import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { ArrowRight, Utensils, GlassWater, Clock, Users, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const CulinaryJourneys = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/video/food.mp4"
            autoPlay
            loop
            muted
            playsInline
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
              <span className="eyebrow text-gold">Maison of Flavors</span>
              <GoldDivider width="40px" />
            </div>
            <h1 className="font-serif-display text-[clamp(2.5rem,8vw,5rem)] leading-none uppercase tracking-widest mb-8">
              Culinary <br />
              <span className="text-gold italic normal-case tracking-normal">Journeys</span>
            </h1>
            <p className="text-soft-dim max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed italic">
              "Tables set by master chefs, vintages drawn from a vault of three centuries."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-32 px-6 lg:px-12 bg-ink-deep">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
           >
              <ChefHat size={40} className="text-gold mb-8" />
              <h2 className="font-serif-display text-4xl md:text-6xl text-soft mb-10 leading-tight">
                The Royal <br />
                <span className="text-gold italic normal-case">Kitchens</span>
              </h2>
              <p className="text-soft-dim/80 text-xl leading-relaxed font-light mb-10">
                Experience the soulful interpretation of Baghelkhandi cuisine. 
                Our master chefs blend ancestral techniques with modern precision 
                to create a dining experience that is both historic and contemporary.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-10 border-y border-gold/10">
                 <div className="flex flex-col gap-2">
                    <Utensils size={18} className="text-gold" />
                    <span className="small-caps text-[0.7rem] text-soft/70">Master Chef's Table</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <GlassWater size={18} className="text-gold" />
                    <span className="small-caps text-[0.7rem] text-soft/70">Heritage Wine Vault</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <Clock size={18} className="text-gold" />
                    <span className="small-caps text-[0.7rem] text-soft/70">Private Dining</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <Users size={18} className="text-gold" />
                    <span className="small-caps text-[0.7rem] text-soft/70">Bespoke Catering</span>
                 </div>
              </div>
           </motion.div>
           
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="aspect-square overflow-hidden shadow-2xl border border-gold/10 relative"
           >
              <img src="/Signature Experiences/food.jpg" className="w-full h-full object-cover slow-zoom" alt="Gourmet Dish" />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors duration-500" />
           </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-40 bg-ink text-center px-6 relative">
         <div className="max-w-4xl mx-auto">
            <span className="eyebrow text-gold mb-8 block">Our Philosophy</span>
            <h2 className="font-serif-display text-4xl md:text-7xl text-soft mb-12">Taste is a <span className="text-gold italic">Legacy</span></h2>
            <p className="text-soft-dim/70 text-lg leading-relaxed font-light mb-16 max-w-2xl mx-auto">
              From organic estate-to-table ingredients to forgotten royal recipes, 
              every dish is a curated chapter in our storied culinary history.
            </p>
            <Link to="/request-invitation">
              <button className="btn-gold px-12 py-5 h-auto group">
                <span className="tracking-[0.2em] text-sm text-ink">Inquire Details</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </Link>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default CulinaryJourneys;
