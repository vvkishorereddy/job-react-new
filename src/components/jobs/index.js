import React, { Component } from "react";

import Banner from "./Banner";
import Row from "./Row";
import JobType from "./JobType";
import Category from "./Category";
import { AppContext, AppConsumer } from "../../Context";

export default class Jobs extends Component {
  componentDidMount() {
    this.context.getAllJobs();
  }

  render() {
    return (
      <React.Fragment>
        <Banner />
        <div className="section">
          <div className="w-container">
            <div className="w-row">
              <div className="w-col w-col-9 w-col-stack">
                <div className="w-dyn-list">
                  <div className="w-dyn-items">
                    <AppConsumer>
                      {({ jobs }) => {
                        return jobs.map(post => {
                          return <Row key={post.id} post={post} />;
                        });
                      }}
                    </AppConsumer>
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

Jobs.contextType = AppContext;
