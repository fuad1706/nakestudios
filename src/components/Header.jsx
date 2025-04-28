import React from "react";
import { useState, useEffect } from "react";
import { Phone, Mail, Clock, X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = React.useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Calculate header height and apply to document
    const calculateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.body.style.paddingTop = `${height}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Calculate on mount and resize
    calculateHeaderHeight();
    window.addEventListener("resize", calculateHeaderHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateHeaderHeight);
      document.body.style.paddingTop = "0px";
    };
  }, []);

  // Recalculate header height when top bar visibility changes
  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);
      document.body.style.paddingTop = `${height}px`;
    }
  }, [scrollPosition > 100]);

  return (
    <header ref={headerRef} className="w-full fixed top-0 left-0 z-40">
      {/* Top Info Bar */}
      <div
        className={`bg-black text-white py-4 lg:px-20 md:px-10 px-4 transition-all duration-300 ${
          scrollPosition > 100 ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row justify-center lg:gap-6 md:gap-3 items-center mb-2 md:mb-0">
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-yellow-600" />
              <span className="text-sm">info@nakestudios.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-yellow-600" />
              <span className="text-sm">
                Working Hours: Monday – Saturday 9am - 6pm
              </span>
            </div>
          </div>

          <div className="hidden md:flex space-x-4 ml-4">
            <a
              href="#"
              className="text-white hover:text-blue-500"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="text-white hover:text-pink-500"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </a>

            {/* Threads */}
            <a
              href="#"
              className="text-white hover:text-yellow-400"
              aria-label="Threads"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.95 2.37c-5.7 0-9.47 3.72-9.47 8.91 0 6.38 4.68 10.35 10.4 10.35 2.92 0 5.88-1.13 7.19-3.46l-1.63-1.05c-1.06 1.78-3.1 2.61-5.51 2.61-3.86 0-6.92-2.66-6.92-7.24 0-3.4 2.47-6.52 6.53-6.52 3.5 0 5.5 2.34 5.5 4.89 0 1.8-.98 3.21-2.77 3.21-1.37 0-2.34-.92-2.34-2.26 0-.68.37-1.15.89-1.15.33 0 .64.15.77.45.18.4.23.9.39 1.38l.25.8c.35 1.17.97 2.25 2.42 2.25 2.16 0 3.56-1.79 3.56-4.4 0-3.47-2.88-6.72-7.36-6.72z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`w-full bg-white lg:px-20 md:px-10 px-4 shadow-md transition-all duration-300 ${
          scrollPosition > 50 ? "py-2" : "py-2"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="py-2">
            <a href="#">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-[200px] h-[60px] object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "ICREATE", path: "/icreate" },
              { name: "PHOTOGRAPHY", path: "/photography" },
              { name: "MOTION", path: "/motion" },
              { name: "NEWS", path: "/news" },
              { name: "BLOG", path: "/blog" },
              { name: "CONTACT", path: "/contact" },
            ].map(({ name, path }, index) => (
              <Link
                key={name}
                to={path}
                className={`text-black hover:text-yellow-500 px-3 py-2 text-sm tracking-wide ${
                  location.pathname === path ? "text-yellow-500" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu - rises from bottom */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div>
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[200px] h-[60px] object-contain"
            />
          </div>
          <button
            className="text-white p-2 bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col mt-4">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT", path: "/about" },
            { name: "ICREATE", path: "/icreate" },
            { name: "PHOTOGRAPHY", path: "/photography" },
            { name: "MOTION", path: "/motion" },
            { name: "NEWS", path: "/news" },
            { name: "BLOG", path: "/blog" },
            { name: "CONTACT", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`py-4 px-6 border-b mx-6 border-gray-200 ${
                location.pathname === path
                  ? "text-yellow-500"
                  : "text-black hover:text-yellow-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
