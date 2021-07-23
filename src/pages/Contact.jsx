import React from "react";
import {
  FormSection,
  FormSectionDescription,
  FormSectionContainer,
  FormSectionInputs,
  FormSectionTextArea,
  FormSectionButton,
} from "../components/FormSection";
import { SectionItem, SectionPar } from "../components/SectionItem.jsx";
import FeatureSection from "../components/FeatureSection";
import contactF from "../assets/images/contact-ferre.jpg";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <main className="contac">
      <FormSection title="How can we help you?">
        <FormSectionDescription>
          <SectionPar content="Contact us to receive information about our products and to inquire about prices and minimum order quantities." />
          <SectionItem title="Headquarters">
            <SectionPar content="HILATURAS FERRE, S.A." />
            <SectionPar content="Calle Les Molines, 2" />
            <SectionPar content="03450, Banyeres de Mariola – España" />
            <SectionPar content="Ph. ">
              <a href="tel:+34965567425">+34 965 567 425</a>
            </SectionPar>
            <SectionPar content="E.">
              <a href="mailto:hola@ferreyarns.com">hola@ferreyarns.com</a>
            </SectionPar>
          </SectionItem>
          <SectionItem title="Warehouse">
            <SectionPar content="Calle Les Molines, 77" />
            <SectionPar content="03450, Banyeres de Mariola – España" />
            <SectionPar content="Ph. ">
              <a href="tel:+34965567425">+34 965 567 425</a>
            </SectionPar>
          </SectionItem>
        </FormSectionDescription>
        <FormSectionContainer desktopShort>
          <FormSectionInputs type="text" name="name" placeholder="Name*" />
          <FormSectionInputs
            type="text"
            name="company"
            placeholder="Company*"
          />
          <FormSectionInputs type="email" name="email" placeholder="Email*" />
          <FormSectionInputs type="text" name="phone" placeholder="Phone" />
          <FormSectionInputs type="text" name="country" placeholder="Country" />
          <FormSectionInputs type="text" name="website" placeholder="Website" />
          <FormSectionTextArea
            name="message"
            placeholder="Message*"
          ></FormSectionTextArea>
        </FormSectionContainer>
        <FormSectionButton btnName="SEND" />
      </FormSection>
      <div className="google-maps">
        <h2 className="title-white">google maps here</h2>
      </div>
      <FeatureSection img={contactF} yAxis="top">
        <SectionItem title="USA">
          <SectionPar content="FERRE HICKORY" />
          <SectionPar content="520 20th SE, Hickory, NC 28602" />
          <SectionPar content="Ph. ">
            <a href="tel:+18283221158">+1 828 322 1158</a>
          </SectionPar>
          <SectionPar content="E. ">
            <a href="mailto:marty.anderson@ferreyarns.com">
              marty.anderson@ferreyarns.com
            </a>
          </SectionPar>
        </SectionItem>
        <SectionItem title="Mexico">
          <SectionPar content="HILOS FERRE DE ESPAÑA, SA DE CV" />
          <SectionPar content="Aquiles Serdán 416-2" />
          <SectionPar content="San Felipe Hueyotiplan Puebla, Pue. CP 72062" />
          <SectionPar content="Ph. ">
            <a href="tel:+522222685761">+52 (222) 268 5761</a>
          </SectionPar>
          <SectionPar content="E. ">
            <a href="mailto:info@hilosferre.com">info@hilosferre.com</a>
          </SectionPar>
        </SectionItem>
      </FeatureSection>
    </main>
  );
};

export default Contact;
