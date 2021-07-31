import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/Cookies/English.json";
import Spanish from "../utils/PageContent/Cookies/Spanish.json";
import {
  ContainerWithTitle,
  MultipleList,
  MultipleParagraphs,
} from "./GeneralComponents";
import useOpacityAnm from "../utils/animations/useOpacityAnm";

const Cookies = () => {
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1, section2, section3, section4, section5] = idiom;
  const [refOpc] = useOpacityAnm();
  return (
    <div
      ref={refOpc}
      className="cookies some-questions__item opacity-animation"
      aria-expanded={false}
    >
      {/* What are cookies? section1 */}
      <ContainerWithTitle title={section1.title}>
        <MultipleParagraphs paragraphs={section1.paragraphs} />
      </ContainerWithTitle>

      {/* Why Hilaturas Ferre uses cookies? section2 */}
      <ContainerWithTitle title={section2.title}>
        <MultipleParagraphs paragraphs={section2.paragraphs} />
      </ContainerWithTitle>

      {/* What we do with the different types of cookies? section3 */}
      <ContainerWithTitle title={section3.title}>
        {/* Session cookies */}
        <p>
          <strong>{section3.sessionCookies.title}</strong>
          {section3.sessionCookies.description}
        </p>
        {/* Persistent cookies */}
        <p>
          <strong>{section3.persistentCookies.title}</strong>
          {section3.persistentCookies.description}
        </p>
        {/* Own cookies */}
        <p>
          <strong>{section3.ownCookies.title}</strong>
          {section3.ownCookies.description}
        </p>
        <MultipleList listType="ul" listItems={section3.ownCookies.list} />
        {/* Third-party statistics */}
        <p>
          <strong>{section3.thirdParty.title}</strong>
          {section3.thirdParty.description}
        </p>
        <MultipleParagraphs paragraphs={section3.thirdParty.paragraphs} />
        {/* Technical cookies */}
        <p>
          <strong>{section3.tecnicalCookies.title}</strong>
          {section3.tecnicalCookies.description}
        </p>
        <MultipleList listType="ul" listItems={section3.tecnicalCookies.list} />
        {/* Customization cookies */}
        <p>
          <strong>{section3.customizationCookies.title}</strong>
          {section3.customizationCookies.description}
        </p>
        <MultipleList
          listType="ul"
          listItems={section3.customizationCookies.list}
        />
        {/* Analytical cookies */}
        <p>
          <strong>{section3.analyticalCookies.title}</strong>
          {section3.analyticalCookies.description}
        </p>
        <MultipleList
          listType="ul"
          listItems={section3.analyticalCookies.list}
        />
        {/* Advertising cookies */}
        <p>
          <strong>{section3.adversitingCookies.title}</strong>
          {section3.adversitingCookies.description}
        </p>
        <MultipleList
          listType="ul"
          listItems={section3.adversitingCookies.list}
        />
        {/* Flash cookies */}
        <p>
          <strong>{section3.flasCookies.title}</strong>
          {section3.flasCookies.description}
        </p>
        <MultipleParagraphs paragraphs={section3.flasCookies.paragraphs} />
      </ContainerWithTitle>
      {/* How do I change cookie settings? section4 */}
      <ContainerWithTitle title={section4.title}>
        {section4.links.map((item, index) => (
          <a key={index} href={item.link}>
            {item.name}
          </a>
        ))}
        <MultipleParagraphs paragraphs={section4.paragraphs} />
      </ContainerWithTitle>
      {/* Revocation of consent section5 */}
      <ContainerWithTitle title={section5.title}>
        <MultipleParagraphs paragraphs={section5.paragraphs1} />
        <MultipleList listType="ul" listItems={section5.list} />
        <MultipleParagraphs paragraphs={section5.paragraphs2} />
      </ContainerWithTitle>
    </div>
  );
};

export default Cookies;
