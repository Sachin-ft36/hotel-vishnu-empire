import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, Users, MapPin, CheckCircle2, ChevronRight, 
  ChevronLeft, Star, Wifi, Tv, Coffee, Wind, Info, 
  ShieldCheck, ArrowRight, X, Image as ImageIcon,
  Maximize, BedSingle, Bath
} from "lucide-react";
import { LuxuryDatePicker } from "@/components/regalia/LuxuryDatePicker";
import { LuxurySelect } from "@/components/regalia/LuxurySelect";

// Mock Room Data
const ROOMS = [
  {
    id: "royal-executive-ac",
    name: "Royal Executive Room",
    desc: "Grand room featuring 24-hour housekeeping and smoking options.",
    images: [
      "/rooms/royal executive Ac room/1.avif",
      "/rooms/royal executive Ac room/2.avif",
      "/rooms/royal executive Ac room/3.avif",
      "/rooms/royal executive Ac room/4.avif",
      "/rooms/royal executive Ac room/5.avif",
      "/rooms/royal executive Ac room/6.avif",
      "/rooms/royal executive Ac room/7.avif",
      "/rooms/royal executive Ac room/8.webp",
      "/rooms/royal executive Ac room/9.webp"
    ],
    stock: 2,
    popular: true,
    size: "300 sq. ft (28 sq. mt)",
    bed: "1 Double Bed",
    guestsMax: 3,
    bathroom: "1 Bathroom",
    packages: [
      { id: "royal-standard", name: "Room With Free Cancellation", price: 2357, includes: ["Free Cancellation till check-in"] },
      { id: "royal-breakfast", name: "Room With Free Cancellation | Breakfast only", price: 2841, includes: ["Free Cancellation till check-in", "Free Breakfast"] }
    ],
    rating: 4.8,
    reviews: 75,
    amenities: ["Iron/Ironing Board", "Smoking Room", "Mineral Water - additional charge", "Wi-Fi", "Air Purifier", "Bathroom"],
    categorizedAmenities: {
      "Popular with Guests": ["Iron/Ironing Board", "Smoking Room", "Bathroom", "24-hour Housekeeping", "Laundry Service", "Air Conditioning", "Free Wi-Fi", "Room Service"],
      "Room Features": ["Telephone", "Closet", "Seating Area", "Chair", "Centre Table", "Work Desk", "Blackout Curtains"],
      "Beds and Blanket": ["Woollen Blanket"],
      "Safety and Security": ["Cupboards with Locks"],
      "Media and Entertainment": ["TV"],
      "Bathroom": ["Dental Kit", "Shower Cap", "Western Toilet Seat", "Hot & Cold Water", "Toiletries", "Towels"],
      "Other Facilities": ["Newspaper", "Ceiling Fan"]
    }
  },
  {
    id: "grand-executive-ac",
    name: "Grand Executive",
    desc: "Enhanced luxury featuring a queen bed and comprehensive room services.",
    images: [
      "/rooms/grand executive AC/1.webp",
      "/rooms/grand executive AC/2.jpg",
      "/rooms/grand executive AC/3.jpg",
      "/rooms/grand executive AC/4.jpg",
      "/rooms/grand executive AC/5.jpg",
      "/rooms/grand executive AC/6.jpg",
      "/rooms/grand executive AC/7.jpg",
      "/rooms/grand executive AC/8.jpg",
      "/rooms/grand executive AC/9.jpg",
      "/rooms/grand executive AC/10.jpg",
      "/rooms/grand executive AC/11.jpg"
    ],
    stock: 3,
    popular: true,
    size: "324 sq. ft (30 sq. mt)",
    bed: "1 Queen Bed",
    guestsMax: 3,
    bathroom: "1 Bathroom",
    packages: [
      { id: "grand-standard", name: "Room With Free Cancellation", price: 4488, includes: ["Late Check-Out upto 3 hours", "Free Cancellation till check-in"] },
      { id: "grand-breakfast", name: "Room With Free Cancellation | Breakfast only", price: 5328, includes: ["Guaranteed Complimentary Breakfast", "Free Cancellation till check-in"] }
    ],
    rating: 4.7,
    reviews: 112,
    amenities: ["Mineral Water", "Daily Housekeeping", "Laundry Service", "Iron/Ironing Board", "Bathroom", "Air Conditioning"],
    categorizedAmenities: {
      "Popular with Guests": ["Iron/Ironing Board", "Mineral Water - additional charge", "Housekeeping", "Bathroom", "Laundry Service", "Air Conditioning", "Wi-Fi", "Room Service"],
      "Room Features": ["Closet", "Chair", "Work Desk", "Sofa"],
      "Beds and Blanket": ["Woollen Blanket"],
      "Safety and Security": ["Safe"],
      "Media and Entertainment": ["TV"],
      "Bathroom": ["Shaving Mirror", "Towels", "Geyser/Water Heater", "Western Toilet Seat", "Hot & Cold Water", "Jetspray", "Toiletries", "Bidet"],
      "Other Facilities": ["Ceiling Fan"]
    }
  },
  {
    id: "luxury-suite",
    name: "Suites",
    desc: "Our most expansive sanctuary with a city view and premium services.",
    images: [
      "/rooms/suite/1.webp",
      "/rooms/suite/2.jpeg",
      "/rooms/suite/3.webp",
      "/rooms/suite/4.webp",
      "/rooms/suite/5.webp",
      "/rooms/suite/6.webp"
    ],
    stock: 1,
    popular: false,
    size: "441 sq. ft (41 sq. mt)",
    bed: "1 King Bed",
    guestsMax: 3,
    bathroom: "1 Bathroom",
    packages: [
      { id: "suite-standard", name: "Room With Free Cancellation", price: 5070, includes: ["Free Cancellation till check-in"] },
      { id: "suite-breakfast", name: "Room With Free Cancellation | Breakfast only", price: 5942, includes: ["Guaranteed Complimentary Breakfast", "Free Cancellation till check-in"] }
    ],
    rating: 4.9,
    reviews: 56,
    amenities: ["Iron/Ironing Board", "Smoking Room", "Laundry Service", "Bathroom", "Daily Housekeeping", "Air Conditioning"],
    categorizedAmenities: {
      "Popular with Guests": ["Iron/Ironing Board", "Mineral Water - additional charge", "24-hour Housekeeping", "Shared Bathroom", "Laundry Service", "Air Conditioning", "Free Wi-Fi"],
      "Room Features": ["Closet", "Living Area", "Seating Area", "Chair", "Centre Table", "Dining Area", "Work Desk", "Blackout Curtains", "Dining Table", "Sofa"],
      "Basic Facilities": ["Kettle"],
      "Beds and Blanket": ["Woollen Blanket"],
      "Safety and Security": ["Cupboards with Locks"],
      "Media and Entertainment": ["TV"],
      "Bathroom": ["Dental Kit", "Geyser/Water Heater", "Shower Cap", "Slippers", "Bathrobes", "Weighing Scale", "Western Toilet Seat", "Hot & Cold Water", "Toiletries", "Towels"],
      "Other Facilities": ["Private Pool", "Newspaper", "Ceiling Fan"]
    }
  }
];

