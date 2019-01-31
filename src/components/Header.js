import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div
          className="navigation w-nav"
          data-animation="default"
          data-collapse="medium"
          data-contain={1}
          data-duration={400}
        >
          <NavLink className="brand-logo w-nav-brand" to="/">
            <img sizes="124px" src="assets/img/logo.png" width={124} />
          </NavLink>

          <div className="social-wrapper w-hidden-medium w-hidden-small w-hidden-tiny">
            <a className="social-icon w-inline-block" href="/" />
            <a className="social-icon twitter w-inline-block" href="/" />
            <a className="pin social-icon w-inline-block" href="/" />
          </div>
          <div className="w-container">
            <nav className="nav-menu w-nav-menu" role="navigation">
              <NavLink
                to="/"
                className="mobile navigation-link w-inline-block"
                data-ix="show-line-menu-on-hover"
              >
                <div>Home</div>
                <div
                  className="line-menu on-mobile"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
              <NavLink
                to="/jobs"
                className="mobile navigation-link w-inline-block"
                data-ix="show-line-menu-on-hover"
              >
                <div>Find a Job</div>
                <div
                  className="line-menu on-mobile"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
              <NavLink
                to="/blog"
                className="mobile navigation-link w-inline-block"
                data-ix="show-line-menu-on-hover"
              >
                <div>Journal</div>
                <div
                  className="line-menu on-mobile"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
              <NavLink
                to="/faq"
                className="mobile navigation-link w-inline-block"
                data-ix="show-line-menu-on-hover"
              >
                <div>F.A.Q Page</div>
                <div
                  className="line-menu on-mobile"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
              <NavLink
                to="/contact"
                className="mobile navigation-link w-inline-block"
                data-ix="show-contact-wrapper-on-click"
              >
                <div>Contact</div>
                <div
                  className="line-menu on-mobile"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="w-icon-nav-menu" />
            </div>
          </div>
        </div>
        <div
          className="scroll-navigation w-hidden-medium w-hidden-small w-hidden-tiny w-nav"
          data-animation="default"
          data-collapse="medium"
          data-contain={1}
          data-duration={400}
          data-ix="scroll-navigation-hide-on-initial"
        >
          <div className="w-container">
            <NavLink to="/" className="brand-logo scroll w-nav-brand">
              <img sizes="100vw" src="img/logo.png" width={101} />
            </NavLink>

            <nav className="nav-menu scroll-menu w-nav-menu" role="navigation">
              <NavLink
                to="/"
                className="navigation-link scroll-nav w-inline-block"
                data-ix="show-line-menu-on-hover"
              >
                <div>Home</div>
                <div
                  className="line-menu white-line"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
              <NavLink
                className="navigation-link scroll-nav w-inline-block"
                data-ix="show-line-menu-on-hover"
                to="/jobs"
              >
                <div>Find a Job</div>
                <div
                  className="line-menu white-line"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
              <NavLink
                className="navigation-link scroll-nav w-inline-block"
                data-ix="show-line-menu-on-hover"
                to="/blog"
              >
                <div>Journal</div>
                <div
                  className="line-menu white-line"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
              <NavLink
                className="navigation-link scroll-nav w-inline-block"
                data-ix="show-line-menu-on-hover"
                to="/faq"
              >
                <div>F.A.Q Page</div>
                <div
                  className="line-menu white-line"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
              <NavLink
                className="navigation-link scroll-nav w-inline-block"
                data-ix="show-contact-wrapper-on-click"
                to="/contact"
              >
                {" "}
                <div>Contact</div>
                <div
                  className="line-menu white-line"
                  data-ix="menu-line-initial-appearance"
                />
              </NavLink>
            </nav>
            <div className="w-nav-button">
              <div className="w-icon-nav-menu" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
