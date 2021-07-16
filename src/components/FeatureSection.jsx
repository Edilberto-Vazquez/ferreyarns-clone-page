import React from "react";
import "./styles/FeatureSection.css";

const FeatureSection = ({
  title,
  subTitle,
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
        {subTitle ? <h4>{subTitle}</h4> : null}
        <h2>{title}</h2>
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
