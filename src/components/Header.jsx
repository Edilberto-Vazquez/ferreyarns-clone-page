import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo-ferre.svg";
import "./styles/Header.css";

const Header = () => {
  const [sustent, setSustent] = useState(false);
  const language = ["en", "es"];
  return (
    <header>
      <Link to={`/${language[0]}`} className="ferreyarns-logo">
        <img src={logo} alt="" />
      </Link>
      <nav className="navbar-mobile">
        <ul className="navbar-mobile-links">
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li
            onClick={() => setSustent(!sustent)}
            className="nav-bar-mobile__sustentainability"
          >
            <span>Sustainability</span>
            {sustent ? (
              <div className="sustentainability-menu">
                <li>
                  <Link to="/positive-impact">Positive Impact</Link>
                </li>
                <li>
                  <Link to="/circular-process">Circular Process</Link>
                </li>
                <li>
                  <Link to="/certifications">Certifications</Link>
                </li>
              </div>
            ) : null}
          </li>
          <li>
            <Link to="/work-with-us">Work with us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <ul className="navbar-mobile-language">
            <li>
              <Link to={`/${language[0]}`}>EN</Link>
            </li>
            <li>
              <Link to={`/${language[1]}`}>ES</Link>
            </li>
          </ul>
        </ul>
      </nav>
      <nav className="navbar-desktop">
        <ul className="navbar-desktop-links">
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li
            onClick={() => setSustent(!sustent)}
            className="nav-bar-desktop__sustentainability"
          >
            <span>Sustainability</span>
            {sustent ? (
              <div className="sustentainability-menu">
                <li>
                  <Link to="/positive-impact">Positive Impact</Link>
                </li>
                <li>
                  <Link to="/circular-process">Circular Process</Link>
                </li>
                <li>
                  <Link to="/certifications">Certifications</Link>
                </li>
              </div>
            ) : null}
          </li>
          <li>
            <Link to="/work-with-us">Work with us</Link>
          </li>
        </ul>
        <ul className="navbar-desktop-contact navbar-language">
          <li>
            <Link to={`/${language[0]}`}>EN</Link>
          </li>
          <li>
            <Link to={`/${language[1]}`}>ES</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
