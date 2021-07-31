import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/LegalNotice/English.json";
import Spanish from "../utils/PageContent/LegalNotice/Spanish.json";
import {
  ContainerWithTitle,
  MultipleList,
  MultipleParagraphs,
} from "./GeneralComponents";
import useOpacityAnm from "../utils/animations/useOpacityAnm";

const LegalNotice = () => {
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1, section2] = idiom;
  const [refOpc] = useOpacityAnm();
  return (
    <div
      ref={refOpc}
      className="legal-notice some-questions__item opacity-animation"
      aria-expanded={false}
    >
      {/* general aspects legal notice section1 */}
      <ContainerWithTitle title={section1.title}>
        {/* 1.1. Identification data of the Information Society Service Provider */}
        <ContainerWithTitle title={section1.legalNotice1_1.title}>
          <MultipleParagraphs paragraphs={section1.legalNotice1_1.paragraphs} />
          <p>
            <strong>{section1.legalNotice1_1.address.title}</strong>
            {section1.legalNotice1_1.address.description}
          </p>
          {section1.legalNotice1_1.links.map((item, index) => (
            <p key={index}>
              <strong>{item.type}</strong>
              <a href={item.link}>{item.name}</a>
            </p>
          ))}
        </ContainerWithTitle>
        {/* 1.2 Acceptance and validity of the general and particular conditions */}
        <ContainerWithTitle title={section1.legalNotice1_2.title}>
          <MultipleParagraphs paragraphs={section1.legalNotice1_2.paragraphs} />
        </ContainerWithTitle>
      </ContainerWithTitle>

      {/* general conditions of use for this wbsite section2 */}
      <ContainerWithTitle title={section2.title}>
        {/* 2.1. Obligations of use */}
        <ContainerWithTitle title={section2.genCond2_1.title}>
          <MultipleParagraphs paragraphs={section2.genCond2_1.paragraphs1} />
          <MultipleList listType="ul" listItems={section2.genCond2_1.list} />
          <MultipleParagraphs paragraphs={section2.genCond2_1.paragraphs2} />
        </ContainerWithTitle>
        {/* 2.2. Exemption of liability */}
        <ContainerWithTitle title={section2.genCond2_2.title}>
          <MultipleParagraphs paragraphs={section2.genCond2_2.paragraphs} />
          <MultipleList listType="ul" listItems={section2.genCond2_2.list} />
        </ContainerWithTitle>
        {/* 2.3. Use of hyperlinks */}
        <ContainerWithTitle title={section2.genCond2_3.title}>
          <MultipleParagraphs paragraphs={section2.genCond2_3.paragraphs} />
        </ContainerWithTitle>
        {/* 2.4. Intellectual Property */}
        <ContainerWithTitle title={section2.genCond2_4.title}>
          <MultipleParagraphs paragraphs={section2.genCond2_4.paragraphs} />
        </ContainerWithTitle>
        {/* 2.5. Jurisdiction and applicable law */}
        <ContainerWithTitle title={section2.genCond2_5.title}>
          <MultipleParagraphs paragraphs={section2.genCond2_5.paragraphs} />
        </ContainerWithTitle>
      </ContainerWithTitle>
    </div>
  );
};

export default LegalNotice;
