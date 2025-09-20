import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/50 dark:bg-gray-900/70 backdrop-blur-md shadow-md z-50 px-8 py-4 flex justify-between items-center"
    >
      {/* Logo */}
      <div className="font-heading text-2xl text-primary">MechPro</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 font-medium">
        <Link to="/" className="hover:text-secondary">Home</Link>
        <Link to="/about" className="hover:text-secondary">About</Link>
        <Link to="/projects" className="hover:text-secondary">Projects</Link>
        <Link to="/services" className="hover:text-secondary">Services</Link>
        <Link to="/contact" className="hover:text-secondary">Contact</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col space-y-4 p-4 shadow-md md:hidden text-center">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </motion.nav>
  );
}
