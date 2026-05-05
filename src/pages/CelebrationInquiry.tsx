import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { useState } from "react";
import { CheckCircle2, Calendar, Users, MapPin, Tag } from "lucide-react";

const CelebrationInquiry = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ink text-soft">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <GoldDivider width="40px" />
                  <span className="eyebrow text-gold uppercase tracking-[0.3em]">Plan Your Event</span>
                  <GoldDivider width="40px" />
                </div>
                <h1 className="font-serif-display text-4xl md:text-6xl text-soft uppercase tracking-widest mb-6">
                  Celebration <span className="text-gold italic normal-case tracking-normal">Inquiry</span>
                </h1>
                <p className="text-soft-dim/70 max-w-2xl mx-auto font-light leading-relaxed italic">
                  "Allow us to orchestrate your most precious milestones with royal precision and legendary hospitality."
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-panel/10 border border-gold/10 p-8 md:p-12 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="small-caps text-[0.7rem] text-gold tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="small-caps text-[0.7rem] text-gold tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="small-caps text-[0.7rem] text-gold tracking-widest">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91"
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="small-caps text-[0.7rem] text-gold tracking-widest">Event Type</label>
                    <select className="w-full bg-ink border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light appearance-none">
                      <option value="wedding">Royal Wedding</option>
                      <option value="corporate">Corporate Meeting</option>
                      <option value="birthday">Milestone Birthday</option>
                      <option value="social">Social Gala</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                   <div className="space-y-2">
                      <label className="small-caps text-[0.7rem] text-gold tracking-widest flex items-center gap-2">
                        <MapPin size={12} /> Preferred Venue
                      </label>
                      <select className="w-full bg-ink border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light appearance-none">
                        <option value="lawn">Royal Wedding Lawn</option>
                        <option value="hall">Grand Heritage Hall</option>
                        <option value="courtyard">Celebration Courtyard</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="small-caps text-[0.7rem] text-gold tracking-widest flex items-center gap-2">
                        <Calendar size={12} /> Event Date
                      </label>
                      <input 
                        type="date"
                        className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="small-caps text-[0.7rem] text-gold tracking-widest flex items-center gap-2">
                        <Users size={12} /> Guests Count
                      </label>
                      <input 
                        type="number"
                        placeholder="Expected guests"
                        className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                      />
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="small-caps text-[0.7rem] text-gold tracking-widest">Special Requests & Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us more about your dream celebration..."
                    className="w-full bg-transparent border border-gold/10 p-4 text-soft outline-none focus:border-gold transition-colors font-light resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center pt-6">
                  <button type="submit" className="btn-gold px-20 py-5 group">
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-panel/5 border border-gold/10 p-12"
            >
              <div className="flex justify-center mb-8">
                <CheckCircle2 size={64} className="text-gold" strokeWidth={1} />
              </div>
              <h2 className="font-serif-display text-4xl text-soft uppercase tracking-widest mb-6">Inquiry Sent</h2>
              <p className="text-soft-dim max-w-md mx-auto font-light leading-relaxed mb-10">
                Thank you for choosing Vishnu Vilas. Our Royal Concierge team will review your inquiry 
                and get in touch within 24 hours to begin planning your extraordinary celebration.
              </p>
              <button 
                onClick={() => window.location.href = '/celebrations'}
                className="link-underline text-gold small-caps tracking-widest"
              >
                Back to Celebrations
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CelebrationInquiry;
