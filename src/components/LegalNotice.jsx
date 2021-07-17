import React from "react";
import { SectionItem, SectionList, SectionPar } from "./SectionItem";
import {
  obligationsUse,
  exemptionLiability,
} from "../utils/ComponentLegalNotice";

const LegalNotice = () => {
  return (
    <div className="legal-notice some-questions-section-item">
      <SectionItem title="1. GENERAL ASPECTS LEGAL NOTICE">
        <SectionItem title="1.1. Identification data of the Information Society Service Provider">
          <SectionPar
            content="In compliance with Article 10 of Law 34/2002, of July 11, on
            Information Society Services and Electronic Commerce. This portal is
            owned by: Hilaturas Ferre SA tax I.D number: A-03008836"
          />

          <SectionPar strong="Address" content="Avda. Les Molines, 2" />
          <SectionPar content="(03450) BANYERES DE MARIOLA (Alicante – Spain)" />
          <SectionPar strong="Telephone" content="+34 966 567 425">
            <SectionPar strong="Internet" content="http://www.ferreyarns.com" />
            <SectionPar strong="E-mail" content="info@ferreyarns.com" />
            <a href="mailto:info@ferreyarns.com">info@ferreyarns.com</a>
          </SectionPar>
        </SectionItem>
        <SectionItem title="1.2. Acceptance and validity of the general and particular conditions">
          <SectionPar
            content="Both the navigation and the use and/or order of any of the products
            offered on this Website attributes to you the condition of User and
            implies your full and unreserved acceptance of each and every one of
            the General Conditions and, if appropriate, issues in force at the
            time you as a User access the Web page."
          />
          <SectionPar
            content="The Company reserves the right to expand and modify unilaterally, at
            any time and without prior notice, the presentation, configuration,
            and contents of the Web page, as well as temporarily suspend the
            presentation, configuration, technical specifications and services
            of the website, likewise."
          />
        </SectionItem>
      </SectionItem>
      <SectionItem title="2. GENERAL CONDITIONS OF USE FOR THE WEBSITE">
        <SectionItem title="2.1. Obligations of use">
          <SectionPar
            content="As a general rule, the User is legally bound to the use terms and
            conditions hereby to act in accordance with the law, good practice
            and in good faith, to use the service provided in an appropriate way
            and to avoid using this website anyhow that could prevent, damage or
            deteriorate the normal work of the service, the goods or rights hold
            by Hilaturas Ferre, the rest of Users or any general third party."
          />
          <SectionPar
            content="As a particular rule that does not imply any kind of restriction on
            the general rule contracted by the User in the previous paragraph,
            during the use of this Website the user is bound to:"
          />
          <SectionList listType="ul" listItems={obligationsUse} />
          <SectionPar
            content="The Company may, at any time and without prior notice, modify these
            General Conditions, as well as the Particular Conditions that, where
            appropriate, are included, by publishing said modifications on the
            website in order that they may be known by the Users."
          />
        </SectionItem>
        <SectionItem title="2.2. Exemption of liability">
          <SectionPar
            content="The Company does not give any guarantees and is in no case
            responsible for damages of any nature that may result in:"
          />
        </SectionItem>
        <SectionList listType="ul" listItems={exemptionLiability} />
        <SectionItem title="2.3. Use of hyperlinks">
          <SectionPar
            content="The Internet user who wants to introduce links from their own
            Websites to the Website will be compelled to observe the conditions
            given below, an ignorance of which does not constitute a release
            from the liabilities deriving from Law."
          />
          <SectionPar
            content="The link only linked to the home page or main page of the Portal,
            but you cannot reproduce it in any way (inline links, copy of the
            texts, graphics, etc.). In accordance with the applicable
            legislation in force at every moment, it is under any event
            forbidden to establish frames of any type that may surround the
            Website or permit the displaying of its Contents via other Internet
            addresses than those of the Website and, in any case, when they are
            jointly displayed with contents other than those of the Website in
            such a way as to: (I) actually or potentially result in error,
            confusion or deceit among users as to the true origin of the service
            or Contents; (II) constitute an act of unfair comparison or
            imitation; (III) exploit the reputation of the national brand owned
            by Company name and the prestige of this company; or (IV) incur in
            any other form of activity forbidden by the legislation in force."
          />
          <SectionPar
            content="The web page inserting the link shall not contain any kind of false,
            inaccurate or incorrect statement on the Company of its address,
            employees, customers or on the quality of the services it offers."
          />
          <SectionPar
            content="Under no circumstances shall the page containing the link state that
            the Company has approved its insertion nor that the company
            sponsors, collaborates, verifies, or supervises the services of the
            sender."
          />
          <SectionPar
            content="The use of any denominative, graphic or mixed brand or of another
            characteristic sign of the Company name within the sender’s web page
            is forbidden except for those cases permitted by Law or expressly
            authorized by the Company as long as in such cases a direct link to
            the Website is permitted in the manner established in this section."
          />
          <SectionPar
            content="The page you establish the link must comply faithfully with the law
            and in no case may provide or link to own or third-party content
            that: (I) are illegal, harmful or contrary to morals and good
            practice (pornographic, violent, racist, etc.); (II) induce or may
            induce in the User the false conception that The Company subscribes,
            endorses, adheres or in any way supports, the ideas, manifestations
            or expressions, lawful or illegal, of the sender; (III) are
            inappropriate for or non-pertinent to the activity of virtue of the
            location, contents, or theme of the sender’s Website. Likewise, the
            User will refrain from including on the Web page any hyperlink
            (hereinafter, “link”) directed to a Web page that contains illegal
            information or content, contrary to morality and generally accepted
            good practice, and public order."
          />
        </SectionItem>
        <SectionItem title="2.4. Intellectual Property">
          <SectionPar
            content="The structure, design, and presentation of the elements available on
            this website (graphics, images, photographs, samples and materials
            that appear on them, industrial technologies, files, logos, color
            combinations and any element that can be protected) are protected by
            intellectual property rights owned by Hilaturas Ferre or over which
            the corresponding use rights have been obtained."
          />
          <SectionPar
            content="Reproduction, transformation, distribution, public communication,
            making available to the public and, in general, any other form of
            exploitation, partial or total, of the elements referred to in the
            previous section is prohibited. Its publication on other websites or
            other digital or written media requires the express consent of the
            owner of the website, and in any case, they must make explicit
            reference to the ownership of the aforementioned intellectual
            property rights of Hilaturas Ferre."
          />
          <SectionPar
            content="The use of distinctive signs (trademarks, trade names) is not
            allowed, unless expressly authorized by the legitimate owners."
          />
          <SectionPar
            content="Unless expressly authorized by Hilaturas Ferre, the link to “final
            pages”, the “frame” and any other similar manipulation is not
            allowed. Links should always be to the main page or homepage of the
            website."
          />
        </SectionItem>
        <SectionItem title="2.5. Jurisdiction and applicable law">
          <SectionPar
            content="These General Conditions are subject to Spanish legislation and
            jurisdiction."
          />
          <SectionPar
            content="The Company and the User, regardless of their address, expressly
            waiving any other jurisdiction which could apply, submit themselves
            to the Jurisdiction of the Courts and Tribunals of Alcoy for all
            matters or actions brought that are derived from the provision of
            the website, its services and content, or in relation to the
            interpretation, application, fulfillment or breach of what is
            established herein."
          />
        </SectionItem>
      </SectionItem>
    </div>
  );
};

export default LegalNotice;
