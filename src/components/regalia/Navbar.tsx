import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Search, MapPin } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Offers", to: "/offers" },
  { label: "Memberships", to: "/memberships" },
  { label: "Services", to: "/services" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (open || searchOpen || loginOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, searchOpen, loginOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith("/#")) {
      e.preventDefault();
      const id = to.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      } else if (window.location.pathname !== "/") {
        window.location.href = to;
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ${scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-gold/20 py-3 top-0"
          : "bg-transparent py-5 top-[36px]"
          }`}
        style={{ transitionTimingFunction: "var(--ease-luxe)" }}
      >
        <div className="w-full max-w-[1700px] mx-auto flex items-center justify-between gap-4 px-6 lg:px-8 xl:px-10">
          {/* Logo */}
          <Link to="/" className={`group flex items-center gap-2 shrink-0 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <img 
              src="/logo.png" 
              alt="Hotel Vishnu Empire" 
              className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
            />
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={(e) => handleNavClick(e, item.to)}
                className={({ isActive }) =>
                  `link-underline small-caps text-soft/85 hover:text-gold transition-colors duration-500 whitespace-nowrap text-[8px] xl:text-[9px] 2xl:text-[10px] ${isActive && !item.to.includes("#") ? "text-gold" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
            <Link to="/reserve-table" className="link-underline small-caps text-soft/70 hover:text-gold transition-colors whitespace-nowrap text-[8px] xl:text-[9px] tracking-[0.12em]">
              Reserve Table
            </Link>
            <button
              onClick={() => setLoginOpen(true)}
              className="link-underline small-caps text-soft/70 hover:text-gold transition-colors whitespace-nowrap text-[8px] xl:text-[9px] tracking-[0.12em]"
            >
              Login / Join
            </button>
            <Link to="/book">
              <button className="btn-gold whitespace-nowrap scale-[0.85] xl:scale-95 origin-right px-6">
                <span>Book a Stay</span>
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-gold p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={32} strokeWidth={1.2} /> : <Menu size={32} strokeWidth={1.2} />}
          </button>
        </div>
      </header>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-700 ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute inset-0 bg-ink-deep/98 backdrop-blur-2xl" onClick={() => setSearchOpen(false)} />
        <button
          onClick={(e) => { e.stopPropagation(); setSearchOpen(false); }}
          className="absolute top-8 right-8 z-[110] text-gold p-4 hover:rotate-90 transition-transform duration-500 cursor-pointer"
        >
          <X size={32} strokeWidth={1} />
        </button>

        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-2xl">
            <span className="eyebrow text-gold/40 mb-4 block text-center">Search Vishnu Empire</span>
            <input
              autoFocus={searchOpen}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchOpen(false);
                  window.location.href = "/hotels";
                }
              }}
              placeholder="Where to next?"
              className="w-full bg-transparent border-b border-gold/20 py-6 text-3xl md:text-5xl font-serif-display text-soft outline-none focus:border-gold transition-colors text-center placeholder:text-soft/10"
            />
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <span className="small-caps text-[0.6rem] text-soft/30">Suggestions:</span>
              <button onClick={() => setSearchQuery("Jaipur")} className="text-gold/60 hover:text-gold text-[0.6rem] small-caps transition-colors">Jaipur</button>
              <button onClick={() => setSearchQuery("Wellness")} className="text-gold/60 hover:text-gold text-[0.6rem] small-caps transition-colors">Wellness</button>
              <button onClick={() => setSearchQuery("Memberships")} className="text-gold/60 hover:text-gold text-[0.6rem] small-caps transition-colors">Memberships</button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-700 ${loginOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute inset-0 bg-ink-deep/95 backdrop-blur-xl" onClick={() => setLoginOpen(false)} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-10 bg-panel border border-gold/20 shadow-2xl">
          <button
            onClick={() => setLoginOpen(false)}
            className="absolute top-4 right-4 text-soft/40 hover:text-gold transition-colors"
          >
            <X size={20} strokeWidth={1} />
          </button>

          <div className="text-center mb-10">
            <span className="eyebrow text-gold mb-2 block">Royal Circle</span>
            <h2 className="font-serif-display text-3xl text-soft uppercase tracking-widest">Sign In</h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <label className="small-caps text-[0.6rem] text-soft/60 tracking-widest">Email Address</label>
              <input type="email" placeholder="email@example.com" className="w-full bg-ink/50 border border-gold/10 p-3 text-soft outline-none focus:border-gold/40 transition-colors font-light" />
            </div>
            <div className="space-y-1">
              <label className="small-caps text-[0.6rem] text-soft/60 tracking-widest">Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-ink/50 border border-gold/10 p-3 text-soft outline-none focus:border-gold/40 transition-colors font-light" />
            </div>
            <button className="btn-gold w-full py-4 mt-4" onClick={() => setLoginOpen(false)}>
              <span>Sign In</span>
            </button>
            <div className="pt-4 text-center border-t border-gold/10">
              <p className="text-soft/40 text-[0.7rem] font-light italic">
                Not a member yet?{" "}
                <Link 
                  to="/join-the-circle" 
                  onClick={() => setLoginOpen(false)}
                  className="text-gold/60 hover:text-gold transition-colors underline underline-offset-4"
                >
                  Join the Royal Circle
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer & More dropdown */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-150 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ willChange: "opacity, backdrop-filter" }}
      >
        <div
          className="absolute inset-0 bg-ink-deep/95"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
          onClick={() => setOpen(false)}
        />

        {/* Radial Glow Effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.25), transparent 60%)',
            filter: 'blur(60px)',
            zIndex: 0
          }}
        />

        <div
          className={`relative h-full flex flex-col items-center justify-center gap-6 transition-all duration-300 z-10 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <span className="gold-line-solid w-12 h-px" />
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={(e) => handleNavClick(e, item.to)}
              className="font-serif-display text-soft text-xl tracking-[0.15em] hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/reserve-table"
            onClick={() => setOpen(false)}
            className="small-caps text-soft/40 hover:text-gold text-xs tracking-widest transition-colors"
          >
            Reserve a Table
          </Link>

          <button
            onClick={() => { setOpen(false); setLoginOpen(true); }}
            className="small-caps text-soft/40 hover:text-gold text-xs tracking-widest transition-colors"
          >
            Login / Join
          </button>

          <span className="gold-line-solid w-12 h-px mt-4" />
          <Link to="/book" onClick={() => setOpen(false)}>
            <button className="btn-gold mt-4">
              <span>Book a Stay</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
