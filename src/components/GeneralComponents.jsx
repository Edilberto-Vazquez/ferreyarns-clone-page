import React from "react";
import "./styles/GeneralComponents.css";

// change section options

export const SectionMenu = ({
  listItems,
  section,
  setSection,
  fontColor,
  focusType,
}) => {
  let classStyle = "";
  const currentSectionColor = (sectionTab, itemTab, focusType) => {
    if (sectionTab === itemTab) {
      if (focusType === "underline") {
        return classStyle + " section-menu__li-underline";
      } else if (focusType === "color") {
        return classStyle + " section-menu__li-color";
      }
    }
  };
  const listColor = (fontColor) => {
    if (fontColor === "white") {
      return classStyle + " section-menu-font__li-white";
    } else if (fontColor === "black") {
      return classStyle + "section-menu-font__li-black";
    }
  };
  return (
    <ul className="section-menu">
      {listItems.map((item) => (
        <li
          key={item.tab}
          onClick={() => setSection({ ...item })}
          className={`${listColor(fontColor)} ${currentSectionColor(
            section.tab,
            item.tab,
            focusType
          )}`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

// section main content

export const ContainerWithTitle = ({ title, children }) => {
  return (
    <div className="container-with-title">
      {title && <h2 className="container-with-title__title">{title}</h2>}
      {children}
    </div>
  );
};

// paragraph in section

export const MultipleParagraphs = ({ paragraphs, children }) => {
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

export const MultipleList = ({ listType, listItems }) => {
  const listTag = (listItems) => {
    if (listType === "ul") {
      return (
        <ul className="multiple-ul-list">
          {listItems.map((item, index) => (
            <li className="multiple-ul-list__item" key={index}>
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
        <ol className="multiple-ol-list">
          {listItems.map((item, index) => (
            <li className="multiple-ol-list__item" key={index}>
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
