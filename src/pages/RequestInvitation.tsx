import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Send } from "lucide-react";

const RequestInvitation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side - Intent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <GoldDivider width="40px" />
              <span className="eyebrow text-gold">Exclusive Access</span>
            </div>
            
            <h1 className="font-serif-display text-4xl md:text-6xl text-soft mb-8 leading-tight">
              Request An <br />
              <span className="text-gold italic normal-case">Invitation</span>
            </h1>
            
            <p className="text-soft-dim/80 text-lg font-light leading-relaxed mb-12 max-w-md italic">
              "Entry into our private assemblies is reserved for those who appreciate 
              the finer threads of heritage and the quiet luxury of curated moments."
            </p>

            <div className="space-y-6">
              <div className="flex gap-5 items-start">
                <div className="w-5 h-5 rounded-full border border-gold/30 flex items-center justify-center mt-1 shrink-0">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                </div>
                <div>
                  <h4 className="small-caps text-soft text-xs mb-1">Private Assemblies</h4>
                  <p className="text-soft-dim/60 text-xs font-light tracking-wide">Access to royal dinners, Sufi nights, and exclusive heritage tours.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-5 h-5 rounded-full border border-gold/30 flex items-center justify-center mt-1 shrink-0">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                </div>
                <div>
                  <h4 className="small-caps text-soft text-xs mb-1">Priority Selection</h4>
                  <p className="text-soft-dim/60 text-xs font-light tracking-wide">Be the first to know about seasonal openings and limited-edition experiences.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-panel/10 border border-gold/15 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -mr-16 -mt-16" />

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="small-caps text-[0.65rem] text-gold tracking-widest">Given Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="small-caps text-[0.65rem] text-gold tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="small-caps text-[0.65rem] text-gold tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="small-caps text-[0.65rem] text-gold tracking-widest">Event Interest</label>
                    <select className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light appearance-none">
                      <option className="bg-ink" value="general">General Membership</option>
                      <option className="bg-ink" value="feast">Royal Baghelkhandi Feast</option>
                      <option className="bg-ink" value="sufi">Sufi Night at the Fort</option>
                      <option className="bg-ink" value="gala">White Tiger Gala</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="small-caps text-[0.65rem] text-gold tracking-widest">Your Inquiry</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-soft outline-none focus:border-gold transition-colors font-light resize-none"
                    placeholder="Tell us a little about yourself or your requirements..."
                  />
                </div>

                <button type="submit" className="btn-gold w-full py-5 flex items-center justify-center gap-4 group">
                  <span>Send Request</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
                  <Check className="text-gold" size={32} />
                </div>
                <h3 className="font-serif-display text-3xl text-soft mb-4 uppercase tracking-widest">Request Received</h3>
                <p className="text-soft-dim/70 font-light leading-relaxed mb-10 max-w-xs mx-auto italic">
                  "Your interest has been noted in the private ledgers. Our Concierge will reach out to you within two moon cycles."
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-gold text-[0.65rem] small-caps tracking-[0.3em] hover:text-soft transition-colors"
                >
                  Send Another Request
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestInvitation;
