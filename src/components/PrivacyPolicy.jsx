import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import {
  ContainerWithTitle,
  MultipleList,
  MultipleParagraphs,
} from "./GeneralComponents";
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
      <ContainerWithTitle>
        <MultipleParagraphs paragraphs={idiom.paragraphs} />
      </ContainerWithTitle>
      {/* controller section */}
      <ContainerWithTitle title={idiom.controller.title}>
        <MultipleParagraphs paragraphs={idiom.controller.paragraphs} />
        <MultipleParagraphs paragraphs={[idiom.controller.links.paragraphs[0]]}>
          <a href={idiom.controller.links.hyper[0].link}>
            {idiom.controller.links.hyper[0].name}
          </a>
        </MultipleParagraphs>
        <MultipleParagraphs paragraphs={[idiom.controller.links.paragraphs[1]]}>
          <a href={idiom.controller.links.hyper[1].link}>
            {idiom.controller.links.hyper[1].name}
          </a>
        </MultipleParagraphs>
      </ContainerWithTitle>
      {/* purpose of data processing section */}
      <ContainerWithTitle title={idiom.purposeDP.title}>
        <MultipleParagraphs paragraphs={idiom.purposeDP.paragraphs} />
        <MultipleList listType="ol" listItems={idiom.purposeDP.list} />
      </ContainerWithTitle>
      {/* conservation period section */}
      <ContainerWithTitle title={idiom.conservPeriod.title}>
        <MultipleParagraphs paragraphs={idiom.conservPeriod.paragraphs} />
      </ContainerWithTitle>
      {/* legal standing section */}
      <ContainerWithTitle title={idiom.legalStanding.title}>
        <MultipleParagraphs paragraphs={idiom.legalStanding.paragraphs} />
      </ContainerWithTitle>
      {/* recipients section */}
      <ContainerWithTitle title={idiom.recipients.title}>
        <MultipleParagraphs paragraphs={idiom.recipients.paragraphs} />
      </ContainerWithTitle>
      {/* user rights section */}
      <ContainerWithTitle title={idiom.userRights.title}>
        <MultipleParagraphs paragraphs={idiom.userRights.paragraphs1} />
        <MultipleList listType="ul" listItems={idiom.userRights.list} />
        <MultipleParagraphs paragraphs={idiom.userRights.paragraphs2} />
      </ContainerWithTitle>
      {/* securyty measures section */}
      <ContainerWithTitle title={idiom.securityMesures.title}>
        <MultipleParagraphs paragraphs={idiom.securityMesures.paragraphs} />
      </ContainerWithTitle>
      {/* use of cookies section */}
      <ContainerWithTitle title={idiom.useCookies.title}>
        <MultipleParagraphs paragraphs={idiom.useCookies.paragraphs} />
      </ContainerWithTitle>
      {/* change in regulation section */}
      <ContainerWithTitle title={idiom.changeRegulation.title}>
        <MultipleParagraphs paragraphs={idiom.changeRegulation.paragraphs} />
      </ContainerWithTitle>
    </div>
  );
};

export default PrivacyPolicy;
