import React, { useState } from "react";
import "./styles/EcologicalDescription.css";

export const EcologicalSection = ({
  title,
  type,
  children,
  aplication,
  specs,
  tabs,
  section,
}) => {
  const [showFeature, setShowFeature] = useState(false);
  const display = tabs.map((tab, index) => {
    if (tab === section) {
      return (
        <div key={index} className="ecological-item">
          <button
            onClick={() => setShowFeature(!showFeature)}
            className="ecological-item__button"
          >
            <img src={title} alt="" /> <span>{type}</span>
          </button>
          {showFeature ? (
            <div>
              <p className="ecological-item__applications">
                <b>Applications: </b>
                <span>{aplication}</span>
              </p>
              <div className="ecological-item__features">{children}</div>
              <p className="ecological-section__especifications">
                {specs.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })}
              </p>
            </div>
          ) : null}
        </div>
      );
    }
    return null;
  });
  return <>{display}</>;
};

export const EcologicalMaterial = ({ materials }) => {
  return (
    <>
      {materials.map((material, index) => (
        <div key={index} className="ecological-material">
          <img src={material.img} alt="" />
          <div className="percentage-material">
            <span>{material.percentage}</span>
            <p>{material.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};
