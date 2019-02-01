import React, { Component } from "react";

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

  getJobData = id => {
    fetch("/data/jobsData.json")
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(post => {
          return post.id === parseInt(id);
        });
        const singleResult = filteredData[0];
        this.setState({
          ...this.state,
          singleJob: singleResult
        });
      });
  };

  setCategoryData = () => {
    fetch("/data/category.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          categories: data
        });
      });
  };

  getSingleBlogData = id => {
    fetch("/data/blogData.json")
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(post => {
          return post.id === parseInt(id);
        });
        const singleResult = filteredData[0];
        this.setState({
          ...this.state,
          singleBlogData: singleResult
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
          getSingleBlogData: this.getSingleBlogData
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppProvider, AppConsumer };
