import { useState } from "react";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Crown, Sparkles, Gem, 
  ArrowRight, Check, Star, Mail, Phone, User
} from "lucide-react";

const SilverCircle = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: Crown,
      title: "Royal Privileges",
      desc: "Priority room upgrades, early check-ins, and late check-outs across all our villas."
    },
    {
      icon: Sparkles,
      title: "Bespoke Concierge",
      desc: "A dedicated personal assistant to curate your entire stay, from private jets to secret heritage tours."
    },
    {
      icon: Gem,
      title: "Exclusive Access",
      desc: "Invitation-only access to private dining rooms and high-society heritage events in Rewa."
    },
    {
      icon: ShieldCheck,
      title: "Preferred Rates",
      desc: "Guaranteed best available rates and exclusive member-only seasonal offers."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const scrollToForm = () => {
    const element = document.getElementById("application-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pb-1">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Signature Experiences/room.jpg" 
            className="w-full h-full object-cover opacity-30 scale-105 slow-zoom"
            alt="Royal Heritage"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center pt-4 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <GoldDivider width="25px" />
              <span className="eyebrow text-gold text-[0.6rem] tracking-[0.3em]">The Royal Circle</span>
              <GoldDivider width="25px" />
            </div>
            <h1 className="font-serif-display text-3xl md:text-5xl uppercase tracking-[0.25em] mb-5 leading-tight">
              Silver <br />
              <span className="text-gold italic normal-case tracking-normal">Circle</span>
            </h1>
            <p className="text-soft-dim/70 text-sm md:text-base font-light italic max-w-lg mx-auto leading-relaxed tracking-wide">
              The gateway to a refined collection of hospitality privileges.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-6 bg-ink-deep border-y border-gold/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-gold/5 bg-panel/5 hover:border-gold/20 transition-all duration-500"
              >
                <div className="mb-5 inline-block p-3 bg-gold/5 rounded-full group-hover:bg-gold/10 transition-colors">
                  <b.icon size={18} className="text-gold" />
                </div>
                <h3 className="font-serif-display text-base mb-3 tracking-[0.2em] uppercase">{b.title}</h3>
                <p className="text-[0.7rem] text-soft-dim/40 leading-relaxed font-light tracking-wide">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-panel/10 border border-gold/10 p-10 md:p-16 relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Crown size={120} />
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="text-center mb-10">
                    <h3 className="font-serif-display text-3xl uppercase tracking-[0.2em]">Application</h3>
                    <p className="text-xs text-soft/40 italic mt-2">Request your entry into the circle</p>
                  </div>

                  <div className="space-y-6">
                    <div className="relative group">
                      <User className="absolute left-0 top-1/2 -translate-y-1/2 text-gold/40 group-focus-within:text-gold transition-colors" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full bg-transparent border-b border-gold/20 py-4 pl-10 text-soft focus:border-gold outline-none transition-all placeholder:text-soft/20 font-light"
                      />
                    </div>
                    <div className="relative group">
                      <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gold/40 group-focus-within:text-gold transition-colors" size={18} />
                      <input 
                        required
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-transparent border-b border-gold/20 py-4 pl-10 text-soft focus:border-gold outline-none transition-all placeholder:text-soft/20 font-light"
                      />
                    </div>
                    <div className="relative group">
                      <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-gold/40 group-focus-within:text-gold transition-colors" size={18} />
                      <input 
                        type="tel" 
                        placeholder="Phone Number (Optional)" 
                        className="w-full bg-transparent border-b border-gold/20 py-4 pl-10 text-soft focus:border-gold outline-none transition-all placeholder:text-soft/20 font-light"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <button type="submit" className="btn-gold w-full py-5 text-sm uppercase tracking-[0.3em] font-medium group">
                      <span>Submit Application</span>
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-500" />
                    </button>
                    <p className="text-[0.6rem] text-center text-soft/30 mt-6 font-light uppercase tracking-widest">
                      Subject to review by the Imperial Council
                    </p>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-8"
                >
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full border border-gold/20 flex items-center justify-center">
                      <Check className="text-gold w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="font-serif-display text-3xl uppercase tracking-widest">Application Received</h3>
                  <p className="text-soft-dim/60 font-light italic leading-relaxed">
                    Thank you for your interest in The Royal Circle. Our Membership Director 
                    will review your application and contact you within 48 hours.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="text-gold small-caps text-xs tracking-widest hover:underline pt-4">
                    Send another request
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SilverCircle;
