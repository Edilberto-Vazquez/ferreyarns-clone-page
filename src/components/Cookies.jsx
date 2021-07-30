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
    <div ref={refOpc} className="cookies some-questions__item">
      {/* What are cookies? section */}
      <SectionItem title={idiom.whatCookies.title}>
        <SectionPar paragraphs={idiom.whatCookies.paragraphs} />
      </SectionItem>

      {/* Why Hilaturas Ferre uses cookies? section */}
      <SectionItem title={idiom.hilaturasFC.title}>
        <SectionPar paragraphs={idiom.hilaturasFC.paragraphs} />
      </SectionItem>

      {/* What we do with the different types of cookies? section */}
      <SectionItem title={idiom.differentCookies.title}>
        {/* Session cookies */}
        <p>
          <strong>{idiom.differentCookies.sessionCookies.title}</strong>
          {idiom.differentCookies.sessionCookies.description}
        </p>
        {/* Persistent cookies */}
        <p>
          <strong>{idiom.differentCookies.persistentCookies.title}</strong>
          {idiom.differentCookies.persistentCookies.description}
        </p>
        {/* Own cookies */}
        <p>
          <strong>{idiom.differentCookies.ownCookies.title}</strong>
          {idiom.differentCookies.ownCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.ownCookies.list}
        />
        {/* Third-party statistics */}
        <p>
          <strong>{idiom.differentCookies.thirdParty.title}</strong>
          {idiom.differentCookies.thirdParty.description}
        </p>
        <SectionPar paragraphs={idiom.differentCookies.thirdParty.paragraphs} />
        {/* Technical cookies */}
        <p>
          <strong>{idiom.differentCookies.tecnicalCookies.title}</strong>
          {idiom.differentCookies.tecnicalCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.tecnicalCookies.list}
        />
        {/* Customization cookies */}
        <p>
          <strong>{idiom.differentCookies.customizationCookies.title}</strong>
          {idiom.differentCookies.customizationCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.customizationCookies.list}
        />
        {/* Analytical cookies */}
        <p>
          <strong>{idiom.differentCookies.analyticalCookies.title}</strong>
          {idiom.differentCookies.analyticalCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.analyticalCookies.list}
        />
        {/* Advertising cookies */}
        <p>
          <strong>{idiom.differentCookies.adversitingCookies.title}</strong>
          {idiom.differentCookies.adversitingCookies.description}
        </p>
        <SectionList
          listType="ul"
          listItems={idiom.differentCookies.adversitingCookies.list}
        />
        {/* Flash cookies */}
        <p>
          <strong>{idiom.differentCookies.flasCookies.title}</strong>
          {idiom.differentCookies.flasCookies.description}
        </p>
        <SectionPar
          paragraphs={idiom.differentCookies.flasCookies.paragraphs}
        />
      </SectionItem>
      {/* How do I change cookie settings? */}
      <SectionItem title={idiom.howChangeCookieSet.title}>
        {idiom.howChangeCookieSet.links.map((item, index) => (
          <a key={index} href={item.link}>
            {item.name}
          </a>
        ))}
        <SectionPar paragraphs={idiom.howChangeCookieSet.paragraphs} />
      </SectionItem>
      {/* Revocation of consent */}
      <SectionItem title={idiom.revocationConsent.title}>
        <SectionPar paragraphs={idiom.revocationConsent.paragraphs1} />
        <SectionList listType="ul" listItems={idiom.revocationConsent.list} />
        <SectionPar paragraphs={idiom.revocationConsent.paragraphs2} />
      </SectionItem>
    </div>
  );
};

export default Cookies;
