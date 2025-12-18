import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#171d32] flex justify-between items-center text-white px-6 md:px-10 py-4 md:py-6 z-50 shadow-md">
      {/* Logo */}
      <span className="text-3xl md:text-4xl font-bold tracking-wide">Portfolio</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-1 justify-center gap-10 text-white text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-gray-300">Skills</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`
          ${menuOpen ? "flex" : "hidden"} 
          md:hidden flex-col gap-6 font-semibold 
          absolute top-16 left-0 w-full bg-[#171d32] p-6 transition-all duration-300
        `}
      >
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Skills</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Contact</Link>
        </li>
      </ul>

      {/* Hamburger / Close Icon */}
      {menuOpen ? (
        <RiCloseLine
          size={28}
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
      ) : (
        <RiMenu2Line
          size={28}
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        />
      )}
    </nav>
  );
};

export default Navbar;
