import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { GoldDivider } from "./GoldDivider";

const COLS = [
  {
    title: "Explore",
    links: [
      { name: "Destinations", path: "/destinations" },
      { name: "Hotels & Palaces", path: "/hotels" },
      { name: "Experiences", path: "/experiences" },
      { name: "Gallery", path: "/gallery" },
    ],
  },
  {
    title: "Stay",
    links: [
      { name: "Offers", path: "/offers" },
      { name: "Memberships", path: "/memberships" },
      { name: "Luxury Suites", path: "/luxury-suites" },
      { name: "Celebrations", path: "/celebrations" },
    ],
  },
  {
    title: "Taste & Heritage",
    links: [
      { name: "Dining", path: "/dining" },
      { name: "Culinary Journeys", path: "/culinary-journeys" },
      { name: "Heritage", path: "/heritage" },
      { name: "Signature Experiences", path: "/signature-experiences" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Book Now", path: "/book" },
      { name: "Request Invitation", path: "/request-invitation" },
      { name: "Join the Circle", path: "/join-the-circle" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-ink-deep border-t border-gold/25 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pb-16 border-b border-gold/15">
          <div>
            <span className="eyebrow block mb-4">The Letter</span>
            <h3 className="font-serif-display text-soft text-3xl md:text-4xl font-light leading-tight tracking-wide max-w-md">
              Receive private invitations and quiet news from the collection.
            </h3>
          </div>
          <form
            className="flex flex-col sm:flex-row gap-0 self-end w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 bg-transparent border-b border-gold/40 px-2 py-3 text-soft placeholder:text-warm/60 outline-none focus:border-gold transition-colors text-sm tracking-wide"
            />
            <button type="submit" className="btn-gold sm:ml-4 mt-4 sm:mt-0">
              <span>Subscribe</span>
            </button>
          </form>
        </div>

        {/* Cols */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="small-caps text-gold mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.path}
                      className="text-soft-dim/75 hover:text-gold transition-colors text-sm font-light tracking-wide link-underline"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Wordmark */}
        <div className="flex flex-col items-center gap-6 py-10 border-t border-gold/15">
          <GoldDivider width="40px" />
          <span className="font-serif-display text-gold text-4xl md:text-5xl tracking-[0.35em] font-light text-center">
            VISHNU EMPIRE
          </span>
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="small-caps text-warm/60">Best Luxury Hotel & Banquet Hall in Rewa</span>
            <a 
              href="https://www.google.com/maps/place/Vishnu+Empire+:+Hotel+in+Rewa+%7C+Banquet+in+Rewa+%7C+Restaurant+in+Rewa+%7C+Bar+in+Rewa/@24.5434469,81.2744514,17z/data=!4m6!3m5!1s0x39845bc2a44aca41:0x9a97b96f386805a9!8m2!3d24.5434469!4d81.2744514!16s%2Fg%2F11csb0nygl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-soft-dim/60 text-xs font-light tracking-widest mt-2 uppercase hover:text-gold transition-colors"
            >
              Rewa Railway Station Rd, Dhekaha, Rewa, MP
            </a>
            <a href="tel:+918815393403" className="text-gold/80 text-sm font-light tracking-[0.2em] hover:text-gold transition-colors mt-1">+91 88153 93403</a>
          </div>
          <div className="flex items-center gap-5 mt-2">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/hotelvishnuempire/" },
              { Icon: Facebook, href: "https://www.facebook.com/people/Vishnu-Vilas/" },
              { Icon: Twitter, href: "#" },
              { Icon: Youtube, href: "#" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social"
                className="text-warm/70 hover:text-gold transition-colors"
              >
                <social.Icon size={18} strokeWidth={1.2} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-xs text-warm/55 font-light tracking-wide">
          <span>© {new Date().getFullYear()} VISHNU EMPIRE. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
