import { useState, useEffect } from "react";

const useChangeLanguage = (language, english, spanish) => {
  const [idiom, setIdiom] = useState(english.map((data) => data));
  useEffect(() => {
    if (language === "en") {
      setIdiom(english.map((data) => data));
    } else if (language === "es") {
      setIdiom(spanish.map((data) => data));
    }
    return () => {
      setIdiom([]);
    };
  }, [language, english, spanish]);

  return [idiom];
};

export default useChangeLanguage;
