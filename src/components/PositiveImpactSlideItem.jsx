import React, { useState } from "react";
import { MaterialsTypes } from "./Materials";
import useSectionChangeAnm from "../utils/animations/useSectionChangeAnm";
import "./styles/PositiveImpactSlider.css";

// item in slider
export const PISlideItem = ({ sectionImg, children }) => {
  const [refOpc] = useSectionChangeAnm();
  return (
    <div className="posimpact-slide ">
      <img
        ref={refOpc}
        src={sectionImg}
        alt=""
        className="section-change-animation"
      />
      <div className="posimpact-slide__content">{children}</div>
    </div>
  );
};

// title image in item
export const PISlideTitle = ({ titleImg }) => {
  const [refOpc] = useSectionChangeAnm();
  return (
    <img
      ref={refOpc}
      src={titleImg}
      alt=""
      className="posimpact-slide__title-img section-change-animation"
    />
  );
};

export const PISlideDescription = ({ brand, garment, compositions }) => {
  const [refOpcBrand] = useSectionChangeAnm();
  const [refOpcComposition] = useSectionChangeAnm();
  const [refOpcMaterials] = useSectionChangeAnm();
  return (
    <div className="posimpact-slide__description border-white">
      <div
        ref={refOpcBrand}
        className="posimpact-slide__description-brand-garment section-change-animation"
      >
        <p>
          {brand.title}: {brand.brand}
        </p>
        <p>
          {garment.title}: {garment.garment}
        </p>
      </div>
      <p
        ref={refOpcComposition}
        className="posimpact-slide__description-composition-title section-change-animation"
      >
        {compositions.title}{" "}
      </p>
      <div
        ref={refOpcMaterials}
        className="posimpact-slide__description-composition-materials section-change-animation"
      >
        <MaterialsTypes materials={compositions.materials} />
      </div>
    </div>
  );
};

// total savings section tabs
export const PISlideSavings = ({ totalSavings }) => {
  const [tab, setTab] = useState(totalSavings.elements[0].element);
  const [refOpcTitle] = useSectionChangeAnm();
  const [refOpcTab] = useSectionChangeAnm();
  const [refOpcElements] = useSectionChangeAnm();
  return (
    <div className="posimpact-slide__savings border-white">
      <h3 ref={refOpcTitle} className="section-change-animation">
        {totalSavings.title}
      </h3>
      <div
        ref={refOpcElements}
        className="posimpact-slide__savings-tabs section-change-animation"
      >
        {totalSavings.elements.map((item, index) => (
          <li
            key={index}
            className="posimpact-slide__savings-tabs-item"
            onClick={() => setTab(item.element)}
          >
            <img
              src={item.img}
              alt=""
              className={`${
                item.element !== tab &&
                "posimpact-slide__savings-no-current-tab"
              }`}
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
            className="posimpact-slide__savings-tabs-content section-change-animation"
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
export const PISlideDataSource = ({ dataSource }) => {
  const [refOpc] = useSectionChangeAnm();
  return (
    <div
      ref={refOpc}
      className="posimpact-slide__savings-data-source border-white section-change-animation"
    >
      <p>{dataSource}</p>
    </div>
  );
};
