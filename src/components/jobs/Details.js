import React, { Component } from "react";
import { Link } from "react-router-dom";

import withContext from "../../Context/ContextHOC";

class jobDetails extends Component {
  componentDidMount() {
    this.props.context.getSingleJob(this.props.match.params.id);
  }

  render() {
    const { singleJob } = this.props.context;

    return (
      <div>
        <div className="sub-banner" data-ix="show-scroll-navigation-on-scroll">
          <div className="container-center w-container">
            <div
              className="client-big-logo"
              style={{
                backgroundImage: `url("${singleJob.company &&
                  singleJob.company.logo}")`
              }}
            />
            <div className="align-center">
              <h1 className="just-title sub-banner-title">
                {singleJob.company && singleJob.company.name}
              </h1>
              <a
                className="website-title"
                href={singleJob.company && singleJob.company.website}
              >
                View Website
              </a>
              <div>
                <div className="category-text">{singleJob.category}</div>
                <div className="category-text">| &nbsp;Posted on:</div>
                <div className="category-text">January 5, 2017</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="w-container">
            <div className="align-center">
              <h2 className="logo-title">{singleJob.title}</h2>
              <div className="small space" />
              <div>
                <div className="meta-tag no-float">
                  <div>{singleJob.company && singleJob.company.name}</div>
                </div>
                <div className="marker meta-tag no-float">
                  <div>{singleJob.location}</div>
                </div>
                <div className="meta-tag money no-float">
                  <div>{singleJob.salary}</div>
                </div>
                <div className="certificate meta-tag no-float">
                  <div>{singleJob.qualification} </div>
                </div>
              </div>
              <div className="big space super-big" />
            </div>
            <div>
              <div className="w-row">
                <div className="w-col w-col-8">
                  <div>
                    <h2 className="smaller-font">Job Details</h2>
                    <div className="small space" />
                    <div className="w-richtext">
                      <p>{singleJob.description}</p>
                      <h5>Duties</h5>
                      <ul>
                        {singleJob.roles &&
                          singleJob.roles.map((role, i) => {
                            return <li key={i}>{role}</li>;
                          })}
                      </ul>
                      <h5>Skills</h5>
                      <ul>
                        {singleJob.skills &&
                          singleJob.skills.map((skill, i) => {
                            return <li key={i}>{skill}</li>;
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="column-space w-col w-col-4">
                  <div>
                    <button
                      className="button full w-button"
                      data-ix="show-popup-on-click"
                    >
                      Apply For Job
                    </button>
                  </div>
                  <div className="big space" />
                  <div>
                    <h2 className="smaller-font">Share This Job</h2>
                    <div className="small space" />
                    <div>
                      <div>
                        <button
                          className="social-icon w-inline-block"
                          href="#"
                        />
                        <button
                          className="social-icon twitter w-inline-block"
                          href="#"
                        />
                        <button
                          className="rss social-icon w-inline-block"
                          href="#"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="big space" />
                  <div>
                    <h2 className="smaller-font">Job Type</h2>
                    <div className="small space" />
                    <div>
                      <div>
                        <div>
                          <div
                            className="different in-pages job-time"
                            style={{ backgroundColor: singleJob.bgColor }}
                          >
                            {singleJob.jobType}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="big space" />
                  <div>
                    <h2 className="smaller-font">Category</h2>
                    <div className="small space" />
                    <div>
                      <div>
                        <a
                          className="category-title"
                          href="/job-categories/construction"
                        >
                          {singleJob.category}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space" />
            <div className="align-center">
              <Link to="/jobs" className="button w-button">
                Browse All Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(jobDetails);
