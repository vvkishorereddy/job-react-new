import React, { Component } from "react";

import faqData from "./data/faqdata.json";
import blogData from "./data/blogData.json";
import jobsData from "./data/jobsData.json";

const { Provider, Consumer } = React.createContext();

class AppProvider extends Component {
  state = {
    faq: [],
    posts: [],
    jobs: []
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      faq: faqData,
      posts: blogData,
      jobs: jobsData
    });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { AppProvider, Consumer };
