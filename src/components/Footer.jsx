import React from "react";
import { Link } from "react-router-dom";
import certifications from "../assets/images/certifications-footer2.jpg";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-information">
        <div className="footer-logo">
          <div></div>
        </div>
        <div className="footer-contac">
          <p>
            Avda. Les Molines, 2 (03450)
            <br />
            Banyeres de Mariola, Alicante – Spain
          </p>
          <p>
            Ph: <a href="tel:+34 966 567 425">+34 966 567 425</a>
          </p>
          <p>
            E: <a href="mailto:hola@ferreyarns.com">hola@ferreyarns.com</a>
          </p>
        </div>
        <div className="footer-general-information">
          <Link to="/faqs">FAQs</Link>
          <Link to="/faqs">Privacy Policy</Link>
          <Link to="/faqs">Cookie Policy</Link>
          <Link to="/faqs">Legal Notice</Link>
          <Link to="/faqs">Projects</Link>
        </div>
        <div className="footer-general-information">
          <Link to="/about-us">About us</Link>
          <Link to="/products">Products</Link>
          <Link to="/work-with-us">Work with us</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="footer-social-media">
          <p>Follow us</p>
          <a href="https://www.instagram.com/ferreyarns/">instagram</a>
          <a href="https://www.linkedin.com/company/ferreyarns/?viewAsMember=true">
            linkedin
          </a>
        </div>
      </div>
      <div className="certifications border-black">
        <img src={certifications} alt="" />
      </div>
      <div className="all-rights-reserved">
        <p>© Ferre 2021 | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
