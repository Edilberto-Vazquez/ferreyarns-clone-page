import React, { useState } from "react";
import "./styles/SlidesContainer.css";

const SlidesContainer = ({ children }) => {
  const [numSlide, setNumSlide] = useState(0);

  const handleClick = (count) => {
    const lengthSlide = children.length - 1;
    if (count < 0) {
      setNumSlide(lengthSlide);
    } else if (count > lengthSlide) {
      setNumSlide(0);
    } else {
      setNumSlide(count);
    }
  };
  const sliderSection = (numSlide) => {
    return children.map((item, index) => {
      return index === numSlide && item;
    });
  };
  return (
    <div className="slides-container">
      {sliderSection(numSlide)}
      <div className="slides-container__arrow-butons">
        <button
          type="button"
          onClick={() => handleClick(numSlide - 1)}
          aria-label="previous slide"
        />
        <button
          type="button"
          onClick={() => handleClick(numSlide + 1)}
          aria-label="next slide"
        />
      </div>
    </div>
  );
};

export default SlidesContainer;
