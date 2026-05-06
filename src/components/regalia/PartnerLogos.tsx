import { motion } from "framer-motion";
import { GoldDivider } from "./GoldDivider";

const PARTNERS = [
  { name: "Booking.com", domain: "booking.com", url: "https://www.booking.com/hotel/in/vishnu-empire.en-gb.html" },
  { name: "MakeMyTrip", domain: "makemytrip.com", url: "https://www.makemytrip.com/hotels/hotel_vishnu_empire-details-rewa.html" },
  { name: "Goibibo", domain: "goibibo.com", url: "https://www.goibibo.com/hotels/vishnu-empire-hotel-in-rewa-7332869269056953099/" },
  { name: "Swiggy", domain: "swiggy.com", url: "https://www.swiggy.com/restaurants/hotel-vishnu-empire-satna-road-rewa-667798" },
  { name: "Zomato", domain: "zomato.com", url: "https://www.zomato.com/rewa/vishnu-empire-rewa-locality-rewa/order" },
  { name: "Yatra", domain: "yatra.com", url: "https://www.yatra.com/hotels/hotels-in-rewa/hotel-vishnu-empire" },
  { name: "Expedia", domain: "expedia.com", url: "https://www.expedia.co.in/Rewa-Hotels-Hotel-Vishnu-Empire.h48688187.Hotel-Information" },
  { name: "Hotels.com", domain: "hotels.com", url: "https://in.hotels.com/ho1559021984/hotel-vishnu-empire-rewa-india/" },
  { name: "Paytm", domain: "district.in", url: "https://www.district.in/movies/royal-cinemas-in-rewa-CD9114?utm_source=paytm_redirection" },
  { name: "BookMyShow", domain: "bookmyshow.com", url: "https://in.bookmyshow.com/explore/home/rewa" }
];

export const PartnerLogos = () => {
  return (
    <section className="py-20 bg-ink-deep border-t border-gold/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <GoldDivider width="40px" />
          <h2 className="font-serif-display text-2xl md:text-3xl text-soft tracking-widest uppercase">
            Find Us <span className="text-gold italic normal-case tracking-normal">On</span>
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-10 items-center">
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <a 
              key={`${partner.name}-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-16 flex items-center gap-4 group cursor-pointer hover:scale-105 transition-transform duration-500"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/5 rounded-lg p-2 group-hover:bg-white/10 transition-colors">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`}
                  alt={partner.name}
                  className="w-full h-full object-contain transition-all duration-700"
                />
              </div>
              <span className="font-serif-display text-lg md:text-xl tracking-[0.1em] uppercase text-soft/40 group-hover:text-gold transition-colors duration-500">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};
