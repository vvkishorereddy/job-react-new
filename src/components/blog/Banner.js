import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div
        className="third-inner-banner"
        data-ix="show-scroll-navigation-on-scroll"
      >
        <div className="container-center w-container">
          <div className="align-center">
            <h1 className="title-page">The latest news.</h1>
          </div>
        </div>
      </div>
    );
  }
}
