import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
