import React, { Component } from "react";
import Banner from "./Banner";
import Row from "./Row";
import { Consumer } from "../../Context";

export default class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Consumer>
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
        </Consumer>
      </React.Fragment>
    );
  }
}
