import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-10 h-10 border border-gold/40 rounded-full pointer-events-none z-[9999] hidden md:block transition-transform duration-[400ms] ease-out"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        opacity: isVisible ? 1 : 0,
        boxShadow: "0 0 20px rgba(200, 169, 106, 0.2)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1 h-1 bg-gold rounded-full" />
      </div>
    </div>
  );
};
