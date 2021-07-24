import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { SectionItem, SectionList, SectionPar } from "./SectionItem";
import { privacyPEN, privacyPES } from "../utils/PageContent/PrivacyPolicy";

const PrivacyPolicy = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = privacyPEN;
  } else if (language === "es") {
    idiom = privacyPES;
  }
  return (
    <div className="privacy-policy some-questions-section-item">
      <SectionItem>
        <SectionPar paragraphs={idiom.paragraphs} />
      </SectionItem>
      <SectionItem title={idiom.controller.title}>
        <SectionPar paragraphs={idiom.controller.paragraphs} />
        <SectionPar paragraphs={[idiom.controller.links.paragraphs[0]]}>
          <a href={idiom.controller.links.hyper[0].link}>
            {idiom.controller.links.hyper[0].name}
          </a>
        </SectionPar>
        <SectionPar paragraphs={[idiom.controller.links.paragraphs[1]]}>
          <a href={idiom.controller.links.hyper[1].link}>
            {idiom.controller.links.hyper[1].name}
          </a>
        </SectionPar>
      </SectionItem>
      <SectionItem title={idiom.purposeDP.title}>
        <SectionPar paragraphs={idiom.purposeDP.paragraphs} />
        <SectionList listType="ol" listItems={idiom.purposeDP.list} />
      </SectionItem>
      <SectionItem title={idiom.conservPeriod.title}>
        <SectionPar paragraphs={idiom.conservPeriod.paragraphs} />
      </SectionItem>
      <SectionItem title={idiom.legalStanding.title}>
        <SectionPar paragraphs={idiom.legalStanding.paragraphs} />
      </SectionItem>
      <SectionItem title={idiom.recipients.title}>
        <SectionPar paragraphs={idiom.recipients.paragraphs} />
      </SectionItem>
      <SectionItem title={idiom.userRights.title}>
        <SectionPar paragraphs={idiom.userRights.paragraphs1} />
        <SectionList listType="ul" listItems={idiom.userRights.list} />
        <SectionPar paragraphs={idiom.userRights.paragraphs2} />
      </SectionItem>
      <SectionItem title={idiom.securityMesures.title}>
        <SectionPar paragraphs={idiom.securityMesures.paragraphs} />
      </SectionItem>
      <SectionItem title={idiom.useCookies.title}>
        <SectionPar paragraphs={idiom.useCookies.paragraphs} />
      </SectionItem>
      <SectionItem title={idiom.changeRegulation.title}>
        <SectionPar paragraphs={idiom.changeRegulation.paragraphs} />
      </SectionItem>
    </div>
  );
};

export default PrivacyPolicy;
