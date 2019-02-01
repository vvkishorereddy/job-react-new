import React, { Component } from "react";

export default class Category extends Component {
  render() {
    return (
      <div>
        <h1 className="smaller-font">Category</h1>
        <div className="small space" />
        <div>
          <div className="w-dyn-list">
            <div className="w-dyn-items">
              <div className="w-dyn-item">
                <a className="category-title" href="/job-categories/media">
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
                <a className="category-title" href="/job-categories/accounting">
                  Accounting
                </a>
              </div>
              <div className="w-dyn-item">
                <a className="category-title" href="/job-categories/technology">
                  Technology
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
