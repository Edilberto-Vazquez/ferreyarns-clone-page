import React, { useState } from "react";
import { faqsQuestions } from "../utils/GeneralInformation";
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
  return (
    <div className="faqs some-questions-section-item">
      <SectionItem>
        <SectionPar
          strong="FERRE"
          content="has been proudly producing recycled cotton,
          wool and polyester yarns in Europe since 1947. This has given us an
          extensive expertise in this challenging industry. Our O.E. spinning
          house is based in Banyeres de Mariola, Spain, and it’s GRS and
          Oeko-tex certified."
        />
        <SectionPar
          strong="Ferre"
          content="uses cotton and other recycled fibres in the
          manufacture of its yarns. Due to this nature Ferre yarns may contain
          small imperfections which are characteristics as a result of the
          mechanical recycling process."
        ></SectionPar>
        <SectionPar
          strong="Ferre"
          content="yarns are made from recycled textile waste,
          thus a percentage of other fibres such as polyester, viscose, acrylic,
          wool or nylon may be identified during final composition testing."
        ></SectionPar>
      </SectionItem>
      <div className="faqs-questions">
        {faqsQuestions.map((item, index) => {
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
