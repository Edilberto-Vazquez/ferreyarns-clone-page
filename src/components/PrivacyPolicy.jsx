import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { SectionItem, SectionList, SectionPar } from "./SectionItem";
import { privacyPEN, privacyPES } from "../utils/PageContent/PrivacyPolicy";
import useOpacityAnm from "../utils/animations/useOpacityAnm";

const PrivacyPolicy = () => {
  const { language } = useContext(LanguageChanger);
  const [refOpc] = useOpacityAnm();
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = privacyPEN;
  } else if (language === "es") {
    idiom = privacyPES;
  }
  return (
    <div
      ref={refOpc}
      className="privacy-policy some-questions__item container-row-gap"
    >
      {/* first paragraph */}
      <SectionItem>
        <SectionPar paragraphs={idiom.paragraphs} />
      </SectionItem>
      {/* controller section */}
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
      {/* purpose of data processing section */}
      <SectionItem title={idiom.purposeDP.title}>
        <SectionPar paragraphs={idiom.purposeDP.paragraphs} />
        <SectionList listType="ol" listItems={idiom.purposeDP.list} />
      </SectionItem>
      {/* conservation period section */}
      <SectionItem title={idiom.conservPeriod.title}>
        <SectionPar paragraphs={idiom.conservPeriod.paragraphs} />
      </SectionItem>
      {/* legal standing section */}
      <SectionItem title={idiom.legalStanding.title}>
        <SectionPar paragraphs={idiom.legalStanding.paragraphs} />
      </SectionItem>
      {/* recipients section */}
      <SectionItem title={idiom.recipients.title}>
        <SectionPar paragraphs={idiom.recipients.paragraphs} />
      </SectionItem>
      {/* user rights section */}
      <SectionItem title={idiom.userRights.title}>
        <SectionPar paragraphs={idiom.userRights.paragraphs1} />
        <SectionList listType="ul" listItems={idiom.userRights.list} />
        <SectionPar paragraphs={idiom.userRights.paragraphs2} />
      </SectionItem>
      {/* securyty measures section */}
      <SectionItem title={idiom.securityMesures.title}>
        <SectionPar paragraphs={idiom.securityMesures.paragraphs} />
      </SectionItem>
      {/* use of cookies section */}
      <SectionItem title={idiom.useCookies.title}>
        <SectionPar paragraphs={idiom.useCookies.paragraphs} />
      </SectionItem>
      {/* change in regulation section */}
      <SectionItem title={idiom.changeRegulation.title}>
        <SectionPar paragraphs={idiom.changeRegulation.paragraphs} />
      </SectionItem>
    </div>
  );
};

export default PrivacyPolicy;
