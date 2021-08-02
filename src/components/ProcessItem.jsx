import React from "react";
import "./styles/CircularProceItem.css";

const ProcessItem = ({ title, titleNum, description, imgs }) => {
  return (
    <div className="circular-proc-item border-black">
      <div className="circular-proc-title">
        <img src={titleNum} alt="" />
        <div className="circular-proc-desc">
          <h2 className="title-black">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="circular-proc-imgs">
        {imgs.map((item, index) => {
          return <img key={index} src={item.img} alt={item.alt} />;
        })}
      </div>
    </div>
  );
};

export default ProcessItem;
