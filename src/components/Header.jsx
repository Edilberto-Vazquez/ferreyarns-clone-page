import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/Header/English.json";
import Spanish from "../utils/PageContent/Header/Spanish.json";
import "./styles/Header.css";

const Header = () => {
  const { setLanguage, language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [header] = idiom;

  return (
    <header>
      <Link to={header.logo[1]} className="ferreyarns-logo">
        <img src={header.logo[0]} alt="" />
      </Link>
      <nav className="navbar-mobile">
        <ul className="navbar-mobile-links">
          {/* <li>
            <Link to={header.aboutUs[1]}>{header.aboutUs[0]}</Link>
          </li> */}
          <li>
            <Link to={header.products[1]}>{header.products[0]}</Link>
          </li>
          <li>
            <details>
              <summary>{header.sustainability.title}</summary>
              <div>
                {header.sustainability.items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </div>
            </details>
          </li>
          <li>
            <Link to={header.certifications[1]}>
              {header.certifications[0]}
            </Link>
          </li>
          {/* <li>
            <Link to={header.workWithUs[1]}>{header.workWithUs[0]}</Link>
          </li> */}
          <li>
            <Link to={header.contact[1]}>{header.contact[0]}</Link>
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
            <Link to={header.aboutUs[1]}>{header.aboutUs[0]}</Link>
          </li> */}
          <li>
            <Link to={header.products[1]}>{header.products[0]}</Link>
          </li>
          <li>
            <Link to={header.certifications[1]}>
              {header.certifications[0]}
            </Link>
          </li>
          <li className="dropdown-menu">
            <details className="dropdown-menu__details">
              <summary className="dropdown-menu__details-title">
                {header.sustainability.title}
              </summary>
              <div className="dropdown-menu__details-items">
                {header.sustainability.items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </div>
            </details>
          </li>
          {/* <li>
            <Link to={header.workWithUs[1]}>{header.workWithUs[0]}</Link>
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
            <Link to={header.contact[1]}>{header.contact[0]}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
