import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-blue-50">
        {/* Navbar */}
        <nav className="bg-white shadow sticky top-0 z-50" aria-label="Main navigation">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <NavLink to="/" className="text-2xl font-bold text-blue-700">
              Mechena
            </NavLink>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors hover:text-blue-600 ${
                      isActive ? "text-blue-700 font-semibold" : "text-gray-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Hamburger button */}
            <button
              className="md:hidden focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden bg-gray-50 px-6 pb-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block transition-colors hover:text-blue-600 ${
                      isActive ? "text-blue-700 font-semibold" : "text-gray-700"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}
        </nav>

        {/* Pages */}
        <main className="flex-grow max-w-6xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t text-center p-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Mechena. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
