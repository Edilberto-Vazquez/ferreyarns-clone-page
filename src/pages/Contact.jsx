import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/Contact/English.json";
import Spanish from "../utils/PageContent/Contact/Spanish.json";
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

const Contact = () => {
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1] = idiom;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="contac">
      {/* How can we help you? section1 */}
      <FormSection title={section1.title} privacy={section1.privacy}>
        <FormDescription>
          <MultipleParagraphs paragraphs={section1.paragraphs} />
          <ContainerWithTitle title={section1.sectionPar.title}>
            <MultipleParagraphs paragraphs={section1.sectionPar.paragraphs} />

            <MultipleParagraphs paragraphs={["Ph. "]}>
              <a href={section1.sectionPar.links[0].link}>
                {section1.sectionPar.links[0].name}
              </a>
            </MultipleParagraphs>
            <MultipleParagraphs paragraphs={["E. "]}>
              <a href={section1.sectionPar.links[1].link}>
                {section1.sectionPar.links[1].name}
              </a>
            </MultipleParagraphs>
          </ContainerWithTitle>
        </FormDescription>
        <FormInputsContainer desktopShort>
          {section1.inputs.map((item, index) =>
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
