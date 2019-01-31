import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Faq from "./components/faq";
import Jobs from "./components/jobs";
import Blog from "./components/blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/faq" component={Faq} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Testimonials />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
