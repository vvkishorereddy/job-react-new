import React, { Component } from "react";
import PopularCategories from "./PopularCategories";
import Content from "./Content";
import LatestJobs from "./LatestJobs";
import Banner from "./Banner";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <PopularCategories />
        <Content />
        <LatestJobs />
      </React.Fragment>
    );
  }
}
