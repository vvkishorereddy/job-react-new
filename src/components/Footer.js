import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact from "./contact";

export default class Footer extends Component {
  render() {
    let d = new Date();
    let currentYear = d.getFullYear();

    return (
      <React.Fragment>
        <div className="footer">
          <div className="w-container">
            <div className="align-center">
              <Link to="/" className="w-inline-block">
                <img sizes="173px" src="assets/img/logo.png" width={173} />
              </Link>
              <div className="space" />
              <div>
                <a className="social-icon w-inline-block" href="#" />
                <a className="social-icon twitter w-inline-block" href="#" />
                <a className="pin social-icon w-inline-block" href="#" />
                <a className="rss social-icon w-inline-block" href="#" />
                <a className="linkin social-icon w-inline-block" href="#" />
              </div>
              <div className="space" />
              <p className="copyright">&copy; {currentYear} Careers Era</p>
            </div>
          </div>
        </div>
        <Contact />
      </React.Fragment>
    );
  }
}
