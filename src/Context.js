import React, { Component } from "react";

import faqData from "./data/faqdata.json";
import blogData from "./data/blogData.json";
import jobsData from "./data/jobsData.json";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    faq: [],
    posts: [],
    jobs: []
  };

  setfaqData = () => {
    this.setState({
      ...this.state,
      faq: faqData
    });
  };

  setBlogData = () => {
    this.setState({
      ...this.state,
      posts: blogData
    });
  };

  setJobsData = () => {
    this.setState({
      ...this.state,
      jobs: jobsData
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setfaqData: this.setfaqData,
          setBlogData: this.setBlogData,
          setJobsData: this.setJobsData
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppContext, AppProvider, AppConsumer };
