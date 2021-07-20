import React from "react";
import { SectionItem, SectionList, SectionPar } from "./SectionItem";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy some-questions-section-item">
      <SectionItem>
        <SectionPar
          content="The Company is particularly conscious with regards to the data
          protection of users of the service of the Website. By means of this
          Privacy Policy (hereinafter, the Policy) The Company informs the USERS
          of the websites: http://www.ferreyarns.com, of the uses to which the
          personal data collected in the Website are subject to, in order to
          decide, freely and voluntarily, if they wish to provide the requested
          information."
        />
        <SectionPar
          content="The Company reserves the right to modify this Policy in order to adapt
          it to new legislation, jurisprudential criteria, industry practices,
          or interests of the entity. Any modification in it will be announced
          in due time, so that you have perfect knowledge of its content."
        />
      </SectionItem>
      <SectionItem title="CONTROLLER">
        <SectionPar content="The Controller of personal data is: Hilaturas Ferre" />
        <SectionPar content="Place of business: Avda. Les Molines, 2" />
        <SectionPar content="(03450) BANYERES DE MARIOLA Alicante – Spain" />
        <SectionPar content="Telephone: +34 966 567 425" />
        <SectionPar content="E-mail">
          <a href="mailto:info@ferreyarns.com">info@ferreyarns.com</a>
        </SectionPar>
      </SectionItem>
      <SectionItem title="PURPOSE OF DATA PROCESSING">
        <SectionPar
          content="The personal data of the members are subject to processing by
          Hilaturas Ferre. The purpose of collecting this data is for:"
        />
        <SectionList
          listType="ol"
          listItems={[
            {
              description:
                "Customer and Supplier Management of Hilaturas Ferre",
            },
            { description: "Provision of requested services." },
          ]}
        />
      </SectionItem>
      <SectionItem title="CONSERVATION PERIOD">
        <SectionPar
          content="The provided personal data will be kept for the corresponding period
          to comply with legal obligations, or its deletion is requested by the
          interested party and he or she is entitled to do so."
        />
      </SectionItem>
      <SectionItem title="LEGAL STANDING">
        <SectionPar
          content="The Company is entitled to the processing of personal data, based on
          the consent granted by the interested party for one or more specific
          purposes, as set forth in article 6.1. a) of the General Regulation of
          Protection of personal data."
        />
        <SectionPar
          content="This website includes hyperlinks (links) that allow visitors to move
          to other pages. The Company assumes no responsibility whatsoever for
          the data protection policy that may have been adopted in them."
        />
      </SectionItem>
      <SectionItem title="RECIPIENTS">
        <SectionPar
          content="The Company does not transfer its data to third parties in general,
          except in cases where it is necessary for the organization of certain
          activities, or the provision of services. In any case, the proposed
          transfers are regularized by signing contracts, and the transferor
          cannot use the granted information for other purposes than those
          established by the Company."
        />
      </SectionItem>
      <SectionItem title="USER RIGHTS">
        <SectionPar
          content="The person interested in personal data, in any case may exercise the
          rights corresponding to him/her, in accordance with the GDPR, and
          which are:"
        />
        <SectionList
          listType="ul"
          listItems={[
            {
              description:
                "Right to request access to personal data related to the interested party",
            },
            {
              description:
                "Right to request rectification or deletion (right to be forgotten)",
            },
            {
              description:
                "Right to request the limitation of their processing",
            },
            {
              description:
                "Right to request the limitation of their processing",
            },
            { description: "Right to object to processing" },
            { description: "Right to data portability" },
          ]}
        />

        <SectionPar
          content="The interested party may exercise such rights by request accompanied
          by a photocopy of his/her ID, and in which he/she shall specify which
          of these rights wants to be satisfied, sending it to the address:
          Avda. Les Molines, 2 (03450) BANYERES DE MARIOLA Alicante – Spain"
        />
      </SectionItem>
      <SectionItem title="SECURITY MEASURES">
        <SectionPar
          content="The Controller of Hilaturas Ferre shall apply appropriate technical
          and organizational measures to ensure a level of security appropriate
          to the risk presented."
        />
      </SectionItem>
      <SectionItem title="USE OF COOKIES">
        <SectionPar
          content="We inform you that our server does not use cookies or other invisible
          procedures for collecting information and does not store any type of
          file on your computer equipment."
        />
      </SectionItem>
      <SectionItem title="CHANGE IN REGULATION">
        <SectionPar
          content="The Company reserves the right to modify this policy to bring it into
          conformity with any new developments in legislation or case law in
          standard codes of conduct on data protection or in the Company’s
          strategy."
        />
        <SectionPar
          content="Such changes will be communicated as necessary in advance on our
          Webpage, without detriment to asking for the necessary consent of
          those affected when it is not considered granted in accordance with
          the terms of this policy."
        />
        <SectionPar
          content="Any doubt, question or comment you may have with reference to these
          regulations, you can ask about it by sending your communication to
          info@ferreyarns.com"
        />
      </SectionItem>
    </div>
  );
};

export default PrivacyPolicy;
