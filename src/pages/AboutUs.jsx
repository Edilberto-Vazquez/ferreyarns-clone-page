import React from "react";
import FeatureSection from "../components/FeatureSection";
import about from "../assets/images/about.jpg";
import awards from "../assets/images/awards.jpg";
import year1914 from "../assets/icons/1914.svg";
import timeline from "../assets/icons/about-timeline-1.svg";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <main className="about-us">
      <FeatureSection
        title="Always looking for new and better ways forward"
        sectionName="Ferre / About us"
        img={about}
      >
        <p>
          Making better recycled yarns for sustainable manufacturers and brands
          and meeting their changing needs. This is the heart and soul of our
          business. We work every day to improve our products and help our
          clients unlock the full potential of our low-impact yarns, always
          guided by the spirit of making more from less.
        </p>
      </FeatureSection>
      <div className="slogan">
        <div>
          <p>
            What we do impacts people’s lives because it drives progress towards
            a sustainable fashion industry and a sustainable planet –{" "}
            <span>this is how we change the world.</span>
          </p>
        </div>
      </div>
      <div className="story-slides">
        <div className="time-line-description">
          <h2>The pursuit of a zero-impact future. A continuous journey.</h2>
          <img src={year1914} alt="" className="year-img" />
          <h2>Humble beginnings</h2>
          <div>
            <p>
              Antonio Ferre opens a textile factory in his native Banyeres de
              Mariola, a small town in Alicante, Spain. Ferre manufactures jute
              and other bast-fiber fabrics and sells bags for fertilizers in
              economically depressed Spain while most of Europe’s countries are
              involved in World War I.
            </p>
          </div>
        </div>
        <div className="time-line-image">
          <img src={timeline} alt="" className="time-line" />
        </div>
      </div>
      <FeatureSection
        title="Awards and honours"
        img={awards}
        xAxis="right"
        yAxis="bottom"
      >
        <ul>
          <li>
            <strong>2020</strong>
            National Fashion Industry Award, which is promoted by the Spanish
            Ministry of Industry, Commerce and Tourism, in the Leading Industry
            category.
          </li>
          <li>
            <strong>2018</strong>
            AITEX Business Award, in the sustainability category.
          </li>
          <li>
            <strong>2017</strong>
            Innovative Company Award, awarded by the Spanish Cotton Textile
            Foundation.
          </li>
          <li>
            <strong>2016</strong>
            Finalist Triodos Company Awards, which recognize the positive social
            impact of companies.
          </li>
          <li>
            <strong>2002</strong>
            Family Business Award, awarded by the Valencia Chamber of Commerce.
          </li>
        </ul>
      </FeatureSection>
    </main>
  );
};

export default AboutUs;
