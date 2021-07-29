import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { faqsEN, faqsES } from "../utils/PageContent/FAQs";
import { SectionItem, SectionPar } from "./SectionItem";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import useDisplayAnm from "../utils/animations/useDisplayAnm";
import "./styles/FAQs.css";

const FAQsQuestions = ({ question, answer }) => {
  const [refDisplay, refButton, show, setShow] = useDisplayAnm("black");
  return (
    <div className="faqs-question">
      <button
        className="faqs-question__item-button"
        ref={refButton}
        aria-expanded={!show}
        onClick={() => setShow(!show)}
      >
        {question}
      </button>
      <p
        className="faqs-question__item-content"
        ref={refDisplay}
        aria-expanded={!show}
      >
        {answer}
      </p>
    </div>
  );
};

export const FAQs = () => {
  const [refOpc] = useOpacityAnm();
  const { language } = useContext(LanguageChanger);
  let idiom = {};

  // set language
  if (language === "en") {
    idiom = faqsEN;
  } else if (language === "es") {
    idiom = faqsES;
  }

  return (
    <div ref={refOpc} className="faqs some-questions__item">
      <SectionItem>
        <SectionPar paragraphs={idiom.paragraphs} />
      </SectionItem>
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
  );
};

export default FAQs;
