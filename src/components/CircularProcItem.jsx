import React from "react";
import "./styles/CircularProceItem.css";

const CircularProcItem = ({ title, titleNum, description, imgs }) => {
  return (
    <div className="circular-proc-item">
      <div className="circular-proc-title">
        <img src={titleNum} alt="" />
        <div className="circular-proc-desc">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="circular-proc-imgs">
        {imgs.map((item) => {
          return <img src={item} alt="" />;
        })}
      </div>
    </div>
  );
};

export default CircularProcItem;