import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import PositiveImpact from "../pages/PositiveImpact";
import CircularProcess from "../pages/CircularProcess";
import Certifications from "../pages/Certifications";
import WorkWithUs from "../pages/WorkWithUs";
import SomeQuestions from "../pages/SomeQuestions";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/positive-impact" component={PositiveImpact} />
        <Route exact path="/circular-process" component={CircularProcess} />
        <Route exact path="/certifications" component={Certifications} />
        <Route exact path="/work-with-us" component={WorkWithUs} />
        <Route exact path="/faqs" component={SomeQuestions} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
