import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const NavbarC: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar on slight scroll up
      if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setShowNavbar(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0, scale: 0.9, width: "60vw" }}
      animate={
        showNavbar
          ? {
            y: 0,
            opacity: 1,
            scale: 1,
            width: "80vw",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 15,
            },
          }
          : {
            y: -100,
            opacity: 0,
            scale: 0.9,
            width: "60vw",
            transition: { duration: 0.9 },
          }
      }
      className="
        fixed top-4 left-1/2 transform -translate-x-1/2
        bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
        bg-opacity-80 backdrop-blur-xl
        px-8 py-4 rounded-3xl shadow-2xl
        text-white
        border border-white/20
        overflow-hidden
        nav-glass
        z-50
      "
    >
      {/* Glass Shine Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-20 pointer-events-none rounded-3xl"></div>

      <div className="relative container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide drop-shadow-md">MyBrand</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 text-base font-medium">
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            Services
          </a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            Contact
          </a>
        </div>

        {/* Call to Action / Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white hover:text-yellow-300 focus:outline-none">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarC;
