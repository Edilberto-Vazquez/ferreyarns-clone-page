import React from "react";
import "./styles/SectionItem.css";

// change section options

export const SectionOptions = ({
  listItems,
  section,
  setSection,
  fontColor,
  focusType,
}) => {
  let classStyle = "";
  const focusClass = (sectionTab, itemTab, focusType) => {
    if (sectionTab === itemTab) {
      if (focusType === "underline") {
        return classStyle + " current-section-underline";
      } else if (focusType === "color") {
        return classStyle + " current-section-color";
      }
    }
  };
  const listColor = (fontColor) => {
    if (fontColor === "white") {
      return classStyle + " current-section-font-white";
    } else if (fontColor === "black") {
      return classStyle + "current-section-font-black";
    }
  };
  return (
    <aside className="current-section">
      {listItems.map((item) => (
        <li
          key={item.tab}
          onClick={() => setSection({ ...item })}
          className={`${listColor(fontColor)} ${focusClass(
            section.tab,
            item.tab,
            focusType
          )}`}
        >
          {item.name}
        </li>
      ))}
    </aside>
  );
};

// section main content

export const SectionItem = ({ title, children }) => {
  return (
    <div className="section-description">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

// paragraph in section

export const SectionPar = ({ paragraphs, children }) => {
  return (
    <>
      {paragraphs.map((item, index) => (
        <p key={index}>
          {/* {item.strong ? <strong>{item.strong}</strong> : null} */}
          {item} {children}
        </p>
      ))}
    </>
  );
};

// list type in section

export const SectionList = ({ listType, listItems }) => {
  const listTag = (listItems) => {
    if (listType === "ul") {
      return (
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
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
          {listItems.map((item, index) => (
            <li key={index}>
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
