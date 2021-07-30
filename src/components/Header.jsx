import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageChanger } from "../utils/LanguageChanger";
import { headerEN, headerES } from "../utils/PageContent/Header";
import "./styles/Header.css";

const Header = () => {
  const { setLanguage, language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = headerEN;
  } else if (language === "es") {
    idiom = headerES;
  }

  return (
    <header>
      <Link to={idiom.logo[1]} className="ferreyarns-logo">
        <img src={idiom.logo[0]} alt="" />
      </Link>
      <nav className="navbar-mobile">
        <ul className="navbar-mobile-links">
          {/* <li>
            <Link to={idiom.aboutUs[1]}>{idiom.aboutUs[0]}</Link>
          </li> */}
          <li>
            <Link to={idiom.products[1]}>{idiom.products[0]}</Link>
          </li>
          <li>Sustainability</li>
          <li>
            <Link to={idiom.certifications[1]}>{idiom.certifications[0]}</Link>
          </li>
          {/* <li>
            <Link to={idiom.workWithUs[1]}>{idiom.workWithUs[0]}</Link>
          </li> */}
          <li>
            <Link to={idiom.contact[1]}>{idiom.contact[0]}</Link>
          </li>
          <ul className="navbar-mobile-language navbar-language">
            <li
              onClick={() => setLanguage("en")}
              className={`${language === "en" && "navbar-language__current"}`}
            >
              EN
            </li>
            <li
              onClick={() => setLanguage("es")}
              className={`${language === "es" && "navbar-language__current"}`}
            >
              ES
            </li>
          </ul>
        </ul>
      </nav>
      <nav className="navbar-desktop">
        <ul className="navbar-desktop-links">
          {/* <li>
            <Link to={idiom.aboutUs[1]}>{idiom.aboutUs[0]}</Link>
          </li> */}
          <li>
            <Link to={idiom.products[1]}>{idiom.products[0]}</Link>
          </li>
          <li>Sustainability</li>
          <li>
            <Link to={idiom.certifications[1]}>{idiom.certifications[0]}</Link>
          </li>
          {/* <li>
            <Link to={idiom.workWithUs[1]}>{idiom.workWithUs[0]}</Link>
          </li> */}
        </ul>
        <ul className="navbar-desktop-contact navbar-language">
          <li
            onClick={() => setLanguage("en")}
            className={`${language === "en" && "navbar-language__current"}`}
          >
            EN
          </li>
          <li
            onClick={() => setLanguage("es")}
            className={`${language === "es" && "navbar-language__current"}`}
          >
            ES
          </li>
          <li>
            <Link to={idiom.contact[1]}>{idiom.contact[0]}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
