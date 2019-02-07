import React, { Component } from "react";
import Model from "./Model";

const AppContext = React.createContext();

const AppConsumer = AppContext.Consumer;

class AppProvider extends Component {
  state = {
    faq: [],
    posts: [],
    jobs: [],
    categories: [],
    singleJob: {},
    singleBlogData: {}
  };

  domainUrl = "http://localhost:3000";

  SubscribeForm = (e, email) => {
    const url = this.domainUrl + "/subscribers";
    e.preventDefault();
    Model.post(url, { email: email }, response => {
      console.log(response);
    });
  };

  setfaqData = () => {
    const url = this.domainUrl + "/faqs";
    Model.get(url, data => {
      this.setState({
        ...this.state,
        faq: data
      });
    });
  };

  setBlogData = () => {
    const url = this.domainUrl + "/blogs";
    Model.get(url, data => {
      this.setState({
        ...this.state,
        posts: data
      });
    });
  };

  setJobsData = () => {
    const url = this.domainUrl + "/jobs";
    Model.get(url, data => {
      this.setState({
        ...this.state,
        jobs: data
      });
    });
  };

  setCategoryData = () => {
    const url = this.domainUrl + "/categories";
    Model.get(url, data => {
      this.setState({
        ...this.state,
        categories: data
      });
    });
  };

  getJobData = id => {
    const url = this.domainUrl + "/jobs/" + id;
    Model.get(url, data => {
      this.setState({
        ...this.state,
        singleJob: data
      });
    });
  };

  getSingleBlogData = id => {
    const url = this.domainUrl + "/blogs/" + id;
    Model.get(url, data => {
      this.setState({
        ...this.state,
        singleBlogData: data
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
          setJobsData: this.setJobsData,
          getJobData: this.getJobData,
          setCategoryData: this.setCategoryData,
          getSingleBlogData: this.getSingleBlogData,
          SubscribeForm: this.SubscribeForm
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppProvider, AppConsumer };
