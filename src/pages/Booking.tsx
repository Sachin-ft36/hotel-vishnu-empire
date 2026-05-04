import { useState } from "react";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import bookingBg from "@/assets/booking_bg.png";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, MapPin, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    property: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    name: "",
    email: "",
    requests: ""
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const properties = [
    "The Amber Palace, Jaipur",
    "Regalia Waterfront, Mumbai",
    "Lake View Sanctuary, Udaipur",
    "The Grand Residency, New Delhi"
  ];

  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src={bookingBg} 
            alt="Reservations" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink" />
        </div>
        
        <div className="relative z-10 text-center">
          <span className="eyebrow text-gold mb-4 block">Reservations</span>
          <h1 className="font-serif-display text-5xl md:text-7xl uppercase tracking-wider">
            Book a <span className="text-gold italic normal-case">Stay</span>
          </h1>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-panel/20 border border-gold/10 p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gold/10">
            <motion.div 
              className="h-full bg-gold"
              initial={{ width: "25%" }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-gold font-serif-display text-4xl">01</span>
                  <h2 className="text-2xl font-serif-display uppercase tracking-widest">Select Property</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {properties.map(prop => (
                    <button
                      key={prop}
                      onClick={() => { setFormData({...formData, property: prop}); nextStep(); }}
                      className={`p-6 text-left border transition-all duration-300 flex items-center justify-between group ${
                        formData.property === prop 
                        ? 'border-gold bg-gold/10 text-gold' 
                        : 'border-gold/10 hover:border-gold/40'
                      }`}
                    >
                      <span className="small-caps text-[0.7rem] tracking-widest">{prop}</span>
                      <MapPin className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-gold font-serif-display text-4xl">02</span>
                  <h2 className="text-2xl font-serif-display uppercase tracking-widest">Dates & Guests</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="small-caps text-[0.6rem] text-gold/60 ml-1">Check-in Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors"
                        onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                      />
                      <Calendar className="absolute right-4 top-4 w-4 h-4 opacity-30" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="small-caps text-[0.6rem] text-gold/60 ml-1">Check-out Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors"
                        onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                      />
                      <Calendar className="absolute right-4 top-4 w-4 h-4 opacity-30" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="small-caps text-[0.6rem] text-gold/60 ml-1">Number of Guests</label>
                  <select 
                    className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors appearance-none"
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4+">4+ Guests</option>
                  </select>
                </div>

                <div className="flex justify-between pt-10">
                  <button onClick={prevStep} className="flex items-center gap-2 text-soft/40 hover:text-gold transition-colors small-caps text-xs">
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                  <button onClick={nextStep} className="btn-gold px-12">
                    <span>Continue</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-gold font-serif-display text-4xl">03</span>
                  <h2 className="text-2xl font-serif-display uppercase tracking-widest">Guest Details</h2>
                </div>
                
                <div className="space-y-6">
                  <input 
                    placeholder="Full Name" 
                    className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    placeholder="Email Address" 
                    type="email"
                    className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <textarea 
                    placeholder="Special Requests (Optional)" 
                    rows={4}
                    className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors resize-none"
                    onChange={(e) => setFormData({...formData, requests: e.target.value})}
                  />
                </div>

                <div className="flex justify-between pt-10">
                  <button onClick={prevStep} className="flex items-center gap-2 text-soft/40 hover:text-gold transition-colors small-caps text-xs">
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                  <button onClick={handleSubmit} className="btn-gold px-12">
                    <span>Confirm Reservation</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-8"
              >
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-gold" />
                  </div>
                </div>
                <h2 className="text-4xl font-serif-display uppercase tracking-[0.2em]">Request Received</h2>
                <p className="text-soft-dim max-w-sm mx-auto font-light leading-relaxed">
                  Thank you, {formData.name.split(' ')[0]}. Your interest in <b>{formData.property}</b> has been recorded. 
                  Our private concierge will contact you within the hour to finalize your royal stay.
                </p>
                <div className="pt-10">
                  <button onClick={() => window.location.href = '/'} className="link-underline text-gold small-caps">
                    Return to Homepage
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
