import React, { useState, useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/Products/English.json";
import Spanish from "../utils/PageContent/Products/Spanish.json";
import useOpacityAnmOnScroll from "../utils/animations/useOpacityAnmOnScroll";
import SectionDropDown from "../components/SectionDropDown";
import {
  MultipleParagraphs,
  SectionMenu,
} from "../components/GeneralComponents";
import {
  FormSection,
  FormDescription,
  FormInputs,
  FormInputsContainer,
  FormTextArea,
  FormButton,
} from "../components/FormComponents";
import { MaterialsContainer, MaterialsTypes } from "../components/Materials";
import "./styles/Products.css";

const Products = () => {
  // set language
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1, section2, section3] = idiom;

  // animation hook
  const [refOpc] = useOpacityAnmOnScroll();

  // set materials section
  const [section, setSection] = useState({ tab: 0, name: "All" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="products">
      {/* Building a zero-impact fashion section1 */}
      <SectionDropDown
        title={section1.title}
        img={section1.img}
        sectionName={section1.sectionName}
        xAxis="left"
      >
        <MultipleParagraphs paragraphs={section1.paragraphs} />
      </SectionDropDown>

      {/* materials section2 */}
      <div
        ref={refOpc}
        className="materials scrolling-animation-opacity"
        aria-expanded={false}
      >
        <div className="ecological-section-description">
          <img src={section2.img} alt="" />
          <MultipleParagraphs paragraphs={section2.paragraphs} />
        </div>
        <div className="section-options border-white">
          <SectionMenu
            listItems={section2.materialSection}
            section={section}
            setSection={setSection}
            focusType="color"
            fontColor="white"
          />
          <div className="materials__items">
            {section2.materialItem.map((item, index) => (
              <MaterialsContainer
                key={index}
                title={item.img}
                type={item.type}
                aplication={item.aplication}
                specs={item.specs}
                tabs={item.tabs}
                section={section.tab}
              >
                <MaterialsTypes materials={item.materials} />
              </MaterialsContainer>
            ))}
          </div>
        </div>
      </div>

      {/* Request our Color Book form section3 */}
      <FormSection title={section3.title} privacy={section3.privacy}>
        <FormDescription>
          <MultipleParagraphs paragraphs={section3.paragraphs} />
        </FormDescription>
        <FormInputsContainer desktopShort>
          {section3.inputs.map((item, index) =>
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
        <FormButton btnName={section3.send} />
      </FormSection>
    </main>
  );
};

export default Products;
