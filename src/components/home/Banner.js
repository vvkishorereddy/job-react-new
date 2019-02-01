import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner" data-ix="show-scroll-navigation-on-scroll">
        <div className="container-center w-container">
          <div className="align-center">
            <h1 className="banner-title">Make your dream true with Jobify.</h1>
            <h3>Build your future with us.</h3>
            <div className="space" />

            <div>
              <div className="w-form">
                <form
                  className="subscribe-wrapper w-clearfix"
                  data-name="Email Form"
                  id="email-form"
                  name="email-form"
                >
                  <input
                    className="subscribe-field w-input"
                    data-name="Email"
                    id="email"
                    maxLength={256}
                    name="email"
                    placeholder="Enter your email address"
                    required="required"
                    type="email"
                  />
                  <input
                    className="subscribe-button w-button"
                    data-wait="Please wait..."
                    type="submit"
                    defaultValue="Subscribe Now"
                  />
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
