import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { GoldDivider } from "@/components/regalia/GoldDivider";
import hotelAmber from "@/assets/hotel_amber.png";
import hotelMumbai from "@/assets/hotel_mumbai.png";
import hotelUdaipur from "@/assets/hotel_udaipur.png";
import hotelOffer from "@/assets/offer-suite.jpg";
import { motion } from "framer-motion";

const hotelsData = [
  {
    id: 1,
    name: "Vishnu Empire",
    location: "Rewa, Madhya Pradesh",
    category: "Main Residence",
    image: hotelAmber,
    price: "From ₹25,000",
    description: "The crown jewel of Rewa, offering unparalleled Baghelkhandi hospitality in a setting of royal grandeur."
  },
  {
    id: 2,
    name: "Rewa Heritage Wing",
    location: "Rewa City, MP",
    category: "Heritage Boutique",
    image: hotelMumbai,
    price: "From ₹18,000",
    description: "A meticulously restored wing of the royal estate, preserving the architectural soul of old Rewa."
  },
  {
    id: 3,
    name: "Vindhya Nature Retreat",
    location: "Near Bahuti Falls, Rewa",
    category: "Eco Luxury",
    image: hotelUdaipur,
    price: "From ₹22,000",
    description: "Nestled near the cascading waterfalls of Vindhya, this retreat offers a serene escape into nature's lap."
  },
  {
    id: 4,
    name: "The White Tiger Sanctuary",
    location: "Govindgarh, Rewa",
    category: "Safari Lodge",
    image: hotelOffer,
    price: "From ₹20,000",
    description: "Located at the historic Govindgarh, this lodge celebrates the legacy of the world's first white tiger discovery."
  }
];

const Hotels = () => {
  return (
    <div className="min-h-screen bg-ink text-soft selection:bg-gold/30 selection:text-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hotelAmber}
            alt="Vishnu Empire Rewa"
            className="w-full h-full object-cover scale-105 slow-zoom opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/20 to-ink" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow mb-6 block text-gold tracking-widest">The Rewa Collection</span>
            <h1 className="font-serif-display text-[clamp(1.8rem,4.5vw,3rem)] leading-none uppercase tracking-wider mb-4">
              Our <br />
              <span className="text-gold italic normal-case tracking-normal">Residences</span>
            </h1>
            <div className="w-24 h-px bg-gold/50 mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pb-24 pt-0 px-6 container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-soft-dim italic">
            "Exploring the deep heritage of Rewa, through a collection of stays that define Baghelkhandi luxury."
          </p>
          <div className="mt-12 flex justify-center">
            <GoldDivider width="60px" />
          </div>
        </div>
      </section>

      {/* Hotel Grid Section */}
      <section className="pb-32 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {hotelsData.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors duration-500" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-ink/60 backdrop-blur-md border border-gold/30 text-gold px-4 py-1 small-caps text-[0.6rem]">
                    {hotel.category}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-gold/10 pb-6">
                <div>
                  <span className="eyebrow text-[0.6rem] mb-2 block">{hotel.location}</span>
                  <h3 className="font-serif-display text-3xl group-hover:text-gold transition-colors duration-500">
                    {hotel.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="block text-gold font-medium mb-1">{hotel.price}</span>
                  <span className="small-caps text-[0.5rem] text-soft/40">Per Night</span>
                </div>
              </div>

              <p className="mt-6 text-soft-dim/70 font-light leading-relaxed max-w-sm">
                {hotel.description}
              </p>

              <button className="mt-8 link-underline text-gold text-xs small-caps">
                Explore Property
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hotels;
