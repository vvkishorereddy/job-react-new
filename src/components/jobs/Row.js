import React from "react";
import { Link } from "react-router-dom";

export default function Row(props) {
  return (
    <div className="w-dyn-item">
      <Link
        to={`/jobs/${props.post.id}`}
        className="jobs-wrapper no-line w-clearfix w-inline-block"
      >
        <div className="jobs-client">
          <img src={props.post.company.logo} />
          <div
            className="job-time"
            style={{ backgroundColor: props.post.bgColor }}
          >
            {props.post.jobType}
          </div>
        </div>
        <div className="jobs-content">
          <h4 className="job-title">{props.post.title}</h4>
          <div className="sub-category-text">{props.post.category}</div>
          <div className="w-clearfix">
            <div className="meta-tag">
              <div>{props.post.company.name}</div>
            </div>
            <div className="marker meta-tag">
              <div>{props.post.location}</div>
            </div>
          </div>
          <div className="small space" />
          <p>{props.post.description}</p>
        </div>
      </Link>
    </div>
  );
}
