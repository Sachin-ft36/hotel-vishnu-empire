import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo/logo.png";

const ANNOUNCEMENTS = [
  "Upcoming: Royal Baghelkhandi Feast — May 24, 2026",
  "Exclusive: Sufi Nights at the Fort — June 12, 2026",
  "The White Tiger Gala: Reservations Open — July 05, 2026"
];

export const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gold/10 border-b border-gold/20 py-2.5 px-6 relative z-[60] overflow-hidden">
      <div className="max-w-[1700px] mx-auto flex items-center justify-center lg:justify-between gap-4">
        {/* Left Side - Desktop only */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          <span className="small-caps text-[0.6rem] text-gold tracking-[0.3em]">The Private Calendar</span>
        </div>

        {/* Center - Announcement Ticker */}
        <div className="flex items-center gap-3 h-4 relative overflow-hidden flex-1 max-w-lg justify-center">
          <Calendar size={12} className="text-gold shrink-0" />
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 text-[0.65rem] md:text-[0.7rem] text-soft/80 font-light tracking-widest text-center whitespace-nowrap italic"
              >
                {ANNOUNCEMENTS[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Desktop only */}
        <div className="hidden lg:flex items-center gap-2 group cursor-pointer">
          <span className="small-caps text-[0.6rem] text-gold/60 group-hover:text-gold transition-colors tracking-widest">
            Request Invite
          </span>
          <ChevronRight size={12} className="text-gold group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
