import { BsFillMoonStarsFill, BsFillSunFill, BsList } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggling dark mode class on the root element
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Toggling mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-white dark:bg-gray-900 transition-colors duration-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile Menu Button (Visible on Small Screens) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none text-gray-900 dark:text-gray-200"
            >
              <BsList />
            </button>
          </div>

          {/* Portfolio Name (Visible on all screens) */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white"
            >
              PORTFOLIO
            </a>
          </div>

          {/* Main Menu (Visible on Medium and Larger Screens) */}
          <ul className="hidden sm:flex sm:ml-10 sm:space-x-8">
            {[
              { href: "#about", label: "About" },
              
              // { href: "#testimonials", label: "Testimonials" },
              { href: "#resume", label: "Summary" },
              { href: "#portfolio", label: "Projects" },
              // { href: "#research", label: "Research" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative inline-block text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200 transition-all duration-300 hover:text-orange-400"
                  style={{
                    padding: "8px 16px",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                  <span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-400 transition-all duration-300"
                    style={{
                      transition:
                        "0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                    }}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle and Resume Link */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-2xl focus:outline-none px-6"
            >
              {darkMode ? (
                <BsFillSunFill className="text-yellow-400" />
              ) : (
                <BsFillMoonStarsFill className="text-gray-900" />
              )}
            </button>
            <a
              className="bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-600 dark:to-orange-800 text-white px-6 py-2 rounded-md shadow-md transition-all duration-300"
              href="https://drive.google.com/file/d/1EQgIv0LIDBxg204E3uFITgrAaAiLwcuH/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu (Visible on Small Screens when Open) */}
        {menuOpen && (
          <div className="sm:hidden">
            <ul className="space-y-4 mt-4">
              {[
                { href: "#about", label: "About" },
                
                // { href: "#testimonials", label: "Testimonials" },
                { href: "#resume", label: "Summary" },
                { href: "#portfolio", label: "Projects" },
                // { href: "#research", label: "Research" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200 transition-all duration-300 hover:text-orange-400"
                    style={{
                      padding: "8px 16px",
                      textDecoration: "none",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
