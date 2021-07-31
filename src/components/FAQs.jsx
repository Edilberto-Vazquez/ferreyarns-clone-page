import React, { useContext } from "react";
import { LanguageChanger } from "../utils/LanguageChanger";
import useChangeLanguage from "../utils/hooks/useChangeLanguage";
import English from "../utils/PageContent/Faqs/English.json";
import Spanish from "../utils/PageContent/Faqs/Spanish.json";
import { ContainerWithTitle, MultipleParagraphs } from "./GeneralComponents";
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
  // hook to set the type language
  const { language } = useContext(LanguageChanger);
  const [idiom] = useChangeLanguage(language, English, Spanish);
  const [section1, section2] = idiom;

  return (
    <div
      ref={refOpc}
      className="faqs some-questions__item opacity-animation"
      aria-expanded={false}
    >
      {/* Faqs description section */}
      <ContainerWithTitle>
        <MultipleParagraphs paragraphs={section1.paragraphs} />
      </ContainerWithTitle>
      {/* Faqs questions section*/}
      {section2.questions.map((item, index) => {
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
