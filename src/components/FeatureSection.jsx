import React from "react";
import useFeatureSectionAnm from "../utils/useFeatureSectionAnm";
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
  // this secction handle the animation with useEffect
  const { refImg, refText } = useFeatureSectionAnm(xAxis);

  // return the component
  return (
    <section className="feature-section">
      <div
        ref={refText}
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
        <img ref={refImg} src={img} alt="" className="feature-media" />
      ) : (
        <video ref={refImg} autoPlay muted loop className="feature-media">
          <source src={video} type="video/mp4" />
        </video>
      )}
    </section>
  );
};

export default FeatureSection;
