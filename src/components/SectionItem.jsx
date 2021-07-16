import React from "react";
import "./styles/SectionItem.css";

export const SectionItem = ({ title, children }) => {
  return (
    <div className="section-description">
      {title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
};

export const SectionItemList = ({ listType, listItems }) => {
  const listTag = (listItems) => {
    if (listType === "ul") {
      return (
        <ul>
          {listItems.map((item) => (
            <li>
              {item.link ? (
                <a href={item.link}>{item.description}</a>
              ) : (
                item.description
              )}
            </li>
          ))}
        </ul>
      );
    } else if (listType === "ol") {
      return (
        <ol>
          {listItems.map((item) => (
            <li>
              {item.link ? (
                <a href={item.link}>{item.description}</a>
              ) : (
                item.description
              )}
            </li>
          ))}
        </ol>
      );
    }
  };
  return listTag(listItems);
};
