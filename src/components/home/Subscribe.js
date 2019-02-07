import React, { Component } from "react";
import withContext from "../../Context/ContextHOC";

class Subscribe extends Component {
  render() {
    const { SubscribeForm } = this.props.context;
    return (
      <div>
        <div className="w-form">
          <form
            onSubmit={e => {
              SubscribeForm(e, this.email.value);
              this.email.value = "";
            }}
            className="subscribe-wrapper w-clearfix"
            name="email-form"
          >
            <input
              className="subscribe-field w-input"
              maxLength={256}
              name="email"
              placeholder="Enter your email address"
              type="email"
              ref={input => (this.email = input)}
            />
            <input
              className="subscribe-button w-button"
              type="submit"
              defaultValue="Subscribe Now"
            />
          </form>
          <div className="success-message w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="error-message w-form-fail">
            <div>Oops! Something went wrong while submitting the form</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(Subscribe);
