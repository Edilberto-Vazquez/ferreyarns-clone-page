import React from "react";
import { Link } from "react-router-dom";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import "./styles/FormSection.css";

export const FormSection = ({ title, children }) => {
  const [refOpc] = useOpacityAnm();
  return (
    <div ref={refOpc} className="form">
      <div className="form-title">
        <h2 className="title-black">{title}</h2>
      </div>
      <div className="form-content border-black">
        {children[0]}
        <form action="" className="form-container">
          {children[1]}
          <div className="form-container-terms-conditions">
            <input type="checkbox" name="accept" id="accept" />
            <span>
              {" "}
              I have read and accept the{" "}
              <Link to="/privacy">Privacy Policy</Link>
            </span>
          </div>
          {children[2]}
        </form>
      </div>
    </div>
  );
};

export const FormSectionDescription = ({ children }) => {
  return (
    <div className="form-container-description" type="div">
      {children}
    </div>
  );
};

export const FormSectionContainer = ({ children, desktopShort }) => {
  return (
    <div
      className={`form-container-inputs ${
        desktopShort ? "form-container-inputs-short" : ""
      }`}
    >
      {children.map((item) => {
        return item;
      })}
    </div>
  );
};

export const FormSectionInputs = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="form-container-inputs__input"
    />
  );
};

export const FormSectionTextArea = ({ name, placeholder }) => {
  return (
    <textarea
      name={name}
      id={name}
      cols="40"
      rows="10"
      placeholder={placeholder}
      className="form-container-inputs__textarea"
    />
  );
};

export const FormSectionButton = ({ btnName }) => {
  return (
    <button type="submit" className="form-container-inputs__button">
      {btnName}
    </button>
  );
};
