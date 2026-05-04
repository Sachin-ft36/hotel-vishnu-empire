import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import destHeritage from "@/assets/hotel_amber.png";
import destTiger from "@/assets/dest_kerala.png";
import destNature from "@/assets/dest_london.png";
import destUdaipur from "@/assets/hotel_udaipur.png";
import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Rewa Heritage",
    region: "Vindhya, Madhya Pradesh",
    description: "Explore the heart of Baghelkhand, where the royal legacy of the Baghel Kings lives through grand forts and storied museum walks.",
    image: destHeritage,
    type: "Heritage"
  },
  {
    id: 2,
    name: "White Tiger Legacy",
    region: "Govindgarh, Rewa",
    description: "Step into the origin of the world's white tigers. Govindgarh Lake and Palace stand as silent witnesses to the legendary Mohan.",
    image: destTiger,
    type: "Sanctuary"
  },
  {
    id: 3,
    name: "Vindhya Cascades",
    region: "Rewa District, MP",
    description: "Witness the raw power of nature at Bahuti and Keoti Falls—some of India's highest and most breathtaking waterfalls.",
    image: destNature,
    type: "Nature"
  },
  {
    id: 4,
    name: "Spiritual Vindhya",
    region: "Near Rewa, India",
    description: "Embark on a sacred journey to the nearby Maihar Temple and discover the deep spiritual roots of the Madhya Pradesh heartland.",
    image: destUdaipur,
    type: "Spiritual"
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center pt-14">
        <div className="absolute inset-0">
          <img
            src={destHeritage}
            alt="The Vijay Villas Rewa"
            className="w-full h-full object-cover scale-105 slow-zoom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-transparent to-ink" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="eyebrow mb-6 block text-gold tracking-[0.4em]">The Heart of India</span>
            <h1 className="font-serif-display text-[clamp(1.8rem,4.5vw,3rem)] leading-none uppercase tracking-wider mb-8">
              Explore <br />
              <span className="text-gold italic normal-case tracking-normal">Rewa, Madhya Pradesh</span>
            </h1>
            <p className="text-soft-dim max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Experience the untamed beauty and royal grandeur of Baghelkhand.
              The Vijay Villas invites you to discover the land of white tigers,
              ancient forts, and cascading waterfalls.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-24 pt-0 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors duration-500" />

                {/* Destination Label */}
                <div className="absolute top-6 left-6">
                  <span className="bg-ink/60 backdrop-blur-sm border border-gold/20 text-gold px-4 py-1 small-caps text-[0.6rem]">
                    {dest.type}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <GoldDivider width="30px" />
                  <span className="eyebrow text-gold text-[0.6rem]">{dest.region}</span>
                </div>

                <h3 className="font-serif-display text-4xl group-hover:text-gold transition-colors duration-500">
                  {dest.name}
                </h3>

                <p className="text-soft-dim/70 font-light leading-relaxed max-w-md italic">
                  "{dest.description}"
                </p>

                <button className="pt-4 link-underline text-gold small-caps text-xs">
                  Discover {dest.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-panel/10 text-center px-6 border-y border-gold/5">
        <div className="max-w-4xl mx-auto">
          <p className="font-serif-display text-2xl md:text-4xl text-soft-dim/90 leading-relaxed italic">
            "Rewa is not just a place; it's a legacy of the white tiger and the pride of Vindhya."
          </p>
          <span className="mt-8 block eyebrow text-gold/60 text-[0.7rem]">— The Vijay Villas Philosophy</span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
