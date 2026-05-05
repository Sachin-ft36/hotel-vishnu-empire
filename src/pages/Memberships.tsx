import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import seal from "@/assets/membership_seal.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Silver Circle",
    description: "The gateway to a refined collection of hospitality privileges.",
    features: [
      "Preferred room upgrades (subject to availability)",
      "Early check-in & Late check-out",
      "Daily breakfast for two",
      "10% Savings on Spa treatments"
    ],
    cta: "Inquire Now",
    accent: "border-soft/20"
  },
  {
    name: "Gold Circle",
    description: "Elevated recognition with bespoke services tailored to your stay.",
    features: [
      "Guaranteed room upgrades",
      "Private Butler service",
      "Complimentary airport limousine transfers",
      "20% Savings on Dining & Wellness",
      "Access to private heritage events"
    ],
    cta: "Join Gold Circle",
    accent: "border-gold/50 shadow-[0_0_30px_-10px_rgba(200,169,106,0.3)]"
  },
  {
    name: "Platinum Inner Circle",
    description: "The ultimate expression of restraint and exclusivity.",
    features: [
      "Automatic upgrade to best available suite",
      "Dedicated 24/7 Lifestyle Manager",
      "Private Jet & Yacht charter privileges",
      "Bespoke heritage tours & private openings",
      "Complimentary stay at any new opening"
    ],
    cta: "Invitation Only",
    accent: "border-soft shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]"
  }
];

const Memberships = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={seal}
            alt="Membership Seal"
            className="w-full h-full object-cover scale-105 opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-ink/80" />
        </div>

        <div className="relative z-10 text-center px-6 pt-48">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow mb-6 block text-gold tracking-[0.5em]">The Inner Circle</span>
            <h1 className="font-serif-display text-[clamp(2rem,5vw,3.5rem)] leading-none uppercase tracking-wider mb-8">
              VISHNU VILAS <br />
              <span className="text-gold italic normal-case tracking-normal">Privileges</span>
            </h1>
            <p className="text-soft-dim max-w-xl mx-auto text-lg font-light leading-relaxed">
              A membership of restraint. Recognition that travels with you,
              across the collection and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="pb-32 pt-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-panel/20 p-10 border ${tier.accent} flex flex-col h-full`}
            >
              <h3 className={`font-serif-display text-3xl mb-4 ${index === 1 ? 'text-gold' : 'text-soft'}`}>
                {tier.name}
              </h3>
              <p className="text-soft-dim/70 text-sm font-light mb-10 h-12">
                {tier.description}
              </p>

              <div className="space-y-6 mb-12 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex gap-4 items-start">
                    <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                    <span className="text-sm font-light text-soft-dim italic leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={index === 0 ? "/silver-circle" : index === 1 ? "/join-the-circle" : "/platinum-circle"}
                className="w-full"
              >
                <button className={`w-full py-4 small-caps text-[0.7rem] transition-all duration-500 tracking-[0.2em] ${index === 1
                  ? 'bg-gold text-ink hover:bg-gold-bright'
                  : 'border border-gold/30 text-gold hover:bg-gold/10'
                  }`}>
                  {tier.cta}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Recognition */}
      <section className="py-32 border-t border-gold/10 bg-panel/10 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif-display text-4xl lg:text-6xl mb-8 leading-tight">
              Global <span className="text-gold italic normal-case">Recognition</span>, <br />
              Local Grace.
            </h2>
            <p className="text-soft-dim/80 text-lg font-light leading-relaxed mb-10">
              Whether you are in the heart of London or the desert sands of Jodhpur,
              your status as a member ensures a level of service that is
              felt, not just seen.
            </p>
            <GoldDivider width="80px" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <img src={seal} alt="Privileges" className="w-full h-auto opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Memberships;
