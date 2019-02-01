import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Faq from "./components/faq";
import Jobs from "./components/jobs";
import Blog from "./components/blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import blogDetails from "./components/blog/Details";
import jobDetails from "./components/jobs/Details";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/jobs" exact component={Jobs} />
          <Route path="/faq" component={Faq} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" component={blogDetails} />
          <Route path="/jobs/:id" component={jobDetails} />
          <Route path="/categories/:category" component={Jobs} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
