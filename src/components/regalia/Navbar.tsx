import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Destinations", to: "/destinations" },
  { label: "Hotels", to: "/hotels" },
  { label: "Experiences", to: "/experiences" },
  { label: "Offers", to: "/offers" },
  { label: "Memberships", to: "/memberships" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-gold/20 py-3"
            : "bg-transparent py-5"
        }`}
        style={{ transitionTimingFunction: "var(--ease-luxe)" }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <span className="font-serif-display text-gold text-2xl md:text-3xl tracking-[0.25em] font-light">
              REGALIA
            </span>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `link-underline small-caps text-soft/85 hover:text-gold transition-colors duration-500 ${
                    isActive ? "text-gold" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <span className="small-caps text-soft/60 cursor-default select-none">More</span>
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-7">
            <button className="link-underline small-caps text-soft/85 hover:text-gold transition-colors">
              Login / Join
            </button>
            <button className="btn-gold">
              <span>Book a Stay</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-gold p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-700 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "var(--ease-luxe)" }}
      >
        <div className="absolute inset-0 bg-ink-deep/97 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={`relative h-full flex flex-col items-center justify-center gap-8 transition-transform duration-700 ${
            open ? "translate-y-0" : "translate-y-6"
          }`}
          style={{ transitionTimingFunction: "var(--ease-luxe)" }}
        >
          <span className="gold-line-solid w-12 h-px" />
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-serif-display text-soft text-3xl tracking-[0.15em] hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="gold-line-solid w-12 h-px mt-4" />
          <button className="btn-gold mt-4" onClick={() => setOpen(false)}>
            <span>Book a Stay</span>
          </button>
        </div>
      </div>
    </>
  );
};
