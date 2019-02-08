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

  domainUrl = "http://localhost:3001";

  SubscribeForm = (e, email) => {
    const url = this.domainUrl + "/subscribers";
    e.preventDefault();
    Model.post(url, { email: email }, response => {
      return response.json();
    }).then(result => console.log(result));
  };

  getAllFaqs = () => {
    const url = this.domainUrl + "/faqs";
    Model.get(url, data => {
      this.setState({
        ...this.state,
        faq: data
      });
    });
  };

  getAllBlogs = (limit = null) => {
    let url = this.domainUrl + "/blogs";
    if (limit !== null) {
      url += "?_limit=" + limit;
    }
    Model.get(url, data => {
      this.setState({
        ...this.state,
        posts: data
      });
    });
  };

  getAllJobs = (limit = null) => {
    let url = this.domainUrl + "/jobs";
    if (limit !== null) {
      url += "?_limit=" + limit;
    }
    Model.get(url, data => {
      this.setState({
        ...this.state,
        jobs: data
      });
    });
  };

  getAllCategories = () => {
    const url = this.domainUrl + "/categories";
    Model.get(url, data => {
      this.setState({
        ...this.state,
        categories: data
      });
    });
  };

  getSingleJob = id => {
    const url = this.domainUrl + "/jobs/" + id;
    Model.get(url, data => {
      this.setState({
        ...this.state,
        singleJob: data
      });
    });
  };

  getSingleBlog = id => {
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
          getAllFaqs: this.getAllFaqs,
          getAllBlogs: this.getAllBlogs,
          getAllJobs: this.getAllJobs,
          getSingleJob: this.getSingleJob,
          getAllCategories: this.getAllCategories,
          getSingleBlog: this.getSingleBlog,
          SubscribeForm: this.SubscribeForm
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppProvider, AppConsumer };
