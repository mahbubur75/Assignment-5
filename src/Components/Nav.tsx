
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-4">

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo-text.png"
              alt="Dev Stack"
              className="w-32 h-auto object-contain"
            />
          </div>

          {/* Menu */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-gray-700 hover:text-pink-500">
              Home
            </a>

            <a href="#" className="text-gray-700 hover:text-pink-500">
              Technologies
            </a>

            <a href="#" className="text-gray-700 hover:text-pink-500">
              Projects
            </a>

            <a href="#" className="text-gray-700 hover:text-pink-500">
              About
            </a>

            <a href="#" className="text-gray-700 hover:text-pink-500">
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            <button className="text-gray-700 font-medium hover:text-pink-500">
              Sign In
            </button>

            <button className="px-5 py-2 rounded-full text-white font-medium brand-gradient">
              Sign Up
            </button>
          </div>
        </div>


        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Center Logo */}
          <img
            src="/logo-text.png"
            alt="Dev Stack"
            className="w-24 h-auto object-contain"
          />

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-xs text-gray-700 font-medium">
              Sign In
            </button>

            <button className="px-3 py-1.5 rounded-full text-xs text-white font-medium brand-gradient">
              Sign Up
            </button>
          </div>
        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4 text-sm font-medium">

              <a
                href="#"
                className="text-gray-700 hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                Technologies
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Nav;