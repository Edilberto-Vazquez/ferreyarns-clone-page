import React, { useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/Home/English.json";
import Spanish from "../utils/PageContent/Home/Spanish.json";
import SectionDropDown from "../components/SectionDropDown";
import {
  FormSection,
  FormDescription,
  FormInputs,
  FormTextArea,
  FormInputsContainer,
  FormButton,
} from "../components/FormComponents";
import { MultipleParagraphs } from "../components/GeneralComponents";
import "./styles/Home.css";

const Home = () => {
  // set language
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1, section2, section3, section4, section5, section6] = idiom;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="home">
      {/* slogan section1 */}
      <div className="title-section">
        <video autoPlay muted loop className="title-section__video">
          <source src={section1.video} type="video/mp4" />
        </video>
        <div className="title-section__title">
          <h1>{section1.title}</h1>
        </div>
      </div>

      <div className="brand-features">
        {/* Building a zero-impact fashion section2 */}
        <SectionDropDown
          title={section2.title}
          img={section2.img}
          xAxis="right"
        >
          <MultipleParagraphs paragraphs={section2.paragraphs} />
        </SectionDropDown>

        {/* A circular process section3*/}
        <SectionDropDown title={section3.title} img={section3.img} xAxis="left">
          <MultipleParagraphs paragraphs={section3.paragraphs} />
        </SectionDropDown>

        {/* Fully traceable and transparent section4 */}
        <SectionDropDown
          title={section4.title}
          img={section4.img}
          xAxis="right"
        >
          <MultipleParagraphs paragraphs={section4.paragraphs} />
        </SectionDropDown>
      </div>

      {/* How can we help you? form section5 */}
      <FormSection title={section5.title}>
        <FormDescription>
          <MultipleParagraphs paragraphs={section5.paragraphs} />
        </FormDescription>
        <FormInputsContainer desktopShort>
          {section5.inputs.map((item, index) =>
            item.name !== "message" ? (
              <FormInputs
                key={index}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
              />
            ) : (
              <FormTextArea
                key={index}
                name={item.name}
                placeholder={item.placeholder}
              ></FormTextArea>
            )
          )}
        </FormInputsContainer>
        <FormButton btnName={section5.send} />
      </FormSection>

      {/* Our clientes section6 */}
      <div className="our-clientes">
        <div className="our-clientes__title">
          <h2 className="title-black">{section6.title}</h2>
        </div>
        <div className="our-clientes__img border-black">
          {section6.brandImgs.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
