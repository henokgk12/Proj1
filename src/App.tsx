import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import logo from "./assets/logo.png";

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
 <div className="min-h-screen bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 text-white">
      
      <main className="px-4 md:px-12">
</main>
        {/* Dark mode toggle */}
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-200"
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        {/* Navbar */}
        <nav className="bg-white dark:bg-neutralDark shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
  <img 
    src={logo} 
    alt="Mechena Logo" 
    className="h-10 w-auto md:h-12"
  />
</NavLink>


            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors duration-300 hover:text-blue-600 ${
                      isActive
                        ? "text-blue-700 font-semibold border-b-2 border-blue-700"
                        : "text-gray-700 dark:text-gray-300 hover:border-b-2 hover:border-blue-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Hamburger button */}
            <button
              className="md:hidden focus:outline-none transform transition-transform duration-300"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className={`w-7 h-7 text-blue-700 dark:text-white transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
            className={`md:hidden bg-gray-50 dark:bg-neutralDark px-6 pb-4 space-y-2 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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
        <main className="max-w-6xl mx-auto px-6 py-10">
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
        <div className="flex flex-col items-center gap-2">
  <img src={logo} alt="Mechena Logo" className="h-8 w-auto" />
  <span>© {new Date().getFullYear()} Mechena. All rights reserved.</span>
</div>
</footer>
      </div>
    </Router>
  );
}
