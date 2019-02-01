import React, { Component } from "react";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    faq: [],
    posts: [],
    jobs: []
  };

  setfaqData = () => {
    fetch("/data/faqdata.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          faq: data
        });
      });
  };

  setBlogData = () => {
    fetch("/data/blogData.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          posts: data
        });
      });
  };

  setJobsData = () => {
    fetch("/data/jobsData.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          jobs: data
        });
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
