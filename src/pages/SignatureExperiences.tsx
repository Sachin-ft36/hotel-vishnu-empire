import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SIGNATURE_ITEMS = [
  {
    id: "weddings",
    title: "Timeless Weddings",
    eyebrow: "Bespoke Ateliers",
    description: "A bespoke atelier of weddings, set within palaces, beachfronts and private estates. We craft celebrations that are not just events, but milestones of a lifetime.",
    image: "/Signature Experiences/wedding.jpg",
    details: [
      { icon: MapPin, label: "Palaces, Estates & Beachfronts" },
      { icon: Users, label: "Up to 500 Guests" },
      { icon: Calendar, label: "Year-round availability" }
    ],
    features: [
      "Royal procession orchestration",
      "Bespoke floral architecture",
      "Michelin-inspired heritage catering",
      "Private bridal concierge"
    ]
  },
  {
    id: "suites",
    title: "Luxury Suites",
    eyebrow: "Heritage Sanctuaries",
    description: "Sanctuaries of refined comfort, where historical grandeur meets modern luxury. Every suite tells a story of the eras gone by, while offering the pinnacle of contemporary living.",
    image: "/Signature Experiences/room.jpg",
    details: [
      { icon: MapPin, label: "Prime Heritage Wings" },
      { icon: Users, label: "Butler Service" },
      { icon: Calendar, label: "Private Terrace Views" }
    ],
    features: [
      "Antique period furniture",
      "Italian marble baths",
      "Pillow menu selection",
      "Personalized welcome rituals"
    ]
  },
  {
    id: "hallways",
    title: "Hallways of Elegance",
    eyebrow: "Sanctuary of Stories",
    description: "A journey through time, where every corridor whispers stories of a storied past. These are not just paths, but galleries of history and art.",
    image: "/Signature Experiences/corridor.jpg",
    details: [
      { icon: MapPin, label: "Historic Corridors" },
      { icon: Users, label: "Guided History Walks" },
      { icon: Calendar, label: "Centuries of Art" }
    ],
    features: [
      "Curated antique collections",
      "Hand-painted frescoes",
      "Atmospheric evening lighting",
      "Acoustic design for stillness"
    ]
  },
  {
    id: "culinary",
    title: "Culinary Journeys",
    eyebrow: "Maison of Flavors",
    description: "Tables set by master chefs, vintages drawn from a vault of three centuries. Our dining is an exploration of the senses, rooted in tradition and elevated by innovation.",
    image: "/Signature Experiences/food.jpg",
    details: [
      { icon: MapPin, label: "Private Dining Vaults" },
      { icon: Users, label: "Chef's Table Experience" },
      { icon: Calendar, label: "Heritage Wine Collection" }
    ],
    features: [
      "Forgotten royal recipes",
      "Organic estate-to-table",
      "Sommelier-led tastings",
      "Alfresco moonlit dining"
    ]
  }
];

const SignatureExperiences = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Signature Experiences/wedding.jpg"
            alt="Signature Experiences"
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
              <span className="eyebrow text-gold">The Collection</span>
              <GoldDivider width="40px" />
            </div>
            <h1 className="font-serif-display text-[clamp(2.5rem,8vw,6rem)] leading-none uppercase tracking-widest mb-8">
              Signature <br />
              <span className="text-gold italic normal-case tracking-normal">Experiences</span>
            </h1>
            <p className="text-soft-dim max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed italic">
              "A collection composed with quiet intention for those who seek the extraordinary."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6 lg:px-12 bg-ink-deep">
        <div className="max-w-[1400px] mx-auto">
          {SIGNATURE_ITEMS.map((item, index) => (
            <div 
              key={item.id}
              id={item.id}
              className={`flex flex-col lg:flex-row gap-16 lg:gap-32 mb-48 scroll-mt-32 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 aspect-[4/5] overflow-hidden relative group shadow-2xl"
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-700" />
                <div className="absolute top-0 left-0 w-full h-full border-[20px] border-ink opacity-10 group-hover:opacity-0 transition-opacity duration-1000" />
              </motion.div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="eyebrow text-gold mb-6 block tracking-[0.3em]">{item.eyebrow}</span>
                  <h2 className="font-serif-display text-5xl md:text-7xl text-soft mb-8 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-soft-dim/80 text-xl leading-relaxed font-light mb-12">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-y border-gold/10 py-10">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center">
                          <detail.icon size={16} className="text-gold" />
                        </div>
                        <span className="small-caps text-[0.7rem] text-soft/70 tracking-widest">{detail.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-12">
                    <h4 className="small-caps text-gold mb-6 text-[0.75rem]">Key Highlights</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-soft/60 font-light">
                          <div className="w-1 h-1 bg-gold rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/request-invitation">
                    <button className="btn-gold group px-10">
                      <span>Reserve Experience</span>
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Teaser */}
      <section className="py-40 bg-ink text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <span className="eyebrow text-gold mb-8 block tracking-widest">Inquiry</span>
            <h2 className="font-serif-display text-5xl md:text-8xl text-soft mb-12 italic font-light tracking-wider">
              Compose Your <br />
              <span className="text-gold normal-case not-italic">Private Journey</span>
            </h2>
            <p className="text-soft-dim/70 max-w-xl mx-auto text-lg mb-16 font-light leading-relaxed">
              Our dedicated concierge is available to curate every detail of your stay, 
              ensuring a bespoke experience that exceeds expectations.
            </p>
            <Link to="/request-invitation">
              <button className="btn-gold px-14 py-5 h-auto">
                <span className="text-sm tracking-[0.2em]">Contact Concierge</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignatureExperiences;
