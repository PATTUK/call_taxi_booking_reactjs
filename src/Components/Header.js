import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Contat_references = [
    {
      emailId: "parasupattu@gmail.com",
      Ph_no: "+91 8248560018",
    },
  ];

  return (
    <div className="mainHeader" id="header">
      {/* Contact References */}
      <div className="Contat_references">
        {Contat_references.map((contact_list, index) => {
          return (
            <div key={index}>
              <h3>
                {contact_list.emailId} | {contact_list.Ph_no}
              </h3>
            </div>
          );
        })}
        <div>
          <ul>
            <h3>Call At : 24/7</h3>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-pinterest"></i>
            </li>
            <li>
              <i className="fa-brands fa-x-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="header__logo">
          <h1>
            <a href="#">Maara Travels</a>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <button className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Menu */}
        <nav className={`header__nav ${isMenuOpen ? "show" : ""}`}>
          <ul className="header__nav-list">
            <li>
              <a href="#header" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#header" onClick={() => setIsMenuOpen(false)}>
                Book a Ride
              </a>
            </li>
            <li>
              <a href="#Tariff" onClick={() => setIsMenuOpen(false)}>
                Tariff
              </a>
            </li>
            <li>
              <a href="#Destination" onClick={() => setIsMenuOpen(false)}>
                Destination
              </a>
            </li>
            <li>
              <a href="#About" onClick={() => setIsMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="#Footer" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
