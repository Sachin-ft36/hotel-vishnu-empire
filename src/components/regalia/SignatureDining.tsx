import { GoldDivider } from "./GoldDivider";
import diningImg from "@/assets/home_dining.png";
import { motion } from "framer-motion";
import { Link } from "./LinkStub";

export const SignatureDining = () => {
  return (
    <section className="py-32 px-6 bg-ink overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-4 mb-8">
            <GoldDivider width="40px" />
            <span className="eyebrow text-gold">Culinary Artistry</span>
          </div>
          
          <h2 className="font-serif-display text-4xl lg:text-6xl text-soft mb-10 leading-tight">
            Signature <br />
            <span className="text-gold italic normal-case">Dining</span> Experiences
          </h2>
          
          <p className="text-soft-dim/80 text-lg font-light leading-relaxed mb-12 max-w-lg">
            From royal thalis served in moonlit courtyards to contemporary 
            gastronomy overlooking city horizons, every meal is a celebration 
            of flavor, tradition, and impeccable service.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="small-caps text-soft text-[0.7rem] mb-2">Authentic</h4>
              <p className="text-soft-dim/60 text-xs font-light">Heritage recipes passed down through generations.</p>
            </div>
            <div>
              <h4 className="small-caps text-soft text-[0.7rem] mb-2">Atmosphere</h4>
              <p className="text-soft-dim/60 text-xs font-light">Iconic settings that elevate every bite.</p>
            </div>
          </div>
          
          <Link to="/experiences">
            <button className="btn-gold px-8">
              <span>Explore Dining</span>
            </button>
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src={diningImg} 
              alt="Signature Dining" 
              className="w-full h-full object-cover slow-zoom"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-gold/10 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
