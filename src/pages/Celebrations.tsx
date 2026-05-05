import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { ArrowRight, MapPin, Users, Utensils, Star, Camera, Music, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

const VENUES = [
   {
      name: "Royal Wedding Lawn",
      size: "45,000 sq. ft.",
      capacity: "800 - 1,200 Guests",
      price: "₹10,00,000",
      description: "A sprawling emerald landscape designed for the grandest royal weddings. Under the starlit sky, this majestic lawn transforms into a fairytale setting with grand stage setups and traditional floral architecture.",
      features: ["Grand Procession Path", "Mandap Over Water", "Bespoke Royal Stage"]
   },
   {
      name: "Grand Heritage Hall",
      size: "8,000 sq. ft.",
      capacity: "50 - 250 Guests",
      price: "₹3,50,000",
      description: "A sophisticated venue tailored for high-stakes corporate meetings and annual leadership summits. Blending heritage aesthetics with state-of-the-art technology for a refined professional environment.",
      features: ["Advanced AV Systems", "Executive Boardroom Layout", "Ultra-fast Connectivity"]
   },
   {
      name: "Celebration Courtyard",
      size: "12,000 sq. ft.",
      capacity: "100 - 350 Guests",
      price: "₹5,00,000",
      description: "The perfect destination for milestone birthdays and private gala parties. This atmospheric historic courtyard provides an intimate yet grand setting for creating unforgettable memories with loved ones.",
      features: ["Intimate Night Setting", "Live Entertainment Stage", "Themed Party Decor"]
   }
];

const FACILITIES = [
   { icon: Utensils, title: "Royal Catering", desc: "Bespoke menus featuring heritage Rewa recipes and global gourmet favorites." },
   { icon: Flower2, title: "Floral Architecture", desc: "In-house floral designers to craft immersive botanical installations." },
   { icon: Music, title: "Entertainment", desc: "Access to traditional folk artists, live bands, and world-class DJs." },
   { icon: Camera, title: "Photography", desc: "Curated list of cinematic storytellers to capture your royal journey." }
];

const Celebrations = () => {
   return (
      <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
         <Navbar />

         {/* Hero Section */}
         <section className="relative h-[100vh] w-full overflow-hidden">
            <div className="absolute inset-0">
               <video
                  src="/weeding.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-105 slow-zoom opacity-40"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/20 to-ink" />
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
               >
                  <div className="flex items-center justify-center gap-4 mb-8">
                     <GoldDivider width="40px" />
                     <span className="eyebrow text-gold">The Royal Ateliers</span>
                     <GoldDivider width="40px" />
                  </div>
                  <h1 className="font-serif-display text-[clamp(2.5rem,8vw,5.5rem)] leading-none uppercase tracking-widest mb-8">
                     Timeless <br />
                     <span className="text-gold italic normal-case tracking-normal">Celebrations</span>
                  </h1>
                  <p className="text-soft-dim max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed italic">
                     "A bespoke destination for weddings, celebrations, dining, and unforgettable experiences."
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Pricing & Intro */}
         <section className="py-32 px-6 lg:px-12 bg-ink-deep border-b border-gold/10">
            <div className="max-w-4xl mx-auto text-center">
               <h2 className="font-serif-display text-4xl md:text-6xl text-soft mb-12 italic">The Pinnacle of <span className="text-gold not-italic">Hospitality</span></h2>
               <p className="text-soft-dim/80 text-xl leading-relaxed font-light mb-16">
                  From a grand royal procession to an intimate exchange of vows,
                  Vishnu Vilas provides a backdrop of unparalleled majesty.
                  Whether it's a milestone anniversary, a royal wedding, or an elite corporate gala,
                  our spaces are designed with quiet intention for your most cherished moments.
               </p>
               <div className="inline-block border border-gold/30 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gold opacity-30" />
                  <span className="small-caps text-gold block mb-4 tracking-[0.3em]">Bespoke Events Start From</span>
                  <span className="text-5xl md:text-7xl font-serif-display text-soft">₹3,50,000</span>
                  <p className="text-[0.6rem] text-soft/40 small-caps mt-4 tracking-widest">+ Taxes as applicable | Full Property Buyout Available</p>
               </div>
            </div>
         </section>

         {/* Venue Showcase */}
         <section className="py-32 bg-ink">
            <div className="container mx-auto px-6">
               <div className="flex flex-col items-center text-center gap-8 mb-20">
                  <div>
                     <span className="eyebrow text-gold mb-4 block">The Estate</span>
                     <h2 className="font-serif-display text-4xl md:text-6xl text-soft">Our Venues</h2>
                  </div>
                  <p className="text-soft-dim/60 max-w-2xl text-sm md:text-base font-light leading-relaxed">
                     Choose from a selection of historic indoor and outdoor venues,
                     each offering a unique perspective of our heritage estate.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {VENUES.map((venue, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="group flex flex-col h-full"
                     >
                        <div className="aspect-[16/10] bg-panel/20 border border-gold/10 mb-8 overflow-hidden relative">
                           <div className="absolute inset-0 flex items-center justify-center text-gold/20 text-4xl font-serif-display italic">
                              {venue.name.split(' ')[1]}
                           </div>
                           <img
                              src={idx === 0 ? "/events/feast.png" : (idx === 1 ? "/dinning_experience/dinning.jpg" : "/events/gala.png")}
                              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
                              alt={venue.name}
                           />
                           <div className="absolute top-4 right-4 bg-ink/80 backdrop-blur-md border border-gold/20 px-4 py-2">
                              <span className="text-gold font-serif-display text-lg">{venue.price}</span>
                           </div>
                        </div>
                        <h3 className="font-serif-display text-2xl text-soft mb-4">{venue.name}</h3>
                        <div className="flex gap-6 mb-6">
                           <div className="flex items-center gap-2">
                              <MapPin size={14} className="text-gold" />
                              <span className="text-[0.65rem] small-caps text-soft/60">{venue.size}</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <Users size={14} className="text-gold" />
                              <span className="text-[0.65rem] small-caps text-soft/60">{venue.capacity}</span>
                           </div>
                        </div>
                        <p className="text-soft-dim/70 text-sm leading-relaxed font-light mb-8 italic flex-grow">"{venue.description}"</p>

                        <div className="space-y-8 mt-auto">
                           <ul className="space-y-2">
                              {venue.features.map((f, i) => (
                                 <li key={i} className="flex items-center gap-3 text-[0.6rem] small-caps text-soft/40 tracking-widest">
                                    <Star size={10} className="text-gold/50" />
                                    {f}
                                 </li>
                              ))}
                           </ul>

                           <Link to="/celebration-inquiry" className="block">
                              <button className="w-full py-4 border border-gold/30 text-gold small-caps text-[0.7rem] tracking-[0.2em] hover:bg-gold hover:text-ink transition-all duration-500">
                                 Inquire Now
                              </button>
                           </Link>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Facilities Grid */}
         <section className="py-32 bg-ink-deep border-y border-gold/10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
               {FACILITIES.map((fac, i) => (
                  <div key={i} className="text-center group">
                     <div className="w-16 h-16 border border-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                        <fac.icon size={24} className="text-gold/60" />
                     </div>
                     <h4 className="small-caps text-soft text-[0.75rem] mb-4 tracking-widest font-medium">{fac.title}</h4>
                     <p className="text-soft-dim/50 text-xs leading-relaxed font-light">{fac.desc}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* Request Section */}
         <section className="py-40 bg-ink text-center px-6">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
               <span className="eyebrow text-gold mb-8 block">Inquiry</span>
               <h2 className="font-serif-display text-5xl md:text-8xl text-soft mb-12">Compose Your <br /><span className="text-gold italic">Dream</span></h2>
               <Link to="/celebration-inquiry">
                  <button className="btn-gold px-14 py-5 h-auto group">
                     <span className="tracking-[0.3em] text-sm text-ink">Request a Celebration Prospectus</span>
                     <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
               </Link>
            </motion.div>
         </section>

         <Footer />
      </div>
   );
};

export default Celebrations;
