import React from "react";
import { Link } from "react-router-dom";

export default function Row({ post }) {
  return (
    <div>
      <div className="w-col w-col-6 w-dyn-item">
        <Link
          to={`/blog/${post.id}`}
          className="journal-wrapper w-inline-block"
          style={{
            backgroundImage: `url("${post.image}")`
          }}
        >
          <div className="blog-overlay">
            <div className="blog-content">
              <h1 className="journal-title">{post.title}</h1>
              <p>{post.content}</p>
              <div className="small space" />
              <div
                className="button green in-journal"
                data-ix="display-none-button-on-initial"
              >
                Read More
              </div>
            </div>
            <div className="journal-date">{post.date}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
