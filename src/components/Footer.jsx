import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/Footer/English.json";
import Spanish from "../utils/PageContent/Footer/Spanish.json";
import "./styles/Footer.css";

const Footer = () => {
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [footer] = idiom;
  return (
    <footer className="footer">
      <div className="footer-information">
        <div className="footer-information__logo">
          <div></div>
        </div>
        <div className="footer-information__contac">
          <p>{footer.contact.paragraphs}</p>
          {footer.contact.links.map((item, index) => (
            <p key={index}>
              {item.type}
              <a href={item.link}>{item.name}</a>
            </p>
          ))}
        </div>
        <div className="footer-information__general-information">
          {footer.someQuestions.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="footer-information__general-information">
          {footer.pages.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="footer-information__social-media">
          <p>
            <strong>{footer.follow.title}</strong>
          </p>
          {footer.follow.socialMedia.map((item, index) => (
            <a key={index} href={item.link} aria-label={item.arialabel}>
              <img
                src={item.img}
                alt={item.alt}
                className="footer-information__social-media-icons"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-certifications border-black">
        <img src={footer.img} alt="" />
      </div>
      <div className="footer-all-rights-reserved">
        <p>{footer.reserved}</p>
      </div>
    </footer>
  );
};

export default Footer;
