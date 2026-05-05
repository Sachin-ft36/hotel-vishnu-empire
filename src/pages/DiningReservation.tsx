import { useState } from "react";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Utensils, Calendar, Clock, Users, Gift, 
  ChevronRight, CheckCircle2, MapPin, Star
} from "lucide-react";
import { LuxuryDatePicker } from "@/components/regalia/LuxuryDatePicker";
import { LuxurySelect } from "@/components/regalia/LuxurySelect";

const DiningReservation = () => {
  const [step, setStep] = useState(1);
  const [reservationDate, setReservationDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({
    restaurant: "The Royal Dining Room",
    date: "",
    time: "",
    guests: "2",
    occasion: "None",
    name: "",
    email: "",
    phone: "",
    requests: ""
  });

  const restaurants = [
    {
      id: "royal-dining",
      name: "The Royal Dining Room",
      type: "Fine Dining • Indian Heritage",
      desc: "Traditional recipes served with silver service in a majestic setting.",
      image: "/Signature Experiences/food.jpg"
    },
    {
      id: "tiger-lounge",
      name: "The White Tiger Lounge",
      type: "Bar & Grill • International",
      desc: "Relaxed atmosphere with signature cocktails and panoramic views.",
      image: "/Signature Experiences/room.jpg"
    }
  ];

  const timeSlots = ["12:00 PM", "1:00 PM", "2:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success
  };

  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-ink-deep border-b border-gold/10 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <GoldDivider width="30px" />
              <span className="eyebrow text-gold">Culinary Excellence</span>
            </div>
            <h1 className="font-serif-display text-4xl md:text-6xl uppercase tracking-widest mb-6">
              Reserve a Table
            </h1>
            <p className="text-soft-dim/60 font-light italic max-w-xl mx-auto leading-relaxed">
              Experience the authentic flavors of Rewa with a personalized dining experience 
              crafted by our master chefs.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-16 max-w-xs mx-auto text-[0.6rem] tracking-[0.2em] uppercase text-soft/40">
           <div className={`flex flex-col items-center gap-2 ${step >= 1 ? 'text-gold' : ''}`}>
              <span>Selection</span>
              <div className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-gold' : 'bg-soft/10'}`} />
           </div>
           <div className="flex-1 h-px bg-gold/10 mx-4" />
           <div className={`flex flex-col items-center gap-2 ${step >= 2 ? 'text-gold' : ''}`}>
              <span>Details</span>
              <div className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-gold' : 'bg-soft/10'}`} />
           </div>
           <div className="flex-1 h-px bg-gold/10 mx-4" />
           <div className={`flex flex-col items-center gap-2 ${step >= 3 ? 'text-gold' : ''}`}>
              <span>Personal</span>
              <div className={`w-2 h-2 rounded-full ${step >= 3 ? 'bg-gold' : 'bg-soft/10'}`} />
           </div>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: RESTAURANT SELECTION */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {restaurants.map((res) => (
                <div 
                  key={res.id}
                  onClick={() => { setFormData({...formData, restaurant: res.name}); nextStep(); }}
                  className="group relative cursor-pointer overflow-hidden border border-gold/10 bg-panel/10 hover:border-gold/30 transition-all duration-500"
                >
                   <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={res.image} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                        alt={res.name}
                      />
                   </div>
                   <div className="p-8 space-y-4">
                      <div className="flex justify-between items-center">
                         <h3 className="font-serif-display text-2xl group-hover:text-gold transition-colors">{res.name}</h3>
                         <span className="text-[0.6rem] text-gold border border-gold/20 px-2 py-1">{res.type}</span>
                      </div>
                      <p className="text-sm text-soft-dim/60 font-light leading-relaxed">{res.desc}</p>
                      <button className="flex items-center gap-2 text-[0.65rem] text-gold uppercase tracking-widest pt-4">
                         Select Restaurant <ChevronRight size={14} />
                      </button>
                   </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-3xl mx-auto space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                 <LuxuryDatePicker 
                    label="Select Date"
                    date={reservationDate}
                    setDate={(d) => {
                       setReservationDate(d);
                       if (d) setFormData({...formData, date: d.toISOString().split('T')[0]});
                    }}
                 />
                 <LuxurySelect 
                    label="Number of Guests"
                    value={formData.guests}
                    onValueChange={(val) => setFormData({...formData, guests: val})}
                    options={[
                       { label: "1 Guest", value: "1" },
                       { label: "2 Guests", value: "2" },
                       { label: "3 Guests", value: "3" },
                       { label: "4 Guests", value: "4" },
                       { label: "5 Guests", value: "5" },
                       { label: "6 Guests", value: "6" },
                       { label: "Large Party (9+)", value: "9+" },
                    ]}
                 />
              </div>

              <div className="space-y-4">
                 <label className="small-caps text-[0.65rem] text-gold tracking-widest ml-1 block">Preferred Time</label>
                 <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                    {timeSlots.map((time) => (
                       <button
                         key={time}
                         onClick={() => setFormData({...formData, time: time})}
                         className={`py-3 text-[0.7rem] border transition-all ${formData.time === time ? 'bg-gold text-ink border-gold' : 'bg-ink/40 border-gold/10 hover:border-gold text-soft/60'}`}
                       >
                          {time}
                       </button>
                    ))}
                 </div>
              </div>

              <div className="flex justify-between pt-12">
                 <button onClick={prevStep} className="text-soft/40 hover:text-gold transition-colors small-caps text-xs">Back</button>
                 <button 
                   onClick={nextStep} 
                   disabled={!formData.date || !formData.time}
                   className="btn-gold px-12 disabled:opacity-30 disabled:cursor-not-allowed"
                 >
                    <span>Next Step</span>
                 </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: PERSONAL INFO */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-3xl mx-auto bg-panel/10 border border-gold/10 p-8 md:p-12 space-y-8"
            >
              <h2 className="font-serif-display text-3xl mb-8">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="small-caps text-[0.65rem] text-gold ml-1">Full Name</label>
                    <input 
                      placeholder="e.g. Vikramaditya Singh"
                      className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="small-caps text-[0.65rem] text-gold ml-1">Phone Number</label>
                    <input 
                      placeholder="+91"
                      className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="small-caps text-[0.65rem] text-gold ml-1">Email Address</label>
                    <input 
                      placeholder="email@example.com"
                      className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                 </div>
                 <LuxurySelect 
                    label="Occasion"
                    value={formData.occasion}
                    onValueChange={(val) => setFormData({...formData, occasion: val})}
                    icon={<Gift className="mr-3 h-4 w-4 text-gold/60" />}
                    options={[
                       { label: "None", value: "None" },
                       { label: "Birthday", value: "Birthday" },
                       { label: "Anniversary", value: "Anniversary" },
                       { label: "Business Meeting", value: "Business" },
                       { label: "Other", value: "Other" },
                    ]}
                 />
              </div>
              <div className="space-y-2">
                 <label className="small-caps text-[0.65rem] text-gold ml-1">Special Requests</label>
                 <textarea 
                   rows={3}
                   placeholder="Allergies, table preference, quiet area..."
                   className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none resize-none"
                   onChange={(e) => setFormData({...formData, requests: e.target.value})}
                 />
              </div>

              <div className="pt-8 flex justify-between items-center">
                 <button onClick={prevStep} className="text-soft/40 hover:text-gold transition-colors small-caps text-xs">Back</button>
                 <button onClick={handleSubmit} className="btn-gold px-12">
                    <span>Confirm Reservation</span>
                 </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: SUCCESS */}
          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 space-y-8 max-w-xl mx-auto"
            >
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-gold" />
                </div>
              </div>
              <h2 className="text-4xl font-serif-display uppercase tracking-widest">Table Reserved</h2>
              <div className="bg-panel/20 border border-gold/10 p-8 space-y-4 text-sm font-light">
                 <div className="flex justify-between border-b border-gold/10 pb-4 mb-4">
                    <span className="text-soft/40">Reference</span>
                    <span className="text-gold tracking-widest">#DIN-{Math.floor(Math.random()*9000)+1000}</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-soft/40">Restaurant</span>
                    <span className="text-soft">{formData.restaurant}</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-soft/40">Date & Time</span>
                    <span className="text-soft">{formData.date} at {formData.time}</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-soft/40">Guests</span>
                    <span className="text-soft">{formData.guests} Persons</span>
                 </div>
              </div>
              <p className="text-soft-dim/60 italic font-light pt-4 leading-relaxed">
                A confirmation text has been sent to your phone. We look forward to welcoming 
                you for an unforgettable dining journey.
              </p>
              <div className="pt-10">
                <button onClick={() => window.location.href = '/'} className="btn-gold px-12">
                   <span>Back to Home</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default DiningReservation;
