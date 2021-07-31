import React from "react";
import useDisplayAnm from "../utils/animations/useDisplayAnm";
import useOpacityAnmOnScroll from "../utils/animations/useOpacityAnmOnScroll";
import "./styles/Materials.css";

export const MaterialsContainer = ({
  title,
  type,
  children,
  aplication,
  specs,
  tabs,
  section,
}) => {
  const [refDisplay, refButton, show, setShow] = useDisplayAnm("white");
  const [refOpc] = useOpacityAnmOnScroll();

  const display = tabs.map((tab, index) => {
    if (tab === section) {
      return (
        <div
          ref={refOpc}
          key={index}
          className="materials-container opacity-animation"
          aria-expanded={false}
        >
          <button
            ref={refButton}
            aria-expanded={!show}
            onClick={() => setShow(!show)}
            className="materials-container__button"
          >
            <img src={title} alt="" /> <span>{type}</span>
          </button>
          <div ref={refDisplay} aria-expanded={!show}>
            <p className="materials-container__applications">
              <b>Applications: </b>
              <span>{aplication}</span>
            </p>
            <div className="materials-container__features">{children}</div>
            <p className="materials-container__especifications">
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

export const MaterialsTypes = ({ materials }) => {
  return (
    <>
      {materials.map((material, index) => (
        <div key={index} className="material-type">
          <img src={material.img} alt="" />
          <div className="material-type__percentage">
            <span>{material.percentage}</span>
            <p>{material.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};
