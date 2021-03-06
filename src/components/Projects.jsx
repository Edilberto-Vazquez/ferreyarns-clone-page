import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/Projects/English.json";
import Spanish from "../utils/PageContent/Projects/Spanish.json";
import { ContainerWithTitle, MultipleParagraphs } from "./GeneralComponents";
import useSectionChangeAnm from "../utils/animations/useSectionChangeAnm";

const Projects = () => {
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1] = idiom;
  const [refOpc] = useSectionChangeAnm();

  return (
    <div
      ref={refOpc}
      className="projects some-questions-section-item section-change-animation"
    >
      {/* Projects*/}
      <ContainerWithTitle title={section1.title}>
        {/* FINANCIAL SUPPORT FOR REINDUSTRIALISATION AND PROMOTION OF INDUSTRIAL COMPETITIVENESS*/}
        <ContainerWithTitle title={section1.financialSup.title}>
          <MultipleParagraphs paragraphs={section1.financialSup.paragraphs} />
        </ContainerWithTitle>
      </ContainerWithTitle>
    </div>
  );
};

export default Projects;
