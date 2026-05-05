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
      { name: "Weddings", path: "/weddings" },
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
            THE VIJAY VILLAS
          </span>
          <span className="small-caps text-warm/60">Hotels & Banquets</span>
          <div className="flex items-center gap-5 mt-2">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/thevijayvillas/" },
              { Icon: Facebook, href: "https://www.facebook.com/people/The-Vijay-Villas/61566145322954/" },
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
          <span>© {new Date().getFullYear()} THE VIJAY VILLAS. All rights reserved.</span>
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
