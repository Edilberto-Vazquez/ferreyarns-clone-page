import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import SectionDropDown from "../components/SectionDropDown";
import {
  FormSection,
  FormDescription,
  FormInputs,
  FormInputsContainer,
  FormButton,
} from "../components/FormComponents";
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
        vTextPosition="left"
        hTextPosition="top"
      >
        <MultipleParagraphs paragraphs={idiom.workFerre.paragraphs} />
      </SectionDropDown>
      <FormSection title={idiom.form.title}>
        <FormDescription>
          <MultipleParagraphs paragraphs={idiom.form.paragraphs} />
        </FormDescription>
        <FormInputsContainer>
          {idiom.form.inputs.map((item, index) => (
            <FormInputs
              key={index}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
            />
          ))}
          <div className="file-upload">
            <MultipleParagraphs paragraphs={idiom.form.loadFile.resume} />
            <FormInputs
              type={idiom.form.loadFile.load.type}
              name={idiom.form.loadFile.load.name}
            />
          </div>
        </FormInputsContainer>
        <FormButton btnName={idiom.form.send} />
      </FormSection>
    </main>
  );
};

export default WorkWithUs;
