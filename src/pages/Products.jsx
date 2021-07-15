import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import {
  FormSection,
  FormSectionDescription,
  FormSectionInput,
  FormSectionContainer,
  FormSectionTextArea,
  FormSectionButton,
} from "../components/FormSection";
import {
  EcologicalSection,
  EcologicalDescription,
  EcologicalMaterial,
} from "../components/EcologicalDescription";
import products from "../assets/images/products.jpg";
import logo from "../assets/icons/ferre-yarns.svg";
import "./styles/Products.css";

const Products = () => {
  return (
    <>
      <Header />
      <main className="products">
        <FeatureSection
          title="Building a zero-impact fashion"
          subTitle="Ferre / Products"
          img={products}
        >
          <p>
            We make high-quality recycled yarns for all types of fashion
            products, accessories and home textiles. Our products are made with
            Recover™, the lowest-impact recycled cotton fiber in today’s global
            market, according to the Higg MSI Index. We have a passion for
            low-impact yarns and a deep knowledge of what a recycled yarn is
            capable of. Our Yarn Consultants work with you to understand your
            brand’s needs and help you carry out your fashion projects by
            creating the best blend for your garments.
          </p>
        </FeatureSection>
        <section className="ecological-section">
          <div className="ecological-section-description">
            <img src={logo} alt="" />
            <p>
              Ferre yarns are made from recycled cotton textile waste, thus a
              percentage of other fibers such as polyester, viscose, acrylic,
              wool or nylon may be identified during final composition testing.
            </p>
          </div>
          <div className="ecological-section-features">
            <aside className="ecological-section-features__list">
              <ul>
                <li>All</li>
                <li>Recover™ recycled cotton</li>
                <li>Recycled Polyester</li>
                <li>Recycled wool</li>
                <li>Organic cotton</li>
                <li>Post-consumer</li>
                <li>TENCEL™</li>
                <li>Acrylic</li>
                <li>Polyester</li>
              </ul>
            </aside>
            <div className="ecological-section-features__description">
              <EcologicalSection
                title="funo"
                type="COPAC"
                aplication="Knitting, weaving and hosiery."
                specs={["Nm 28", "Ne 17"]}
              >
                <EcologicalDescription>
                  <EcologicalMaterial material="rrCotton" percentage="50%" />
                </EcologicalDescription>
                <EcologicalDescription>
                  <EcologicalMaterial material="acrylic" percentage="45%" />
                </EcologicalDescription>
                <EcologicalDescription>
                  <EcologicalMaterial material="oFibers" percentage="5%" />
                </EcologicalDescription>
              </EcologicalSection>
              <EcologicalSection
                title="fearth"
                type="POLICOTON"
                aplication="Knitting, weaving and hosiery."
                specs={["Nm 40", "Ne 24"]}
              >
                <EcologicalDescription>
                  <EcologicalMaterial material="rrCotton" percentage="52%" />
                </EcologicalDescription>
                <EcologicalDescription>
                  <EcologicalMaterial material="polyester" percentage="45%" />
                </EcologicalDescription>
                <EcologicalDescription>
                  <EcologicalMaterial material="oFibers" percentage="3%" />
                </EcologicalDescription>
              </EcologicalSection>
            </div>
          </div>
        </section>
        <FormSection title="Request our Color Book">
          <FormSectionDescription>
            <p>
              In it you will find our stock service products, applications and
              technical information for all of our yarn families and
              subfamilies. The Color Book perfectly embodies our passion for
              beautiful, accurate colors and our constant pursuit of a
              zero-impact fashion.
            </p>
            <br />
          </FormSectionDescription>
          <FormSectionContainer desktopShort>
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
      </main>
      <Footer />
    </>
  );
};

export default Products;
