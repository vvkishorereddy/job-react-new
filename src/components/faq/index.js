import React, { Component } from "react";
import Banner from "./Banner";
import { AppContext, AppConsumer } from "../../Context";

export default class Faq extends Component {
  componentDidMount() {
    this.context.setfaqData();
  }

  render() {
    return (
      <React.Fragment>
        <Banner />
        <AppConsumer>
          {({ faq }) => {
            return (
              <div className="light-gray section">
                <div className="w-container">
                  <div className="top-title">
                    <h2>Frequently Asked Questions</h2>
                  </div>
                  <div>
                    <div className="w-row">
                      <div className="w-col w-col-12">
                        {faq.map(post => {
                          return (
                            <React.Fragment key={post.id}>
                              <div>
                                <h3 className="faq-title">{post.title}</h3>
                                <p>{post.content}</p>
                              </div>
                              <div className="space" />
                            </React.Fragment>
                          );
                        })}
                      </div>
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

Faq.contextType = AppContext;
