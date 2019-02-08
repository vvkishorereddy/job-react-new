import React, { Component } from "react";
import { Link } from "react-router-dom";
import withContext from "../../Context/ContextHOC.js";
import JobRow from "./JobRow.js";

class LatestJobs extends Component {
  componentDidMount() {
    this.props.context.clearState("jobs", () => {
      this.props.context.getAllJobs(4);
    });
  }

  render() {
    const { jobs } = this.props.context.jobsObject;

    return (
      <div className="section" id="recent">
        <div className="w-container">
          <div className="top-title">
            <h2>Recent Jobs</h2>
          </div>
          <div>
            <div className="w-dyn-list">
              <div className="w-dyn-items">
                {jobs.map(post => {
                  return <JobRow key={post.id} post={post} />;
                })}
              </div>
            </div>
          </div>
          <div className="space" />
          <div className="align-center">
            <Link className="button green w-button" to="/jobs">
              Browse All Jobs
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(LatestJobs);
