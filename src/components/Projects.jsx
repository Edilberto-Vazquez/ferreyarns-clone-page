import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { ContainerWithTitle, MultipleParagraphs } from "./SectionItem";
import { projectsEN, projectsES } from "../utils/PageContent/Projects";
import useOpacityAnm from "../utils/animations/useOpacityAnm";

const Projects = () => {
  const { language } = useContext(LanguageChanger);
  const [refOpc] = useOpacityAnm();
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = projectsEN;
  } else if (language === "es") {
    idiom = projectsES;
  }
  return (
    <div ref={refOpc} className="projects some-questions-section-item">
      {/* Projects*/}
      <ContainerWithTitle title={idiom.title}>
        {/* FINANCIAL SUPPORT FOR REINDUSTRIALISATION AND PROMOTION OF INDUSTRIAL COMPETITIVENESS*/}
        <ContainerWithTitle title={idiom.financialSup.title}>
          <MultipleParagraphs paragraphs={idiom.financialSup.paragraphs} />
        </ContainerWithTitle>
      </ContainerWithTitle>
    </div>
  );
};

export default Projects;
