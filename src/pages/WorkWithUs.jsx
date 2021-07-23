import React from "react";
import FeatureSection from "../components/FeatureSection";
import {
  FormSection,
  FormSectionDescription,
  FormSectionInputs,
  FormSectionContainer,
  FormSectionButton,
} from "../components/FormSection";
import { SectionPar } from "../components/SectionItem";
import wwu1 from "../assets/images/work-with-us-1.jpg";

const WorkWithUs = () => {
  return (
    <main className="work-with-us">
      <FeatureSection
        title="Work at Ferre"
        sectionName="Ferre / Work with us"
        img={wwu1}
        yAxis="top"
      >
        <SectionPar
          content="At Ferre we have a passion for low-impact yarns and a deep knowledge
          of what a recycled yarn is capable of. We are Yarn Experts and Yarn
          Consultants. We work with brands to understand their needs and help
          them carry out their fashion projects by creating the best sustainable
          yarn for their garments."
        />
      </FeatureSection>
      <FormSection title="Join our team">
        <FormSectionDescription>
          <SectionPar
            content="We highly value dynamic individuals who make meaningful change
            happen."
          />
          <SectionPar content="Get in touch." />
        </FormSectionDescription>
        <FormSectionContainer>
          <FormSectionInputs type="text" name="name" placeholder="Name*" />
          <FormSectionInputs type="email" name="email" placeholder="Email*" />
          <FormSectionInputs type="text" name="phone" placeholder="Phone*" />
          <div className="file-upload">
            <SectionPar content="Please upload your resume (.pdf / 1MB max.)" />
            <FormSectionInputs type="file" name="file" />
          </div>
        </FormSectionContainer>
        <FormSectionButton btnName="SEND" />
      </FormSection>
    </main>
  );
};

export default WorkWithUs;
