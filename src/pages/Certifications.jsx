import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import FeatureSection from "../components/FeatureSection";
import { SectionPar } from "../components/SectionItem";
import CertificationItem from "../components/CertificationItem";
import {
  certificationsEN,
  certificationsES,
} from "../utils/PageContent/Certifications";
import "./styles/Certifications.css";

const Certifications = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = certificationsEN;
  } else if (language === "es") {
    idiom = certificationsES;
  }
  return (
    <main className="certifications">
      <FeatureSection
        title={idiom.ensuringTrans.title}
        sectionName={idiom.ensuringTrans.sectionName}
        img={idiom.ensuringTrans.img}
        yAxis="bottom"
      >
        <SectionPar paragraphs={idiom.ensuringTrans.paragraphs} />
      </FeatureSection>
      <div className="certifications-title">
        <h2 className="title-black">{idiom.cert.title}</h2>
      </div>
      <div className="certifications-items">
        {idiom.cert.certsItem.map((item, index) => (
          <CertificationItem key={index} title={item.title} img={item.img}>
            <SectionPar paragraphs={item.paragraphs} />
          </CertificationItem>
        ))}
      </div>
      <div className="certifications-title">
        <h2 className="title-black">{idiom.assoCommit.title}</h2>
      </div>
      <div className="associations-items">
        {idiom.assoCommit.assoCommitsItem.map((item, index) => (
          <CertificationItem key={index} title={item.title} img={item.img}>
            <SectionPar paragraphs={item.paragraphs} />
          </CertificationItem>
        ))}
      </div>
    </main>
  );
};

export default Certifications;
