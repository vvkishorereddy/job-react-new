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
                <img
                  sizes="173px"
                  src="/assets/img/logo.png"
                  width={173}
                  alt="logo"
                />
              </Link>
              <div className="space" />
              <div>
                <button className="social-icon w-inline-block" />
                <button className="social-icon twitter w-inline-block" />
                <button className="pin social-icon w-inline-block" />
                <button className="rss social-icon w-inline-block" />
                <button className="linkin social-icon w-inline-block" />
              </div>
              <div className="space" />
              <p className="copyright">&copy; {currentYear} Careers Era</p>
            </div>
          </div>
        </div>
        <Contact />
        <div className="apply-wrapper" data-ix="hide-popup-on-initial">
          <div className="popup">
            <div className="popup-content">
              <div className="top-popup">
                <h2 className="apply-title">Apply For This Job</h2>
                <div className="remove-apply" data-ix="close-popup-on-click" />
              </div>
              <div className="bottom-popup">
                <p>
                  To apply for this job &nbsp;
                  <span className="bolder">email your details to</span>
                  &nbsp;
                  <a className="apply-link" href="mailto:">
                    info@jobify.com
                  </a>
                </p>
                <div className="small space" />
                <p>
                  Apply using webmail:&nbsp;
                  <button className="apply-link" href="#">
                    Gmail
                  </button>
                  &nbsp;/&nbsp;
                  <button className="apply-link" href="#">
                    AOL
                  </button>
                  &nbsp;/&nbsp;
                  <button className="apply-link" href="#">
                    Yahoo
                  </button>
                  &nbsp;/&nbsp;
                  <button className="apply-link" href="#">
                    Outlook
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
