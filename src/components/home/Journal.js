import React, { Component } from "react";
import withContext from "../../Context/ContextHOC";
import Row from "../blog/Row";

class Journal extends Component {
  componentDidMount() {
    this.props.context.setBlogData();
  }

  render() {
    const { posts } = this.props.context;

    return (
      <div className="light-gray section">
        <div className="w-container">
          <div className="top-title">
            <h2>Latest From Journal</h2>
          </div>
          <div>
            <div className="w-dyn-list">
              <div className="w-dyn-items w-row">
                {posts.map(post => {
                  return <Row post={post} key={post.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(Journal);