// Room Gallery Component
const RoomGallery = ({ images, name }: { images: string[], name: string }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-3">
        <div 
          className="relative aspect-[16/10] overflow-hidden cursor-zoom-in group/main"
          onClick={() => setIsFullScreen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={images[activeIdx]} 
              className="w-full h-full object-cover group-hover/main:scale-110 transition-transform duration-1000"
              alt={`${name} - ${activeIdx + 1}`}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-ink/0 group-hover/main:bg-ink/20 transition-colors duration-500 flex items-center justify-center">
             <Maximize className="text-soft opacity-0 group-hover/main:opacity-100 transition-opacity duration-500" size={32} />
          </div>
        </div>
        {images.length > 1 && (
          <div className="flex gap-2 px-1 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`relative flex-shrink-0 w-16 aspect-video border transition-all duration-300 ${
                  activeIdx === idx ? 'border-gold scale-105 z-10' : 'border-gold/10 opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`${name} thumb ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full Screen Lightbox */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-ink/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setIsFullScreen(false)}
              className="absolute top-8 right-8 text-soft/60 hover:text-gold transition-colors z-[210]"
            >
               <X size={40} strokeWidth={1} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-7xl aspect-[16/10] shadow-2xl"
            >
               <img src={images[activeIdx]} className="w-full h-full object-contain" alt={name} />
               
               {/* Navigation Arrows */}
               {images.length > 1 && (
                 <>
                   <button 
                     onClick={(e) => { e.stopPropagation(); setActiveIdx((activeIdx - 1 + images.length) % images.length); }}
                     className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-all"
                   >
                      <ChevronLeft size={24} />
                   </button>
                   <button 
                     onClick={(e) => { e.stopPropagation(); setActiveIdx((activeIdx + 1) % images.length); }}
                     className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-all"
                   >
                      <ChevronRight size={24} />
                   </button>
                 </>
               )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Booking = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [showRoomDetails, setShowRoomDetails] = useState<any>(null);
  
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();

  const [formData, setFormData] = useState({
    property: "Vishnu Empire",
    checkIn: "",
    checkOut: "",
    guests: "1",
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

  const handleBookRoom = (room: any, pkg: any) => {
    setSelectedRoom({ ...room, selectedPackage: pkg });
    setStep(4); // Go to Guest Details
  };

  const handleSubmit = (e: any) => {
    if (e && e.preventDefault) e.preventDefault();
    setStep(5);
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
                        {/* Image & Quick Info Section */}
                        <div className="lg:w-1/3 relative border-r border-gold/10 bg-ink-deep/50 flex flex-col">
                           <div className="p-4">
                              <RoomGallery images={room.images} name={room.name} />
                           </div>

                           {/* Availability Badge */}
                           <div className="absolute top-8 left-8 z-20">
                              <div className={`px-3 py-1.5 backdrop-blur-md border ${room.stock <= 2 
                                 ? 'bg-orange-500/90 border-orange-400 text-white animate-pulse' 
                                 : 'bg-ink/90 border-gold/40 text-gold'} small-caps text-[0.6rem] tracking-[0.1em] flex items-center gap-2`}>
                                 <div className={`w-1.5 h-1.5 rounded-full ${room.stock <= 2 ? 'bg-white' : 'bg-gold'}`} />
                                 <span>{room.stock} {room.stock === 1 ? 'Room' : 'Rooms'} Available</span>
                              </div>
                           </div>

                           {/* Details under image */}
                           <div className="p-6 flex-1 flex flex-col justify-between">
                              <div className="space-y-5">
                                 <div className="flex items-center justify-between">
                                    <h3 className="font-serif-display text-2xl text-soft">{room.name}</h3>
                                    <span className="text-[0.6rem] text-gold/60 small-caps tracking-widest font-medium">Max {room.guestsMax} Guests</span>
                                 </div>
                                 
                                 <div className="grid grid-cols-1 gap-3">
                                    <div className="flex items-center gap-3 text-[0.65rem] text-soft/60 font-light">
                                       <Maximize size={14} className="text-gold/40" />
                                       <span>{room.size}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[0.65rem] text-soft/60 font-light">
                                       <BedSingle size={14} className="text-gold/40" />
                                       <span>{room.bed}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[0.65rem] text-soft/60 font-light">
                                       <Bath size={14} className="text-gold/40" />
                                       <span>{room.bathroom}</span>
                                    </div>
                                 </div>
                              </div>
                              
                              <div className="mt-8 pt-6 border-t border-gold/5">
                                 <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                    {room.amenities.slice(0, 6).map(a => (
                                       <div key={a} className="flex items-center gap-2 text-[0.6rem] text-soft/30 font-light">
                                          <div className="w-1 h-1 bg-gold/20 rounded-full" />
                                          <span className="truncate">{a}</span>
                                       </div>
                                    ))}
                                 </div>
                                 <button 
                                   onClick={() => setShowRoomDetails(room)}
                                   className="text-gold/60 text-[0.65rem] mt-6 small-caps tracking-[0.2em] hover:text-gold hover:underline block transition-colors"
                                 >
                                    View More Details
                                 </button>
                              </div>
                           </div>
                        </div>

                        {/* Packages Section */}
                        <div className="flex-1 p-8 lg:p-12 bg-panel/5 flex flex-col">
                           <div className="flex justify-between items-start mb-10">
                              <div>
                                 <p className="text-soft-dim/40 text-xs font-light italic mb-2">"{room.desc}"</p>
                                 <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 text-gold/80">
                                       <Star size={12} fill="currentColor" />
                                       <span className="text-xs font-medium">{room.rating}</span>
                                    </div>
                                    <span className="text-[0.6rem] text-soft/30 small-caps tracking-widest border-l border-gold/10 pl-4">{room.reviews} Guest Reviews</span>
                                 </div>
                              </div>
                           </div>

                           <div className="space-y-6">
                              {room.packages.map((pkg: any) => (
                                 <div key={pkg.id} className="group/pkg relative p-6 border border-gold/10 bg-ink-deep/30 hover:border-gold/30 transition-all duration-500 rounded-sm">
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                                       <div className="flex-1">
                                          <div className="flex items-center gap-3 mb-3">
                                             <h4 className="font-serif-display text-xl text-soft">{pkg.name}</h4>
                                             {pkg.name.includes("Breakfast") && (
                                                <span className="bg-gold/10 text-gold text-[0.55rem] px-2 py-0.5 small-caps border border-gold/20">Best Value</span>
                                             )}
                                          </div>
                                          <div className="flex flex-wrap gap-4">
                                             {pkg.includes.map((inc: string) => (
                                                <span key={inc} className="text-[0.65rem] text-soft/40 flex items-center gap-1.5 font-light italic">
                                                   <CheckCircle2 size={10} className="text-gold/50" /> {inc}
                                                </span>
                                             ))}
                                          </div>
                                       </div>
                                       
                                       <div className="flex flex-col sm:items-end gap-4">
                                          <div className="text-center sm:text-right">
                                             <div className="flex items-baseline gap-2 justify-center sm:justify-end">
                                                <span className="text-3xl font-serif-display text-soft">₹{pkg.price.toLocaleString()}</span>
                                                <span className="text-[0.6rem] text-gold/60 small-caps tracking-widest">+ Taxes</span>
                                             </div>
                                             <p className="text-[0.55rem] text-soft/30 italic mt-1">Per night, excluding fees</p>
                                          </div>
                                          
                                          <button 
                                            onClick={() => handleBookRoom(room, pkg)}
                                            className="btn-gold px-10 py-3 text-[0.65rem] tracking-[0.25em]"
                                          >
                                             <span>Select Room</span>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              ))}
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
                         placeholder="royalty@vishnuempire.com"
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
                          <span className="text-gold font-serif-display">₹{(selectedRoom?.selectedPackage?.price * 2).toLocaleString()}</span>
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
                Thank you, {formData.name.split(' ')[0]}. Your stay at <b>{formData.property}</b> in the <b>{selectedRoom?.name}</b> ({selectedRoom?.selectedPackage?.name}) is confirmed. 
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
                   <div className="p-4 lg:p-8 bg-ink-deep">
                      <RoomGallery images={showRoomDetails.images} name={showRoomDetails.name} />
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
                           <h3 className="font-serif-display text-3xl text-soft mb-10">Room Amenities</h3>
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
                           <span className="text-4xl font-serif-display text-soft">₹{showRoomDetails.packages[0].price.toLocaleString()}</span>
                           <span className="text-xs text-soft/40 block">Price starting from</span>
                        </div>
                        <button 
                          onClick={() => { handleBookRoom(showRoomDetails, showRoomDetails.packages[0]); setShowRoomDetails(null); }}
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
