import React from "react";
import logo from "../assets/icons/logo-ferre.svg";
import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <a href="#" className="ferreyarns-logo">
        <img src={logo} alt="" />
      </a>
      <nav className="navbar-mobile">
        <ul className="navbar-mobile-links">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Sustainability</a>
          </li>
          <li>
            <a href="#">Work with us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <ul className="navbar-mobile-language">
            <li>
              <a href="#">EN</a>
            </li>
            <li>
              <a href="#">ES</a>
            </li>
          </ul>
        </ul>
      </nav>
      <nav className="navbar-desktop">
        <ul className="navbar-desktop-links">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Sustainability</a>
          </li>
          <li>
            <a href="#">Work with us</a>
          </li>
        </ul>
        <ul className="navbar-desktop-contact navbar-language">
          <li>
            <a href="#">EN</a>
          </li>
          <li>
            <a href="#">ES</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
