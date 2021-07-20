import React, { useState } from "react";
import { EcologicalMaterial } from "./EcologicalDescription";
import "./styles/PositiveImpactSlider.css";

// slider container
export const SliderContainer = ({ children }) => {
  return <section className="slide-container">{children}</section>;
};

// item in slider
export const SlideItem = ({ sectionImg, children }) => {
  return (
    <div className="slide-item">
      <img src={sectionImg} alt="" />
      <div className="slide-item-content">{children}</div>
    </div>
  );
};

// title image in item
export const SlideTitle = ({ titleImg }) => {
  return <img src={titleImg} alt="" className="slide-title" />;
};

export const SlideDescription = ({ brand, garment, compositions }) => {
  return (
    <div className="slide-section-description border-white">
      <div className="brand-garment">
        <p>Brand: {brand}</p>
        <p>Garment: {garment}</p>
      </div>
      <p className="composition">Composition: </p>
      <div className="composition-materials">
        {compositions.map((item, index) => (
          <EcologicalMaterial
            key={index}
            material={item.material}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

// total savings section tabs
export const SlideTotalSavings = ({ totalSavings }) => {
  const [tab, setTab] = useState(totalSavings[0].title);
  return (
    <div className="slide-section-savings border-white">
      <h3>Total savings</h3>
      <div className="tabs-saving">
        {totalSavings.map((item, index) => (
          <li
            key={index}
            className="tab-item"
            onClick={() => setTab(item.title)}
          >
            <img src={item.timg} alt="" />
          </li>
        ))}
      </div>
      {totalSavings.map((item) => {
        if (item.title !== tab) return undefined;
        return (
          <div className="tab-content">
            <span>{item.number}</span>
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

// item data source
export const SlideDataSource = ({ dataSource }) => {
  return (
    <div className="data-source border-white">
      <p>{dataSource}</p>
    </div>
  );
};
