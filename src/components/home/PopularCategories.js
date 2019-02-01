import React, { Component } from "react";
import { Link } from "react-router-dom";
import withContext from "../../Context/ContextHOC";

class PopularCategories extends Component {
  componentDidMount() {
    this.props.context.setCategoryData();
  }

  render() {
    const { categories } = this.props.context;
    return (
      <div className="section">
        <div className="w-container">
          <div className="top-title">
            <h2>Popular Categories</h2>
          </div>
          <div>
            <div className="w-dyn-list">
              <div className="w-dyn-items w-row">
                {categories.map(post => {
                  return (
                    <React.Fragment key={post.id}>
                      <div className="w-col w-col-4 w-dyn-item">
                        <Link
                          to={`/categories/${post.title}`}
                          className="categories-wrapper w-inline-block"
                        >
                          <img width={60} src={post.image} alt={post.title} />
                          <div className="categoris-name">{post.title}</div>
                        </Link>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className="align-center">
              <a className="button green w-button" href="#recent">
                View Latest Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(PopularCategories);
