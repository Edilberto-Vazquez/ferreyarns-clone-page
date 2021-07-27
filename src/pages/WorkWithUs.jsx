import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import FeatureSection from "../components/FeatureSection";
import {
  FormSection,
  FormSectionDescription,
  FormSectionInputs,
  FormSectionContainer,
  FormSectionButton,
} from "../components/FormSection";
import { SectionPar } from "../components/SectionItem";
import { workWithUsEN, workWithUsES } from "../utils/PageContent/WorkWithUs";

const WorkWithUs = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = workWithUsEN;
  } else if (language === "es") {
    idiom = workWithUsES;
  }
  return (
    <main className="work-with-us">
      <FeatureSection
        title={idiom.workFerre.title}
        sectionName={idiom.workFerre.sectionName}
        img={idiom.workFerre.img}
        xAxis="left"
        yAxis="top"
      >
        <SectionPar paragraphs={idiom.workFerre.paragraphs} />
      </FeatureSection>
      <FormSection title={idiom.form.title}>
        <FormSectionDescription>
          <SectionPar paragraphs={idiom.form.paragraphs} />
        </FormSectionDescription>
        <FormSectionContainer>
          {idiom.form.inputs.map((item, index) => (
            <FormSectionInputs
              key={index}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
            />
          ))}
          <div className="file-upload">
            <SectionPar paragraphs={idiom.form.loadFile.resume} />
            <FormSectionInputs
              type={idiom.form.loadFile.load.type}
              name={idiom.form.loadFile.load.name}
            />
          </div>
        </FormSectionContainer>
        <FormSectionButton btnName={idiom.form.send} />
      </FormSection>
    </main>
  );
};

export default WorkWithUs;
