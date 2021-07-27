import React from "react";
import useFeatureSectionAnm from "../utils/animations/useFeatureSectionAnm";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
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
  const { refImg } = useFeatureSectionAnm(xAxis);
  const { refOpc } = useOpacityAnm();

  // return the component
  return (
    <section className="feature-section">
      <div
        ref={refOpc}
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
