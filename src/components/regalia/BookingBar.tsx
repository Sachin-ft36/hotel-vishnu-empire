import { Calendar, Users, MapPin, ChevronDown } from "lucide-react";
import { Link } from "./LinkStub";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CustomCalendar } from "./CustomCalendar";

export const BookingBar = () => {
  const [showIn, setShowIn] = useState(false);
  const [showOut, setShowOut] = useState(false);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-ink-deep/90 backdrop-blur-xl border-t border-gold/20 py-4 px-6 hidden lg:block"
    >
      <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-8">
        <div className="flex flex-1 items-center gap-12">
          {/* Destination Select */}
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <span className="small-caps text-[0.55rem] text-gold/60 tracking-widest flex items-center gap-2">
              <MapPin size={10} /> Destination
            </span>
            <select className="bg-transparent text-soft text-sm outline-none cursor-pointer font-light hover:text-gold transition-colors">
              <option>The Vijay Villas, Rewa</option>
              <option>Royal Heritage Wing, Rewa</option>
              <option>The White Tiger Sanctuary, Rewa</option>
            </select>
          </div>

          <div className="h-8 w-px bg-gold/10" />

          {/* Check In */}
          <div className="relative">
            <div 
              onClick={() => setShowIn(!showIn)}
              className="flex flex-col gap-1 cursor-pointer group"
            >
              <span className="small-caps text-[0.55rem] text-gold/60 tracking-widest flex items-center gap-2">
                <Calendar size={10} /> Check In
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
                <div className="absolute bottom-full mb-4 left-0">
                  <CustomCalendar 
                    onSelect={(d) => setCheckIn(formatDate(d))} 
                    onClose={() => setShowIn(false)} 
                  />
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-8 w-px bg-gold/10" />

          {/* Check Out */}
          <div className="relative">
            <div 
              onClick={() => setShowOut(!showOut)}
              className="flex flex-col gap-1 cursor-pointer group"
            >
              <span className="small-caps text-[0.55rem] text-gold/60 tracking-widest flex items-center gap-2">
                <Calendar size={10} /> Check Out
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
                <div className="absolute bottom-full mb-4 left-0">
                  <CustomCalendar 
                    onSelect={(d) => setCheckOut(formatDate(d))} 
                    onClose={() => setShowOut(false)} 
                  />
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-8 w-px bg-gold/10" />

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

        {/* Action Button */}
        <Link to="/book">
          <button className="btn-gold px-12 py-4 whitespace-nowrap">
            <span>Check Availability</span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
