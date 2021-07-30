import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import SectionDropDown from "../components/SectionDropDown";
import { MultipleParagraphs } from "../components/SectionItem";
import CertificationItem from "../components/CertificationItem";
import {
  certificationsEN,
  certificationsES,
} from "../utils/PageContent/Certifications";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import "./styles/Certifications.css";

const Certifications = () => {
  const { language } = useContext(LanguageChanger);
  const [refOpcTitleCert] = useOpacityAnm();
  const [refOpcTitleAsc] = useOpacityAnm();
  const [refOpcItemCert] = useOpacityAnm();
  const [refOpcItemAsc] = useOpacityAnm();
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = certificationsEN;
  } else if (language === "es") {
    idiom = certificationsES;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="certifications">
      <SectionDropDown
        title={idiom.ensuringTrans.title}
        sectionName={idiom.ensuringTrans.sectionName}
        img={idiom.ensuringTrans.img}
        xAxis="left"
        yAxis="bottom"
      >
        <MultipleParagraphs paragraphs={idiom.ensuringTrans.paragraphs} />
      </SectionDropDown>
      <div className="certifications__title">
        <h2 ref={refOpcTitleCert} className="title-black">
          {idiom.cert.title}
        </h2>
      </div>
      <div ref={refOpcItemCert} className="certifications__items">
        {idiom.cert.certsItem.map((item, index) => (
          <CertificationItem key={index} title={item.title} img={item.img}>
            <MultipleParagraphs paragraphs={item.paragraphs} />
          </CertificationItem>
        ))}
      </div>
      <div className="certifications-title">
        <h2 ref={refOpcTitleAsc} className="title-black">
          {idiom.assoCommit.title}
        </h2>
      </div>
      <div ref={refOpcItemAsc} className="associations__items">
        {idiom.assoCommit.assoCommitsItem.map((item, index) => (
          <CertificationItem key={index} title={item.title} img={item.img}>
            <MultipleParagraphs paragraphs={item.paragraphs} />
          </CertificationItem>
        ))}
      </div>
    </main>
  );
};

export default Certifications;
