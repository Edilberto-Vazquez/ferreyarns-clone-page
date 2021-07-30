import React, { useState, useContext, useEffect } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import SectionDropDown from "../components/SectionDropDown";
import { MultipleParagraphs } from "../components/SectionItem";
import {
  FormSection,
  FormSectionDescription,
  FormSectionInputs,
  FormSectionContainer,
  FormSectionTextArea,
  FormSectionButton,
} from "../components/FormSection";
import {
  EcologicalSection,
  EcologicalMaterial,
} from "../components/EcologicalDescription";
import { SectionMenu } from "../components/SectionItem";
import { productsEN, productsES } from "../utils/PageContent/Products";
// import useOpacityAnm from "../utils/animations/useOpacityAnm";
import "./styles/Products.css";

const Products = () => {
  // set type ecological section
  const [section, setSection] = useState({ tab: 0, name: "All" });
  // const [refOpcTitle] = useOpacityAnm();
  // const [refOpcItems] = useOpacityAnm();

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

      {/* ecological section */}
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
              <EcologicalSection
                key={index}
                title={item.img}
                type={item.type}
                aplication={item.aplication}
                specs={item.specs}
                tabs={item.tabs}
                section={section.tab}
              >
                <EcologicalMaterial materials={item.materials} />
              </EcologicalSection>
            ))}
          </div>
        </div>
      </section>

      {/* Request our Color Book form */}
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
    </main>
  );
};

export default Products;
