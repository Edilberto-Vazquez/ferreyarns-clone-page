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
  const [refOpc] = useSectionChangeAnm();
  return (
    <div className="slide-item ">
      <img
        ref={refOpc}
        src={sectionImg}
        alt=""
        className="section-change-animation"
      />
      <div className="slide-item-content">{children}</div>
    </div>
  );
};

// title image in item
export const SlideTitle = ({ titleImg }) => {
  const [refOpc] = useSectionChangeAnm();
  return (
    <img
      ref={refOpc}
      src={titleImg}
      alt=""
      className="slide-title section-change-animation"
    />
  );
};

export const SlideDescription = ({ brand, garment, compositions }) => {
  const [refOpcBrand] = useSectionChangeAnm();
  const [refOpcComposition] = useSectionChangeAnm();
  const [refOpcMaterials] = useSectionChangeAnm();
  return (
    <div className="slide-section-description border-white">
      <div ref={refOpcBrand} className="brand-garment section-change-animation">
        <p>
          {brand.title}: {brand.brand}
        </p>
        <p>
          {garment.title}: {garment.garment}
        </p>
      </div>
      <p
        ref={refOpcComposition}
        className="composition section-change-animation"
      >
        {compositions.title}{" "}
      </p>
      <div
        ref={refOpcMaterials}
        className="composition-materials section-change-animation"
      >
        <MaterialsTypes materials={compositions.materials} />
      </div>
    </div>
  );
};

// total savings section tabs
export const SlideTotalSavings = ({ totalSavings }) => {
  const [tab, setTab] = useState(totalSavings.elements[0].element);
  const [refOpcTitle] = useSectionChangeAnm();
  const [refOpcTab] = useSectionChangeAnm();
  const [refOpcElements] = useSectionChangeAnm();
  return (
    <div className="slide-section-savings border-white">
      <h3 ref={refOpcTitle} className="section-change-animation">
        {totalSavings.title}
      </h3>
      <div
        ref={refOpcElements}
        className="tabs-saving section-change-animation"
      >
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
            ref={refOpcTab}
            key={index}
            className="tab-content section-change-animation"
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
  const [refOpc] = useSectionChangeAnm();
  return (
    <div
      ref={refOpc}
      className="data-source border-white section-change-animation"
    >
      <p>{dataSource}</p>
    </div>
  );
};
