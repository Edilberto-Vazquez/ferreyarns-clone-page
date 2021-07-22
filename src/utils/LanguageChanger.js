import { createContext, useState } from "react";

const LanguageChanger = createContext();

const LanguageChangerProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [idiom1, setIdiom] = useState({});
  // set language
  const handleLanguage = (en, es) => {
    if (language === "en") {
      setIdiom(en);
    } else if (language === "es") {
      setIdiom(es);
    }
  };

  return (
    <LanguageChanger.Provider
      value={{ setLanguage, handleLanguage, idiom1, language }}
    >
      {children}
    </LanguageChanger.Provider>
  );
};

export { LanguageChanger, LanguageChangerProvider };
