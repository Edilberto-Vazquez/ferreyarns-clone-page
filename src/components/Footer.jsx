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
    <footer>
      <div className="footer-information">
        <div className="footer-logo">
          <div></div>
        </div>
        <div className="footer-contac">
          <p>{footer.contact.paragraphs}</p>
          {footer.contact.links.map((item, index) => (
            <p key={index}>
              {item.type}
              <a href={item.link}>{item.name}</a>
            </p>
          ))}
        </div>
        <div className="footer-general-information">
          {footer.someQuestions.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="footer-general-information">
          {footer.pages.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="footer-social-media">
          <p>
            <strong>{footer.follow.title}</strong>
          </p>
          {footer.follow.socialMedia.map((item, index) => (
            <a key={index} href={item.link}>
              <img
                src={item.img}
                alt=""
                className="footer-social-media_icons"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="certifications border-black">
        <img src={footer.img} alt="" />
      </div>
      <div className="all-rights-reserved">
        <p>{footer.reserved}</p>
      </div>
    </footer>
  );
};

export default Footer;
