import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import FeatureSection from "../components/FeatureSection";
import { SectionPar } from "../components/SectionItem";
import { aboutUsEN, aboutUsES } from "../utils/PageContent/AboutUs";
import "./styles/AboutUs.css";

const AboutUs = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = aboutUsEN;
  } else if (language === "es") {
    idiom = aboutUsES;
  }
  return (
    <main className="about-us">
      <FeatureSection
        title={idiom.alwaysLook.title}
        sectionName={idiom.alwaysLook.sectionName}
        img={idiom.alwaysLook.img}
      >
        <SectionPar content={idiom.alwaysLook.paragraphs} />
      </FeatureSection>
      <div className="slogan">
        <div>
          <p>{idiom.aboutSlogan}</p>
        </div>
      </div>
      <div className="story-slides">
        <div className="time-line-description">
          <h2>{idiom.aboutSlider.title}</h2>
          {idiom.aboutSlider.slides.map((item, index) => (
            <>
              <img src={item.yearImg} alt="" className="year-img" />
              <h2>{item.title}</h2>
              <div>
                <p>{item.paragraph}</p>
              </div>
            </>
          ))}
        </div>
        <div className="time-line-image">
          <img src="" alt="" className="time-line" />
        </div>
      </div>
      <FeatureSection
        title={idiom.awardsHonours.title}
        img={idiom.awardsHonours.img}
        xAxis="right"
        yAxis="bottom"
      >
        <ul>
          {idiom.awardsHonours.paragraphs.map((item, index) => (
            <li key={index}>
              <strong>{item.strong}</strong> {item.paragraph}
            </li>
          ))}
        </ul>
      </FeatureSection>
    </main>
  );
};

export default AboutUs;
