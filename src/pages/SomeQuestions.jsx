import React, { useContext, useState, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/SomeQuestions/English.json";
import Spanish from "../utils/PageContent/SomeQuestions/Spanish.json";
import FAQs from "../components/FAQs";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Cookies from "../components/Cookies";
import LegalNotice from "../components/LegalNotice";
// import Projects from "../components/Projects";
import { SectionMenu } from "../components/GeneralComponents";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import "./styles/SomeQuestions.css";

const SomeQuestions = ({ tabSection }) => {
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1] = idiom;
  const [section, setSection] = useState("");
  const [refOpcTitle] = useOpacityAnm();
  const [refOpcSection] = useOpacityAnm();

  useEffect(() => {
    window.scrollTo(0, 0);
    setSection(tabSection);
  }, [tabSection]);

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
      // case 4:
      //   return <Projects />;
      default:
        return null;
    }
  };

  return (
    <main className="some-questions">
      <div
        ref={refOpcTitle}
        className="some-questions__title opacity-animation"
        aria-expanded={false}
      >
        <h4 className="section-name">Ferre / {section.name}</h4>
        <h2 className="title-black">{section.name}</h2>
      </div>
      <div
        ref={refOpcSection}
        className="section-options border-black opacity-animation"
        aria-expanded={false}
      >
        <SectionMenu
          listItems={section1.sections}
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
