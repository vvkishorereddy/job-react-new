import React, { Component } from "react";

export default class Journal extends Component {
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
                <div className="w-col w-col-6 w-dyn-item">
                  <a
                    className="journal-wrapper w-inline-block"
                    style={{
                      backgroundImage:
                        'url("https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a8d4a1e199bb9c46990cc9_blog-4.jpg")'
                    }}
                    href="http://jobify-template.webflow.io/post/entrepreneur-working-on-his-macbook.htm"
                  >
                    <div className="blog-overlay">
                      <div className="blog-content">
                        <h1 className="journal-title">
                          Entrepreneur Working on his MacBook
                        </h1>
                        <p>
                          Pellentesque egestas, neque sit amet convallis
                          pulvinar, usce vulputate eleifend sapien. Cras non
                          dolor [...]
                        </p>
                        <div className="small space" />
                        <div
                          className="button green in-journal"
                          data-ix="display-none-button-on-initial"
                        >
                          Read More
                        </div>
                      </div>
                      <div className="journal-date">August 8, 2016</div>
                    </div>
                  </a>
                </div>
                <div className="w-col w-col-6 w-dyn-item">
                  <a
                    className="journal-wrapper w-inline-block"
                    style={{
                      backgroundImage:
                        'url("https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a8d44a3e4192b946e72d7c_blog-1.jpg")'
                    }}
                    href="http://jobify-template.webflow.io/post/photographer-in-snowy-forest-taking-winter-photos.htm"
                  >
                    <div className="blog-overlay">
                      <div className="blog-content">
                        <h1 className="journal-title">
                          Photographer in Snowy Forest Taking Winter
                        </h1>
                        <p>
                          Pellentesque egestas, neque sit amet convallis
                          pulvinar, usce vulputate eleifend sapien. Cras non
                          dolor [...]
                        </p>
                        <div className="small space" />
                        <div
                          className="button green in-journal"
                          data-ix="display-none-button-on-initial"
                        >
                          Read More
                        </div>
                      </div>
                      <div className="journal-date">August 8, 2016</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
