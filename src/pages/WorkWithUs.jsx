import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import SectionDropDown from "../components/SectionDropDown";
import {
  FormSection,
  FormSectionDescription,
  FormSectionInputs,
  FormSectionContainer,
  FormSectionButton,
} from "../components/FormSection";
import { MultipleParagraphs } from "../components/GeneralComponents";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="work-with-us">
      <SectionDropDown
        title={idiom.workFerre.title}
        sectionName={idiom.workFerre.sectionName}
        img={idiom.workFerre.img}
        xAxis="left"
        yAxis="top"
      >
        <MultipleParagraphs paragraphs={idiom.workFerre.paragraphs} />
      </SectionDropDown>
      <FormSection title={idiom.form.title}>
        <FormSectionDescription>
          <MultipleParagraphs paragraphs={idiom.form.paragraphs} />
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
            <MultipleParagraphs paragraphs={idiom.form.loadFile.resume} />
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
