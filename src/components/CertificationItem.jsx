import React from "react";
import "./styles/CertificationItem.css";

const CertificationItem = ({ title, img, children }) => {
  return (
    <section className="cert-item border-black">
      <img src={img.img} alt={img.alt} />
      <div className="cert-item-description">
        <h2 className="title-black">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default CertificationItem;
