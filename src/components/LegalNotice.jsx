import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import {
  ContainerWithTitle,
  MultipleList,
  MultipleParagraphs,
} from "./GeneralComponents";
import { legalNoticeEN, legalNoticeES } from "../utils/PageContent/LegalNotice";
import useOpacityAnm from "../utils/animations/useOpacityAnm";

const LegalNotice = () => {
  const { language } = useContext(LanguageChanger);
  const [refOpc] = useOpacityAnm();
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = legalNoticeEN;
  } else if (language === "es") {
    idiom = legalNoticeES;
  }
  return (
    <div ref={refOpc} className="legal-notice some-questions__item">
      {/* general aspects legal notice section */}
      <ContainerWithTitle title={idiom.legalNotice.title}>
        {/* 1.1. Identification data of the Information Society Service Provider */}
        <ContainerWithTitle title={idiom.legalNotice.legalNotice1_1.title}>
          <MultipleParagraphs
            paragraphs={idiom.legalNotice.legalNotice1_1.paragraphs}
          />
          <p>
            <strong>{idiom.legalNotice.legalNotice1_1.address.title}</strong>
            {idiom.legalNotice.legalNotice1_1.address.description}
          </p>
          {idiom.legalNotice.legalNotice1_1.links.map((item, index) => (
            <p key={index}>
              <strong>{item.type}</strong>
              <a href={item.link}>{item.name}</a>
            </p>
          ))}
        </ContainerWithTitle>
        {/* 1.2 Acceptance and validity of the general and particular conditions */}
        <ContainerWithTitle title={idiom.legalNotice.legalNotice1_2.title}>
          <MultipleParagraphs
            paragraphs={idiom.legalNotice.legalNotice1_2.paragraphs}
          />
        </ContainerWithTitle>
      </ContainerWithTitle>

      {/* general conditions of use for this wbsite section */}
      <ContainerWithTitle title={idiom.genCond.title}>
        {/* 2.1. Obligations of use */}
        <ContainerWithTitle title={idiom.genCond.genCond2_1.title}>
          <MultipleParagraphs
            paragraphs={idiom.genCond.genCond2_1.paragraphs1}
          />
          <MultipleList
            listType="ul"
            listItems={idiom.genCond.genCond2_1.list}
          />
          <MultipleParagraphs
            paragraphs={idiom.genCond.genCond2_1.paragraphs2}
          />
        </ContainerWithTitle>
        {/* 2.2. Exemption of liability */}
        <ContainerWithTitle title={idiom.genCond.genCond2_2.title}>
          <MultipleParagraphs
            paragraphs={idiom.genCond.genCond2_2.paragraphs}
          />
          <MultipleList
            listType="ul"
            listItems={idiom.genCond.genCond2_2.list}
          />
        </ContainerWithTitle>
        {/* 2.3. Use of hyperlinks */}
        <ContainerWithTitle title={idiom.genCond.genCond2_3.title}>
          <MultipleParagraphs
            paragraphs={idiom.genCond.genCond2_3.paragraphs}
          />
        </ContainerWithTitle>
        {/* 2.4. Intellectual Property */}
        <ContainerWithTitle title={idiom.genCond.genCond2_4.title}>
          <MultipleParagraphs
            paragraphs={idiom.genCond.genCond2_4.paragraphs}
          />
        </ContainerWithTitle>
        {/* 2.5. Jurisdiction and applicable law */}
        <ContainerWithTitle title={idiom.genCond.genCond2_5.title}>
          <MultipleParagraphs
            paragraphs={idiom.genCond.genCond2_5.paragraphs}
          />
        </ContainerWithTitle>
      </ContainerWithTitle>
    </div>
  );
};

export default LegalNotice;
