import React from "react";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import "./styles/Storyslide.css";

const StorySlide = ({ img, paragraph, title, yearImg }) => {
  const [refOpc] = useOpacityAnm();

  return (
    <div ref={refOpc} className="story-slide">
      <img src={img} alt="" className="story-slide-item__background" />
      <div className="story-slide-item__time-line">
        <img src={yearImg} alt="" />
        <h2 className="title-white">{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default StorySlide;
