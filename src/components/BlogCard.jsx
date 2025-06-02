import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <h2>{blog.title}</h2>
      <p>{blog.summary}</p>
      <Link to={`/blog/${blog.id}`}>Read More</Link>
    </div>
  );
}

export default BlogCard;
