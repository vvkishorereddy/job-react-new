import React, { Component } from "react";
import "./App.css";

import Home from "./components/home";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Jobs from "./components/jobs";
import Blog from "./components/blog";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
        <Contact />
        <Jobs />
        <Faq />
        <Blog />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
