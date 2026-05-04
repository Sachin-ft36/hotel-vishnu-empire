import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import offerSuite from "@/assets/offer_suite.png";
import offerSpa from "@/assets/exp_spa.png";
import offerHeritage from "@/assets/hotel_amber.png";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "The Suite Celebration",
    validity: "Valid until Sept 2026",
    description: "Enjoy a complimentary upgrade to our Presidential Suite, inclusive of private butler service and return airport transfers.",
    image: offerSuite,
    label: "Limited Edition"
  },
  {
    id: 2,
    title: "Serene Wellness Retreat",
    validity: "Seasonal Offer",
    description: "Rejuvenate your senses with a 3-night stay including daily spa rituals, guided meditation, and organic culinary experiences.",
    image: offerSpa,
    label: "Wellness"
  },
  {
    id: 3,
    title: "Early Booking Privilege",
    validity: "Ongoing",
    description: "Reserve your royal stay 30 days in advance to unlock exclusive rates and a curated heritage tour of the city.",
    image: offerHeritage,
    label: "Privilege"
  }
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-panel/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full opacity-30 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)]" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow mb-6 block text-gold tracking-[0.5em]">Privileges</span>
            <h1 className="font-serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase tracking-wider mb-6">
              Latest <br />
              <span className="text-gold italic normal-case tracking-normal">Offers</span>
            </h1>
            <p className="text-soft-dim max-w-xl mx-auto text-lg font-light leading-relaxed">
              A season of considered indulgences across the collection — 
              by invitation, never by spectacle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offers List */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div 
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-panel/40 border border-gold/10 overflow-hidden group hover:border-gold/30 transition-colors duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-ink text-[0.6rem] font-bold px-3 py-1 uppercase tracking-tighter">
                    {offer.label}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-[0.6rem] eyebrow text-gold/60 mb-3 block italic">{offer.validity}</span>
                <h3 className="font-serif-display text-2xl mb-4 group-hover:text-gold transition-colors duration-500">
                  {offer.title}
                </h3>
                <p className="text-soft-dim/70 text-sm leading-relaxed font-light mb-8 h-20 overflow-hidden">
                  {offer.description}
                </p>
                <button className="w-full py-4 border border-gold/20 text-gold small-caps text-[0.7rem] hover:bg-gold hover:text-ink transition-all duration-500 tracking-[0.2em]">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seasonal Membership Banner */}
      <section className="pb-32 px-6 container mx-auto">
        <div className="relative overflow-hidden p-12 lg:p-24 border border-gold/10 bg-panel/20 text-center">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif-display text-3xl md:text-5xl mb-8">
              The Royal <span className="text-gold italic normal-case">Circle</span>
            </h2>
            <p className="text-soft-dim mb-10 font-light">
              Unlock a world of unparalleled benefits, including early access 
              to seasonal offers and private events across our global collection.
            </p>
            <button className="link-underline text-gold small-caps">
              Discover Membership
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
