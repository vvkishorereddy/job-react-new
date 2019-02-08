import React, { Component } from "react";

import Banner from "./Banner";
import Row from "./Row";
import JobType from "./JobType";
import Category from "./Category";
import withContext from "../../Context/ContextHOC";

class Jobs extends Component {
  componentDidMount() {
    this.props.context.clearState("jobs", () => {
      this.props.context.getAllJobs(5, this.props.match);
    });
    window.addEventListener("scroll", () =>
      this.props.context.handleJobScroll(5, this.props.match)
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.context.handleJobScroll);
  }

  render() {
    //console.log(this.props);
    const { jobs } = this.props.context.jobsObject;
    return (
      <React.Fragment>
        <Banner />
        <div className="section">
          <div className="w-container">
            <div className="w-row">
              <div className="w-col w-col-9 w-col-stack">
                <div className="w-dyn-list">
                  <div className="w-dyn-items">
                    {jobs.map(post => {
                      return <Row key={post.id} post={post} />;
                    })}
                  </div>
                </div>
              </div>
              <div className="w-col w-col-3 w-col-stack w-hidden-medium w-hidden-small w-hidden-tiny">
                <div className="sidebar">
                  <JobType />
                  <div className="big space" />
                  <Category />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withContext(Jobs);
