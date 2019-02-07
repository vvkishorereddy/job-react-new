import React, { Component } from "react";
import Subscribe from "./Subscribe";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner" data-ix="show-scroll-navigation-on-scroll">
        <div className="container-center w-container">
          <div className="align-center">
            <h1 className="banner-title">
              Make your dream true with Careers ERA.
            </h1>
            <h3>Build your future with us.</h3>
            <div className="space" />
            <Subscribe />
          </div>
        </div>
      </div>
    );
  }
}
