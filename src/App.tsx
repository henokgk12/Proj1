import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutralLight dark:bg-neutralDark text-neutralDark dark:text-neutralLight transition-colors duration-500">
        
        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 m-4 bg-primary text-white rounded"
        >
          Toggle Dark Mode
        </button>

        {/* Navbar */}
        <nav className="bg-white dark:bg-neutralDark shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <NavLink to="/" className="text-2xl font-bold text-blue-700 dark:text-white">
              Mechena
            </NavLink>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors duration-300 hover:text-blue-600 ${
                      isActive ? "text-blue-700 font-semibold" : "text-gray-700 dark:text-gray-300"
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
              <svg className="w-7 h-7 text-blue-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden bg-gray-50 dark:bg-neutralDark px-6 pb-4 space-y-2 transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            } rounded-b shadow-md`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block transition-colors duration-300 hover:text-blue-600 ${
                    isActive ? "text-blue-700 font-semibold" : "text-gray-700 dark:text-gray-300"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
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
        <footer className="bg-white dark:bg-neutralDark border-t text-center p-6 text-sm text-gray-600 dark:text-gray-300 shadow-inner">
          © {new Date().getFullYear()} Mechena. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
