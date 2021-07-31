import React, { useState } from "react";
import { MaterialsTypes } from "./Materials";
import useSectionChangeAnm from "../utils/animations/useSectionChangeAnm";
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
  console.log();
  return (
    <div className="slide-section-description border-white">
      <div className="brand-garment">
        <p>
          {brand.title}: {brand.brand}
        </p>
        <p>
          {garment.title}: {garment.garment}
        </p>
      </div>
      <p className="composition">{compositions.title} </p>
      <div className="composition-materials">
        <MaterialsTypes materials={compositions.materials} />
      </div>
    </div>
  );
};

// total savings section tabs
export const SlideTotalSavings = ({ totalSavings }) => {
  const [tab, setTab] = useState(totalSavings.elements[0].element);
  const [refOpc] = useSectionChangeAnm();
  return (
    <div className="slide-section-savings border-white">
      <h3>{totalSavings.title}</h3>
      <div className="tabs-saving">
        {totalSavings.elements.map((item, index) => (
          <li
            key={index}
            className="tab-item"
            onClick={() => setTab(item.element)}
          >
            <img
              src={item.img}
              alt=""
              className={`${item.element !== tab && "no-current-tab"}`}
            />
          </li>
        ))}
      </div>
      {totalSavings.elements.map((item, index) => {
        if (item.element !== tab) return undefined;
        return (
          <div
            ref={refOpc}
            key={index}
            className="tab-content section-change-animation"
            aria-expanded={false}
          >
            <span>{item.amount}</span>
            <span>{item.element}</span>
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
