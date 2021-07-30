import React from "react";
import useFeatureSectionAnm from "../utils/animations/useFeatureSectionAnm";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import "./styles/FeatureSection.css";

const SectionDropDown = ({
  title,
  sectionName,
  img,
  video,
  xAxis,
  yAxis,
  children,
}) => {
  const [refImg] = useFeatureSectionAnm(xAxis);
  const [refOpc] = useOpacityAnm();

  const handleTextPositionHorizontal = () => {
    if (xAxis === "right") {
      return "section-dropdown-right";
    } else if (xAxis === "right") {
      return "section-dropdown-left";
    }
  };

  const handleTextPositionVertical = () => {
    if (yAxis === "right") {
      return "section-dropdown-top";
    } else if (yAxis === "right") {
      return "section-dropdown-bottom";
    }
  };

  // return the component
  return (
    <section className="section-dropdown">
      <div
        ref={refOpc}
        className={`section-dropdown__text ${handleTextPositionHorizontal(
          xAxis
        )} ${handleTextPositionVertical(yAxis)}`}
      >
        {sectionName ? <h4 className="section-name">{sectionName}</h4> : null}
        <h2 className="title-black">{title}</h2>
        {children}
      </div>
      {img ? (
        <img
          ref={refImg}
          src={img}
          alt=""
          className="section-dropdown__media"
        />
      ) : (
        <video
          ref={refImg}
          autoPlay
          muted
          loop
          className="section-dropdown__media"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </section>
  );
};

export default SectionDropDown;
