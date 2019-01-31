import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <div className="gray section">
        <div className="w-container">
          <div className="w-row">
            <div className="w-col w-col-5 w-col-stack">
              <div>
                <h1 className="big-title">
                  Start building your own career with us now.
                </h1>
                <div>
                  <p>
                    Aenean viverra rhoncus pede. Nunc egestas, augue at
                    pellentesque laoreet, felis eros vehicula leo, at malesuada
                    velit leo quis pede. Praesent porttitor, nulla vitae posuere
                    iaculis, arcu nisl dignissim dolor, a pretium mi sem ut
                    ipsum. Pellentesque posuere.
                    <br />
                    <br />
                    Quisque ut nisi. Sed aliquam ultrices mauris. Phasellus
                    ullamcorper ipsum rutrum nunc. Sed mollis, eros et ultrices
                    tempus, mauris ipsum aliquam libero, non adipiscing dolor
                    urna a orci.
                  </p>
                </div>
                <div className="space" />
                <a
                  className="button w-button"
                  href="jobify-template_webflow_default.html#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-col w-col-7 w-col-stack" />
          </div>
        </div>
      </div>
    );
  }
}
