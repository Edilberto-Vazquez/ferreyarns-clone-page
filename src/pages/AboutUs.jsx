import React, { useContext, useEffect, useState } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import SectionDropDown from "../components/SectionDropDown";
import { MultipleParagraphs } from "../components/GeneralComponents";
import StorySlide from "../components/StorySlide";
import { aboutUsEN, aboutUsES } from "../utils/PageContent/AboutUs";
import useOpacityAnmOnScroll from "../utils/animations/useOpacityAnmOnScroll";
import "./styles/AboutUs.css";

const AboutUs = () => {
  const { language } = useContext(LanguageChanger);
  const [refOpc] = useOpacityAnmOnScroll();
  let idiom = {};
  const [numSlide, setNumSlide] = useState(0);
  let timeLine = 0;

  if (language === "en") {
    idiom = aboutUsEN;
  } else if (language === "es") {
    idiom = aboutUsES;
  }

  if (numSlide >= 9) {
    timeLine = 1;
  } else {
    timeLine = 0;
  }

  const handleClick = (count) => {
    const lengthSlide = idiom.aboutSlider.slides.length - 1;
    if (count < 0) {
      setNumSlide(lengthSlide);
    } else if (count > lengthSlide) {
      setNumSlide(0);
    } else {
      setNumSlide(count);
    }
  };

  const sliderSection = (numSlide) => {
    return idiom.aboutSlider.slides.map((item, index) => {
      return (
        index === numSlide && (
          <StorySlide
            key={index}
            img={item.img}
            paragraph={item.paragraph}
            title={item.title}
            yearImg={item.yearImg}
          />
        )
      );
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-us">
      <SectionDropDown
        title={idiom.alwaysLook.title}
        sectionName={idiom.alwaysLook.sectionName}
        img={idiom.alwaysLook.img}
        xAxis="left"
      >
        <MultipleParagraphs paragraphs={idiom.alwaysLook.paragraphs} />
      </SectionDropDown>
      <div className="about-us-phrase">
        <p
          ref={refOpc}
          className="scrolling-animation-opacity"
          aria-expanded={false}
        >
          {idiom.aboutSlogan}
        </p>
      </div>
      <div className="story-slides">
        <h2 className="story-slides__title title-white">
          {idiom.aboutSlider.title}
        </h2>
        {sliderSection(numSlide)}
        <div className="story-slides__time-line">
          <img src={idiom.aboutSlider.timeLineImg[timeLine]} alt="" />
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
      <SectionDropDown
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
      </SectionDropDown>
    </main>
  );
};

export default AboutUs;
