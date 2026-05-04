import { Calendar, Users, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { CustomCalendar } from "./CustomCalendar";

export const BookingBar = () => {
  const [showIn, setShowIn] = useState(false);
  const [showOut, setShowOut] = useState(false);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const BookingInputs = () => (
    <div className="flex flex-col lg:flex-row flex-1 items-stretch lg:items-center gap-6 lg:gap-8 xl:gap-12 w-full">
      {/* Destination Select */}
      <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
        <span className="small-caps text-[0.55rem] text-gold/60 tracking-widest flex items-center gap-2">
          <MapPin size={10} /> Destination
        </span>
        <select className="bg-transparent text-soft text-sm outline-none cursor-default font-light hover:text-gold transition-colors appearance-none pr-0">
          <option>The Vijay Villas, Rewa</option>
        </select>
      </div>

      <div className="hidden lg:block h-8 w-px bg-gold/10" />

      {/* Check In */}
      <div className="relative">
        <div
          onClick={() => setShowIn(!showIn)}
          className="flex flex-col gap-1 cursor-pointer group"
        >
          <span className="small-caps text-[0.6rem] lg:text-[0.55rem] text-gold/60 tracking-widest flex items-center gap-1">
            <Calendar size={10} /> Check In <span className="opacity-40 text-[0.55rem] lg:text-[0.45rem]">12 PM</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="text-soft text-sm font-light group-hover:text-gold transition-colors">
              {checkIn || "Select Date"}
            </span>
            <ChevronDown size={12} className="text-gold/40" />
          </div>
        </div>

        <AnimatePresence>
          {showIn && (
            <div className="absolute bottom-full lg:bottom-full mb-4 left-0">
              <CustomCalendar
                onSelect={(d) => setCheckIn(formatDate(d))}
                onClose={() => setShowIn(false)}
              />
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden lg:block h-8 w-px bg-gold/10" />

      {/* Check Out */}
      <div className="relative">
        <div
          onClick={() => setShowOut(!showOut)}
          className="flex flex-col gap-1 cursor-pointer group"
        >
          <span className="small-caps text-[0.6rem] lg:text-[0.55rem] text-gold/60 tracking-widest flex items-center gap-1">
            <Calendar size={10} /> Check Out <span className="opacity-40 text-[0.55rem] lg:text-[0.45rem]">12 PM</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="text-soft text-sm font-light group-hover:text-gold transition-colors">
              {checkOut || "Select Date"}
            </span>
            <ChevronDown size={12} className="text-gold/40" />
          </div>
        </div>

        <AnimatePresence>
          {showOut && (
            <div className="absolute bottom-full lg:bottom-full mb-4 left-0">
              <CustomCalendar
                onSelect={(d) => setCheckOut(formatDate(d))}
                onClose={() => setShowOut(false)}
              />
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden lg:block h-8 w-px bg-gold/10" />

      {/* Guests */}
      <div className="flex flex-col gap-1 min-w-[120px]">
        <span className="small-caps text-[0.55rem] text-gold/60 tracking-widest flex items-center gap-2">
          <Users size={10} /> Guests
        </span>
        <select className="bg-transparent text-soft text-sm outline-none cursor-pointer font-light hover:text-gold transition-colors">
          <option>02 Guests</option>
          <option>01 Guest</option>
          <option>03 Guests</option>
          <option>04+ Guests</option>
        </select>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sticky Button */}
      <motion.div 
        animate={{ y: isVisible ? 0 : 150 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-ink-deep/80 backdrop-blur-md border-t border-gold/10"
      >
        <button
          onClick={() => setIsMobileOpen(true)}
          className="btn-gold w-full py-4 text-xs tracking-[0.2em]"
        >
          <span>CHECK AVAILABILITY</span>
        </button>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gold/10">
              <span className="small-caps text-gold tracking-widest">Plan Your Stay</span>
              <button onClick={() => setIsMobileOpen(false)} className="text-soft/60">
                <ChevronDown size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <BookingInputs />
            </div>
            <div className="p-6 border-t border-gold/10">
              <Link to="/book" className="w-full">
                <button className="btn-gold w-full py-5">
                  <span>CONFIRM & SEARCH</span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Bar */}
      <motion.div
        animate={{ y: isVisible ? 0 : 150 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-ink-deep/95 backdrop-blur-2xl border-t border-gold/20 py-4 px-6 hidden lg:block"
      >
        <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-8">
          <BookingInputs />

          <Link to="/book">
            <button className="btn-gold px-12 py-4 whitespace-nowrap">
              <span>Check Availability</span>
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};
