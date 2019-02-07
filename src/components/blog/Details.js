import React, { Component } from "react";
import { Link } from "react-router-dom";

import withContext from "../../Context/ContextHOC";

class blogDetails extends Component {
  componentDidMount() {
    this.props.context.getSingleBlog(this.props.match.params.id);
  }

  render() {
    const { content, title, image, date } = this.props.context.singleBlogData;
    return (
      <React.Fragment>
        <div
          className="blog-inner"
          style={{
            backgroundImage: `url("${image}")`
          }}
        >
          <div
            className="blog-overlay in-page"
            data-ix="show-scroll-navigation-on-scroll"
          >
            <div className="container-center w-container">
              <div className="align-center">
                <h1 className="title-page">{title}</h1>
                <div className="space" />
                <div className="in-page journal-date">{date}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="w-container">
            <div className="w-richtext">{content}</div>
            <div className="big-line-divider" />
            <Link className="button w-button" to="/blog">
              View All News
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withContext(blogDetails);
