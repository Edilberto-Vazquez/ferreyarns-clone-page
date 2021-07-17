import React from "react";
import { SectionItem, SectionList, SectionPar } from "./SectionItem";
import {
  tecnicalCookies,
  customizationCookies,
  analyticalCookies,
  advertisingCookies,
  revocationConsent,
} from "../utils/ComponentCookies";

const Cookies = () => {
  return (
    <div className="cookies some-questions-section-item">
      <SectionItem title="What are cookies?">
        <SectionPar
          content="Cookies are small data files that are received in the terminal from
          the visited website and are used to record certain navigation
          interactions on a Website by storing data that can be updated and
          retrieved. These files are stored on the user’s computer and contain
          anonymous data that are not harmful to their computer. They are used
          to remember user preferences, such as the selected language, access
          data or page customization."
        />
        <SectionPar
          content="Cookies can also be used to record anonymous information about how a
          visitor uses a site. For example, from which website you have accessed
          or if you have used an advertising banner go to the page."
        />
      </SectionItem>
      <SectionItem title="Why Hilaturas Ferre uses cookies?">
        <SectionPar
          content="Hilaturas Ferre uses strictly necessary and essential cookies for you
          to use our websites and allow you to scroll freely, use secure areas,
          customized options, etc. In addition, our company uses cookies that
          retrieve data related to the Web use analysis. These are used to help
          improve customer service, measuring the use and performance of the
          page in order to optimize and customize it. Our sites may also have
          social media links (such as Facebook or Twitter). Hilaturas Ferre does
          not control the cookies used by these external websites. For more
          information about cookies from social networks or other third-party
          websites, we advise you to review their own cookie policies."
        />
      </SectionItem>
      <SectionItem title="What we do with the different types of cookies?">
        <SectionPar
          strong="Session cookies"
          content="session cookies are those that last as long as the user is browsing
          the website and are deleted at the end."
        />
        <SectionPar
          strong="Persistent cookies"
          content="these cookies are stored in the
          user’s terminal for a longer time, thus facilitating the control of
          the chosen preferences without having to repeat certain parameters
          each time the website is visited."
        />
        <SectionPar
          content="they are cookies created by these
          websites and can only be read by the site itself. On the website
          persistent own cookies are installed for the following purposes:"
        />
        <SectionList
          listType="ul"
          listItems={[
            {
              description:
                "Customization: These cookies are used to remember the configurationof the selected size in the visualization of the web contents and to be able to show it the next time the user visits it.",
            },
            {
              description:
                "Analysis: Cookies that allow to track the incoming traffic to the website to perform visitor statistics.",
            },
          ]}
        />
        <SectionPar
          strong="Third-party statistics"
          content="they are cookies created by
          third parties and that we use for different services (eg website
          analysis or advertising)."
        />
        <SectionPar
          content="Below are the details of the third parties that can configure and
          access Cookies (subject to informed consent) of your equipment, as
          well as the purposes for which the information they store is used:"
        />
        <SectionPar
          strong="Technical cookies"
          content="they are used to control traffic and data communication using security
          elements during navigation. They also serve to identify and maintain
          the user’s session, to store content in the broadcasting of videos or
          sounds and to share content with social networks (plug-in)."
        />
        <SectionList listType="ul" listItems={tecnicalCookies} />
        <SectionPar
          strong="Customization cookies"
          content="these cookies allow the user to specify or customize some features of
          the general options of the website. For example, define the language,
          the volume selected as preferred, the regional configuration of the
          service, the type of browser or the number of results displayed for
          each page."
        />
        <SectionList listType="ul" listItems={customizationCookies} />
        <SectionPar
          strong="Analytical cookies"
          content="analytical tool that helps
          websites understand how visitors interact with the website. It can use
          a set of cookies to collect information and report usage statistics of
          websites without personally identifying visitors."
        />
        <SectionList listType="ul" listItems={analyticalCookies} />
        <SectionPar content="">
          <strong>Advertising cookies: </strong>advertising cookies allow the
          management of advertising spaces on the web based on specific
          criteria. For example, access frequency, edited content, etc.
        </SectionPar>
        <SectionList listType="ul" listItems={advertisingCookies} />
        <SectionPar
          strong="Flash cookies"
          content="we also use flash cookies to store
          your preferences such as volume control or to display content based on
          what you browse on our website to customize the visit. Third
          companies, with which we collaborate to provide certain features on
          our website, use flash cookies to collect and store non-personal data.
          Flash cookies are different from session or persistent cookies in
          terms of quantity, type and mode of storing data. The cookie
          management tools provided by your browser will not eliminate flash
          cookies."
        />
      </SectionItem>
      <SectionItem title="How do I change cookie settings?">
        <SectionPar content="">
          <a href="http://windows.microsoft.com/es-es/windows-vista/block-or-allow-cookies">
            Internet Explorer cookie settings
          </a>
        </SectionPar>
        <SectionPar content="">
          <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we">
            Firefox cookie settings
          </a>
        </SectionPar>
        <SectionPar content="">
          <a href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647">
            Google Chrome cookie settings
          </a>
        </SectionPar>
        <SectionPar content="">
          <a href="http://www.apple.com/legal/privacy/es/cookies/">
            Safari cookie settings
          </a>
        </SectionPar>
        <SectionPar content="">
          <a href="http://www.macromedia.com/support/documentation/es/flashplayer/help/settings_manager03.html">
            Flash cookies settings
          </a>
        </SectionPar>
        <SectionPar
          content="These browsers are subject to updates or modifications, so we cannot
          guarantee that they fully conform to the version of your browser. You
          might also use another browser not included in these links such as
          Konqueror, Arora, Flock, etc. To avoid these mismatches, you can
          access directly from your browser options, usually in the “Options”
          menu in the “Privacy” section. (Please refer to your browser’s help
          section for more information.)"
        />
      </SectionItem>
      <SectionItem title="Revocation of consent">
        <SectionPar
          content="It is also possible to limit how third-party websites install cookies
          on your computer, to avoid data acquisition and record of your
          browsing activity. To limit the use of third-party cookies you can go
          to the configuration website or OptOut:"
        />
        <SectionList listType="ul" listItems={revocationConsent} />
        <SectionPar
          content="Select the option “Delete all sites” or select the specific website
          you wish to delete and “Delete Website”."
        />
        <SectionPar
          content="Keep in mind that if you reject or delete the web browsing cookies, we
          will not be able to maintain your preferences, some features of the
          pages will not be operational, we will not be able to offer you
          customized services and every time you browse our website, we will
          have to request again your authorization for the use of cookies."
        />
        <SectionPar
          content="If you still decide to modify the configuration of your access to the
          website, you should know that it is possible to delete cookies or
          prevent this information from being registered on your computer at any
          time by modifying your browser settings."
        />
        <SectionPar
          content="If you accept our cookies, it allows us to improve Hilaturas Ferre
          website to offer you an optimal access and give you a more efficient
          and customized service."
        />
        <SectionPar
          content="You can also configure your browser to establish that only trusted
          websites or pages you are currently browsing can manage cookies,
          allowing you to select your preferences."
        />
        <SectionPar
          content="By providing this policy, Hilaturas Ferre demonstrates the commitment
          acquired with the current legislation on the use of cookies, providing
          information so that you can understand what type of cookies we use and
          why we do it. With this, we intend to provide you with transparency
          regarding the data processed about the navigation made from your
          computer on our website."
        />
        <SectionPar
          content="This policy is periodically reviewed to ensure its validity, so it can
          be modified. We recommend that you visit the page regularly, where we
          will inform you of any updates in this regard."
        />
      </SectionItem>
    </div>
  );
};

export default Cookies;
