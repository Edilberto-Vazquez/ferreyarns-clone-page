import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import {
  FormSection,
  FormSectionDescription,
  FormSectionContainer,
  FormSectionInputs,
  FormSectionTextArea,
  FormSectionButton,
} from "../components/FormSection";
import { SectionItem, SectionPar } from "../components/SectionItem.jsx";
import { contacEN, contacES } from "../utils/PageContent/Contact";
import "./styles/Contact.css";

const Contact = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = contacEN;
  } else if (language === "es") {
    idiom = contacES;
  }
  return (
    <main className="contac">
      <FormSection title={idiom.form.title}>
        <FormSectionDescription>
          <SectionPar content={idiom.form.paragraphs} />
          <SectionItem title={idiom.form.sectionPar.title}>
            {idiom.form.sectionPar.paragraphs.map((item) => (
              <SectionPar content={item} />
            ))}
            <SectionPar content="Ph. ">
              <a href={idiom.form.sectionPar.links[0].link}>
                {idiom.form.sectionPar.links[0].name}
              </a>
            </SectionPar>
            <SectionPar content="E. ">
              <a href={idiom.form.sectionPar.links[1].link}>
                {idiom.form.sectionPar.links[1].name}
              </a>
            </SectionPar>
          </SectionItem>
        </FormSectionDescription>
        <FormSectionContainer desktopShort>
          {idiom.form.inputs.map((item, index) =>
            item.name !== "message" ? (
              <FormSectionInputs
                key={index}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
              />
            ) : (
              <FormSectionTextArea
                key={index}
                name={item.name}
                placeholder={item.placeholder}
              ></FormSectionTextArea>
            )
          )}
        </FormSectionContainer>
        <FormSectionButton btnName="SEND" />
      </FormSection>
    </main>
  );
};

export default Contact;
