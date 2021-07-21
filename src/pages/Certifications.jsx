import React from "react";
import FeatureSection from "../components/FeatureSection";
import CertificationItem from "../components/CertificationItem";
import certifications from "../assets/images/certifications/certifications.jpg";
import certOeko from "../assets/images/certifications/certificacion-oeko.png";
import certStandar from "../assets/images/certifications/certificacion-standard.png";
import certOrganic from "../assets/images/certifications/certificacion-organic.png";
import certLca from "../assets/images/certifications/icon-lca.svg";
import certReduzco from "../assets/images/certifications/certificacion-reduzco.png";
import certCompact from "../assets/images/certifications/certificacion-compact.png";
import certCircular from "../assets/images/certifications/certificacion-circular.png";
import "./styles/Certifications.css";

const Certifications = () => {
  return (
    <main className="certifications">
      <FeatureSection
        title="Ensuring transparency"
        sectionName="Ferre / Sustainability / Certifications"
        img={certifications}
        yAxis="bottom"
      >
        <p>
          All of our sustainability claims are supported by the most respected
          third-party certifications, as well as by studies we have conducted
          using LCA (Life Cycle Assessment) methodology, which have also been
          third-party reviewed.
        </p>
      </FeatureSection>
      <div className="certifications-title">
        <h2 className="title-black">Certifications</h2>
      </div>
      <div className="certifications-items">
        <CertificationItem title="Standard 100 of OEKO-TEX®" img={certOeko}>
          <p>
            Ferre is OEKO-TEX® STANDARD 100 certified. It is one of the world’s
            best-known labels for textiles tested for harmful substances.
            Represents customer trust and high product safety. The test is
            performed by independent OEKO-TEX® partner institutes and numerous
            regulated and unregulated substances are taken into account, which
            can be harmful to human health. In many cases, the limit values of
            the STANDARD 100 go beyond national and international requirements.
          </p>
        </CertificationItem>
        <CertificationItem
          title="Global Recycled Standard (GRS)"
          img={certStandar}
        >
          <p>
            Ferre is GRS certified. Global Recycled Standard (GRS) is an
            international, voluntary, full product standard that sets
            requirements for third-party certification of recycled content,
            chain of custody, social and environmental practices and chemical
            restrictions. The GRS is intended to meet the needs of companies
            looking to verify the recycled content of their products and to
            verify responsible social, environmental and chemical practices in
            their production.
          </p>
        </CertificationItem>
        <CertificationItem
          title="OCS Blended – Organic Content Standard"
          img={certOrganic}
        >
          <p>
            Ferre is OCS certified. The Organic Content Standard (OCS) applies
            to any non-food product containing 5-100 percent organic material.
            It verifies the presence and amount of organic material in a final
            product. Further OCS tracks the flow of a raw material from its
            source to the final product. This process is then certified by an
            accredited third party.
          </p>
        </CertificationItem>
        <CertificationItem title="LCA" img={certLca}>
          <p>
            At Ferre we use the Life Cycle Assessment (LCA) methodology to
            measure the environmental footprint of our products from
            cradle-to-grave. For this, we observe metrics such as the carbon
            footprint, the water footprint, the use of chemicals and others.
            This assessment of the environmental impact of our products has been
            third-party reviewed by AITEX, Universitat de València and UNESCO,
            to ensure transparency.
          </p>
        </CertificationItem>
      </div>
      <div className="certifications-title">
        <h2 className="title-black">Associations and Commitments</h2>
      </div>
      <div className="associations-items">
        <CertificationItem title="UN Global Compact" img={certReduzco}>
          <p>
            Ferre is a signatory to the UN Global Compact, a United Nations
            initiative to encourage businesses worldwide to align strategies and
            operations with universal principles on human rights, labour,
            environment and anti-corruption, and take actions that advance
            societal goals.
          </p>
        </CertificationItem>
        <CertificationItem title="Textile Exchange" img={certCompact}>
          <p>
            Ferre is a member of Textile Exchange, a global non-profit
            organization that focuses on minimizing the harmful impacts of the
            global textile industry and maximizing its positive effects, as well
            as helping to establish good practices and fair business models
            throughout the supply chain.
          </p>
        </CertificationItem>
        <CertificationItem title="Circular Fashion" img={certCircular}>
          <p>
            Ferre is a member of Circular Fashion, a sustainable change agency
            creating product and system innovation for a circular economy in
            fashion and textiles.
          </p>
        </CertificationItem>
      </div>
    </main>
  );
};

export default Certifications;
