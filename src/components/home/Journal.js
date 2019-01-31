import React, { Component } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: "1",
    title: "Entrepreneur Working on his MacBook",
    date: "August 8, 2016",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a8d4a1e199bb9c46990cc9_blog-4.jpg",
    content:
      "Pellentesque egestas, neque sit amet convallis pulvinar, usce vulputate eleifend sapien. Cras non dolor"
  },
  {
    id: "2",
    title: "Photographer in Snowy Forest Taking Winter",
    date: "August 8, 2016",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a8d44a3e4192b946e72d7c_blog-1.jpg",
    content:
      "Pellentesque egestas, neque sit amet convallis pulvinar, usce vulputate eleifend sapien. Cras non dolor"
  },
  {
    id: "3",
    title: "Photographer in Snowy Forest Taking Winter",
    date: "August 8, 2016",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a8d44a3e4192b946e72d7c_blog-1.jpg",
    content:
      "Pellentesque egestas, neque sit amet convallis pulvinar, usce vulputate eleifend sapien. Cras non dolor"
  },
  {
    id: "4",
    title: "Entrepreneur Working on his MacBook",
    date: "August 8, 2016",
    image:
      "https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a8d4a1e199bb9c46990cc9_blog-4.jpg",
    content:
      "Pellentesque egestas, neque sit amet convallis pulvinar, usce vulputate eleifend sapien. Cras non dolor"
  }
];

export default class Journal extends Component {
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
      <div className="light-gray section">
        <div className="w-container">
          <div className="top-title">
            <h2>Latest From Journal</h2>
          </div>
          <div>
            <div className="w-dyn-list">
              <div className="w-dyn-items w-row">
                {this.state.data.map(post => {
                  return (
                    <React.Fragment key={post.id}>
                      <div className="w-col w-col-6 w-dyn-item">
                        <Link
                          to={`/blog/${post.id}`}
                          className="journal-wrapper w-inline-block"
                          style={{
                            backgroundImage: `url("${post.image}")`
                          }}
                        >
                          <div className="blog-overlay">
                            <div className="blog-content">
                              <h1 className="journal-title">{post.title}</h1>
                              <p>{post.content}</p>
                              <div className="small space" />
                              <div
                                className="button green in-journal"
                                data-ix="display-none-button-on-initial"
                              >
                                Read More
                              </div>
                            </div>
                            <div className="journal-date">{post.date}</div>
                          </div>
                        </Link>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
