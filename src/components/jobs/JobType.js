import React, { Component } from "react";

export default class JobType extends Component {
  render() {
    return (
      <div>
        <h1 className="smaller-font">Job Type</h1>
        <div className="small space" />
        <div>
          <div className="w-dyn-list">
            <div className="w-dyn-items">
              <div className="w-dyn-item">
                <a
                  className="in-pages job-time"
                  href="/job-types/Full-Time"
                  style={{ backgroundColor: "#5cb85c" }}
                >
                  Full-Time
                </a>
              </div>
              <div className="w-dyn-item">
                <a
                  className="in-pages job-time"
                  href="/job-types/part-time"
                  style={{ backgroundColor: "#f0ad4e" }}
                >
                  Part-Time
                </a>
              </div>
              <div className="w-dyn-item">
                <a
                  className="in-pages job-time"
                  href="/job-types/freelance"
                  style={{ backgroundColor: "#5bc0de" }}
                >
                  Freelance
                </a>
              </div>
              <div className="w-dyn-item">
                <a
                  className="in-pages job-time"
                  href="/job-types/intership"
                  style={{ backgroundColor: "#d9534f" }}
                >
                  Intership
                </a>
              </div>
              <div className="w-dyn-item">
                <a
                  className="in-pages job-time"
                  href="/job-types/remote"
                  style={{ backgroundColor: "#8435cc" }}
                >
                  Remote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
