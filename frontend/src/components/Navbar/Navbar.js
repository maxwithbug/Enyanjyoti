// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom"; // Import Link for internal navigation
// import "./Navbar.css";

// function Navbar() {
//   const [isActive, setIsActive] = useState(false);

//   const toggleNavbar = () => {
//     setIsActive(!isActive);
//   };

//   const closeNavbar = () => {
//     setIsActive(false);
//   };

//   const navigate = useNavigate();

//   const handleClickEvent = () => {
//     navigate('/'); // This will navigate to the home page
//     closeNavbar(); // Close the navbar after navigating
//   };

//   return (
//     <nav className={`navbar`}>
//       <div className="container">
//         <img
//           src="/images/e1.png"
//           alt="Logo"
//           className="logo"
//           onClick={handleClickEvent}
//           style={{ cursor: "pointer" }} // Optional: to indicate that it's clickable
//         />
//         <button className="navbar-toggle" onClick={toggleNavbar}>
//           ☰ {/* Hamburger icon */}
//         </button>
//         <ul className="nav-links desktop-links">
//           <li><Link to="/" onClick={closeNavbar}>Home</Link></li> {/* Use Link instead of a tag */}
//           <li><Link to="/about" onClick={closeNavbar}>About Us</Link></li>
//           <li><Link to="/contact" onClick={closeNavbar}>Contact Us</Link></li>
//           <li><Link to="/loan" onClick={closeNavbar}>Loan</Link></li>
//         </ul>
//       </div>
//       <div className={`nav-menu ${isActive ? 'active' : ''}`}>
//         <button className="close-button" onClick={closeNavbar}>
//           &times; {/* Close icon */}
//         </button>
//         <ul className="nav-links">
//           <li><Link to="/" onClick={closeNavbar}>Home</Link></li> {/* Use Link instead of a tag */}
//           <li><Link to="/about" onClick={closeNavbar}>About Us</Link></li>
//           <li><Link to="/contact" onClick={closeNavbar}>Contact Us</Link></li>
//           <li><Link to="/loan" onClick={closeNavbar}>Loan</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import "./navbar.css";

function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="sun-icon" />
      <Moon className="moon-icon" />
    </button>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="/" className="logo-link">
            <img
              src="/images/navbar-website-logo.png"
              alt="Logo"
              className="logo"
              onClick={handleClickEvent}
              style={{ cursor: "pointer" }} // Optional: to indicate that it's clickable
            />
              <span className="logo-text">Logo</span>
            </a>
          </div>
          <div className="navbar-links">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </div>
          <div className="navbar-actions">
            <DarkModeToggle />
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="menu-icon" aria-hidden="true" />
              ) : (
                <Menu className="menu-icon" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a key={item} href="#" className="mobile-nav-link">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
