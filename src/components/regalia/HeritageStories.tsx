import { GoldDivider } from "./GoldDivider";
const heritageImg = "/oldphoto.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeritageStories = () => {
  return (
    <section className="pb-32 pt-0 px-6 bg-panel/10 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <div className="aspect-[16/10] overflow-hidden shadow-2xl">
            <img 
              src={heritageImg} 
              alt="Heritage Stories" 
              className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-ink p-8 border border-gold/20 hidden md:block">
            <span className="font-serif-display text-gold text-4xl italic leading-none">2024</span>
            <p className="small-caps text-[0.6rem] mt-2 text-soft-dim tracking-widest">A New Era of Royalty</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <GoldDivider width="40px" />
            <span className="eyebrow text-gold">The Soul of The Vijay Villas</span>
          </div>
          
          <h2 className="font-serif-display text-3xl lg:text-4xl text-soft mb-10 leading-tight">
            Storied <br />
            <span className="text-gold italic normal-case">Heritage</span> & Legends
          </h2>
          
          <p className="text-soft-dim/80 text-lg font-light leading-relaxed mb-10">
            More than just walls and windows, our palaces are custodians of 
            centuries-old stories. Experience the living history that breathes 
            through every corridor, courtyard, and curated ritual.
          </p>
          
          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3 text-soft-dim italic font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              Restored Architectural Marvels
            </li>
            <li className="flex items-center gap-3 text-soft-dim italic font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              Royal Patronage & Traditions
            </li>
            <li className="flex items-center gap-3 text-soft-dim italic font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              Curated Museum Walks
            </li>
          </ul>
          
          <Link to="/destinations">
            <button className="link-underline text-gold small-caps text-xs">
              Discover Our Story
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
