
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu when a navigation link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Define navigation links for desktop and mobile layouts
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Campus Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Apply active styles to the current navigation link
  const getLinkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-300 ${
      isActive
        ? "text-blue-700"
        : "text-slate-600 hover:text-blue-700"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4">

          {/* School Logo and Brand Identity */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
            aria-label="Luminous Public School Home"
          >
            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-blue-600 bg-blue-50 shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
              <img
                src="/images%20(2).jpg"
                alt="Luminous Public School Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-sm font-extrabold leading-tight tracking-tight text-blue-950 sm:text-lg md:text-xl">
                Luminous Public School
              </h1>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-600 sm:text-[11px] sm:tracking-[0.2em]">
                Estd. 2023
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={getLinkClass}
              >
                {({ isActive }) => (
                  <span className="group relative py-2">
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}

            {/* Primary Call-to-Action Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30"
            >
              Get in Touch
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Tablet and Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile and Tablet Navigation Panel */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "visible max-h-96 opacity-100"
            : "invisible max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Call-to-Action Button */}
          <div className="pt-3">
            <Link
              to="/contact"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-colors duration-300 hover:bg-blue-700"
            >
              Get in Touch
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

