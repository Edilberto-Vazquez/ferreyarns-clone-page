import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo-ferre.svg";
import "./styles/Header.css";

const Header = () => {
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
            <Link to="#">Sustainability</Link>
          </li>
          <li>
            <Link to="/work-with-us">Work with us</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <ul className="navbar-mobile-language">
            <li>
              <Link to="#">EN</Link>
            </li>
            <li>
              <Link to="#">ES</Link>
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
          <li>
            <Link to="#">Sustainability</Link>
          </li>
          <li>
            <Link to="/work-with-us">Work with us</Link>
          </li>
        </ul>
        <ul className="navbar-desktop-contact navbar-language">
          <li>
            <Link to="#">EN</Link>
          </li>
          <li>
            <Link to="#">ES</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
