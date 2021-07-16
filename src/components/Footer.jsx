import React from "react";
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
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Legal Notice</a>
          <a href="#">Projects</a>
        </div>
        <div className="footer-general-information">
          <a href="#">About us</a>
          <a href="#">Products</a>
          <a href="#">Work with us</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-social-media">
          <p>Follow us</p>
          <a href="https://www.instagram.com/ferreyarns/">instagram</a>
          <a href="https://www.linkedin.com/company/ferreyarns/?viewAsMember=true">
            linkedin
          </a>
        </div>
      </div>
      <div className="certifications">
        <img src={certifications} alt="" />
      </div>
      <div className="all-rights-reserved">
        <p>© Ferre 2021 | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
