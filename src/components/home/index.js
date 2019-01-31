import React, { Component } from "react";
import PopularCategories from "./PopularCategories";
import Content from "./Content";
import LatestJobs from "./LatestJobs";
import Journal from "./Journal";
import Banner from "./Banner";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <PopularCategories />
        <Content />
        <LatestJobs />
        <Journal />
      </React.Fragment>
    );
  }
}
