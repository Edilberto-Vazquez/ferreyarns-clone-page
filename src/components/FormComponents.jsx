import React from "react";
import { Link } from "react-router-dom";
import useOpacityAnmOnScroll from "../utils/animations/useOpacityAnmOnScroll";
import "./styles/FormComponents.css";

export const FormSection = ({ title, children, privacy }) => {
  const [refOpc] = useOpacityAnmOnScroll();
  return (
    <div
      ref={refOpc}
      className="form-section scrolling-animation-opacity"
      aria-expanded={false}
    >
      <div className="form-section__title">
        <h2 className="title-black">{title}</h2>
      </div>
      <div className="form-section__content border-black">
        {children[0]}
        <form action="" className="form-section__container">
          {children[1]}
          <div className="form-section__terms-conditions">
            <input type="checkbox" name="accept" id="accept" />
            <label htmlFor="accept">
              {" "}
              {privacy.paragraph}{" "}
              <Link to={privacy.link.link}>{privacy.link.name}</Link>
            </label>
          </div>
          {children[2]}
        </form>
      </div>
    </div>
  );
};

export const FormDescription = ({ children }) => {
  return (
    <div className="form-description" type="div">
      {children}
    </div>
  );
};

export const FormInputsContainer = ({ children, desktopShort }) => {
  return (
    <div
      className={`form-inputs-container ${
        desktopShort && "form-inputs-container-short"
      }`}
    >
      {children.map((item) => {
        return item;
      })}
    </div>
  );
};

export const FormInputs = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="form-inputs-container__input"
    />
  );
};

export const FormTextArea = ({ name, placeholder }) => {
  return (
    <textarea
      name={name}
      id={name}
      cols="40"
      rows="10"
      placeholder={placeholder}
      className="form-inputs-container__textarea"
    />
  );
};

export const FormButton = ({ btnName }) => {
  return (
    <button type="submit" className="form-inputs-container__button">
      {btnName}
    </button>
  );
};
