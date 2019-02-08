import React, { Component } from "react";
import Banner from "./Banner";
import Row from "./Row";

import withContext from "../../Context/ContextHOC";

class Blog extends Component {
  componentDidMount() {
    this.props.context.clearState("blog", () => {
      this.props.context.getAllBlogs();
    });
    window.addEventListener("scroll", () => {
      this.props.context.handleBlogScroll();
    });
  }

  render() {
    const { posts } = this.props.context.postsObject;
    return (
      <React.Fragment>
        <Banner />
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
      </React.Fragment>
    );
  }
}

export default withContext(Blog);
