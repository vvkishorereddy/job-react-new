import React, { Component } from "react";

export default class PopularCategories extends Component {
  render() {
    return (
      <div className="section">
        <div className="w-container">
          <div className="top-title">
            <h2>Popular Categories</h2>
          </div>
          <div>
            <div className="w-dyn-list">
              <div className="w-dyn-items w-row">
                <div className="w-col w-col-4 w-dyn-item">
                  <a
                    className="categories-wrapper w-inline-block"
                    href="job-categories/media.htm"
                  >
                    <img
                      width={60}
                      src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4acb3e4dd66dc54af54d7_icon-4.png"
                    />
                    <div className="categoris-name">Media</div>
                  </a>
                </div>
                <div className="w-col w-col-4 w-dyn-item">
                  <a
                    className="categories-wrapper w-inline-block"
                    href="job-categories/education-training.htm"
                  >
                    <img
                      width={60}
                      src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4ad11e67057bb1c67747d_icon-5.png"
                    />
                    <div className="categoris-name">Training</div>
                  </a>
                </div>
                <div className="w-col w-col-4 w-dyn-item">
                  <a
                    className="categories-wrapper w-inline-block"
                    href="job-categories/transportation-logistics.htm"
                  >
                    <img
                      width={60}
                      src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4ad78e67057bb1c6774b1_icon-6.png"
                    />
                    <div className="categoris-name">Transportation</div>
                  </a>
                </div>
                <div className="w-col w-col-4 w-dyn-item">
                  <a
                    className="categories-wrapper w-inline-block"
                    href="job-categories/construction.htm"
                  >
                    <img
                      width={60}
                      src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4abc1d0f82cd81c5a4e1f_icon-3.png"
                    />
                    <div className="categoris-name">Construction</div>
                  </a>
                </div>
                <div className="w-col w-col-4 w-dyn-item">
                  <a
                    className="categories-wrapper w-inline-block"
                    href="job-categories/accounting.htm"
                  >
                    <img
                      width={60}
                      src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4ab4a38927c9f54afa6b5_icon-2.png"
                    />
                    <div className="categoris-name">Accounting</div>
                  </a>
                </div>
                <div className="w-col w-col-4 w-dyn-item">
                  <a
                    className="categories-wrapper w-inline-block"
                    href="job-categories/technology.htm"
                  >
                    <img
                      width={60}
                      src="https://daks2k3a4ib2z.cloudfront.net/57a4a82bae4229de1de385d1/57a4a9b8d0f82cd81c5a4ca9_icon-1.png"
                    />
                    <div className="categoris-name">Technology</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="align-center">
              <a
                className="button green w-button"
                href="jobify-template_webflow_default.html#recent"
              >
                View Latest Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
