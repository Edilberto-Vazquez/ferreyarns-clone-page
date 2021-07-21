import React from "react";
import "./styles/FeatureSection.css";

const FeatureSection = ({
  title,
  sectionName,
  img,
  video,
  xAxis,
  yAxis,
  children,
}) => {
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
        {sectionName ? <h4 className="section-name">{sectionName}</h4> : null}
        <h2 className="title-black">{title}</h2>
        {children}
      </div>
      {img ? (
        <img src={img} alt="" className="feature-media" />
      ) : (
        <video autoPlay muted loop className="feature-media">
          <source src={video} type="video/mp4" />
        </video>
      )}
    </section>
  );
};

export default FeatureSection;
