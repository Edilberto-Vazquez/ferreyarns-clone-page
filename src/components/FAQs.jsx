import React, { useContext, useState } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { faqsEN, faqsES } from "../utils/PageContent/FAQs";
import { SectionItem, SectionPar } from "./SectionItem";
import "./styles/FAQs.css";

const FAQsQuestions = ({ question, answer }) => {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <div className="faqs-question">
      <button onClick={() => setShowQuestion(!showQuestion)}>
        <h5>{question}</h5>
      </button>
      {showQuestion ? <p>{answer}</p> : null}
    </div>
  );
};

export const FAQs = () => {
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = faqsEN;
  } else if (language === "es") {
    idiom = faqsES;
  }
  return (
    <div className="faqs some-questions-section-item">
      <SectionItem>
        <SectionPar paragraphs={idiom.paragraphs} />
      </SectionItem>
      <div className="faqs-questions">
        {idiom.questions.map((item, index) => {
          return (
            <FAQsQuestions
              key={index}
              question={item.question}
              answer={item.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
