import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { SectionItem, SectionPar } from "./SectionItem";
import { projectsEN, projectsES } from "../utils/PageContent/Projects";

const Projects = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = projectsEN;
  } else if (language === "es") {
    idiom = projectsES;
  }
  return (
    <div className="projects some-questions-section-item">
      <SectionItem title={idiom.title}>
        <SectionItem title={idiom.financialSup.title}>
          <SectionPar paragraphs={idiom.financialSup.paragraphs} />
        </SectionItem>
      </SectionItem>
    </div>
  );
};

export default Projects;
