import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import {
  FormSection,
  FormSectionDescription,
  FormSectionInput,
  FormSectionTextArea,
  FormSectionContainer,
  FormSectionButton,
} from "../components/FormSection";
import home1 from "../assets/images/home-1.jpg";
import home2 from "../assets/images/home-2.jpg";
import home3 from "../assets/images/home-3.jpg";
import brands1 from "../assets/images/brands-1.gif";
import "./styles/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="title-section">
          <div className="title-container">
            <h1>Empowering circular fashion since 1947</h1>
          </div>
        </div>
        <div className="brand-features">
          <FeatureSection
            title="Building a zero-impact fashion"
            img={home1}
            xAxis="left"
          >
            <p>
              We make high-quality recycled yarns for all types of fashion
              products, accessories and home textiles. Our products are made
              with Recover™, the lowest-impact recycled cotton fiber in today’s
              global market, according to the Higg MSI Index.
            </p>
          </FeatureSection>
          <FeatureSection title="A circular process" img={home2} xAxis="right">
            <p>
              Recycled raw material, zero chemicals, zero water and minimal CO2
              emissions. We keep textile waste out of landfill or incineration
              and we become less dependent on virgin finite materials. Our
              resource- and energy-efficient manufacturing process reflects our
              strong will to minimize our impact.
            </p>
          </FeatureSection>
          <FeatureSection
            title="Fully traceable and transparent"
            img={home3}
            xAxis="left"
          >
            <p>
              We share the traceability and sustainability performance of each
              of our products to drive positive change and meet consumer demand
              for true transparency in fashion.
            </p>
            <p>
              All of our sustainability claims are supported by the most
              respected third-party certifications, as well as by studies we
              have conducted using LCA (Life Cycle Assessment) methodology.
            </p>
          </FeatureSection>
        </div>
        <FormSection title="How can we help you?">
          <FormSectionDescription>
            <p>
              Our facilities in Banyeres de Mariola are home to a great team of
              recycled yarn consultants and the most advanced technology to help
              you carry out your sustainable fashion project.
            </p>
            <br />
            <p>
              Contact us to receive information about our products and to
              inquire about prices and minimum order quantities.
            </p>
          </FormSectionDescription>
          <FormSectionContainer>
            <FormSectionInput type="text" name="name" placeholder="Name*" />
            <FormSectionInput
              type="text"
              name="company"
              placeholder="Company*"
            />
            <FormSectionInput type="email" name="email" placeholder="Email*" />
            <FormSectionInput type="text" name="phone" placeholder="Phone*" />
            <FormSectionTextArea
              name="message"
              placeholder="Message*"
            ></FormSectionTextArea>
          </FormSectionContainer>
          <FormSectionButton btnName="SEND" />
        </FormSection>
        <div className="our-clientes-section">
          <div className="our-clientes-title">
            <h2>Our clientes</h2>
          </div>
          <div className="our-clientes-img">
            <img src={brands1} alt="" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
