import React, { useState } from "react";
import "./styles/EcologicalDescription.css";

// title
import fblue from "../assets/icons/ecological_title/fblue.svg";
import fearth from "../assets/icons/ecological_title/fearth.svg";
import fjeans from "../assets/icons/ecological_title/fjeans.svg";
import funo from "../assets/icons/ecological_title/funo.svg";

// material
import rrCotton from "../assets/icons/ecological_description/cotton-icon-white.svg";
import rPolyester from "../assets/icons/ecological_description/poliester-icon-white.svg";
import rWool from "../assets/icons/ecological_description/wool.svg";
import oCotton from "../assets/icons/ecological_description/organic-cotton.svg";
import tencel from "../assets/icons/ecological_description/tecnel.svg";
import acrylic from "../assets/icons/ecological_description/acrylic.svg";
import polyester from "../assets/icons/ecological_description/polyester.svg";
import polyamide from "../assets/icons/ecological_description/polyamide.svg";
import oFibers from "../assets/icons/ecological_description/other-fibers.svg";
import rrDenim from "../assets/icons/ecological_description/denim.svg";

export const EcologicalSection = ({
  title,
  type,
  children,
  aplication,
  specs,
}) => {
  const [showFeature, setShowFeature] = useState(false);
  const titleImg = [
    { key: "fblue", img: fblue },
    { key: "fearth", img: fearth },
    { key: "fjeans", img: fjeans },
    { key: "funo", img: funo },
  ];
  const { img } = titleImg.find((item) => item.key === title);
  return (
    <div className="ecological-item">
      <button
        onClick={() => setShowFeature(!showFeature)}
        className="ecological-item__button"
      >
        <div>
          <img src={img} alt="" /> <span>{type}</span>
        </div>
      </button>
      {showFeature ? (
        <div>
          <p className="ecological-item__applications">
            <b>Applications: </b>
            <span>{aplication}</span>
          </p>
          <div className="ecological-item__features">{children}</div>
          <p className="ecological-section__especifications">
            {specs.map((item) => {
              return <span>{item}</span>;
            })}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export const EcologicalDescription = ({ children }) => {
  return <div className="ecological-descr">{children}</div>;
};

export const EcologicalMaterial = ({ material, percentage }) => {
  const type = [
    { key: "rrCotton", name: "Recover™ recycled cotton", img: rrCotton },
    { key: "rPolyester", name: "Recycled Polyester", img: rPolyester },
    { key: "rWool", name: "Recycled wool", img: rWool },
    { key: "oCotton", name: "Organic cotton", img: oCotton },
    { key: "tencel", name: "TENCEL™", img: tencel },
    { key: "acrylic", name: "Acrylic", img: acrylic },
    { key: "polyester", name: "Polyester", img: polyester },
    { key: "polyamide", name: "Polyamide", img: polyamide },
    { key: "oFibers", name: "Other fibers", img: oFibers },
    { key: "rrDenim", name: "Recover™ recycled denim", img: rrDenim },
  ];

  const { name, img } = type.find((item) => item.key === material);

  return (
    <div className="ecological-material">
      <img src={img} alt="" />
      <div className="percentage-material">
        <span>{percentage}</span>
        <p>{name}</p>
      </div>
    </div>
  );
};
