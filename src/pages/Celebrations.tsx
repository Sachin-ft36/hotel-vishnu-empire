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

const PACKAGES = [
   {
      name: "Silver",
      price: "1,10,000",
      pax: "100",
      features: [
         "Standard Decoration",
         "Rooms - 2",
         "Music System",
         "Food Menu (12 Items)"
      ],
      highlight: false
   },
   {
      name: "Platinum",
      price: "1,60,000",
      pax: "100",
      features: [
         "Decoration with Entry",
         "Rooms - 2",
         "Professional Music",
         "Food Menu (21 Items)"
      ],
      highlight: true
   },
   {
      name: "Gold",
      price: "1,40,000",
      pax: "100",
      features: [
         "Decoration with Entry",
         "Rooms - 2",
         "Enhanced Music",
         "Food Menu (18 Items)"
      ],
      highlight: false
   }
];

import { SEO } from "@/components/regalia/SEO";

const Celebrations = () => {
   return (
      <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
         <SEO 
            title="Best Banquet Hall & Wedding Venue in Rewa | Hotel Vishnu Empire"
            description="Looking for the best banquet hall or wedding venue in Rewa? Hotel Vishnu Empire offers grand lawns and luxury halls for your royal celebrations in Rewa."
            keywords="best banquet hall in rewa, wedding venue in rewa, marriage garden rewa, event spaces rewa, luxury wedding rewa"
         />
         <Navbar />

         {/* Hero Section */}
         <section className="relative h-[100vh] w-full overflow-hidden">
            <div className="absolute inset-0">
               <video
                  src="/video/wedding.mp4"
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
                     <span className="eyebrow text-gold uppercase tracking-[0.3em]">Royal Celebrations in Rewa</span>
                     <GoldDivider width="40px" />
                  </div>
                  <h1 className="font-serif-display text-[clamp(2.5rem,8vw,5.5rem)] leading-none uppercase tracking-widest mb-8">
                     Timeless <br />
                     <span className="text-gold italic normal-case tracking-normal">Weddings</span> & Events
                  </h1>
                  <p className="text-soft-dim max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed italic">
                     "The most prestigious wedding venue and banquet destination in the heart of Rewa."
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Banquet Packages - Main Section */}
         <section className="py-32 bg-ink-deep border-b border-gold/10">
            <div className="container mx-auto px-6">
               <div className="text-center mb-20">
                  <span className="eyebrow text-gold mb-4 block italic uppercase tracking-[0.2em]">Grand Events, Made Easy</span>
                  <div className="flex items-center justify-center gap-6">
                    <GoldDivider width="40px" />
                    <h2 className="font-serif-display text-4xl md:text-6xl text-soft uppercase tracking-wider">
                       Banquet Packages
                    </h2>
                    <GoldDivider width="40px" />
                  </div>
                  <p className="text-soft-dim/60 max-w-2xl mx-auto mt-8 text-sm md:text-base font-light italic">
                    "Tailored experiences for your most cherished moments, from intimate gatherings to royal celebrations."
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {PACKAGES.map((pkg, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className={`relative group ${pkg.highlight ? 'md:-translate-y-4 z-10' : ''}`}
                     >
                        <div className={`h-full bg-ink border transition-all duration-700 ${pkg.highlight ? 'border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border-gold/20'}`}>
                           {/* Package Header */}
                           <div className={`py-5 text-center border-b ${pkg.highlight ? 'bg-gold border-gold' : 'bg-gold/5 border-gold/20'}`}>
                              <h3 className={`font-serif-display text-2xl uppercase tracking-widest ${pkg.highlight ? 'text-ink font-bold' : 'text-gold'}`}>
                                 {pkg.name}
                              </h3>
                           </div>

                           {/* Capacity Callout */}
                           <div className="py-6 text-center border-b border-gold/10 bg-gold/5">
                              <span className="small-caps text-soft text-[0.7rem] block opacity-80 italic tracking-widest mb-1">On Booking Of</span>
                              <span className="text-xl font-serif-display text-soft uppercase tracking-widest">{pkg.pax} PAX</span>
                           </div>

                           {/* Features List */}
                           <div className="p-10 space-y-6 text-center min-h-[320px] flex flex-col justify-center">
                              {pkg.features.map((feat, i) => (
                                 <p key={i} className="text-soft-dim font-light text-base italic border-b border-gold/5 pb-4 last:border-0 last:pb-0">
                                    {feat}
                                 </p>
                              ))}
                           </div>

                           {/* Price Footer */}
                           <div className="p-8 border-t border-gold/20 bg-ink-deep/50">
                              <div className="bg-red-950/80 border border-gold/40 py-5 px-6 text-center rounded-sm">
                                 <span className="text-soft font-serif-display text-3xl tracking-wide">
                                    ₹ {pkg.price}/-
                                 </span>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Venue Showcase */}
         <section className="py-32 bg-ink">
            <div className="container mx-auto px-6">
               <div className="flex flex-col items-center text-center gap-8 mb-20">
                  <div>
                     <span className="eyebrow text-gold mb-4 block">The Estate</span>
                     <h2 className="font-serif-display text-4xl md:text-6xl text-soft uppercase tracking-widest">Banquets <span className="text-gold italic">&</span> Venues <span className="text-gold font-light block mt-2 text-2xl md:text-3xl">in Rewa</span></h2>
                  </div>
                  <p className="text-soft-dim/60 max-w-2xl text-sm md:text-base font-light leading-relaxed">
                     Choose from a selection of the best banquet halls and outdoor wedding lawns in Rewa,
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
