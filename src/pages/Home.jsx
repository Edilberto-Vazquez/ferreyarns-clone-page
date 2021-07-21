import React from "react";
import { useParams } from "react-router-dom";
import FeatureSection from "../components/FeatureSection";
import {
  FormSection,
  FormSectionDescription,
  FormSectionInput,
  FormSectionTextArea,
  FormSectionContainer,
  FormSectionButton,
} from "../components/FormSection";
import { SectionPar } from "../components/SectionItem";
import home1 from "../assets/images/home-1.jpg";
import home2 from "../assets/images/home-2.jpg";
import home3 from "../assets/images/home-3.jpg";
import brands1 from "../assets/images/brands-1.gif";
import "./styles/Home.css";
import { homeEN, homeES } from "../utils/PageContent/Home";

const Home = () => {
  let { language } = useParams();
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = homeEN;
  } else if (language === "es") {
    idiom = homeES;
  }

  return (
    <main>
      {/* slogan section */}
      <div className="title-section">
        <div className="title-container">
          <h1>{idiom.title}</h1>
        </div>
      </div>

      <div className="brand-features">
        {/* Building a zero-impact fashion */}
        <FeatureSection
          title={idiom.buldingFashion.title}
          img={idiom.buldingFashion.img}
          xAxis="right"
        >
          {idiom.buldingFashion.paragraphs.map((item, index) => (
            <SectionPar key={index} content={item} />
          ))}
        </FeatureSection>

        {/* A circular process */}
        <FeatureSection
          title={idiom.circularProc.title}
          img={idiom.circularProc.img}
          xAxis="left"
        >
          {idiom.circularProc.paragraphs.map((item, index) => (
            <SectionPar key={index} content={item} />
          ))}
        </FeatureSection>

        {/* Fully traceable and transparent */}
        <FeatureSection
          title={idiom.fullyTT.title}
          img={idiom.fullyTT.img}
          xAxis="right"
        >
          {idiom.fullyTT.paragraphs.map((item, index) => (
            <SectionPar key={index} content={item} />
          ))}
        </FeatureSection>
      </div>

      {/* How can we help you? form */}
      <FormSection title={idiom.form.title}>
        <FormSectionDescription>
          {idiom.form.paragraphs.map((item, index) => (
            <SectionPar key={index} content={item} />
          ))}
        </FormSectionDescription>
        <FormSectionContainer desktopShort>
          {idiom.form.inputs.map((item, index) =>
            item.name !== "message" ? (
              <FormSectionInput
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
              />
            ) : (
              <FormSectionTextArea
                name={item.name}
                placeholder={item.placeholder}
              ></FormSectionTextArea>
            )
          )}
        </FormSectionContainer>
        <FormSectionButton btnName={idiom.form.send} />
      </FormSection>

      {/* Our clientes */}
      <div className="our-clientes-section">
        <div className="our-clientes-title">
          <h2 className="title-black">{idiom.ourClients}</h2>
        </div>
        <div className="our-clientes-img border-black">
          <img src={brands1} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
