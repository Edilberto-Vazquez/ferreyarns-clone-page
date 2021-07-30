import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import {
  FormSection,
  FormSectionDescription,
  FormSectionContainer,
  FormSectionInputs,
  FormSectionTextArea,
  FormSectionButton,
} from "../components/FormSection";
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
        <FormSectionDescription>
          <MultipleParagraphs paragraphs={idiom.form.paragraphs} />
          <ContainerWithTitle title={idiom.form.MultipleParagraphs.title}>
            <MultipleParagraphs
              paragraphs={idiom.form.MultipleParagraphs.paragraphs}
            />

            <MultipleParagraphs paragraphs={["Ph. "]}>
              <a href={idiom.form.MultipleParagraphs.links[0].link}>
                {idiom.form.MultipleParagraphs.links[0].name}
              </a>
            </MultipleParagraphs>
            <MultipleParagraphs paragraphs={["E. "]}>
              <a href={idiom.form.MultipleParagraphs.links[1].link}>
                {idiom.form.MultipleParagraphs.links[1].name}
              </a>
            </MultipleParagraphs>
          </ContainerWithTitle>
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
