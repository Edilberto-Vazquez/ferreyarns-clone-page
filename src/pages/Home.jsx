import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import SectionDropDown from "../components/SectionDropDown";
import {
  FormSection,
  FormSectionDescription,
  FormSectionInputs,
  FormSectionTextArea,
  FormSectionContainer,
  FormSectionButton,
} from "../components/FormSection";
import { MultipleParagraphs } from "../components/SectionItem";
import { homeEN, homeES } from "../utils/PageContent/Home";
import "./styles/Home.css";

const Home = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = homeEN;
  } else if (language === "es") {
    idiom = homeES;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="home">
      {/* slogan section */}
      <div className="title-section">
        <video autoPlay muted loop className="title-section__video">
          <source src={idiom.video} type="video/mp4" />
        </video>
        <div className="title-section__title">
          <h1>{idiom.title}</h1>
        </div>
      </div>

      <div className="brand-features">
        {/* Building a zero-impact fashion */}
        <SectionDropDown
          title={idiom.buldingFashion.title}
          img={idiom.buldingFashion.img}
          xAxis="right"
        >
          <MultipleParagraphs paragraphs={idiom.buldingFashion.paragraphs} />
        </SectionDropDown>

        {/* A circular process */}
        <SectionDropDown
          title={idiom.circularProc.title}
          img={idiom.circularProc.img}
          xAxis="left"
        >
          <MultipleParagraphs paragraphs={idiom.circularProc.paragraphs} />
        </SectionDropDown>

        {/* Fully traceable and transparent */}
        <SectionDropDown
          title={idiom.fullyTT.title}
          img={idiom.fullyTT.img}
          xAxis="right"
        >
          <MultipleParagraphs paragraphs={idiom.fullyTT.paragraphs} />
        </SectionDropDown>
      </div>

      {/* How can we help you? form */}
      <FormSection title={idiom.form.title}>
        <FormSectionDescription>
          <MultipleParagraphs paragraphs={idiom.form.paragraphs} />
        </FormSectionDescription>
        <FormSectionContainer desktopShort>
          {idiom.form.inputs.map((item, index) =>
            item.name !== "message" ? (
              <FormSectionInputs
                key={index}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
              />
            ) : (
              <FormSectionTextArea
                key={index}
                name={item.name}
                placeholder={item.placeholder}
              ></FormSectionTextArea>
            )
          )}
        </FormSectionContainer>
        <FormSectionButton btnName={idiom.form.send} />
      </FormSection>

      {/* Our clientes */}
      <div className="our-clientes">
        <div className="our-clientes__title">
          <h2 className="title-black">{idiom.ourClients.title}</h2>
        </div>
        <div className="our-clientes__img border-black">
          {idiom.ourClients.imgList.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
