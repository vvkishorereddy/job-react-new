import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="w-container">
            <div className="align-center">
              <a
                className="w-inline-block"
                href="http://jobify-template.webflow.io/jobify-template_webflow_default.html#"
              >
                <img
                  sizes="173px"
                  src="http://uploads.webflow.com/57a49d19ae4229de1de36e40/57a4a01b94765a191e41434d_logo.png"
                  srcSet="http://uploads.webflow.com/57a49d19ae4229de1de36e40/57a4a01b94765a191e41434d_logo-p-500x187.png 500w, http://uploads.webflow.com/57a49d19ae4229de1de36e40/57a4a01b94765a191e41434d_logo.png 593w"
                  width={173}
                />
              </a>
              <div className="space" />
              <div>
                <a
                  className="social-icon w-inline-block"
                  href="http://jobify-template.webflow.io/jobify-template_webflow_default.html#"
                />
                <a
                  className="social-icon twitter w-inline-block"
                  href="http://jobify-template.webflow.io/jobify-template_webflow_default.html#"
                />
                <a
                  className="pin social-icon w-inline-block"
                  href="http://jobify-template.webflow.io/jobify-template_webflow_default.html#"
                />
                <a
                  className="rss social-icon w-inline-block"
                  href="http://jobify-template.webflow.io/jobify-template_webflow_default.html#"
                />
                <a
                  className="linkin social-icon w-inline-block"
                  href="http://jobify-template.webflow.io/jobify-template_webflow_default.html#"
                />
              </div>
              <div className="space" />
              <p className="copyright">
                © 2016 JobifyCMS by Deni Bozo /&nbsp;
                <a
                  className="license-link"
                  href="http://jobify-template.webflow.io/licensing.htm"
                >
                  Image License
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-wrapper" data-ix="hide-popup-on-initial">
          <div className="popup">
            <div className="popup-content">
              <div className="top-popup">
                <h2 className="apply-title">Stay In Touch</h2>
                <div
                  className="remove-apply"
                  data-ix="close-contact-popup-on-click"
                />
              </div>
              <div className="bottom-popup contact">
                <div className="w-form">
                  <form
                    data-name="Email Form 2"
                    id="email-form-2"
                    name="email-form-2"
                  >
                    <input
                      className="text-field w-input"
                      data-name="Name"
                      id="name"
                      maxLength={256}
                      name="name"
                      placeholder="Enter your name"
                      type="text"
                    />
                    <input
                      className="text-field w-input"
                      data-name="Email 2"
                      id="email-2"
                      maxLength={256}
                      name="email"
                      placeholder="Enter your email address"
                      required="required"
                      type="email"
                    />
                    <input
                      className="text-field w-input"
                      data-name="Subject"
                      id="Subject"
                      maxLength={256}
                      name="Subject"
                      placeholder="Subject"
                      type="text"
                    />
                    <textarea
                      className="area text-field w-input"
                      data-name="Text Area"
                      id="Text-Area"
                      maxLength={5000}
                      name="Text-Area"
                      placeholder="Type your message"
                      required="required"
                      defaultValue={""}
                    />
                    <input
                      className="button w-button"
                      data-wait="Please wait..."
                      type="submit"
                      defaultValue="Send Message"
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
      </React.Fragment>
    );
  }
}
