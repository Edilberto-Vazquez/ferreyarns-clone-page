import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { Link } from "react-router-dom";
import { footerEN, footerES } from "../utils/PageContent/Footer";
import "./styles/Footer.css";

const Footer = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = footerEN;
  } else if (language === "es") {
    idiom = footerES;
  }
  return (
    <footer>
      <div className="footer-information">
        <div className="footer-logo">
          <div></div>
        </div>
        <div className="footer-contac">
          <p>{idiom.contact.paragraphs}</p>
          {idiom.contact.links.map((item) => (
            <p>
              {item.type}
              <a href={item.link}>{item.name}</a>
            </p>
          ))}
        </div>
        <div className="footer-general-information">
          {idiom.someQuestions.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="footer-general-information">
          {idiom.pages.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="footer-social-media">
          <p>{idiom.follow.title}</p>
          {idiom.follow.socialMedia.map((item) => (
            <a href={item.link}>{item.name}</a>
          ))}
        </div>
      </div>
      <div className="certifications border-black">
        <img src={idiom.img} alt="" />
      </div>
      <div className="all-rights-reserved">
        <p>{idiom.reserved}</p>
      </div>
    </footer>
  );
};

export default Footer;
