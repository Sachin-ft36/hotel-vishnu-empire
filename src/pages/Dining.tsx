import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { ArrowRight, Utensils, GlassWater, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DINING_EXPERIENCES = [
  {
    id: "royal-feast",
    title: "The Royal Baghelkhandi Feast",
    eyebrow: "Heritage Thali",
    description: "A culinary tribute to the forgotten recipes of the Rewa dynasty. Served in a traditional silver thali, this multi-course feast is a journey through the flavors of royal Indian heritage.",
    image: "/events/feast.png",
    details: [
      { icon: Utensils, label: "Heritage Silver Service" },
      { icon: Clock, label: "Dinner Only" },
      { icon: Users, label: "Private Tables Available" }
    ]
  },
  {
    id: "moonlight-dining",
    title: "Moonlit Courtyards",
    eyebrow: "Alfresco Elegance",
    description: "Dine under a canopy of stars in our historic marble courtyards. Experience an intimate setting with live traditional music and a menu curated for the evening's mood.",
    image: "/dinning_experience/dinning.jpg",
    details: [
      { icon: GlassWater, label: "Artisanal Cocktails" },
      { icon: Clock, label: "Evening Experience" },
      { icon: Users, label: "Bespoke Decor" }
    ]
  },
  {
    id: "villa-bistro",
    title: "The Villa Bistro",
    eyebrow: "Contemporary Classics",
    description: "A chic, all-day dining destination where the heritage of Rewa meets international culinary trends. From freshly brewed artisanal coffees to curated bistro classics, it's the perfect spot for casual luxury.",
    image: "/dinning_experience/dinning.jpg",
    details: [
      { icon: Utensils, label: "All-day Dining" },
      { icon: Clock, label: "8:00 AM - 11:00 PM" },
      { icon: Users, label: "Casual Chic" }
    ]
  }
];

const Dining = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/dinning_experience/dinning.jpg"
            alt="Signature Dining"
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
              <span className="eyebrow text-gold">Culinary Artistry</span>
              <GoldDivider width="40px" />
            </div>
            <h1 className="font-serif-display text-[clamp(2.5rem,8vw,5rem)] leading-none uppercase tracking-widest mb-8">
              Signature <br />
              <span className="text-gold italic normal-case tracking-normal">Dining</span>
            </h1>
            <p className="text-soft-dim max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed italic">
              "Every meal is a celebration of flavor, tradition, and impeccable service."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 px-6 lg:px-12 bg-ink-deep text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif-display text-4xl md:text-6xl text-soft mb-12 leading-tight">
            A Gastronomic <br />
            <span className="text-gold italic normal-case">Journey</span> through Time
          </h2>
          <p className="text-soft-dim/80 text-xl leading-relaxed font-light mb-20 max-w-2xl mx-auto">
            From royal recipes passed down through generations to modern interpretations
            of heritage flavors, our culinary team crafts moments that linger on the palate
            long after the evening concludes.
          </p>
        </div>

        {/* List */}
        <div className="max-w-[1400px] mx-auto text-left">
          {DINING_EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex flex-col lg:flex-row gap-16 lg:gap-32 mb-48 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-3/5 aspect-[16/10] overflow-hidden shadow-2xl"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full lg:w-2/5 flex flex-col justify-center"
              >
                <span className="eyebrow text-gold mb-6 block tracking-[0.3em]">{exp.eyebrow}</span>
                <h3 className="font-serif-display text-4xl md:text-5xl text-soft mb-8 leading-tight">
                  {exp.title}
                </h3>
                <p className="text-soft-dim/80 text-lg leading-relaxed font-light mb-10">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {exp.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-4">
                      <detail.icon size={16} className="text-gold" />
                      <span className="small-caps text-[0.7rem] text-soft/60">{detail.label}</span>
                    </div>
                  ))}
                </div>

                <Link to="/reserve-table">
                  <button className="btn-gold px-10 group">
                    <span>Reserve a Table</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Wine & Vintages */}
      <section className="py-32 bg-ink border-y border-gold/10 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <span className="eyebrow text-gold mb-8 block">The Vault</span>
          <h2 className="font-serif-display text-4xl md:text-6xl text-soft mb-12">
            Rare Vintages & <br />
            <span className="text-gold italic normal-case">Discreet</span> Cellars
          </h2>
          <p className="text-soft-dim/70 max-w-xl mx-auto text-lg mb-12 font-light">
            Our sommelier curates a selection of the world's finest labels, stored
            in temperature-controlled heritage cellars for the perfect pairing.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;
