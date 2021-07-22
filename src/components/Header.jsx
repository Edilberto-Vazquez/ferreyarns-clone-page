import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageChanger } from "../utils/LanguageChanger";
import logo from "../assets/icons/logo-ferre.svg";
import "./styles/Header.css";

const Header = () => {
  const { setLanguage } = useContext(LanguageChanger);

  return (
    <header>
      <Link to="/" className="ferreyarns-logo">
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
          <li>
            <Link to="/certifications">Certifications</Link>
          </li>
          <li>
            <Link to="/work-with-us">Work with us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <ul className="navbar-mobile-language">
            <li onClick={() => setLanguage("en")}>EN</li>
            <li onClick={() => setLanguage("es")}>ES</li>
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
          <li>
            <Link to="/certifications">Certifications</Link>
          </li>
          <li>
            <Link to="/work-with-us">Work with us</Link>
          </li>
        </ul>
        <ul className="navbar-desktop-contact navbar-language">
          <li onClick={() => setLanguage("en")}>EN</li>
          <li onClick={() => setLanguage("es")}>ES</li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
