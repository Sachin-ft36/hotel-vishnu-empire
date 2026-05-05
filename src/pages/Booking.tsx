import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, Users, MapPin, CheckCircle2, ChevronRight, 
  ChevronLeft, Star, Wifi, Tv, Coffee, Wind, Info, 
  ShieldCheck, ArrowRight, X, Image as ImageIcon
} from "lucide-react";
import { LuxuryDatePicker } from "@/components/regalia/LuxuryDatePicker";
import { LuxurySelect } from "@/components/regalia/LuxurySelect";

// Mock Room Data
const ROOMS = [
  {
    id: "deluxe-suite",
    name: "Heritage Deluxe Suite",
    desc: "Spacious luxury room with private balcony and garden views.",
    price: 14999,
    rating: 4.8,
    reviews: 124,
    images: ["/Signature Experiences/room.jpg", "/Signature Experiences/room.jpg"], // Use room images
    amenities: ["AC", "WiFi", "TV", "Breakfast"],
    stock: 2,
    popular: true,
    size: "450 sq. ft.",
    bed: "King Size"
  },
  {
    id: "royal-chamber",
    name: "The Royal Chamber",
    desc: "Authentic heritage decor with modern state-of-the-art amenities.",
    price: 19999,
    rating: 4.9,
    reviews: 86,
    images: ["/Signature Experiences/room.jpg", "/Signature Experiences/room.jpg"],
    amenities: ["AC", "WiFi", "Mini Bar", "Butler"],
    stock: 1,
    popular: false,
    size: "600 sq. ft.",
    bed: "Royal Canopy"
  },
  {
    id: "executive-villa",
    name: "Private Pool Villa",
    desc: "Ultimate privacy with a dedicated plunge pool and courtyard.",
    price: 34999,
    rating: 5.0,
    reviews: 42,
    images: ["/Signature Experiences/room.jpg", "/Signature Experiences/room.jpg"],
    amenities: ["Pool", "WiFi", "Spa", "Private Chef"],
    stock: 3,
    popular: false,
    size: "1200 sq. ft.",
    bed: "Super King"
  }
];

