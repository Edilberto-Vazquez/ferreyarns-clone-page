import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FAQs } from "../components/FAQs";
import "./styles/SomeQuestions.css";
const SomeQuestions = () => {
  return (
    <>
      <Header />
      <main className="some-questions">
        <div className="some-questions-title">
          <h4>Ferre/Projects</h4>
          <h2>Projects</h2>
        </div>
        <div className="some-questions-container">
          <aside className="some-questions-list">
            <ul>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Legal Notice</li>
              <li>FAQs</li>
              <li>Projects</li>
            </ul>
          </aside>
          <section className="some-questions-description">
            <FAQs />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SomeQuestions;
