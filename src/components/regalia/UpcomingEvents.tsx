import { motion } from "framer-motion";
import { GoldDivider } from "./GoldDivider";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: 1,
    date: "May 24, 2026",
    title: "Royal Baghelkhandi Feast",
    description: "An exclusive culinary journey into the forgotten royal recipes of the Rewa dynasty, hosted by the royal family.",
    image: "/events/feast.png",
    category: "Culinary Assembly"
  },
  {
    id: 2,
    date: "June 12, 2026",
    title: "Sufi Nights at the Fort",
    description: "A soulful evening of Sufi music and light under the stars at our private heritage site.",
    image: "/events/sufi.png",
    category: "Heritage Evening"
  },
  {
    id: 3,
    date: "July 05, 2026",
    title: "White Tiger Gala",
    description: "A black-tie evening dedicated to the conservation legacy of the world's first white tiger.",
    image: "/events/gala.png",
    category: "Conservation Gala"
  }
];

export const UpcomingEvents = () => {
  return (
    <section className="py-32 bg-ink-deep border-t border-gold/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <GoldDivider width="32px" />
            <span className="eyebrow text-gold">The Private Calendar</span>
            <GoldDivider width="32px" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-display text-[clamp(1.8rem,4.5vw,3rem)] uppercase tracking-widest leading-[1.1] text-soft"
          >
            Upcoming <br /><span className="italic font-light text-gold">Assemblies</span>
          </motion.h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[500px] bg-panel/20 border border-gold/10 overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={14} className="text-gold" />
                  <span className="small-caps text-[0.65rem] text-gold tracking-widest">{event.date}</span>
                </div>
                
                <span className="eyebrow text-soft/40 text-[0.6rem] block mb-2">{event.category}</span>
                <h3 className="font-serif-display text-2xl text-soft mb-4 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                
                <div className="h-0 group-hover:h-24 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  <p className="text-soft-dim/80 text-sm font-light leading-relaxed mb-6 italic">
                    "{event.description}"
                  </p>
                </div>

                <Link to="/request-invitation">
                  <button className="flex items-center gap-3 text-gold text-[0.65rem] small-caps tracking-widest group/btn mt-4">
                    Request Invitation
                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
      </div>
    </section>
  );
};
