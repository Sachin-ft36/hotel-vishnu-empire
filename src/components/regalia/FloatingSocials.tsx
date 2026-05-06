import { motion, AnimatePresence } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

export const FloatingSocials = () => {
  return (
    <div className="fixed bottom-24 right-6 z-[60] flex flex-col gap-4">
      {/* Instagram Button */}
      <motion.a
        href="https://www.instagram.com/hotelvishnuempire/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="w-14 h-14 bg-panel border border-gold/20 rounded-full flex items-center justify-center text-gold shadow-2xl backdrop-blur-md group relative"
      >
        <Instagram size={24} strokeWidth={1.2} />
        <span className="absolute right-16 bg-gold text-ink text-[0.6rem] px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap small-caps tracking-widest pointer-events-none">
          Follow Us
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918815393403?text=Greetings!%20I%20am%20interested%20in%20exploring%20Hotel%20Vishnu%20Empire.%20Could%20you%20please%20assist%20me%20with%20more%20details?" 
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="w-14 h-14 bg-panel border border-gold/20 rounded-full flex items-center justify-center text-gold shadow-2xl backdrop-blur-md group relative"
      >
        {/* Subtle Pulse Effect */}
        <div className="absolute inset-0 bg-gold/10 rounded-full animate-ping pointer-events-none" />
        
        <MessageCircle size={24} strokeWidth={1.2} />
        <span className="absolute right-16 bg-gold text-ink text-[0.6rem] px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap small-caps tracking-widest pointer-events-none">
          Chat With Us
        </span>
      </motion.a>
    </div>
  );
};
