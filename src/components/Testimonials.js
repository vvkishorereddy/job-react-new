import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="color section">
        <div className="w-container">
          <div className="top-title">
            <h2 className="white-font">
              Some amazing companies we've&nbsp;
              <br />
              had the pleasure to work with.
            </h2>
          </div>
          <div>
            <div
              className="w-tabs"
              data-duration-in={300}
              data-duration-out={100}
            >
              <div className="w-tab-content">
                <div className="w--tab-active w-tab-pane" data-w-tab="Tab 1">
                  <div className="testimonials-wrapper">
                    <p className="testimonials-font">
                      I have already heard back about the internship I applied
                      through Job Finder, that's the fastest job reply I've ever
                      gotten and it's so much better than waiting weeks to hear
                      back.
                    </p>
                  </div>
                </div>
                <div className="w-tab-pane" data-w-tab="Tab 2">
                  <div className="testimonials-wrapper">
                    <p className="testimonials-font">
                      I have already heard back about the internship I applied
                      through Job Finder, that's the fastest job reply I've ever
                      gotten and it's so much better than waiting weeks to hear
                      back.
                    </p>
                  </div>
                </div>
                <div className="w-tab-pane" data-w-tab="Tab 3">
                  <div className="testimonials-wrapper">
                    <p className="testimonials-font">
                      I have already heard back about the internship I applied
                      through Job Finder, that's the fastest job reply I've ever
                      gotten and it's so much better than waiting weeks to hear
                      back.
                    </p>
                  </div>
                </div>
                <div className="w-tab-pane" data-w-tab="Tab 4">
                  <div className="testimonials-wrapper">
                    <p className="testimonials-font">
                      I have already heard back about the internship I applied
                      through Job Finder, that's the fastest job reply I've ever
                      gotten and it's so much better than waiting weeks to hear
                      back.
                    </p>
                  </div>
                </div>
                <div className="w-tab-pane" data-w-tab="Tab 5">
                  <div className="testimonials-wrapper">
                    <p className="testimonials-font">
                      I have already heard back about the internship I applied
                      through Job Finder, that's the fastest job reply I've ever
                      gotten and it's so much better than waiting weeks to hear
                      back.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-menu w-clearfix w-tab-menu">
                <a
                  className="company-logo-wrapper w--current w-inline-block w-tab-link"
                  data-w-tab="Tab 1"
                >
                  <img
                    src="http://uploads.webflow.com/57a49d19ae4229de1de36e40/57a61ed03e4192b946e2f404_client01_w.png"
                    width={190}
                  />
                </a>
                <a
                  className="company-logo-wrapper w-inline-block w-tab-link"
                  data-w-tab="Tab 2"
                >
                  <img
                    src="http://uploads.webflow.com/57a49d19ae4229de1de36e40/57a61eebf66b1be80d2a91d8_client03_w.png"
                    width={190}
                  />
                </a>
                <a
                  className="company-logo-wrapper w-inline-block w-tab-link"
                  data-w-tab="Tab 3"
                >
                  <img
                    src="http://uploads.webflow.com/57a49d19ae4229de1de36e40/57a61ed8e199bb9c46950f63_client06_w.png"
                    width={190}
                  />
                </a>
                <a
                  className="company-logo-wrapper w-inline-block w-tab-link"
                  data-w-tab="Tab 4"
                >
                  <img
                    src="http://uploads.webflow.com/57a49d19ae4229de1de36e40/57a61ee23e4192b946e2f47c_client04_w.png"
                    width={190}
                  />
                </a>
                <a
                  className="company-logo-wrapper w-inline-block w-tab-link"
                  data-w-tab="Tab 5"
                >
                  <img
                    src="http://uploads.webflow.com/57a49d19ae4229de1de36e40/57a61ef5c3e841c509ec1288_client02_w.png"
                    width={190}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
