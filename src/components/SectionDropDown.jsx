import React from "react";
import useSectionDropDownAnm from "../utils/animations/useSectionDropDownAnm";
import useOpacityAnm from "../utils/animations/useOpacityAnmOnScroll";
import "./styles/SectionDropDown.css";

const SectionDropDown = ({
  title,
  sectionName,
  img,
  video,
  hTextPosition,
  vTextPosition,
  children,
}) => {
  const [refImg] = useSectionDropDownAnm(hTextPosition);
  const [refOpc] = useOpacityAnm();

  const handleTextPositionHorizontal = () => {
    if (hTextPosition === "right") {
      return "section-dropdown-right";
    } else if (hTextPosition === "left") {
      return "section-dropdown-left";
    }
  };

  const handleTextPositionVertical = () => {
    if (vTextPosition === "top") {
      return "section-dropdown-top";
    } else if (vTextPosition === "bottom") {
      return "section-dropdown-bottom";
    }
  };

  // return the component
  return (
    <section className="section-dropdown">
      <div
        ref={refOpc}
        className={`section-dropdown__text scrolling-animation-opacity ${handleTextPositionHorizontal(
          hTextPosition
        )} ${handleTextPositionVertical(vTextPosition)}`}
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
