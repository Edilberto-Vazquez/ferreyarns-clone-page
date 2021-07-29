import React, { useState, useEffect } from "react";
import useOpacityAnm from "../utils/animations/useOpacityAnm";

const StorySlides = ({ img, paragraph, title, yearImg }) => {
  const [refOpc] = useOpacityAnm();

  return (
    <div ref={refOpc} className="slide-item">
      <img src={img} alt="" className="story-slides__background" />
      <div className="time-line-description">
        <img src={yearImg} alt="" className="year-img" />
        <h2 className="title-white">{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default StorySlides;
