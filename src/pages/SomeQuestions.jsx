import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FAQs } from "../components/FAQs";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Cookies from "../components/Cookies";
import LegalNotice from "../components/LegalNotice";
import Projects from "../components/Projects";
import { SectionOptions } from "../components/SectionItem";
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
        return <LegalNotice />;
      case "Projects":
        return <Projects />;
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
          <SectionOptions
            listItems={[
              "FAQs",
              "Privacy Policy",
              "Cookie Policy",
              "Legal Notice",
              "Projects",
            ]}
            itemName="FAQs"
            section={section}
            setSection={setSection}
          />
          {handleSection()}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SomeQuestions;
