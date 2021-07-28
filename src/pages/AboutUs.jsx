import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import FeatureSection from "../components/FeatureSection";
import { SectionPar } from "../components/SectionItem";
import { aboutUsEN, aboutUsES } from "../utils/PageContent/AboutUs";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import "./styles/AboutUs.css";

const AboutUs = () => {
  const { language } = useContext(LanguageChanger);
  const [refOpc] = useOpacityAnm();
  let idiom = {};

  if (language === "en") {
    idiom = aboutUsEN;
  } else if (language === "es") {
    idiom = aboutUsES;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-us">
      <FeatureSection
        title={idiom.alwaysLook.title}
        sectionName={idiom.alwaysLook.sectionName}
        img={idiom.alwaysLook.img}
        xAxis="left"
      >
        <SectionPar paragraphs={idiom.alwaysLook.paragraphs} />
      </FeatureSection>
      <div className="slogan">
        <div ref={refOpc}>
          <p>{idiom.aboutSlogan}</p>
        </div>
      </div>
      <div className="story-slides">
        <h2 className="title-white">{idiom.aboutSlider.title}</h2>
        <div className="time-line-description">
          {idiom.aboutSlider.slides.map((item, index) => (
            <div key={index}>
              <img src={item.yearImg} alt="" className="year-img" />
              <h2 className="title-white">{item.title}</h2>
              <div>
                <p>{item.paragraph}</p>
              </div>
            </div>
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
