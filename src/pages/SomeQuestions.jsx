import React, { useState } from "react";
import FAQs from "../components/FAQs";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Cookies from "../components/Cookies";
import LegalNotice from "../components/LegalNotice";
import Projects from "../components/Projects";
import { SectionOptions } from "../components/SectionItem";
import "./styles/SomeQuestions.css";

const SomeQuestions = ({ tabSection }) => {
  const [section, setSection] = useState(tabSection);

  const handleSection = (section) => {
    switch (section) {
      case 0:
        return <FAQs />;
      case 1:
        return <PrivacyPolicy />;
      case 2:
        return <Cookies />;
      case 3:
        return <LegalNotice />;
      case 4:
        return <Projects />;
    }
  };

  return (
    <main className="some-questions">
      <div className="some-questions-title">
        <h4 className="subtitle">Ferre / {section.name}</h4>
        <h2 className="title-black">{section.name}</h2>
      </div>
      <div className="some-questions-container sectionOptions border-black">
        <SectionOptions
          listItems={[
            { tab: 0, name: "FAQs" },
            { tab: 1, name: "Privacy Policy" },
            { tab: 2, name: "Cookie Policy" },
            { tab: 3, name: "Legal Notice" },
            { tab: 4, name: "Projects" },
          ]}
          section={section}
          setSection={setSection}
          focusType="underline"
          fontColor="black"
        />
        {handleSection(section.tab)}
      </div>
    </main>
  );
};

export default SomeQuestions;
