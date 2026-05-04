import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GoldDivider } from "@/components/regalia/GoldDivider";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink text-soft px-6">
      <div className="text-center max-w-lg">
        <span className="eyebrow block mb-6">Lost in the Halls</span>
        <div className="flex items-center justify-center gap-5 mb-7">
          <GoldDivider width="40px" />
          <span className="small-caps text-gold">— 404 —</span>
          <GoldDivider width="40px" />
        </div>
        <h1 className="font-serif-display text-soft text-5xl md:text-6xl font-light leading-tight mb-6 tracking-wide">
          A wrong <span className="italic text-gold/95">turn.</span>
        </h1>
        <p className="text-warm mb-10 leading-relaxed font-light">
          The page you sought is not here — perhaps it has slipped behind a velvet curtain.
        </p>
        <Link to="/" className="btn-gold inline-flex">
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
