import React from "react";
import useDisplayAnm from "../utils/animations/useDisplayAnm";
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
  const [refDisplay, refButton, show, setShow] = useDisplayAnm("white");

  const display = tabs.map((tab, index) => {
    if (tab === section) {
      return (
        <div key={index} className="ecological-item">
          <button
            ref={refButton}
            aria-expanded={!show}
            onClick={() => setShow(!show)}
            className="ecological-item__button"
          >
            <img src={title} alt="" /> <span>{type}</span>
          </button>
          <div ref={refDisplay} aria-expanded={!show}>
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
