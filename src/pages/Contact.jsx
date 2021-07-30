import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import {
  FormSection,
  FormDescription,
  FormInputsContainer,
  FormInputs,
  FormTextArea,
  FormButton,
} from "../components/FormComponents";
import {
  ContainerWithTitle,
  MultipleParagraphs,
} from "../components/GeneralComponents.jsx";
import { contacEN, contacES } from "../utils/PageContent/Contact";

const Contact = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = contacEN;
  } else if (language === "es") {
    idiom = contacES;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="contac">
      <FormSection title={idiom.form.title}>
        <FormDescription>
          <MultipleParagraphs paragraphs={idiom.form.paragraphs} />
          <ContainerWithTitle title={idiom.form.sectionPar.title}>
            <MultipleParagraphs paragraphs={idiom.form.sectionPar.paragraphs} />

            <MultipleParagraphs paragraphs={["Ph. "]}>
              <a href={idiom.form.sectionPar.links[0].link}>
                {idiom.form.sectionPar.links[0].name}
              </a>
            </MultipleParagraphs>
            <MultipleParagraphs paragraphs={["E. "]}>
              <a href={idiom.form.sectionPar.links[1].link}>
                {idiom.form.sectionPar.links[1].name}
              </a>
            </MultipleParagraphs>
          </ContainerWithTitle>
        </FormDescription>
        <FormInputsContainer desktopShort>
          {idiom.form.inputs.map((item, index) =>
            item.name !== "message" ? (
              <FormInputs
                key={index}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
              />
            ) : (
              <FormTextArea
                key={index}
                name={item.name}
                placeholder={item.placeholder}
              ></FormTextArea>
            )
          )}
        </FormInputsContainer>
        <FormButton btnName="SEND" />
      </FormSection>
    </main>
  );
};

export default Contact;
