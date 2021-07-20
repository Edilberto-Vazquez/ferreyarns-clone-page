import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import {
  FormSection,
  FormSectionDescription,
  FormSectionInput,
  FormSectionContainer,
  FormSectionButton,
} from "../components/FormSection";
import wwu1 from "../assets/images/work-with-us-1.jpg";

const WorkWithUs = () => {
  return (
    <>
      <Header />
      <main className="work-with-us">
        <FeatureSection
          title="Work at Ferre"
          subTitle="Ferre / Work with us"
          img={wwu1}
          yAxis="top"
        >
          <p>
            At Ferre we have a passion for low-impact yarns and a deep knowledge
            of what a recycled yarn is capable of. We are Yarn Experts and Yarn
            Consultants. We work with brands to understand their needs and help
            them carry out their fashion projects by creating the best
            sustainable yarn for their garments.
          </p>
        </FeatureSection>
        <FormSection title="Join our team">
          <FormSectionDescription>
            <p>
              We highly value dynamic individuals who make meaningful change
              happen.
            </p>
            <br />
            <p>Get in touch.</p>
          </FormSectionDescription>
          <FormSectionContainer>
            <FormSectionInput type="text" name="name" placeholder="Name*" />
            <FormSectionInput type="email" name="email" placeholder="Email*" />
            <FormSectionInput type="text" name="phone" placeholder="Phone*" />
            <div className="file-upload">
              <p>Please upload your resume (.pdf / 1MB max.)</p>
              <FormSectionInput type="file" name="file" />
            </div>
          </FormSectionContainer>
          <FormSectionButton btnName="SEND" />
        </FormSection>
      </main>
      <Footer />
    </>
  );
};

export default WorkWithUs;
