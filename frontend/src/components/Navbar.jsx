import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaBell,
  FaClipboardList,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import logo from "../assets/JMC_Logo.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [publicationsOpen, setPublicationsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const navbarWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarWrapperRef.current) return;

      const navbarTop = navbarWrapperRef.current.getBoundingClientRect().top;

      setIsFixed(navbarTop <= 0);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/academic" },
    { name: "Gallery", path: "/gallery" },
    { name: "Cells & Units", path: "/cells-units" },
    { name: "Facilities", path: "/facilities" },
  ];

  const publications = [
    { name: "College Journal", path: "/publications/journal" },
    { name: "Newsletters", path: "/publications/newsletters" },
    { name: "Annual Reports", path: "/publications/annual-reports" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setPublicationsOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-sm font-medium
    transition-colors duration-200
    after:absolute after:bottom-0 after:left-0 after:h-[2px]
    after:rounded-full after:bg-teal-800
    after:transition-all after:duration-200
    ${
      isActive
        ? "text-teal-800 after:w-full"
        : "text-gray-700 after:w-0 hover:text-teal-800 hover:after:w-full"
    }`;

  return (
    <header className="relative w-full bg-white font-sans">
      {/* TOP CONTACT BAR - SCROLLS AWAY */}
      <div className="bg-[#07565c] text-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-4 py-2.5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="tel:099-418131"
              className="flex items-center gap-2 text-xs font-semibold transition-colors hover:text-orange-300 sm:text-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <FaPhoneAlt size={12} />
              </span>
              <span>099-418131 / 9858775085</span>
            </a>

            <span className="hidden h-6 w-px bg-white/30 sm:block" />

            <a
              href="mailto:janjyoticampus2058@gmail.com"
              className="flex items-center gap-2 text-xs font-semibold transition-colors hover:text-orange-300 sm:text-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <FaEnvelope size={12} />
              </span>
              <span>janjyoticampus2058@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/notices"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-orange-600 sm:text-sm"
            >
              <FaBell size={12} />
              NOTICES
            </Link>

            <Link
              to="/results"
              className="inline-flex items-center gap-2 rounded-full border border-orange-400/50 px-4 py-2 text-xs font-bold text-orange-400 transition-colors hover:bg-orange-500 hover:text-white sm:text-sm"
            >
              <FaClipboardList size={12} />
              RESULTS
            </Link>
          </div>
        </div>
      </div>

      {/* NAVBAR ORIGINAL POSITION / PLACEHOLDER */}
      <div ref={navbarWrapperRef}>
        {isFixed && <div className="h-[72px] sm:h-[80px]" aria-hidden="true" />}

        {/* MAIN NAVBAR */}
        <div
          className={`left-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm ${
            isFixed ? "fixed top-0 animate-none" : "relative"
          }`}
        >
          <div className="mx-auto flex min-h-[72px] max-w-[1600px] items-center justify-between gap-3 px-4 py-2 sm:min-h-[80px] sm:px-6 lg:px-10">
            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex shrink-0 items-center gap-2 sm:gap-3"
              aria-label="Janjyoti Multiple Campus home"
            >
              <img
                src={logo}
                alt="Janjyoti Multiple Campus logo"
                className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14"
              />

              <div className="leading-tight">
                <span className="block text-base font-extrabold uppercase tracking-tight text-[#07565c] sm:text-xl lg:text-2xl">
                  JANJYOTI
                </span>
                <span className="block text-[11px] font-bold text-gray-700 sm:text-sm">
                  MULTIPLE CAMPUS
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden items-center gap-4 xl:flex 2xl:gap-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navLinkClass}
                >
                  {item.name}
                </NavLink>
              ))}

              {/* PUBLICATIONS DROPDOWN */}
              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-2 whitespace-nowrap py-2 text-sm font-medium text-gray-700 transition-colors hover:text-teal-800"
                  aria-haspopup="true"
                >
                  Publications
                  <FaChevronDown
                    size={10}
                    className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </button>

                <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-lg border border-gray-100 bg-white py-2 shadow-xl">
                    {publications.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-5 py-3 text-sm text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>

            {/* APPLY BUTTON AND MOBILE TOGGLE */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <Link
                to="/admissions"
                onClick={closeMobileMenu}
                className="hidden rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600 sm:inline-flex lg:px-5"
              >
                Apply Now
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((previous) => !previous)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-teal-800 transition-colors hover:bg-teal-50 xl:hidden"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <FaTimes size={21} /> : <FaBars size={21} />}
              </button>
            </div>
          </div>

          {/* MOBILE NAVIGATION - INSIDE NAVBAR */}
          <div
            id="mobile-navigation"
            aria-hidden={!mobileMenuOpen}
            className={`overflow-hidden border-t border-gray-100 bg-white transition-[max-height,opacity] duration-200 xl:hidden ${
              mobileMenuOpen
                ? "max-h-[700px] opacity-100"
                : "pointer-events-none max-h-0 border-t-0 opacity-0"
            }`}
          >
            <nav className="mx-auto max-w-[1600px] px-4 py-2 sm:px-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className={({ isActive }) =>
                    `block border-b border-gray-100 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-teal-800"
                        : "text-gray-700 hover:text-teal-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* MOBILE PUBLICATIONS */}
              <div className="border-b border-gray-100">
                <button
                  type="button"
                  onClick={() => setPublicationsOpen((previous) => !previous)}
                  className="flex w-full items-center justify-between py-3 text-sm font-medium text-gray-700 hover:text-teal-800"
                  aria-expanded={publicationsOpen}
                >
                  Publications
                  <FaChevronDown
                    size={11}
                    className={`transition-transform duration-200 ${
                      publicationsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
                    publicationsOpen
                      ? "max-h-52 pb-2 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {publications.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      tabIndex={publicationsOpen ? 0 : -1}
                      className="block py-2.5 pl-4 text-sm text-gray-600 hover:text-teal-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className={({ isActive }) =>
                  `block border-b border-gray-100 py-3 text-sm font-medium ${
                    isActive
                      ? "text-teal-800"
                      : "text-gray-700 hover:text-teal-800"
                  }`
                }
              >
                Contact
              </NavLink>

              <Link
                to="/admissions"
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className="mt-3 flex w-full items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600 sm:hidden"
              >
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
