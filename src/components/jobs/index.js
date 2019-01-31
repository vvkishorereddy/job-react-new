import React, { Component } from "react";
import { Link } from "react-router-dom";

import Banner from "./Banner";

const data = [
  {
    id: 1,
    title: "Carpenters And Electricians Installers",
    category: "Construction",
    companyName: "Paradigm",
    jobType: "Full-Time",
    bgColor: "#5cb85c",
    companyLogo:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a88889f66b1be80d2d9ed1_client-6.jpg",
    location: "Shanghai, China",
    salary: "$40,000 - $200,000 / year",
    description:
      "Quisque ut nisi. Donec sodales sagittis magna. Fusce convallis metus id felis luctus adipiscing. In turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum...."
  },
  {
    id: 2,
    title: "Retail Store Driver",
    category: "Transportation",
    companyName: "Nindzja",
    jobType: "Remote",
    bgColor: "#8435cc",
    companyLogo:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a88664c3e841c509ee48e7_client-5.jpg",
    location: "Bankok, Thailand",
    salary: "$40,000 - $200,000 / year",
    description:
      "Quisque ut nisi. Donec sodales sagittis magna. Fusce convallis metus id felis luctus adipiscing. In turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum...."
  },
  {
    id: 3,
    title: "Marketing Coordinator",
    category: "Training",
    companyName: "Trumpet",
    jobType: "Part-Time",
    bgColor: "#f0ad4e",
    companyLogo:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a88554c3e841c509ee47c2_client-4.jpg",
    location: "Istanbul, Turkey",
    salary: "$40,000 - $200,000 / year",
    description:
      "Quisque ut nisi. Donec sodales sagittis magna. Fusce convallis metus id felis luctus adipiscing. In turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum...."
  },
  {
    id: 4,
    title: "Senior Health And Nutrition Advisor",
    category: "Technology",
    companyName: "Ansar",
    jobType: "Intership",
    bgColor: "#d9534f",
    companyLogo:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a5f1bcc1305fe20945ea37_client-3.jpg",
    location: "Roma, Italy",
    salary: "$40,000 - $200,000 / year",
    description:
      "Quisque ut nisi. Donec sodales sagittis magna. Fusce convallis metus id felis luctus adipiscing. In turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum...."
  },
  {
    id: 5,
    title: "Clinical Psychologist",
    category: "Accounting",
    companyName: "Talkbout",
    jobType: "Freelance",
    bgColor: "rgb(91, 192, 222)",
    companyLogo:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a5eab7c1305fe20945dea3_client-1.jpg",
    location: "Brooklyn, New York ",
    salary: "$40,000 - $200,000 / year",
    description:
      "Quisque ut nisi. Donec sodales sagittis magna. Fusce convallis metus id felis luctus adipiscing. In turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum...."
  }
];

export default class Jobs extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.setState({ data: data });
  }
  render() {
    return (
      <React.Fragment>
        <Banner />

        <div className="section">
          <div className="w-container">
            <div className="w-hidden-main">
              <div className="w-row">
                <div className="w-col w-col-6">
                  <div>
                    <div>
                      <h1 className="smaller-font">Job Type</h1>
                      <div className="small space" />
                      <div>
                        <div className="w-dyn-list">
                          <div className="w-dyn-items">
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/full-time"
                                style={{ backgroundColor: "#5cb85c" }}
                              >
                                Full-Time
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/part-time"
                                style={{ backgroundColor: "#f0ad4e" }}
                              >
                                Part-Time
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/freelance"
                                style={{ backgroundColor: "#5bc0de" }}
                              >
                                Freelance
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/intership"
                                style={{ backgroundColor: "#d9534f" }}
                              >
                                Intership
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/remote"
                                style={{ backgroundColor: "#8435cc" }}
                              >
                                Remote
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-col w-col-6">
                  <div>
                    <div>
                      <h1 className="smaller-font">Category</h1>
                      <div className="small space" />
                      <div>
                        <div className="w-dyn-list">
                          <div className="w-dyn-items">
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/media"
                              >
                                Media
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/education-training"
                              >
                                Training
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/transportation-logistics"
                              >
                                Transportation
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/construction"
                              >
                                Construction
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/accounting"
                              >
                                Accounting
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/technology"
                              >
                                Technology
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space" />
            </div>

            <div>
              <div>
                <div className="w-row">
                  <div className="w-col w-col-9 w-col-stack">
                    <div className="w-dyn-list">
                      <div className="w-dyn-items">
                        {this.state.data.map(post => {
                          return (
                            <div className="w-dyn-item">
                              <Link
                                to="/jobs/paradigm"
                                className="jobs-wrapper no-line w-clearfix w-inline-block"
                              >
                                <div className="jobs-client">
                                  <img src={post.companyLogo} />
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
                                      <div>{post.companyName}</div>
                                    </div>
                                    <div className="marker meta-tag">
                                      <div>{post.location}</div>
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
                  <div className="w-col w-col-3 w-col-stack w-hidden-medium w-hidden-small w-hidden-tiny">
                    <div className="sidebar">
                      <div>
                        <h1 className="smaller-font">Job Type</h1>
                        <div className="small space" />
                        <div>
                          <div className="w-dyn-list">
                            <div className="w-dyn-items">
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/full-time"
                                  style={{ backgroundColor: "#5cb85c" }}
                                >
                                  Full-Time
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/part-time"
                                  style={{ backgroundColor: "#f0ad4e" }}
                                >
                                  Part-Time
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/freelance"
                                  style={{ backgroundColor: "#5bc0de" }}
                                >
                                  Freelance
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/intership"
                                  style={{ backgroundColor: "#d9534f" }}
                                >
                                  Intership
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/remote"
                                  style={{ backgroundColor: "#8435cc" }}
                                >
                                  Remote
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="big space" />
                      <div>
                        <h1 className="smaller-font">Category</h1>
                        <div className="small space" />
                        <div>
                          <div className="w-dyn-list">
                            <div className="w-dyn-items">
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/media"
                                >
                                  Media
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/education-training"
                                >
                                  Training
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/transportation-logistics"
                                >
                                  Transportation
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/construction"
                                >
                                  Construction
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/accounting"
                                >
                                  Accounting
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/technology"
                                >
                                  Technology
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
