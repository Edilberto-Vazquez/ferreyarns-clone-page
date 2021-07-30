import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/Certifications/English.json";
import Spanish from "../utils/PageContent//Certifications/Spanish.json";
import SectionDropDown from "../components/SectionDropDown";
import { MultipleParagraphs } from "../components/GeneralComponents";
import CertificationItem from "../components/CertificationItem";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import "./styles/Certifications.css";

const Certifications = () => {
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1, section2, section3] = idiom;
  const [refOpcTitleCert] = useOpacityAnm();
  const [refOpcTitleAsc] = useOpacityAnm();
  const [refOpcItemCert] = useOpacityAnm();
  const [refOpcItemAsc] = useOpacityAnm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="certifications">
      {/* Ensuring transparency section1 */}
      <SectionDropDown
        title={section1.title}
        sectionName={section1.sectionName}
        img={section1.img}
        xAxis="left"
        yAxis="bottom"
      >
        <MultipleParagraphs paragraphs={section1.paragraphs} />
      </SectionDropDown>
      {/* certifications section2 */}
      <div className="certifications__title">
        <h2 ref={refOpcTitleCert} className="title-black">
          {section2.title}
        </h2>
      </div>
      <div ref={refOpcItemCert} className="certifications__items">
        {section2.certsItem.map((item, index) => (
          <CertificationItem key={index} title={item.title} img={item.img}>
            <MultipleParagraphs paragraphs={item.paragraphs} />
          </CertificationItem>
        ))}
      </div>
      {/* Associations and Commitments section3 */}
      <div className="certifications__title">
        <h2 ref={refOpcTitleAsc} className="title-black">
          {section3.title}
        </h2>
      </div>
      <div ref={refOpcItemAsc} className="associations__items">
        {section3.assoCommitsItem.map((item, index) => (
          <CertificationItem key={index} title={item.title} img={item.img}>
            <MultipleParagraphs paragraphs={item.paragraphs} />
          </CertificationItem>
        ))}
      </div>
    </main>
  );
};

export default Certifications;
