import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { SectionItem, SectionList, SectionPar } from "./SectionItem";
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
      <SectionItem title={idiom.legalNotice.title}>
        {/* 1.1. Identification data of the Information Society Service Provider */}
        <SectionItem title={idiom.legalNotice.legalNotice1_1.title}>
          <SectionPar
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
        </SectionItem>
        {/* 1.2 Acceptance and validity of the general and particular conditions */}
        <SectionItem title={idiom.legalNotice.legalNotice1_2.title}>
          <SectionPar
            paragraphs={idiom.legalNotice.legalNotice1_2.paragraphs}
          />
        </SectionItem>
      </SectionItem>

      {/* general conditions of use for this wbsite section */}
      <SectionItem title={idiom.genCond.title}>
        {/* 2.1. Obligations of use */}
        <SectionItem title={idiom.genCond.genCond2_1.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_1.paragraphs1} />
          <SectionList
            listType="ul"
            listItems={idiom.genCond.genCond2_1.list}
          />
          <SectionPar paragraphs={idiom.genCond.genCond2_1.paragraphs2} />
        </SectionItem>
        {/* 2.2. Exemption of liability */}
        <SectionItem title={idiom.genCond.genCond2_2.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_2.paragraphs} />
          <SectionList
            listType="ul"
            listItems={idiom.genCond.genCond2_2.list}
          />
        </SectionItem>
        {/* 2.3. Use of hyperlinks */}
        <SectionItem title={idiom.genCond.genCond2_3.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_3.paragraphs} />
        </SectionItem>
        {/* 2.4. Intellectual Property */}
        <SectionItem title={idiom.genCond.genCond2_4.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_4.paragraphs} />
        </SectionItem>
        {/* 2.5. Jurisdiction and applicable law */}
        <SectionItem title={idiom.genCond.genCond2_5.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_5.paragraphs} />
        </SectionItem>
      </SectionItem>
    </div>
  );
};

export default LegalNotice;
