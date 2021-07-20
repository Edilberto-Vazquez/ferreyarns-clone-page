import React from "react";
import FeatureSection from "../components/FeatureSection";
import { SectionPar } from "../components/SectionItem";
import {
  SliderContainer,
  SlideItem,
  SlideTitle,
  SlideDescription,
  SlideTotalSavings,
  SlideDataSource,
} from "../components/PositiveImpactSlider";
import pi from "../assets/images/positive-impact.jpg";
import pim from "../assets/images/positive-impact-memory.jpg";
import { posImpSlide, envSavItemEn } from "../utils/PagePositiveImpact";
import "./styles/PositiveImpact.css";

const PositiveImpact = () => {
  return (
    <main className="positive-impact">
      <FeatureSection
        title="Metrics that matter"
        subTitle="Ferre / Sustainability / Positive impact"
        img={pi}
      >
        <SectionPar content="We use the Life Cycle Assessment (LCA) methodology to measure the environmental footprint of all of our products from cradle-to-grave. For this, we observe metrics such as the carbon footprint, the water footprint, the use of chemicals and others. This assessment of the environmental impact of our products has been third-party reviewed by AITEX, Universitat de València and UNESCO, to ensure transparency." />
        <SectionPar content="We share our metrics with manufacturers and brands because this is not just about reducing our impacts, this is also about creating sustainable supply chains and meeting consumer demand for true transparency in fashion." />
      </FeatureSection>

      <SliderContainer className="positive-impact-slide">
        {posImpSlide.map((item, index) => (
          <SlideItem key={index} sectionImg={item.sectionImg}>
            <SlideTitle titleImg={item.titleImg} />
            <SlideDescription
              brand={item.brand}
              garment={item.garment}
              compositions={item.compositions}
            />
            <SlideTotalSavings totalSavings={item.totalSavings} />
            <SlideDataSource dataSource={item.dataSource} />
          </SlideItem>
        ))}
      </SliderContainer>

      <div className="env-sav">
        <div className="env-sav-title">
          <h2 className="title-white">Our environmental savings in 2020</h2>
        </div>
        <div className="env-sav-items border-white">
          {envSavItemEn.map((item, index) => (
            <div key={index} className="env-sav-items__desc">
              <img src={item.img} alt="" />
              <span>{item.number}</span>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <FeatureSection
        title="Sustainability report"
        img={pim}
        xAxis="right"
        yAxis="top"
      >
        <SectionPar content="At Ferre we guarantee the highest standards of corporate governance. We are committed to protecting the rights and well-being of our employees, as well as reducing our environmental impact and promoting the progress of our community and the whole society." />
      </FeatureSection>
    </main>
  );
};

export default PositiveImpact;
