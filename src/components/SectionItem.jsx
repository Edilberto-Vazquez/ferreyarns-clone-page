import React from "react";
import "./styles/SectionItem.css";

// change section options

export const SectionOptions = ({
  listItems,
  section,
  setSection,
  color,
  focusType,
}) => {
  const focusClass = (focusType) => {
    if (focusType === "underline") {
      return "current-section-underline";
    } else if (focusType === "color") {
      return "current-section-color";
    }
  };
  return (
    <aside className="current-section">
      {listItems.map((item) => (
        <li
          key={item}
          onClick={() => setSection(item)}
          className={`${
            color === "secondary" ? "current-section-font-color" : null
          } ${section === item ? focusClass(focusType) : null}`}
        >
          {item}
        </li>
      ))}
    </aside>
  );
};

// section main content

export const SectionItem = ({ title, children }) => {
  return (
    <div className="section-description">
      {title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
};

// list type in section

export const SectionItemList = ({ listType, listItems }) => {
  const listTag = (listItems) => {
    if (listType === "ul") {
      return (
        <ul>
          {listItems.map((item, index) => {
            <li key={index}>
              {item.link ? (
                <a href={item.link}>{item.description}</a>
              ) : (
                item.description
              )}
            </li>;
          })}
        </ul>
      );
    } else if (listType === "ol") {
      return (
        <ol>
          {listItems.map((item, index) => {
            <li key={index}>
              {item.link ? (
                <a href={item.link}>{item.description}</a>
              ) : (
                item.description
              )}
            </li>;
          })}
        </ol>
      );
    }
  };
  return listTag(listItems);
};
