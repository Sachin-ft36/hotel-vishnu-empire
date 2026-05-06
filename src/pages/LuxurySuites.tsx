import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { ArrowRight, Bed, Bath, Coffee, Tv } from "lucide-react";
import { Link } from "react-router-dom";

import { SEO } from "@/components/regalia/SEO";

const LuxurySuites = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <SEO 
        title="Luxury Suites in Rewa | Premium Hotel Rooms - Hotel Vishnu Vilas"
        description="Discover the most luxurious suites in Rewa at Hotel Vishnu Vilas. Experience historical grandeur with modern amenities in our premium heritage sanctuaries."
        keywords="luxury suites in rewa, premium hotel rooms rewa, best stay in rewa, heritage hotel rewa, luxury accommodation rewa"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/bedroom.mp4"
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
              <span className="eyebrow text-gold">Heritage Sanctuaries</span>
              <GoldDivider width="40px" />
            </div>
            <h1 className="font-serif-display text-[clamp(2.5rem,8vw,5rem)] leading-none uppercase tracking-widest mb-8">
              Luxury <br />
              <span className="text-gold italic normal-case tracking-normal">Suites</span>
            </h1>
            <p className="text-soft-dim max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed italic">
              "The most refined luxury suites in Rewa, where historical grandeur meets modern comfort."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 px-6 lg:px-12 bg-ink-deep">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif-display text-4xl md:text-5xl text-soft mb-10 leading-tight">
              An Architectural <br />
              <span className="text-gold italic normal-case">Poem</span> of Rest
            </h2>
            <p className="text-soft-dim/80 text-lg leading-relaxed font-light mb-10">
              Each suite at Vishnu Vilas is a meticulously restored sanctuary,
              featuring original period furniture, hand-carved marble, and the
              finest Italian linens. Here, silence is the ultimate luxury.
            </p>

            <div className="grid grid-cols-2 gap-10 border-t border-gold/10 pt-10">
              <div className="flex flex-col gap-3">
                <Bed size={24} className="text-gold" />
                <span className="small-caps text-[0.7rem] text-soft/70">Royal King Beds</span>
              </div>
              <div className="flex flex-col gap-3">
                <Bath size={24} className="text-gold" />
                <span className="small-caps text-[0.7rem] text-soft/70">Marble En-suites</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-square overflow-hidden shadow-2xl border border-gold/10"
          >
            <img
              src="/Signature Experiences/room.jpg"
              className="w-full h-full object-cover slow-zoom"
              alt="Suite Detail"
            />
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-32 bg-ink border-y border-gold/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <GoldDivider width="40px" className="mx-auto mb-8" />
            <h2 className="font-serif-display text-4xl md:text-6xl text-soft">In-Suite <span className="text-gold italic">Privileges</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold group-hover:text-ink transition-all duration-500">
                <Coffee size={24} strokeWidth={1} />
              </div>
              <h4 className="font-serif-display text-2xl text-soft mb-4">Personal Butler</h4>
              <p className="text-soft-dim/60 text-sm font-light">Discreet, 24-hour service tailored to your every preference.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold group-hover:text-ink transition-all duration-500">
                <Tv size={24} strokeWidth={1} />
              </div>
              <h4 className="font-serif-display text-2xl text-soft mb-4">State-of-the-art Tech</h4>
              <p className="text-soft-dim/60 text-sm font-light">Seamlessly integrated smart home features within heritage walls.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold group-hover:text-ink transition-all duration-500">
                <GoldDivider width="24px" />
              </div>
              <h4 className="font-serif-display text-2xl text-soft mb-4">Pillow Menu</h4>
              <p className="text-soft-dim/60 text-sm font-light">A curated selection of artisanal pillows for the perfect night's rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 text-center px-6">
        <h2 className="font-serif-display text-4xl md:text-6xl text-soft mb-12">Experience the <br /><span className="text-gold italic">Pinnacle</span> of Comfort</h2>
        <Link to="/request-invitation">
          <button className="btn-gold px-12 group">
            <span>Reserve Your Stay</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default LuxurySuites;
