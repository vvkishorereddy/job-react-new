import React from "react";
import { Link } from "react-router-dom";

export default function Row({ post }) {
  return (
    <div className="w-dyn-item">
      <Link
        to={`/jobs/${post.id}`}
        className="jobs-wrapper no-line w-clearfix w-inline-block"
      >
        <div className="jobs-client">
          <img src={post.company.logo} alt={post.title} />
          <div className="job-time" style={{ backgroundColor: post.bgColor }}>
            {post.jobType}
          </div>
        </div>
        <div className="jobs-content">
          <h4 className="job-title">{post.title}</h4>
          <div className="sub-category-text">{post.category}</div>
          <div className="w-clearfix">
            <div className="meta-tag">
              <div>{post.company.name}</div>
            </div>
            <div className="marker meta-tag">
              <div>{post.location}</div>
            </div>
          </div>
          <div className="small space" />
          <p>{post.description}</p>
        </div>
      </Link>
    </div>
  );
}
