import { motion } from "framer-motion";
import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import { Reveal } from "@/components/regalia/Reveal";
import { Calendar, Users, Star, MapPin, Tv } from "lucide-react";

const MILESTONES = [
  { year: "2016", title: "The Vision", desc: "A team of young professionals envisioned bringing world-class hospitality to the heart of Rewa." },
  { year: "2018", title: "Groundbreaking", desc: "The foundation was laid for what would become Rewa's most iconic multifunctional complex." },
  { year: "2020", title: "The Inauguration", desc: "Hotel Vishnu Empire officially opened its doors, setting a new benchmark for luxury in the city." },
  { year: "Today", title: "Rewa's Pride", desc: "Serving as the premier destination for elite travelers and grand celebrations." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-ink text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ink/60 z-10" />
          <img 
            src="/vishnuempire/Fecade/1.avif" 
            alt="Vishnu Empire Architecture" 
            className="w-full h-full object-cover scale-105"
          />
        </div>
        
        <div className="relative z-20 text-center px-6">
          <Reveal>
            <span className="eyebrow text-gold mb-6 block tracking-[0.5em]">The Legacy of Rewa</span>
            <h1 className="font-serif-display text-[clamp(1.5rem,5vw,3rem)] leading-tight uppercase tracking-widest mb-8">
              Hotel <br />
              <span className="text-gold italic normal-case tracking-normal">Vishnu Empire</span>
            </h1>
            <p className="text-soft-dim max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed italic opacity-80">
              "Where traditional hospitality meets modern grandeur in the heart of Vindhya."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <GoldDivider width="40px" />
                  <span className="eyebrow text-gold">Our Philosophy</span>
                </div>
                <h2 className="font-serif-display text-4xl md:text-5xl uppercase tracking-wider">
                  Visionary <span className="text-gold italic normal-case">Hospitality</span>
                </h2>
                <div className="space-y-6 text-soft-dim font-light leading-relaxed">
                  <p>
                    Born in 2016, Hotel Vishnu Empire was the dream of a dedicated team of professionals who saw the potential to redefine luxury in Rewa. We believed that the city's rich heritage deserved a hospitality partner of international standards.
                  </p>
                  <p>
                    From our strategic location on Railway Station Road to our meticulously designed suites, every detail of the Empire is crafted to offer an upmarket experience. We aren't just a hotel; we are a multifunctional hub of entertainment, dining, and celebration.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="relative">
              <Reveal delay={200}>
                <div className="aspect-[4/5] border border-gold/20 p-4">
                  <img 
                    src="/vishnuempire/reception/1.avif" 
                    alt="Luxury Lobby" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-gold p-8 hidden md:block">
                  <span className="block font-serif-display text-4xl text-ink leading-none mb-1">20</span>
                  <span className="small-caps text-[0.6rem] text-ink font-bold tracking-widest">Royal Suites</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-panel/20 border-y border-gold/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Reveal delay={0}>
              <div className="space-y-4">
                <Tv className="text-gold w-10 h-10 mb-6" strokeWidth={1} />
                <h3 className="font-serif-display text-xl uppercase tracking-widest">Multiplex</h3>
                <p className="text-soft-dim/70 text-sm font-light leading-relaxed">
                  Rewa's premier cinematic experience featuring dual HD screens and 3D sound systems.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-4">
                <Users className="text-gold w-10 h-10 mb-6" strokeWidth={1} />
                <h3 className="font-serif-display text-xl uppercase tracking-widest">Grand Banquet</h3>
                <p className="text-soft-dim/70 text-sm font-light leading-relaxed">
                  A regal venue accommodating over 200 guests for weddings, galas, and corporate events.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-4">
                <Star className="text-gold w-10 h-10 mb-6" strokeWidth={1} />
                <h3 className="font-serif-display text-xl uppercase tracking-widest">Fine Dining</h3>
                <p className="text-soft-dim/70 text-sm font-light leading-relaxed">
                  Exquisite multi-cuisine restaurant and a stylish bar serving the finest spirits in Vindhya.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="space-y-4">
                <MapPin className="text-gold w-10 h-10 mb-6" strokeWidth={1} />
                <h3 className="font-serif-display text-xl uppercase tracking-widest">Location</h3>
                <p className="text-soft-dim/70 text-sm font-light leading-relaxed">
                  Prime location on Railway Station Road, Dhekaha, offering effortless connectivity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <span className="eyebrow text-gold mb-4 block">Our Journey</span>
            <h2 className="font-serif-display text-4xl uppercase tracking-widest">The Timeline of <span className="text-gold italic normal-case">Success</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MILESTONES.map((item, i) => (
              <Reveal key={item.year} delay={i * 100}>
                <div className="relative p-8 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <span className="font-serif-display text-5xl text-gold/10 group-hover:text-gold/20 transition-colors mb-6 block leading-none">
                    {item.year}
                  </span>
                  <h3 className="font-serif-display text-lg uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-soft-dim/70 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center py-20 bg-panel/30 border border-gold/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
           <Reveal>
             <h2 className="font-serif-display text-3xl md:text-5xl uppercase tracking-widest mb-10">
               Experience the <span className="text-gold italic normal-case">Empire</span>
             </h2>
             <div className="flex flex-wrap justify-center gap-6">
               <button className="btn-gold px-12 py-5" onClick={() => window.location.href='/book'}>
                 <span>Reserve Your Stay</span>
               </button>
               <button className="px-12 py-5 border border-gold/20 text-gold small-caps tracking-widest hover:bg-gold/5 transition-colors" onClick={() => window.location.href='/gallery'}>
                 <span>View Gallery</span>
               </button>
             </div>
           </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
