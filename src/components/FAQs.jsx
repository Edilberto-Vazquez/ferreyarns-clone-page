import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import { faqsEN, faqsES } from "../utils/PageContent/FAQs";
import { ContainerWithTitle, MultipleParagraphs } from "./SectionItem";
import useOpacityAnm from "../utils/animations/useOpacityAnm";
import useDisplayAnm from "../utils/animations/useDisplayAnm";
import "./styles/FAQs.css";

// component to display the question
const FAQsQuestions = ({ question, answer }) => {
  // animation to display the answer of the questions
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

// main component of the section Faqs
export const FAQs = () => {
  // hook to get the animation
  const [refOpc] = useOpacityAnm();
  // hook to get the type language
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
      {/* Faqs description section */}
      <ContainerWithTitle>
        <MultipleParagraphs paragraphs={idiom.paragraphs} />
      </ContainerWithTitle>
      {/* Faqs questions section*/}
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
