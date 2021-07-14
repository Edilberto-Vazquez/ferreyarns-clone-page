import React from "react";
import "./styles/FeatureSection.css";

const FeatureSection = ({ title, img, children }) => {
  return (
    <section className="feature-section">
      <div className="feature-description">
        <h2>{title}</h2>
        {children}
      </div>
      <img src={img} alt="" className="feature-img" />
    </section>
  );
};

export default FeatureSection;
