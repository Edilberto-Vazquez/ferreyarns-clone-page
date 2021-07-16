import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FAQs } from "../components/FAQs";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Cookies from "../components/Cookies";
import "./styles/SomeQuestions.css";

const SomeQuestions = () => {
  const [section, setSection] = useState("FAQs");
  const handleSection = () => {
    switch (section) {
      case "FAQs":
        return <FAQs />;
      case "Privacy Policy":
        return <PrivacyPolicy />;
      case "Cookie Policy":
        return <Cookies />;
      case "Legal Notice":
        return <p>ln</p>;
      case "Projects":
        return <p>p</p>;
    }
  };
  return (
    <>
      <Header />
      <main className="some-questions">
        <div className="some-questions-title">
          <h4>Ferre / {section}</h4>
          <h2>{section}</h2>
        </div>
        <div className="some-questions-container">
          <aside className="some-questions-section-list">
            <ul>
              <li onClick={() => setSection("FAQs")}>FAQs</li>
              <li onClick={() => setSection("Privacy Policy")}>
                Privacy Policy
              </li>
              <li onClick={() => setSection("Cookie Policy")}>Cookie Policy</li>
              <li onClick={() => setSection("Legal Notice")}>Legal Notice</li>
              <li onClick={() => setSection("Projects")}>Projects</li>
            </ul>
          </aside>
          {handleSection()}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SomeQuestions;
