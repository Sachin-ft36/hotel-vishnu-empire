import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const ANNOUNCEMENTS = [
  "Upcoming: Royal Baghelkhandi Feast — May 24, 2026",
  "Exclusive: Sufi Nights at the Fort — June 12, 2026",
  "The White Tiger Gala: Reservations Open — July 05, 2026"
];

export const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gold/10 border-b border-gold/20 relative z-[60] overflow-hidden">
      <div className="w-full flex items-center justify-evenly py-2.5 px-4">
        {/* Part 1: Label */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <span className="small-caps text-[0.6rem] text-gold tracking-[0.3em]">The Private Calendar</span>
        </div>

        {/* Part 2: Ticker */}
        <div className="flex items-center gap-2 h-4 overflow-hidden shrink-0 max-w-[40%] sm:max-w-none">
          <Calendar size={11} className="text-gold shrink-0" />
          <div className="relative h-full flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-[0.6rem] md:text-[0.65rem] text-soft/80 font-light tracking-[0.1em] whitespace-nowrap italic"
              >
                {ANNOUNCEMENTS[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Part 3: Request Invite */}
        <div className="flex items-center shrink-0 border-l border-gold/30 ml-2 pl-4 md:pl-8 min-w-fit">
          <Link to="/request-invitation" className="flex items-center gap-1 group cursor-pointer">
            <span className="small-caps text-[0.6rem] md:text-[0.65rem] text-gold group-hover:text-gold/80 transition-colors tracking-widest whitespace-nowrap font-medium">
              Request Invite
            </span>
            <ChevronRight size={12} className="text-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
