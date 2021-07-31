import React from "react";
import useFeatureSectionAnm from "../utils/animations/useFeatureSectionAnm";
import useOpacityAnm from "../utils/animations/useOpacityAnmOnScroll";
import "./styles/SectionDropDown.css";

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
    if (yAxis === "top") {
      return "section-dropdown-top";
    } else if (yAxis === "bottom") {
      return "section-dropdown-bottom";
    }
  };

  // return the component
  return (
    <section className="section-dropdown">
      <div
        ref={refOpc}
        className={`section-dropdown__text scrolling-animation-opacity ${handleTextPositionHorizontal(
          xAxis
        )} ${handleTextPositionVertical(yAxis)}`}
        aria-expanded={false}
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
