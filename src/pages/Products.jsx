import React, { useState, useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
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
import { productsEN, productsES } from "../utils/PageContent/Products";
import "./styles/Products.css";

const Products = () => {
  // set type ecological section
  const [section, setSection] = useState({ tab: 0, name: "All" });

  // set language
  const { language } = useContext(LanguageChanger);
  let idiom = {};
  if (language === "en") {
    idiom = productsEN;
  } else if (language === "es") {
    idiom = productsES;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="products">
      {/* Building a zero-impact fashion section */}
      <SectionDropDown
        title={idiom.zeroImpact.title}
        img={idiom.zeroImpact.img}
        sectionName={idiom.zeroImpact.sectionName}
        xAxis="left"
      >
        <MultipleParagraphs paragraphs={idiom.zeroImpact.paragraphs} />
      </SectionDropDown>

      {/* materials section */}
      <section className="materials">
        <div className="ecological-section-description">
          <img src={idiom.ecologicalSection.img} alt="" />
          <MultipleParagraphs paragraphs={idiom.ecologicalSection.paragraphs} />
        </div>
        <div className="section-options border-white">
          <SectionMenu
            listItems={idiom.ecologicalSection.materialSection}
            section={section}
            setSection={setSection}
            focusType="color"
            fontColor="white"
          />
          <div className="materials__items">
            {idiom.ecologicalSection.materialItem.map((item, index) => (
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
      </section>

      {/* Request our Color Book form */}
      <FormSection title={idiom.form.title}>
        <FormDescription>
          <MultipleParagraphs paragraphs={idiom.form.paragraphs} />
        </FormDescription>
        <FormInputsContainer desktopShort>
          {idiom.form.inputs.map((item, index) =>
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
        <FormButton btnName={idiom.form.send} />
      </FormSection>
    </main>
  );
};

export default Products;
