import React from "react";

// This is a temporary stub to remove red lines while your network resolves the npm installation.
// It acts exactly like a standard link but doesn't require the react-router-dom library.

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export const Link = ({ to, children, ...props }: LinkProps) => (
  <a href={to} {...props}>
    {children}
  </a>
);

export const NavLink = ({ to, children, className, ...props }: any) => {
  const isActive = false; // Stub active state
  const computedClassName = typeof className === 'function' ? className({ isActive }) : className;
  
  return (
    <a href={to} className={computedClassName} {...props}>
      {children}
    </a>
  );
};
