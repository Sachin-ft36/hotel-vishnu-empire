import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { Reveal } from "@/components/regalia/Reveal";
import { Phone, Mail, MapPin, Send, Building2, Utensils, GlassWater, Film, PartyPopper, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Luxury Stay",
    icon: Building2,
    desc: "20 bespoke suites designed for the modern royal, offering unparalleled comfort and heritage charm.",
    image: "/assets/generated/luxury_heritage_suite_rewa_1778074881004.png",
    eyebrow: "Stay"
  },
  {
    title: "Grand Banquets",
    icon: PartyPopper,
    desc: "A regal venue for weddings and corporate galas, accommodating over 200 guests with impeccable service.",
    image: "/assets/generated/grand_banquet_hall_rewa_wedding_1778074861196.png",
    eyebrow: "Events"
  },
  {
    title: "Royal Dining",
    icon: Utensils,
    desc: "A multi-cuisine culinary journey featuring authentic flavors and sophisticated ambiance.",
    image: "/assets/generated/royal_restaurant_fine_dining_rewa_1778074917780.png",
    eyebrow: "Cuisine"
  },
  {
    title: "The Empire Bar",
    icon: GlassWater,
    desc: "An elite retreat for connoisseurs, serving curated spirits and signature cocktails.",
    image: "/assets/generated/royal_bar_and_lounge_rewa_1778074900251.png",
    eyebrow: "Lounge"
  },
  {
    title: "Royal Cinemas",
    icon: Film,
    desc: "Experience the magic of cinema in HD with 3D sound across our dual premium auditoriums.",
    image: "/assets/generated/royal_cinemas_rewa_auditorium_1778074843991.png",
    eyebrow: "Cinema"
  }
];

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "Hotel",
    message: ""
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const isPaused = useRef(false);

  const DOUBLED_SERVICES = [...SERVICES, ...SERVICES, ...SERVICES];

  const animate = () => {
    if (!isPaused.current && scrollRef.current) {
      const el = scrollRef.current;
      el.scrollLeft += 0.5;

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    alert("Thank you for your interest. Our royal concierge will reach out to you shortly.");
  };

  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)]" />
        </div>
        
        <Reveal>
          <span className="eyebrow text-gold mb-6 block tracking-[0.5em]">The Empire Collection</span>
          <h1 className="font-serif-display text-[clamp(2.5rem,8vw,5rem)] leading-none uppercase tracking-tighter mb-8">
            Services & <br />
            <span className="text-gold italic normal-case tracking-normal">Inquiries</span>
          </h1>
        </Reveal>
      </section>

      {/* Inquiry Form Section */}
      <section className="pb-32 pt-12 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Contact Info */}
          <div className="space-y-16">
            <Reveal>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <GoldDivider width="40px" />
                  <span className="eyebrow text-gold">Easy To Reach</span>
                </div>
                <h2 className="font-serif-display text-4xl md:text-5xl uppercase tracking-wider">
                  Connect With <br />
                  <span className="text-gold italic normal-case">The Empire</span>
                </h2>
              </div>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={100}>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <MapPin className="text-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="small-caps text-gold text-xs tracking-widest mb-2">Location</h4>
                    <p className="text-soft-dim font-light leading-relaxed">
                      Railway Station Road, Dhekaha,<br />
                      Rewa, Madhya Pradesh - 486001
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Phone className="text-gold w-5 h-5" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="small-caps text-gold text-xs tracking-widest mb-1">Hotel Inquiries</h4>
                      <p className="text-soft-dim font-light">+91 88153 93403</p>
                    </div>
                    <div>
                      <h4 className="small-caps text-gold text-xs tracking-widest mb-1">Royal Cinemas</h4>
                      <p className="text-soft-dim font-light">+91 83055 68437</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Mail className="text-gold w-5 h-5" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="small-caps text-gold text-xs tracking-widest mb-1">General Support</h4>
                      <p className="text-soft-dim font-light">info@vishnuempire.com</p>
                    </div>
                    <div>
                      <h4 className="small-caps text-gold text-xs tracking-widest mb-1">Reservations</h4>
                      <p className="text-soft-dim font-light">hotel@vishnuempire.com</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <Reveal delay={400}>
            <div className="bg-ink p-8 md:p-12 border border-gold/10 relative shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold/50" />
              <h3 className="font-serif-display text-2xl uppercase tracking-widest mb-10 text-center">Send Us Your Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="small-caps text-[0.6rem] text-gold/60 tracking-widest">Full Name*</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-panel/20 border-b border-gold/10 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="small-caps text-[0.6rem] text-gold/60 tracking-widest">Mobile Number*</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-panel/20 border-b border-gold/10 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="small-caps text-[0.6rem] text-gold/60 tracking-widest">Email Address*</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-panel/20 border-b border-gold/10 py-3 text-soft outline-none focus:border-gold transition-colors font-light"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="small-caps text-[0.6rem] text-gold/60 tracking-widest">Concerned Service</label>
                    <select 
                      className="w-full bg-panel/20 border-b border-gold/10 py-3 text-soft outline-none focus:border-gold transition-colors font-light appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option className="bg-ink" value="Hotel">Hotel & Stay</option>
                      <option className="bg-ink" value="Banquet">Banquet & Weddings</option>
                      <option className="bg-ink" value="Restaurant">Restaurant</option>
                      <option className="bg-ink" value="Bar">The Royal Bar</option>
                      <option className="bg-ink" value="Multiplex">Royal Cinemas</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="small-caps text-[0.6rem] text-gold/60 tracking-widest">Your Message*</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-panel/20 border-b border-gold/10 py-3 text-soft outline-none focus:border-gold transition-colors font-light resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-gold w-full group py-5">
                  <span className="flex items-center justify-center gap-3">
                    Submit Inquiry <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Continuous Slider (Same as Home Page) */}
      <section 
        className="py-24 bg-ink overflow-hidden relative"
        onMouseEnter={() => isPaused.current = true}
        onMouseLeave={() => isPaused.current = false}
      >
        <div className="container mx-auto px-6 mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <GoldDivider width="32px" />
              <span className="eyebrow">Explore Facilities</span>
            </div>
            <h2 className="font-serif-display text-soft text-4xl md:text-5xl lg:text-7xl font-light leading-[1.1]">
              A collection of <br />
              <span className="italic text-gold/95">exceptional services.</span>
            </h2>
          </Reveal>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-12 px-6 lg:px-10"
        >
          {DOUBLED_SERVICES.map((service, i) => (
            <article 
              key={`${service.title}-${i}`}
              className="group shrink-0 relative w-[85vw] sm:w-[60vw] md:w-[500px] lg:w-[600px] aspect-[4/5] overflow-hidden bg-panel cursor-pointer shadow-2xl reveal is-visible"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
              </div>

              <div className="absolute top-8 left-8">
                <span className="eyebrow text-soft bg-black/40 backdrop-blur-md px-4 py-2 rounded-sm border border-soft/10">
                  {service.eyebrow}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-soft p-5 md:p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />

                  <h3 className="font-serif-display text-ink text-xl md:text-4xl font-normal leading-tight mb-2 md:mb-4 uppercase tracking-widest">
                    {service.title}
                  </h3>
                  <p className="text-ink/70 text-xs md:text-base leading-relaxed font-light mb-4 md:mb-8 max-w-md">
                    {service.desc}
                  </p>

                  <button className="flex items-center gap-3 text-gold-deep font-medium tracking-widest uppercase text-xs group/btn">
                    Explore Details
                    <span className="w-10 h-[1px] bg-gold-deep group-hover/btn:w-16 transition-all duration-500" />
                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