const Booking = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [showRoomDetails, setShowRoomDetails] = useState<any>(null);
  
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();

  const [formData, setFormData] = useState({
    property: "The Vijay Villas",
    checkIn: "",
    checkOut: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    requests: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const checkIn = params.get("checkIn");
    const checkOut = params.get("checkOut");
    const guests = params.get("guests");

    if (checkIn && checkOut) {
      const cin = new Date(checkIn);
      const cout = new Date(checkOut);
      setCheckInDate(cin);
      setCheckOutDate(cout);
      setFormData(prev => ({
        ...prev,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests || "2"
      }));
      handleSearchTrigger();
    }
  }, [location]);

  const handleSearchTrigger = () => {
    setStep(2);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setStep(3); // Jump directly to results
    }, 3000);
  };

  const nextStep = () => {
    if (step === 1) {
      handleSearchTrigger();
    } else {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => setStep(s => s - 1);

  const handleBookRoom = (room: any) => {
    setSelectedRoom(room);
    setStep(4); // Go to Guest Details
  };

  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-12 bg-ink-deep border-b border-gold/10 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
               <span className="eyebrow text-gold mb-2 block">Reservations</span>
               <h1 className="font-serif-display text-4xl md:text-6xl uppercase tracking-wider">
                  {step <= 2 ? "Check Availability" : (step === 3 ? "Select Your Sanctuary" : "Guest Details")}
               </h1>
            </div>
            
            {/* Sticky summary bar for results page */}
            {step >= 3 && (
              <div className="bg-panel/30 border border-gold/20 p-4 rounded-lg flex flex-wrap items-center gap-6 text-sm backdrop-blur-md">
                 <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-gold" />
                    <span className="font-light">Rewa</span>
                 </div>
                 <div className="w-px h-4 bg-gold/20" />
                 <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gold" />
                    <span className="font-light">{formData.checkIn || "12 May"} - {formData.checkOut || "14 May"}</span>
                 </div>
                 <div className="w-px h-4 bg-gold/20" />
                 <div className="flex items-center gap-2">
                    <Users size={14} className="text-gold" />
                    <span className="font-light">{formData.guests} Guests</span>
                 </div>
                 <button onClick={() => setStep(1)} className="ml-4 text-gold hover:underline text-xs small-caps">Edit</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: INITIAL SEARCH */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-panel/10 border border-gold/10 p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
                <LuxuryDatePicker 
                  label="Check-in" 
                  date={checkInDate} 
                  setDate={(d) => {
                    setCheckInDate(d);
                    if (d) setFormData({...formData, checkIn: d.toISOString().split('T')[0]});
                  }} 
                />
                <LuxuryDatePicker 
                  label="Check-out" 
                  date={checkOutDate} 
                  setDate={(d) => {
                    setCheckOutDate(d);
                    if (d) setFormData({...formData, checkOut: d.toISOString().split('T')[0]});
                  }} 
                />
                <LuxurySelect 
                  label="Guests"
                  value={formData.guests}
                  onValueChange={(val) => setFormData({...formData, guests: val})}
                  options={[
                    { label: "1 Guest", value: "1" },
                    { label: "2 Guests", value: "2" },
                    { label: "3 Guests", value: "3" },
                    { label: "4+ Guests", value: "4+" },
                  ]}
                />
              </div>
              <div className="mt-12 flex justify-center">
                <button onClick={nextStep} className="btn-gold px-20 py-5">
                  <span>Check Availability</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: LOADING EXPERIENCE */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-32 space-y-12"
            >
              {isSearching ? (
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 border-t-2 border-gold rounded-full animate-spin mb-12" />
                  <h2 className="font-serif-display text-3xl mb-4">Checking Availability...</h2>
                  <p className="text-soft-dim/60 italic font-light">Finding the best rooms for your royal stay</p>
                  
                  {/* Skeleton Preview */}
                  <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-8 opacity-20 grayscale">
                    <div className="h-[400px] bg-gold/5 animate-pulse border border-gold/10" />
                    <div className="h-[400px] bg-gold/5 animate-pulse border border-gold/10" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                   <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-8 border border-gold/20">
                      <CheckCircle2 size={32} className="text-gold" />
                   </div>
                   <h2 className="font-serif-display text-4xl mb-6">Confirmed</h2>
                   <p className="text-soft-dim/70 max-w-md mx-auto mb-12">We have found several exceptional suites available for your selected dates.</p>
                   <button onClick={() => setStep(3)} className="btn-gold px-12">
                      <span>Show Results</span>
                   </button>
                </div>
              )}
            </motion.div>
          )}

          {/* STEP 3: RESULTS PAGE */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-center border-b border-gold/10 pb-6">
                 <p className="text-soft-dim/60 small-caps tracking-widest">{ROOMS.length} Categories Available</p>
                 <div className="flex gap-4">
                    <select className="bg-transparent text-xs small-caps text-gold border border-gold/20 px-4 py-2 outline-none">
                       <option>Sort by: Popularity</option>
                       <option>Price: Low to High</option>
                       <option>Best Rated</option>
                    </select>
                 </div>
              </div>

              <div className="grid grid-cols-1 gap-12">
                 {ROOMS.map((room) => (
                    <div 
                      key={room.id}
                      className="group bg-panel/10 border border-gold/10 overflow-hidden flex flex-col lg:flex-row hover:border-gold/30 transition-all duration-500"
                    >
                       {/* Image Section */}
                       <div className="lg:w-2/5 relative overflow-hidden aspect-video lg:aspect-auto">
                          <img 
                            src={room.images[0]} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            alt={room.name}
                          />
                          {room.popular && (
                             <div className="absolute top-4 left-4 bg-gold text-ink px-4 py-1 text-[0.6rem] font-bold small-caps tracking-widest">
                               Most Popular
                             </div>
                          )}
                          <div className="absolute bottom-4 left-4 flex gap-2">
                             <div className="bg-ink/80 backdrop-blur-md px-3 py-1 flex items-center gap-1">
                                <ImageIcon size={12} className="text-gold" />
                                <span className="text-[0.6rem] text-soft">{room.images.length}</span>
                             </div>
                          </div>
                       </div>

                       {/* Content Section */}
                       <div className="flex-1 p-8 lg:p-12 flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                             <div>
                                <h3 className="font-serif-display text-3xl text-soft mb-2 group-hover:text-gold transition-colors">{room.name}</h3>
                                <p className="text-soft-dim/60 text-sm font-light italic">{room.desc}</p>
                             </div>
                             <div className="text-right">
                                <div className="flex items-center gap-1 text-gold mb-1 justify-end">
                                   <Star size={14} fill="currentColor" />
                                   <span className="text-sm font-medium">{room.rating}</span>
                                </div>
                                <span className="text-[0.6rem] text-soft/40 small-caps">{room.reviews} Reviews</span>
                             </div>
                          </div>

                          <div className="flex flex-wrap gap-4 my-8">
                             {room.amenities.map(a => (
                                <div key={a} className="flex items-center gap-2 text-[0.65rem] text-soft/50 border border-gold/10 px-3 py-1 rounded-full">
                                   <ShieldCheck size={12} className="text-gold/40" />
                                   {a}
                                </div>
                             ))}
                          </div>

                          <div className="mt-auto pt-8 border-t border-gold/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                             <div className="text-center sm:text-left">
                                <span className="text-[0.65rem] text-soft/40 small-caps block mb-1">Price per night</span>
                                <div className="flex items-baseline gap-2">
                                   <span className="text-3xl font-serif-display text-soft">₹{room.price.toLocaleString()}</span>
                                   <span className="text-xs text-soft-dim/60 font-light">+ Taxes</span>
                                </div>
                                {room.stock < 3 && (
                                   <span className="text-[0.65rem] text-orange-400 font-medium block mt-2 animate-pulse">🔥 Only {room.stock} rooms left!</span>
                                )}
                             </div>
                             
                             <div className="flex gap-4">
                                <button 
                                  onClick={() => setShowRoomDetails(room)}
                                  className="px-6 py-3 border border-gold/30 text-gold text-xs small-caps tracking-widest hover:bg-gold/10 transition-all"
                                >
                                   View Details
                                </button>
                                <button 
                                  onClick={() => handleBookRoom(room)}
                                  className="btn-gold px-8 py-3 h-auto"
                                >
                                   <span>Book Now</span>
                                </button>
                             </div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: GUEST DETAILS */}
          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              <div className="lg:col-span-2 space-y-8">
                 <div className="bg-panel/10 border border-gold/10 p-8 md:p-12 space-y-8">
                    <h2 className="font-serif-display text-3xl mb-8 border-b border-gold/10 pb-4">Personal Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="small-caps text-[0.65rem] text-gold ml-1">Full Name</label>
                          <input 
                            placeholder="e.g. Maharaja Vikram"
                            className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors"
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="small-caps text-[0.65rem] text-gold ml-1">Phone Number</label>
                          <input 
                            placeholder="+91 00000 00000"
                            className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors"
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="small-caps text-[0.65rem] text-gold ml-1">Email Address</label>
                       <input 
                         placeholder="royalty@vijayvillas.com"
                         className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors"
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="small-caps text-[0.65rem] text-gold ml-1">Special Requests</label>
                       <textarea 
                         rows={4}
                         placeholder="Dietary preferences, airport pick-up, flower arrangements..."
                         className="w-full bg-ink/40 border border-gold/20 p-4 text-soft focus:border-gold outline-none transition-colors resize-none"
                         onChange={(e) => setFormData({...formData, requests: e.target.value})}
                       />
                    </div>
                    <div className="pt-8 flex justify-between items-center">
                       <button onClick={prevStep} className="flex items-center gap-2 text-soft/40 hover:text-gold transition-colors small-caps text-xs">
                          <ChevronLeft className="w-4 h-4" /> Back to Rooms
                       </button>
                       <button onClick={handleSubmit} className="btn-gold px-12">
                          <span>Proceed to Payment</span>
                       </button>
                    </div>
                 </div>
              </div>

              {/* Booking Sidebar Summary */}
              <div className="space-y-8">
                 <div className="bg-panel/20 border border-gold/20 p-8 sticky top-24">
                    <h3 className="font-serif-display text-2xl mb-6 text-gold">Summary</h3>
                    <div className="aspect-video mb-6 overflow-hidden">
                       <img src={selectedRoom?.images[0]} className="w-full h-full object-cover" alt="Room" />
                    </div>
                    <div className="space-y-4 text-sm font-light">
                       <div className="flex justify-between">
                          <span className="text-soft/40">Room</span>
                          <span className="text-soft font-medium">{selectedRoom?.name}</span>
                       </div>
                       <div className="flex justify-between">
                          <span className="text-soft/40">Dates</span>
                          <span className="text-soft">{formData.checkIn} - {formData.checkOut}</span>
                       </div>
                       <div className="flex justify-between">
                          <span className="text-soft/40">Stay</span>
                          <span className="text-soft">2 Nights</span>
                       </div>
                       <div className="h-[1px] bg-gold/10 my-6" />
                       <div className="flex justify-between text-lg">
                          <span className="text-soft">Total</span>
                          <span className="text-gold font-serif-display">₹{(selectedRoom?.price * 2).toLocaleString()}</span>
                       </div>
                       <p className="text-[0.6rem] text-soft/30 italic text-center pt-4">All taxes and fees included in the final amount.</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5: FINAL CONFIRMATION */}
          {step === 5 && (
            <motion.div 
              key="step5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 space-y-8"
            >
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-gold" />
                </div>
              </div>
              <h2 className="text-4xl font-serif-display uppercase tracking-[0.2em]">Reservation Confirmed</h2>
              <p className="text-soft-dim max-w-sm mx-auto font-light leading-relaxed">
                Thank you, {formData.name.split(' ')[0]}. Your stay at <b>{formData.property}</b> in the <b>{selectedRoom?.name}</b> is confirmed. 
                A confirmation voucher has been sent to your email.
              </p>
              <div className="pt-10 flex flex-col items-center gap-6">
                <button onClick={() => window.location.href = '/'} className="btn-gold px-12">
                   <span>Back to Homepage</span>
                </button>
                <button className="link-underline text-gold small-caps text-xs">Download Receipt</button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* ROOM DETAILS MODAL */}
      <AnimatePresence>
        {showRoomDetails && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 backdrop-blur-xl bg-ink/90"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-ink-deep border border-gold/20 w-full max-w-5xl h-[90vh] overflow-y-auto relative"
            >
               <button 
                 onClick={() => setShowRoomDetails(null)}
                 className="absolute top-6 right-6 z-10 w-12 h-12 bg-ink/80 rounded-full flex items-center justify-center text-gold border border-gold/10 hover:bg-gold hover:text-ink transition-all duration-300"
               >
                  <X size={20} />
               </button>

               <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-[400px] lg:h-full relative overflow-hidden">
                     <img 
                       src={showRoomDetails.images[0]} 
                       className="w-full h-full object-cover" 
                       alt={showRoomDetails.name} 
                     />
                  </div>
                  <div className="p-8 lg:p-16 space-y-8">
                     <div className="flex items-center gap-3">
                        <GoldDivider width="30px" />
                        <span className="eyebrow text-gold text-xs">{showRoomDetails.size} • {showRoomDetails.bed}</span>
                     </div>
                     <h2 className="font-serif-display text-4xl text-soft">{showRoomDetails.name}</h2>
                     <p className="text-soft-dim/80 text-lg leading-relaxed font-light">{showRoomDetails.desc}</p>
                     
                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                           <h4 className="small-caps text-gold text-xs tracking-widest">Amenities</h4>
                           <ul className="space-y-3">
                              {showRoomDetails.amenities.map(a => (
                                 <li key={a} className="flex items-center gap-2 text-xs text-soft/60">
                                    <div className="w-1 h-1 bg-gold rounded-full" />
                                    {a}
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="space-y-4">
                           <h4 className="small-caps text-gold text-xs tracking-widest">Policies</h4>
                           <ul className="space-y-3 text-xs text-soft/40 font-light">
                              <li>Free Cancellation until 48h before</li>
                              <li>Check-in: 2:00 PM</li>
                              <li>No Smoking</li>
                           </ul>
                        </div>
                     </div>

                     <div className="pt-12 flex items-center justify-between border-t border-gold/10">
                        <div>
                           <span className="text-4xl font-serif-display text-soft">₹{showRoomDetails.price.toLocaleString()}</span>
                           <span className="text-xs text-soft/40 block">Price per night</span>
                        </div>
                        <button 
                          onClick={() => { handleBookRoom(showRoomDetails); setShowRoomDetails(null); }}
                          className="btn-gold px-12 py-4 h-auto"
                        >
                           <span>Book Now</span>
                        </button>
                     </div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Booking;
