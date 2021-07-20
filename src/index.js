import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import WorkWithUs from "./pages/WorkWithUs";
import Certifications from "./pages/Certifications";
import CircularProcess from "./pages/CircularProcess";
import SomeQuestions from "./pages/SomeQuestions";
import PositiveImpact from "./pages/PositiveImpact";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <AboutUs /> */}
    {/* <Products /> */}
    {/* <WorkWithUs /> */}
    <PositiveImpact />
    {/* <Certifications /> */}
    {/* <CircularProcess /> */}
    {/* <SomeQuestions /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
