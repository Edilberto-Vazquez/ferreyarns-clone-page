import React from "react";
import "./styles/CertificationItem.css";

const CertificationItem = ({ title, img, children }) => {
  return (
    <section className="cert-item">
      <img src={img} alt="" />
      <div className="cert-item-description">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default CertificationItem;
