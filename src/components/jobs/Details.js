import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AppConsumer } from "../../Context.js";

export default class jobDetails extends Component {
  filterData = (arr, id) => {
    const results = arr.filter(post => {
      return post.id === parseInt(id);
    });
    return results[0];
  };

  render() {
    return (
      <AppConsumer>
        {({ jobs }) => {
          const filteredData = this.filterData(
            jobs,
            this.props.match.params.id
          );

          const {
            id,
            title,
            category,
            location,
            salary,
            jobType,
            description,
            bgColor,
            qualification,
            roles,
            skills,
            company
          } = filteredData;

          return (
            <div>
              <div
                className="sub-banner"
                data-ix="show-scroll-navigation-on-scroll"
              >
                <div className="container-center w-container">
                  <div
                    className="client-big-logo"
                    style={{
                      backgroundImage: `url("${company && company.logo}")`
                    }}
                  />
                  <div className="align-center">
                    <h1 className="just-title sub-banner-title">
                      {company && company.name}
                    </h1>
                    <a
                      className="website-title"
                      href={company && company.website}
                    >
                      View Website
                    </a>
                    <div>
                      <div className="category-text">{category}</div>
                      <div className="category-text">| &nbsp;Posted on:</div>
                      <div className="category-text">January 5, 2017</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="w-container">
                  <div className="align-center">
                    <h2 className="logo-title">{title}</h2>
                    <div className="small space" />
                    <div>
                      <div className="meta-tag no-float">
                        <div>{company && company.name}</div>
                      </div>
                      <div className="marker meta-tag no-float">
                        <div>{location}</div>
                      </div>
                      <div className="meta-tag money no-float">
                        <div>{salary}</div>
                      </div>
                      <div className="certificate meta-tag no-float">
                        <div>{qualification} </div>
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
                            <p>{description}</p>
                            <h5>Duties</h5>
                            <ul>
                              {roles &&
                                roles.map((role, i) => {
                                  return <li key={i}>{role}</li>;
                                })}
                            </ul>
                            <h5>Skills</h5>
                            <ul>
                              {skills &&
                                skills.map((skill, i) => {
                                  return <li key={i}>{skill}</li>;
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="column-space w-col w-col-4">
                        <div>
                          <a
                            className="button full w-button"
                            data-ix="show-popup-on-click"
                            href="#"
                          >
                            Apply For Job
                          </a>
                        </div>
                        <div className="big space" />
                        <div>
                          <h2 className="smaller-font">Share This Job</h2>
                          <div className="small space" />
                          <div>
                            <div>
                              <a
                                className="social-icon w-inline-block"
                                href="#"
                              />
                              <a
                                className="social-icon twitter w-inline-block"
                                href="#"
                              />
                              <a
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
                                  style={{ backgroundColor: bgColor }}
                                >
                                  {jobType}
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
                                {category}
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
        }}
      </AppConsumer>
    );
  }
}
