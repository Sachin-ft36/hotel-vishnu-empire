interface GoldDividerProps {
  className?: string;
  width?: string;
  vertical?: boolean;
}

export const GoldDivider = ({ className = "", width = "60px", vertical = false }: GoldDividerProps) => {
  if (vertical) {
    return (
      <span
        className={`inline-block bg-gold ${className}`}
        style={{ width: "1px", height: width }}
        aria-hidden="true"
      />
    );
  }
  return (
    <span
      className={`inline-block gold-line-solid ${className}`}
      style={{ width, height: "1px" }}
      aria-hidden="true"
    />
  );
};
