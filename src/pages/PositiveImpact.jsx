import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/PositiveImpact/English.json";
import Spanish from "../utils/PageContent/PositiveImpact/Spanis.json";
import SectionDropDown from "../components/SectionDropDown";
import { MultipleParagraphs } from "../components/GeneralComponents";
import {
  SliderContainer,
  SlideItem,
  SlideTitle,
  SlideDescription,
  SlideTotalSavings,
  SlideDataSource,
} from "../components/PositiveImpactSlider";
import "./styles/PositiveImpact.css";

const PositiveImpact = () => {
  // set language
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1, section2, section3, section4] = idiom;

  return (
    <main className="positive-impact">
      {/* Metrics that matter section1 */}
      <SectionDropDown
        title={section1.title}
        sectionName={section1.sectionName}
        img={section1.img}
        xAxis="left"
        aria-expanded={false}
      >
        <MultipleParagraphs paragraphs={section1.paragraphs} />
      </SectionDropDown>

      {/* slider section2 */}
      <SliderContainer className="positive-impact-slide">
        {section2.slides.map((item, index) => (
          <SlideItem key={index} sectionImg={item.img}>
            <SlideTitle titleImg={item.imgTitle} />
            <SlideDescription
              brand={item.brand}
              garment={item.garment}
              compositions={item.composition}
            />
            <SlideTotalSavings totalSavings={item.totalSavings} />
            <SlideDataSource dataSource={item.dataSource} />
          </SlideItem>
        ))}
      </SliderContainer>

      {/* Our environmental savings in 2020 section3 */}
      <div className="env-sav">
        <div className="env-sav-title">
          <h2 className="title-white">{section3.title}</h2>
        </div>
        <div className="env-sav-items border-white">
          {section3.environmentalSavings.map((item, index) => (
            <div key={index} className="env-sav-items__desc">
              <img src={item.img} alt="" />
              <span>{item.number}</span>
              <h3>{item.element}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Sustainability report section4 */}
      <SectionDropDown
        title={section4.title}
        img={section4.img}
        xAxis="right"
        yAxis="top"
      >
        <MultipleParagraphs paragraphs={section4.paragraphs} />
      </SectionDropDown>
    </main>
  );
};

export default PositiveImpact;
