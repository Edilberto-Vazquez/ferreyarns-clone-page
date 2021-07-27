import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { SectionItem, SectionList, SectionPar } from "./SectionItem";
import { cookiesEN, cookiesES } from "../utils/PageContent/Cookies";
import useOpacityAnm from "../utils/animations/useOpacityAnm";

const Cookies = () => {
  const { language } = useContext(LanguageChanger);
  const [refOpc] = useOpacityAnm();
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = cookiesEN;
  } else if (language === "es") {
    idiom = cookiesES;
  }
  return (
    <div ref={refOpc} className="cookies some-questions-section-item">
      <SectionItem title={idiom.whatCookies.title}>
        <SectionPar paragraphs={idiom.whatCookies.paragraphs} />
      </SectionItem>
      <SectionItem title={idiom.hilaturasFC.title}>
        <SectionPar paragraphs={idiom.hilaturasFC.paragraphs} />
      </SectionItem>
      <SectionItem title={idiom.differentCookies.title}>
        <p>
          <strong>{idiom.differentCookies.sessionCookies.title}</strong>
          {idiom.differentCookies.sessionCookies.description}
        </p>
        <p>
          <strong>{idiom.differentCookies.persistentCookies.title}</strong>
          {idiom.differentCookies.persistentCookies.description}
        </p>
        <p>
          <strong>{idiom.differentCookies.ownCookies.title}</strong>
          {idiom.differentCookies.ownCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.ownCookies.list}
        />
        <p>
          <strong>{idiom.differentCookies.thirdParty.title}</strong>
          {idiom.differentCookies.thirdParty.description}
        </p>
        <SectionPar paragraphs={idiom.differentCookies.thirdParty.paragraphs} />
        <p>
          <strong>{idiom.differentCookies.tecnicalCookies.title}</strong>
          {idiom.differentCookies.tecnicalCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.tecnicalCookies.list}
        />
        <p>
          <strong>{idiom.differentCookies.customizationCookies.title}</strong>
          {idiom.differentCookies.customizationCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.customizationCookies.list}
        />
        <p>
          <strong>{idiom.differentCookies.analyticalCookies.title}</strong>
          {idiom.differentCookies.analyticalCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.analyticalCookies.list}
        />
        <p>
          <strong>{idiom.differentCookies.adversitingCookies.title}</strong>
          {idiom.differentCookies.adversitingCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.adversitingCookies.list}
        />
        <p>
          <strong>{idiom.differentCookies.flasCookies.title}</strong>
          {idiom.differentCookies.flasCookies.description}
        </p>
        <SectionPar
          paragraphs={idiom.differentCookies.flasCookies.paragraphs}
        />
      </SectionItem>
      <SectionItem title={idiom.howChangeCookieSet.title}>
        {idiom.howChangeCookieSet.links.map((item, index) => (
          <a key={index} href={item.link}>
            {item.name}
          </a>
        ))}
        <SectionPar paragraphs={idiom.howChangeCookieSet.paragraphs} />
      </SectionItem>
      <SectionItem title={idiom.revocationConsent.title}>
        <SectionPar paragraphs={idiom.revocationConsent.paragraphs1} />
        <SectionList listType="ul" listItems={idiom.revocationConsent.list} />
        <SectionPar paragraphs={idiom.revocationConsent.paragraphs2} />
      </SectionItem>
    </div>
  );
};

export default Cookies;
