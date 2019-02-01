import React, { Component } from "react";
import { Link } from "react-router-dom";

import data from "../../data/jobsData.json";

export default class LatestJobs extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div className="section" id="recent">
        <div className="w-container">
          <div className="top-title">
            <h2>Recent Jobs</h2>
          </div>
          <div>
            <div className="w-dyn-list">
              <div className="w-dyn-items">
                {this.state.data.map(post => {
                  return (
                    <div className="w-dyn-item" key={post.id}>
                      <Link
                        to={`/jobs/${post.id}`}
                        className="jobs-wrapper w-inline-block"
                      >
                        <div className="jobs-client">
                          <img src={post.company.logo} />
                          <div
                            className="job-time"
                            style={{ backgroundColor: post.bgColor }}
                          >
                            {post.jobType}
                          </div>
                        </div>
                        <div className="jobs-content">
                          <h4 className="job-title">{post.title}</h4>
                          <div className="sub-category-text">
                            {post.category}
                          </div>
                          <div className="w-clearfix">
                            <div className="meta-tag">
                              <div>{post.company.name}</div>
                            </div>
                            <div className="marker meta-tag">
                              <div>{post.location}</div>
                            </div>
                            <div className="meta-tag money">
                              <div>{post.salary}</div>
                            </div>
                          </div>
                          <div className="small space" />
                          <p>{post.description}</p>
                        </div>
                      </Link>
                    </div>
                  );
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
