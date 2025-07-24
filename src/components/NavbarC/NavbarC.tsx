import React from "react";

const NavbarC: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          MyBrand
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Services</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Call to Action / Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white hover:text-blue-400 focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarC;
