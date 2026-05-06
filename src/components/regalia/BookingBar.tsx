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
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState("01 Guest");

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
      <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
        <a 
          href="https://www.google.com/maps/place/Vishnu+Empire+:+Hotel+in+Rewa+%7C+Banquet+in+Rewa+%7C+Restaurant+in+Rewa+%7C+Bar+in+Rewa/@24.5434469,81.2744514,17z/data=!4m6!3m5!1s0x39845bc2a44aca41:0x9a97b96f386805a9!8m2!3d24.5434469!4d81.2744514!16s%2Fg%2F11csb0nygl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-1 group cursor-pointer"
        >
          <span className="small-caps text-[0.55rem] text-gold tracking-widest flex items-center gap-2 group-hover:text-gold/80 transition-colors">
            <MapPin size={10} /> Get Directions
          </span>
          <div className="flex items-center gap-2">
            <span className="text-soft text-sm font-light border-b border-gold/30 group-hover:border-gold transition-colors pb-0.5 whitespace-nowrap">Vishnu Empire, Rewa</span>
            <svg 
              className="w-3 h-3 text-gold/60 group-hover:text-gold transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </a>
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
            <div className="fixed inset-0 lg:absolute lg:inset-auto lg:bottom-full lg:mb-4 lg:left-0 z-[100] flex items-center justify-center lg:block bg-ink/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-0 p-4 lg:p-0">
              <div className="w-full max-w-[320px] lg:max-w-none scale-90 sm:scale-100 transition-transform">
                <CustomCalendar
                  onSelect={(d) => setCheckIn(formatDate(d))}
                  onClose={() => setShowIn(false)}
                />
              </div>
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
            <div className="fixed inset-0 lg:absolute lg:inset-auto lg:bottom-full lg:mb-4 lg:left-0 z-[100] flex items-center justify-center lg:block bg-ink/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-0 p-4 lg:p-0">
              <div className="w-full max-w-[320px] lg:max-w-none scale-90 sm:scale-100 transition-transform">
                <CustomCalendar
                  onSelect={(d) => setCheckOut(formatDate(d))}
                  onClose={() => setShowOut(false)}
                />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden lg:block h-8 w-px bg-gold/10" />

      {/* Guests */}
      <div className="relative min-w-[140px]">
        <div
          onClick={() => setShowGuests(!showGuests)}
          className="flex flex-col gap-1 cursor-pointer group"
        >
          <span className="small-caps text-[0.6rem] lg:text-[0.55rem] text-gold/60 tracking-widest flex items-center gap-2">
            <Users size={10} /> Guests
          </span>
          <div className="flex items-center justify-between gap-2">
            <span className="text-soft text-sm font-light group-hover:text-gold transition-colors">{guests}</span>
            <ChevronDown size={12} className={`text-gold/40 transition-transform duration-300 ${showGuests ? 'rotate-180' : ''}`} />
          </div>
        </div>

        <AnimatePresence>
          {showGuests && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 lg:absolute lg:inset-auto lg:bottom-full lg:mb-4 lg:left-0 w-auto lg:w-full min-w-[180px] bg-ink-deep border border-gold/20 shadow-2xl overflow-hidden z-[100]"
            >
              <div className="py-2">
                {["01 Guest", "02 Guests", "03 Guests", "04+ Guests"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setGuests(opt);
                      setShowGuests(false);
                    }}
                    className={`w-full text-left px-6 py-3 text-xs tracking-widest transition-all duration-300 ${guests === opt ? 'bg-gold/10 text-gold font-medium' : 'text-soft/60 hover:bg-gold/5 hover:text-soft'
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
            <h1 className="font-serif-display text-5xl md:text-7xl uppercase tracking-wider">
              Check <span className="text-gold italic normal-case">Availability & Book</span>
            </h1>
            <div className="flex items-center justify-between p-6 border-b border-gold/10">
              <button onClick={() => setIsMobileOpen(false)} className="text-soft/60">
                <ChevronDown size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <BookingInputs />
            </div>
            <div className="p-6 border-t border-gold/10">
              <Link to={`/book?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests.split(' ')[0]}`}>
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

          <Link to={`/book?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests.split(' ')[0]}`}>
            <button className="btn-gold px-12 py-4 whitespace-nowrap">
              <span>Check Availability</span>
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};
