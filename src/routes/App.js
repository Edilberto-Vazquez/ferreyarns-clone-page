import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
// import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import PositiveImpact from "../pages/PositiveImpact";
import CircularProcess from "../pages/CircularProcess";
import Certifications from "../pages/Certifications";
// import WorkWithUs from "../pages/WorkWithUs";
import SomeQuestions from "../pages/SomeQuestions";
import Contact from "../pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about-us" component={AboutUs} /> */}
          <Route exact path="/products" component={Products} />
          <Route exact path="/certifications" component={Certifications} />
          <Route exact path="/positive-impact" component={PositiveImpact} />
          <Route exact path="/circular-process" component={CircularProcess} />
          {/* <Route exact path="/work-with-us" component={WorkWithUs} /> */}
          <Route exact path="/faqs">
            <SomeQuestions tabSection={{ tab: 0, name: "FAQs" }} />
          </Route>
          <Route exact path="/privacy">
            <SomeQuestions tabSection={{ tab: 1, name: "Privacy Policy" }} />
          </Route>
          <Route exact path="/cookies">
            <SomeQuestions tabSection={{ tab: 2, name: "Cookie Policy" }} />
          </Route>
          <Route exact path="/legal">
            <SomeQuestions tabSection={{ tab: 3, name: "Legal Notice" }} />
          </Route>
          {/* <Route exact path="/projects">
            <SomeQuestions tabSection={{ tab: 4, name: "Projects" }} />
          </Route> */}
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
