import React, { Component } from "react";
import Banner from "./Banner";

export default class Jobs extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />

        <div className="section">
          <div className="w-container">
            <div className="w-hidden-main">
              <div className="w-row">
                <div className="w-col w-col-6">
                  <div>
                    <div>
                      <h1 className="smaller-font">Job Type</h1>
                      <div className="small space" />
                      <div>
                        <div className="w-dyn-list">
                          <div className="w-dyn-items">
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/full-time"
                                style={{ backgroundColor: "#5cb85c" }}
                              >
                                Full-Time
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/part-time"
                                style={{ backgroundColor: "#f0ad4e" }}
                              >
                                Part-Time
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/freelance"
                                style={{ backgroundColor: "#5bc0de" }}
                              >
                                Freelance
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/intership"
                                style={{ backgroundColor: "#d9534f" }}
                              >
                                Intership
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="in-pages job-time"
                                href="/job-tags/remote"
                                style={{ backgroundColor: "#8435cc" }}
                              >
                                Remote
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-col w-col-6">
                  <div>
                    <div>
                      <h1 className="smaller-font">Category</h1>
                      <div className="small space" />
                      <div>
                        <div className="w-dyn-list">
                          <div className="w-dyn-items">
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/media"
                              >
                                Media
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/education-training"
                              >
                                Training
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/transportation-logistics"
                              >
                                Transportation
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/construction"
                              >
                                Construction
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/accounting"
                              >
                                Accounting
                              </a>
                            </div>
                            <div className="dynamic-job-item w-dyn-item">
                              <a
                                className="category-title"
                                href="/job-categories/technology"
                              >
                                Technology
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space" />
            </div>
            <div>
              <div>
                <div className="w-row">
                  <div className="w-col w-col-9 w-col-stack">
                    <div className="w-dyn-list">
                      <div className="w-dyn-items">
                        <div className="w-dyn-item">
                          <a
                            className="jobs-wrapper no-line w-clearfix w-inline-block"
                            href="/jobs/paradigm"
                          >
                            <div className="jobs-client">
                              <img src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a88889f66b1be80d2d9ed1_client-6.jpg" />
                              <div
                                className="job-time"
                                style={{ backgroundColor: "#5cb85c" }}
                              >
                                Full-Time
                              </div>
                            </div>
                            <div className="jobs-content">
                              <h4 className="job-title">
                                Carpenters And Electricians Installers
                              </h4>
                              <div className="sub-category-text">
                                Construction
                              </div>
                              <div className="w-clearfix">
                                <div className="meta-tag">
                                  <div>Paradigm</div>
                                </div>
                                <div className="marker meta-tag">
                                  <div>Shanghai, China</div>
                                </div>
                              </div>
                              <div className="small space" />
                              <p>
                                Quisque ut nisi. Donec sodales sagittis magna.
                                Fusce convallis metus id felis luctus
                                adipiscing. In turpis. Praesent porttitor, nulla
                                vitae posuere iaculis, arcu nisl dignissim
                                dolor, a pretium mi sem ut ipsum....
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="w-dyn-item">
                          <a
                            className="jobs-wrapper no-line w-clearfix w-inline-block"
                            href="/jobs/nindzja"
                          >
                            <div className="jobs-client">
                              <img src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a88664c3e841c509ee48e7_client-5.jpg" />
                              <div
                                className="job-time"
                                style={{ backgroundColor: "#8435cc" }}
                              >
                                Remote
                              </div>
                            </div>
                            <div className="jobs-content">
                              <h4 className="job-title">Retail Store Driver</h4>
                              <div className="sub-category-text">
                                Transportation
                              </div>
                              <div className="w-clearfix">
                                <div className="meta-tag">
                                  <div>Nindzja</div>
                                </div>
                                <div className="marker meta-tag">
                                  <div>Bankok, Thailand</div>
                                </div>
                              </div>
                              <div className="small space" />
                              <p>
                                Quisque ut nisi. Donec sodales sagittis magna.
                                Fusce convallis metus id felis luctus
                                adipiscing. In turpis. Praesent porttitor, nulla
                                vitae posuere iaculis, arcu nisl dignissim
                                dolor, a pretium mi sem ut ipsum....
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="w-dyn-item">
                          <a
                            className="jobs-wrapper no-line w-clearfix w-inline-block"
                            href="/jobs/marketing-coordinator"
                          >
                            <div className="jobs-client">
                              <img src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a88554c3e841c509ee47c2_client-4.jpg" />
                              <div
                                className="job-time"
                                style={{ backgroundColor: "#f0ad4e" }}
                              >
                                Part-Time
                              </div>
                            </div>
                            <div className="jobs-content">
                              <h4 className="job-title">
                                Marketing Coordinator
                              </h4>
                              <div className="sub-category-text">Training</div>
                              <div className="w-clearfix">
                                <div className="meta-tag">
                                  <div>Trumpet</div>
                                </div>
                                <div className="marker meta-tag">
                                  <div>Istanbul, Turkey</div>
                                </div>
                              </div>
                              <div className="small space" />
                              <p>
                                Quisque ut nisi. Donec sodales sagittis magna.
                                Fusce convallis metus id felis luctus
                                adipiscing. In turpis. Praesent porttitor, nulla
                                vitae posuere iaculis, arcu nisl dignissim
                                dolor, a pretium mi sem ut ipsum....
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="w-dyn-item">
                          <a
                            className="jobs-wrapper no-line w-clearfix w-inline-block"
                            href="/jobs/ansar"
                          >
                            <div className="jobs-client">
                              <img src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a5f1bcc1305fe20945ea37_client-3.jpg" />
                              <div
                                className="job-time"
                                style={{ backgroundColor: "#d9534f" }}
                              >
                                Intership
                              </div>
                            </div>
                            <div className="jobs-content">
                              <h4 className="job-title">
                                Senior Health And Nutrition Advisor
                              </h4>
                              <div className="sub-category-text">
                                Technology
                              </div>
                              <div className="w-clearfix">
                                <div className="meta-tag">
                                  <div>Ansar</div>
                                </div>
                                <div className="marker meta-tag">
                                  <div>Roma, Italy</div>
                                </div>
                              </div>
                              <div className="small space" />
                              <p>
                                Quisque ut nisi. Donec sodales sagittis magna.
                                Fusce convallis metus id felis luctus
                                adipiscing. In turpis. Praesent porttitor, nulla
                                vitae posuere iaculis, arcu nisl dignissim
                                dolor, a pretium mi sem ut ipsum....
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="w-dyn-item">
                          <a
                            className="jobs-wrapper no-line w-clearfix w-inline-block"
                            href="/jobs/tivimus"
                          >
                            <div className="jobs-client">
                              <img src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a5f058a34e30ad0d5a0dd9_client-2.jpg" />
                              <div
                                className="job-time"
                                style={{ backgroundColor: "#5cb85c" }}
                              >
                                Full-Time
                              </div>
                            </div>
                            <div className="jobs-content">
                              <h4 className="job-title">Template Reviewer</h4>
                              <div className="sub-category-text">Media</div>
                              <div className="w-clearfix">
                                <div className="meta-tag">
                                  <div>Trivimus</div>
                                </div>
                                <div className="marker meta-tag">
                                  <div>San Diego, California</div>
                                </div>
                              </div>
                              <div className="small space" />
                              <p>
                                Quisque ut nisi. Donec sodales sagittis magna.
                                Fusce convallis metus id felis luctus
                                adipiscing. In turpis. Praesent porttitor, nulla
                                vitae posuere iaculis, arcu nisl dignissim
                                dolor, a pretium mi sem ut ipsum....
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="w-dyn-item">
                          <a
                            className="jobs-wrapper no-line w-clearfix w-inline-block"
                            href="/jobs/talkbout"
                          >
                            <div className="jobs-client">
                              <img src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a5eab7c1305fe20945dea3_client-1.jpg" />
                              <div
                                className="job-time"
                                style={{ backgroundColor: "#5bc0de" }}
                              >
                                Freelance
                              </div>
                            </div>
                            <div className="jobs-content">
                              <h4 className="job-title">
                                Clinical Psychologist
                              </h4>
                              <div className="sub-category-text">
                                Accounting
                              </div>
                              <div className="w-clearfix">
                                <div className="meta-tag">
                                  <div>Talkbout</div>
                                </div>
                                <div className="marker meta-tag">
                                  <div>Brooklyn, New York </div>
                                </div>
                              </div>
                              <div className="small space" />
                              <p>
                                Quisque ut nisi. Donec sodales sagittis magna.
                                Fusce convallis metus id felis luctus
                                adipiscing. In turpis. Praesent porttitor, nulla
                                vitae posuere iaculis, arcu nisl dignissim
                                dolor, a pretium mi sem ut ipsum....
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-col w-col-3 w-col-stack w-hidden-medium w-hidden-small w-hidden-tiny">
                    <div className="sidebar">
                      <div>
                        <h1 className="smaller-font">Job Type</h1>
                        <div className="small space" />
                        <div>
                          <div className="w-dyn-list">
                            <div className="w-dyn-items">
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/full-time"
                                  style={{ backgroundColor: "#5cb85c" }}
                                >
                                  Full-Time
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/part-time"
                                  style={{ backgroundColor: "#f0ad4e" }}
                                >
                                  Part-Time
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/freelance"
                                  style={{ backgroundColor: "#5bc0de" }}
                                >
                                  Freelance
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/intership"
                                  style={{ backgroundColor: "#d9534f" }}
                                >
                                  Intership
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="in-pages job-time"
                                  href="/job-tags/remote"
                                  style={{ backgroundColor: "#8435cc" }}
                                >
                                  Remote
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="big space" />
                      <div>
                        <h1 className="smaller-font">Category</h1>
                        <div className="small space" />
                        <div>
                          <div className="w-dyn-list">
                            <div className="w-dyn-items">
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/media"
                                >
                                  Media
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/education-training"
                                >
                                  Training
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/transportation-logistics"
                                >
                                  Transportation
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/construction"
                                >
                                  Construction
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/accounting"
                                >
                                  Accounting
                                </a>
                              </div>
                              <div className="w-dyn-item">
                                <a
                                  className="category-title"
                                  href="/job-categories/technology"
                                >
                                  Technology
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
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
