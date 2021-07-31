import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/PrivacyPolicy/English.json";
import Spanish from "../utils/PageContent/PrivacyPolicy/Spanish.json";
import {
  ContainerWithTitle,
  MultipleList,
  MultipleParagraphs,
} from "./GeneralComponents";
import useOpacityAnmOnScroll from "../utils/animations/useOpacityAnmOnScroll";

const PrivacyPolicy = () => {
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10,
  ] = idiom;
  const [refOpc] = useOpacityAnmOnScroll();
  return (
    <div
      ref={refOpc}
      className="privacy-policy some-questions__item container-row-gap opacity-animation"
      aria-expanded={false}
    >
      {/* first paragraph section1 */}
      <ContainerWithTitle>
        <MultipleParagraphs paragraphs={section1.paragraphs} />
      </ContainerWithTitle>
      {/* controller section2 */}
      <ContainerWithTitle title={section2.title}>
        <MultipleParagraphs paragraphs={section2.paragraphs} />
        <MultipleParagraphs paragraphs={[section2.links.paragraphs[0]]}>
          <a href={section2.links.hyper[0].link}>
            {section2.links.hyper[0].name}
          </a>
        </MultipleParagraphs>
        <MultipleParagraphs paragraphs={[section2.links.paragraphs[1]]}>
          <a href={section2.links.hyper[1].link}>
            {section2.links.hyper[1].name}
          </a>
        </MultipleParagraphs>
      </ContainerWithTitle>
      {/* purpose of data processing section3 */}
      <ContainerWithTitle title={section3.title}>
        <MultipleParagraphs paragraphs={section3.paragraphs} />
        <MultipleList listType="ol" listItems={section3.list} />
      </ContainerWithTitle>
      {/* conservation period section4 */}
      <ContainerWithTitle title={section4.title}>
        <MultipleParagraphs paragraphs={section4.paragraphs} />
      </ContainerWithTitle>
      {/* legal standing section5 */}
      <ContainerWithTitle title={section5.title}>
        <MultipleParagraphs paragraphs={section5.paragraphs} />
      </ContainerWithTitle>
      {/* recipients section6 */}
      <ContainerWithTitle title={section6.title}>
        <MultipleParagraphs paragraphs={section6.paragraphs} />
      </ContainerWithTitle>
      {/* user rights section7 */}
      <ContainerWithTitle title={section7.title}>
        <MultipleParagraphs paragraphs={section7.paragraphs1} />
        <MultipleList listType="ul" listItems={section7.list} />
        <MultipleParagraphs paragraphs={section7.paragraphs2} />
      </ContainerWithTitle>
      {/* securyty measures section8 */}
      <ContainerWithTitle title={section8.title}>
        <MultipleParagraphs paragraphs={section8.paragraphs} />
      </ContainerWithTitle>
      {/* use of cookies section9 */}
      <ContainerWithTitle title={section9.title}>
        <MultipleParagraphs paragraphs={section9.paragraphs} />
      </ContainerWithTitle>
      {/* change in regulation section10 */}
      <ContainerWithTitle title={section10.title}>
        <MultipleParagraphs paragraphs={section10.paragraphs} />
      </ContainerWithTitle>
    </div>
  );
};

export default PrivacyPolicy;
