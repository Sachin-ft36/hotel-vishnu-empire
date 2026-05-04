import { GoldDivider } from "./GoldDivider";
import spaImg from "@/assets/exp_spa.png";
import { motion } from "framer-motion";
import { Link } from "./LinkStub";

export const WellnessSpa = () => {
  return (
    <section className="py-32 px-6 bg-ink relative">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="eyebrow text-gold mb-6 block">Sanctuary of Peace</span>
          <h2 className="font-serif-display text-4xl lg:text-7xl text-soft mb-12">
            Wellness & <span className="text-gold italic normal-case">Sacred</span> Rituals
          </h2>
          
          <div className="relative aspect-video overflow-hidden mb-16 shadow-2xl">
            <img 
              src={spaImg} 
              alt="Wellness & Spa" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <GoldDivider width="120px" />
            </div>
          </div>
          
          <p className="text-soft-dim/80 text-xl font-light leading-relaxed mb-12 italic">
            "A journey inward, guided by ancient Indian wisdom and the gentle 
            restoration of the soul."
          </p>
          
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="text-center">
              <span className="block font-serif-display text-3xl text-gold mb-2">Jiva</span>
              <span className="small-caps text-[0.6rem] text-soft-dim tracking-widest">Ancient Wisdom</span>
            </div>
            <div className="text-center">
              <span className="block font-serif-display text-3xl text-gold mb-2">Yoga</span>
              <span className="small-caps text-[0.6rem] text-soft-dim tracking-widest">Spiritual Union</span>
            </div>
            <div className="text-center">
              <span className="block font-serif-display text-3xl text-gold mb-2">Ayurveda</span>
              <span className="small-caps text-[0.6rem] text-soft-dim tracking-widest">Natural Balance</span>
            </div>
          </div>
          
          <Link to="/experiences">
            <button className="btn-gold px-12">
              <span>Discover Wellness</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
