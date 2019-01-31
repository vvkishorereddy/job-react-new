import React, { Component } from "react";
import Banner from "./Banner";

export default class Faq extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <div className="light-gray section">
          <div className="w-container">
            <div className="top-title">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div>
              <div className="w-row">
                <div className="w-col w-col-6">
                  <div>
                    <div>
                      <h3 className="faq-title">Aenean viverra rhoncus?</h3>
                      <p>
                        Dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi
                        quis viverra ornare, eros dolor interdum nulla, ut
                        commodo diam libero vitae erat. Aenean faucibus nibh et
                        justo cursus id rutrum lorem imperdiet.
                      </p>
                    </div>
                    <div className="space" />
                    <div>
                      <h3 className="faq-title">
                        Pellentesque habitant morbi tristique?
                      </h3>
                      <p>
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                      </p>
                    </div>
                    <div className="space" />
                    <div>
                      <h3 className="faq-title">Phasellus gravida semper?</h3>
                      <p>
                        Consectetur adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi quis viverra
                        orna interdum nulla.Aenean faucibus nibh et justo cursus
                        id rutrum lorem imperdiet. Nunc ut sem vitae risus
                        tristique posuere.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-col w-col-6">
                  <div>
                    <div>
                      <div>
                        <h3 className="faq-title">
                          Pellentesque dapibus hendrerit tortor?
                        </h3>
                        <p>
                          Ut leo. Vestibulum ante ipsum primis in faucibus orci
                          luctus et ultrices posuere cubilia Curae; Sed aliquam,
                          nisi quis porttitor congue, elit erat euismod orci, ac
                          placerat dolor lectus quis orci. Praesent nonummy mi
                          in odio. Nam quam nunc, blandit vel, luctus pulvinar,
                          hendrerit id, lorem.
                        </p>
                      </div>
                      <div className="space" />
                      <div>
                        <h3 className="faq-title">
                          Aenean commodo ligula eget dolor?
                        </h3>
                        <p>
                          Sit amet, consectetur adipiscing elit. Suspendisse
                          varius enim in eros elementum tristique. Duis cursus,
                          mi quis viverra ornare, eros dolor interdum nulla.
                        </p>
                      </div>
                      <div className="space" />
                      <div>
                        <h3 className="faq-title">
                          Vestibulum purus quam scelerisque?
                        </h3>
                        <p>
                          Suspendisse varius enim in eros elementum tristique.
                          Duis cursus, mi quis viverra ornare, eros dolor
                          interdum nulla.
                        </p>
                      </div>
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
