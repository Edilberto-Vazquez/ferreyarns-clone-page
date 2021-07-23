import React, { useState, useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import FeatureSection from "../components/FeatureSection";
import { SectionPar } from "../components/SectionItem";
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
import { SectionOptions } from "../components/SectionItem";
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

  return (
    <main className="products">
      {/* Building a zero-impact fashion section */}
      <FeatureSection
        title={idiom.zeroImpact.title}
        img={idiom.zeroImpact.img}
        sectionName={idiom.zeroImpact.sectionName}
      >
        {idiom.zeroImpact.paragraphs.map((item, index) => (
          <SectionPar key={index} content={item} />
        ))}
      </FeatureSection>

      {/* ecological section */}
      <section className="ecological-section">
        <div className="ecological-section-description">
          <img src={idiom.ecologicalSection.img} alt="" />
          {idiom.ecologicalSection.paragraphs.map((item, index) => (
            <SectionPar key={index} content={item} />
          ))}
        </div>
        <div className="ecological-section-features sectionOptions border-white">
          <SectionOptions
            listItems={idiom.ecologicalSection.materialSection}
            section={section}
            setSection={setSection}
            focusType="color"
            fontColor="white"
          />
          <div className="ecological-section-features__description">
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
          {idiom.form.paragraphs.map((item, index) => (
            <SectionPar key={index} content={item} />
          ))}
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
