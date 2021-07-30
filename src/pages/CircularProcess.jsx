import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/CircularProcess/English.json";
import Spanish from "../utils/PageContent/CircularProcess/Spanish.json";
import SectionDropDown from "../components/SectionDropDown";
import CircularProcItem from "../components/CircularProcItem";
import { MultipleParagraphs } from "../components/GeneralComponents";
import "./styles/CircularProcess.css";

const CircularProcess = () => {
  // set language
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1, section2] = idiom;

  return (
    <main className="circular-process">
      <SectionDropDown
        title={section1.title}
        sectionName={section1.sectionName}
        video={section1.video}
        yAxis="top"
      >
        <MultipleParagraphs paragraphs={section1.paragraphs} />
      </SectionDropDown>
      <div className="circular-process-items">
        {section2.process.map((item, index) => (
          <CircularProcItem
            key={index}
            title={item.title}
            titleNum={item.imgNumber}
            description={item.paragraphs}
            imgs={item.imgs}
          ></CircularProcItem>
        ))}
      </div>
    </main>
  );
};

export default CircularProcess;
