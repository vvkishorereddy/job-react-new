import React, { Component } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Media",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4acb3e4dd66dc54af54d7_icon-4.png"
  },
  {
    id: 2,
    title: "Training",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4ad11e67057bb1c67747d_icon-5.png"
  },
  {
    id: 3,
    title: "Transportation",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4ad78e67057bb1c6774b1_icon-6.png"
  },
  {
    id: 4,
    title: "Construction",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4abc1d0f82cd81c5a4e1f_icon-3.png"
  },
  {
    id: 5,
    title: "Accounting",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4ab4a38927c9f54afa6b5_icon-2.png"
  },
  {
    id: 6,
    title: "Technology",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4a9b8d0f82cd81c5a4ca9_icon-1.png"
  }
];

export default class PopularCategories extends Component {
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
      <div className="section">
        <div className="w-container">
          <div className="top-title">
            <h2>Popular Categories</h2>
          </div>
          <div>
            <div className="w-dyn-list">
              <div className="w-dyn-items w-row">
                {this.state.data.map(post => {
                  return (
                    <React.Fragment key={post.id}>
                      <div className="w-col w-col-4 w-dyn-item">
                        <Link
                          to={`/jobs/${post.id}`}
                          className="categories-wrapper w-inline-block"
                        >
                          <img width={60} src={post.image} />
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
