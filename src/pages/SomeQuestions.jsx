import React, { useContext, useState } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import FAQs from "../components/FAQs";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Cookies from "../components/Cookies";
import LegalNotice from "../components/LegalNotice";
import Projects from "../components/Projects";
import { SectionOptions } from "../components/SectionItem";
import "./styles/SomeQuestions.css";
import {
  someQuestionsEN,
  someQuestionsES,
} from "../utils/PageContent/someQuestions";

const SomeQuestions = ({ tabSection }) => {
  const [section, setSection] = useState(tabSection);
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = someQuestionsEN;
  } else if (language === "es") {
    idiom = someQuestionsES;
  }

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
      default:
        return null;
    }
  };

  return (
    <main className="some-questions">
      <div className="some-questions-title">
        <h4 className="section-name">Ferre / {section.name}</h4>
        <h2 className="title-black">{section.name}</h2>
      </div>
      <div className="some-questions-container sectionOptions border-black">
        <SectionOptions
          listItems={idiom.sections}
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
