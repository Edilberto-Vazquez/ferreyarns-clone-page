import React, { useContext, useEffect, useState } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import FeatureSection from "../components/FeatureSection";
import { SectionPar } from "../components/SectionItem";
import StorySlides from "../components/StorySlides";
import { aboutUsEN, aboutUsES } from "../utils/PageContent/AboutUs";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import "./styles/AboutUs.css";

const AboutUs = () => {
  const { language } = useContext(LanguageChanger);
  const [refOpc] = useOpacityAnm();
  let idiom = {};
  const [numSlide, setNumSlide] = useState(0);

  if (language === "en") {
    idiom = aboutUsEN;
  } else if (language === "es") {
    idiom = aboutUsES;
  }

  const lengthSlide = idiom.aboutSlider.slides.length - 1;

  const handleClick = (count) => {
    if (count < 0) {
      setNumSlide(lengthSlide);
    } else if (count > lengthSlide) {
      setNumSlide(0);
    } else {
      setNumSlide(count);
    }
  };

  const sliderSection = (numSlide) => {
    const slide = idiom.aboutSlider.slides.map((item, index) => {
      return (
        index === numSlide && (
          <StorySlides
            key={index}
            img={item.img}
            paragraph={item.paragraph}
            title={item.title}
            yearImg={item.yearImg}
          />
        )
      );
    });
    return slide;
  };

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
        {sliderSection(numSlide)}
        <div className="time-line-image">
          <img
            src={idiom.aboutSlider.timeLineImg}
            alt=""
            className="time-line"
          />
        </div>
        <div className="story-slides__arrow-butons">
          <button type="button" onClick={() => handleClick(numSlide - 1)}>
            {"<"}
          </button>
          <button type="button" onClick={() => handleClick(numSlide + 1)}>
            {">"}
          </button>
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
