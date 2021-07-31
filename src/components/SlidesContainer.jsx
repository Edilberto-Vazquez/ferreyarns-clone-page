import React, { useState } from "react";
import {
  SlideItem,
  SlideTitle,
  SlideDescription,
  SlideTotalSavings,
  SlideDataSource,
} from "./PositiveImpactSlider";
import "./styles/SlidesContainer.css";

const SlidesContainer = ({ slides }) => {
  const [numSlide, setNumSlide] = useState(0);

  const handleClick = (count) => {
    const lengthSlide = slides.length - 1;
    if (count < 0) {
      setNumSlide(lengthSlide);
    } else if (count > lengthSlide) {
      setNumSlide(0);
    } else {
      setNumSlide(count);
    }
  };
  const sliderSection = (numSlide) => {
    return slides.map((item, index) => {
      return (
        index === numSlide && (
          <SlideItem key={index} sectionImg={item.img}>
            <SlideTitle titleImg={item.imgTitle} />
            <SlideDescription
              brand={item.brand}
              garment={item.garment}
              compositions={item.composition}
            />
            <SlideTotalSavings totalSavings={item.totalSavings} />
            <SlideDataSource dataSource={item.dataSource} />
          </SlideItem>
        )
      );
    });
  };
  return (
    <div className="slides-container">
      {sliderSection(numSlide)}
      <div className="slides-container__arrow-butons">
        <button type="button" onClick={() => handleClick(numSlide - 1)} />
        <button type="button" onClick={() => handleClick(numSlide + 1)} />
      </div>
    </div>
  );
};

export default SlidesContainer;
