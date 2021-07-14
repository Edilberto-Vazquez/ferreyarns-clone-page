import React from "react";
import "./styles/FeatureSection.css";

const FeatureSection = ({ title, subTitle, img, xAxis, yAxis, children }) => {
  return (
    <section className="feature-section">
      <div
        className={`feature-description ${
          xAxis === "right"
            ? "feature-description-right"
            : "feature-description-left"
        } ${
          yAxis === "top"
            ? "feature-description-top"
            : "feature-description-bottom"
        }`}
      >
        {subTitle ? <h4>{subTitle}</h4> : null}
        <h2>{title}</h2>
        {children}
      </div>
      <img src={img} alt="" className="feature-img" />
    </section>
  );
};

export default FeatureSection;
