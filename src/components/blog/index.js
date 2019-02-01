import React, { Component } from "react";
import Banner from "./Banner";
import Row from "./Row";
import { AppContext, AppConsumer } from "../../Context";

export default class Blog extends Component {
  componentDidMount() {
    this.context.setBlogData();
  }

  render() {
    return (
      <React.Fragment>
        <Banner />
        <AppConsumer>
          {({ posts }) => {
            return (
              <div className="section">
                <div className="w-container">
                  <div className="w-dyn-list">
                    <div className="w-dyn-items w-row">
                      {posts.map(post => (
                        <Row post={post} key={post.id} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </AppConsumer>
      </React.Fragment>
    );
  }
}

Blog.contextType = AppContext;
