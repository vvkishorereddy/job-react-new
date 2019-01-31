import React, { Component } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Carpenters And Electricians Installers",
    category: "Construction",
    tag: "Paradigm",
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
    tag: "Nindzja",
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
    tag: "Trumpet",
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
    tag: "Ansar",
    jobType: "Intership",
    bgColor: "#d9534f",
    companyLogo:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a5f1bcc1305fe20945ea37_client-3.jpg",
    location: "Roma, Italy",
    salary: "$40,000 - $200,000 / year",
    description:
      "Quisque ut nisi. Donec sodales sagittis magna. Fusce convallis metus id felis luctus adipiscing. In turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum...."
  }
];

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
                    <div className="w-dyn-item">
                      <Link
                        to="/jobs/1"
                        className="jobs-wrapper w-inline-block"
                      >
                        <div className="jobs-client">
                          <img src={post.companyLogo} />
                          <div
                            className="job-time"
                            style={{ backgroundColor: "#d9534f" }}
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
                              <div>{post.tag}</div>
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
