import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/CircularProcess/English.json";
import Spanish from "../utils/PageContent/CircularProcess/Spanish.json";
import useOpacityAnmOnScroll from "../utils/animations/useOpacityAnmOnScroll";
import SectionDropDown from "../components/SectionDropDown";
import ProcessItem from "../components/ProcessItem";
import { MultipleParagraphs } from "../components/GeneralComponents";
import "./styles/CircularProcess.css";

const CircularProcess = () => {
  // set language
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1, section2] = idiom;
  const [refOpc] = useOpacityAnmOnScroll();

  return (
    <main className="circular-process">
      <SectionDropDown
        title={section1.title}
        sectionName={section1.sectionName}
        video={section1.video}
        hTextPosition="left"
        vTextPosition="top"
      >
        <MultipleParagraphs paragraphs={section1.paragraphs} />
      </SectionDropDown>
      <div
        ref={refOpc}
        className="circular-process-items scrolling-animation-opacity"
        aria-expanded={false}
      >
        {section2.process.map((item, index) => (
          <ProcessItem
            key={index}
            title={item.title}
            titleNum={item.imgNumber}
            description={item.paragraphs}
            imgs={item.imgs}
          ></ProcessItem>
        ))}
      </div>
    </main>
  );
};

export default CircularProcess;
