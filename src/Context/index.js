import React, { Component } from "react";
import Model from "./Model";

const AppContext = React.createContext();

const AppConsumer = AppContext.Consumer;

class AppProvider extends Component {
  state = {
    faq: [],
    categories: [],
    singleJob: {},
    singleBlogData: {},
    jobsObject: {
      jobs: [],
      page: 1,
      scrolling: false
    },
    postsObject: {
      posts: [],
      page: 1,
      scrolling: false
    }
  };

  domainUrl = "http://localhost:3001";

  clearState = (type, cb) => {
    const currentState = { ...this.state };

    if (type === "jobs") {
      currentState.jobsObject = {
        jobs: [],
        page: 1,
        scrolling: false
      };
    }
    if (type === "blog") {
      currentState.postsObject = {
        posts: [],
        page: 1,
        scrolling: false
      };
    }
    this.setState(currentState, cb);
  };

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

  getAllBlogs = (limit = 4) => {
    const { page, posts } = this.state.postsObject;
    let url = `${this.domainUrl}/blogs?_page=${page}&_limit=${limit}`;

    Model.get(url, data => {
      let postsObject = {
        ...this.state.postsObject,
        posts: [...posts, ...data],
        scrolling: false
      };
      this.setState({
        ...this.state,
        postsObject: postsObject
      });
    });
  };

  blogLoadMore = () => {
    this.setState(prevState => {
      return {
        postsObject: {
          ...prevState.postsObject,
          page: prevState.postsObject.page + 1,
          scrolling: true
        }
      };
    }, this.getAllBlogs);
  };

  handleBlogScroll = () => {
    const { scrolling } = this.state.postsObject;
    if (scrolling) return;
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.body.offsetHeight - 300
    ) {
      this.blogLoadMore();
    }
  };

  getAllJobs = (limit = 5) => {
    const { page, jobs } = this.state.jobsObject;
    let url = `${this.domainUrl}/jobs?_page=${page}&_limit=${limit}`;

    Model.get(url, data => {
      let jobsObject = {
        ...this.state.jobsObject,
        jobs: [...jobs, ...data],
        scrolling: false
      };
      this.setState({
        ...this.state,
        jobsObject: jobsObject
      });
    });
  };

  jobsLoadMore = () => {
    this.setState(prevState => {
      return {
        jobsObject: {
          ...prevState.jobsObject,
          page: prevState.jobsObject.page + 1,
          scrolling: true
        }
      };
    }, this.getAllJobs);
  };

  handleJobScroll = () => {
    const { scrolling } = this.state.jobsObject;
    if (scrolling) return;
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.body.offsetHeight - 300
    ) {
      this.jobsLoadMore();
    }
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
          SubscribeForm: this.SubscribeForm,
          handleJobScroll: this.handleJobScroll,
          handleBlogScroll: this.handleBlogScroll,
          clearState: this.clearState
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppProvider, AppConsumer };
