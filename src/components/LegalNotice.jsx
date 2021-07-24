import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { SectionItem, SectionList, SectionPar } from "./SectionItem";
import { legalNoticeEN, legalNoticeES } from "../utils/PageContent/LegalNotice";

const LegalNotice = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = legalNoticeEN;
  } else if (language === "es") {
    idiom = legalNoticeES;
  }
  return (
    <div className="legal-notice some-questions-section-item">
      <SectionItem title={idiom.legalNotice.title}>
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
        <SectionItem title={idiom.legalNotice.legalNotice1_2.title}>
          <SectionPar
            paragraphs={idiom.legalNotice.legalNotice1_2.paragraphs}
          />
        </SectionItem>
      </SectionItem>
      <SectionItem title={idiom.genCond.title}>
        <SectionItem title={idiom.genCond.genCond2_1.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_1.paragraphs1} />
          <SectionList
            listType="ul"
            listItems={idiom.genCond.genCond2_1.list}
          />
          <SectionPar paragraphs={idiom.genCond.genCond2_1.paragraphs2} />
        </SectionItem>
        <SectionItem title={idiom.genCond.genCond2_2.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_2.paragraphs} />
          <SectionList
            listType="ul"
            listItems={idiom.genCond.genCond2_2.list}
          />
        </SectionItem>
        <SectionItem title={idiom.genCond.genCond2_3.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_3.paragraphs} />
        </SectionItem>
        <SectionItem title={idiom.genCond.genCond2_4.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_4.paragraphs} />
        </SectionItem>
        <SectionItem title={idiom.genCond.genCond2_5.title}>
          <SectionPar paragraphs={idiom.genCond.genCond2_5.paragraphs} />
        </SectionItem>
      </SectionItem>
    </div>
  );
};

export default LegalNotice;
