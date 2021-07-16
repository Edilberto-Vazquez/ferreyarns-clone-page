import React from "react";
import { SectionItem, SectionItemList } from "./SectionItem";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy some-questions-section-item">
      <SectionItem>
        <p>
          The Company is particularly conscious with regards to the data
          protection of users of the service of the Website. By means of this
          Privacy Policy (hereinafter, the Policy) The Company informs the USERS
          of the websites: http://www.ferreyarns.com, of the uses to which the
          personal data collected in the Website are subject to, in order to
          decide, freely and voluntarily, if they wish to provide the requested
          information.
        </p>
        <p>
          The Company reserves the right to modify this Policy in order to adapt
          it to new legislation, jurisprudential criteria, industry practices,
          or interests of the entity. Any modification in it will be announced
          in due time, so that you have perfect knowledge of its content.
        </p>
      </SectionItem>
      <SectionItem title="CONTROLLER">
        <p>The Controller of personal data is: Hilaturas Ferre</p>
        <p>Place of business: Avda. Les Molines, 2</p>
        <p>(03450) BANYERES DE MARIOLA Alicante – Spain</p>
        <p>Telephone: +34 966 567 425</p>
        <p>
          E-mail: <a href="mailto:info@ferreyarns.com">info@ferreyarns.com</a>
        </p>
      </SectionItem>
      <SectionItem title="PURPOSE OF DATA PROCESSING">
        <p>
          The personal data of the members are subject to processing by
          Hilaturas Ferre. The purpose of collecting this data is for:
        </p>
        <SectionItemList
          listType="ol"
          listItems={[
            { name: "Customer and Supplier Management of Hilaturas Ferre" },
            { name: "Provision of requested services." },
          ]}
        />
      </SectionItem>
      <SectionItem title="CONSERVATION PERIOD">
        <p>
          The provided personal data will be kept for the corresponding period
          to comply with legal obligations, or its deletion is requested by the
          interested party and he or she is entitled to do so.
        </p>
      </SectionItem>
      <SectionItem title="LEGAL STANDING">
        <p>
          The Company is entitled to the processing of personal data, based on
          the consent granted by the interested party for one or more specific
          purposes, as set forth in article 6.1. a) of the General Regulation of
          Protection of personal data.
        </p>
        <p>
          This website includes hyperlinks (links) that allow visitors to move
          to other pages. The Company assumes no responsibility whatsoever for
          the data protection policy that may have been adopted in them.
        </p>
      </SectionItem>
      <SectionItem title="RECIPIENTS">
        <p>
          The Company does not transfer its data to third parties in general,
          except in cases where it is necessary for the organization of certain
          activities, or the provision of services. In any case, the proposed
          transfers are regularized by signing contracts, and the transferor
          cannot use the granted information for other purposes than those
          established by the Company.
        </p>
      </SectionItem>
      <SectionItem title="USER RIGHTS">
        <p>
          The person interested in personal data, in any case may exercise the
          rights corresponding to him/her, in accordance with the GDPR, and
          which are:
        </p>
        <SectionItemList
          listType="ul"
          listItems={[
            {
              name: "Right to request access to personal data related to the interested party",
            },
            {
              name: "Right to request rectification or deletion (right to be forgotten)",
            },
            { name: "Right to request the limitation of their processing" },
            { name: "Right to request the limitation of their processing" },
            { name: "Right to object to processing" },
            { name: "Right to data portability" },
          ]}
        />

        <p>
          The interested party may exercise such rights by request accompanied
          by a photocopy of his/her ID, and in which he/she shall specify which
          of these rights wants to be satisfied, sending it to the address:
          Avda. Les Molines, 2 (03450) BANYERES DE MARIOLA Alicante – Spain
        </p>
      </SectionItem>
      <SectionItem title="SECURITY MEASURES">
        <p>
          The Controller of Hilaturas Ferre shall apply appropriate technical
          and organizational measures to ensure a level of security appropriate
          to the risk presented.
        </p>
      </SectionItem>
      <SectionItem title="USE OF COOKIES">
        <p>
          We inform you that our server does not use cookies or other invisible
          procedures for collecting information and does not store any type of
          file on your computer equipment.
        </p>
      </SectionItem>
      <SectionItem title="CHANGE IN REGULATION">
        <p>
          The Company reserves the right to modify this policy to bring it into
          conformity with any new developments in legislation or case law in
          standard codes of conduct on data protection or in the Company’s
          strategy.
        </p>
        <p>
          Such changes will be communicated as necessary in advance on our
          Webpage, without detriment to asking for the necessary consent of
          those affected when it is not considered granted in accordance with
          the terms of this policy.
        </p>
        <p>
          Any doubt, question or comment you may have with reference to these
          regulations, you can ask about it by sending your communication to
          info@ferreyarns.com
        </p>
      </SectionItem>
    </div>
  );
};

export default PrivacyPolicy;
