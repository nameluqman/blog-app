import React from "react";
import { useParams, Link } from "react-router-dom";

// Same blog data to keep it simple — you can move this to a separate file
const blogs = [
  {
    id: "1",
    title: "Understanding DevOps",
    summary: "Learn the basics of DevOps culture and practices.",
    content:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) aiming to shorten the systems development life cycle and provide continuous delivery...",
  },
  {
    id: "2",
    title: "Introduction to Kubernetes",
    summary: "A beginner's guide to Kubernetes container orchestration.",
    content:
      "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications...",
  },
  {
    id: "3",
    title: "Docker for Beginners",
    summary: "How to get started with Docker containers.",
    content:
      "Docker is a platform designed to help developers build, share, and run applications inside containers. Containers allow you to package an application with all its dependencies...",
  },
  {
    id: "4",
    title: "AWS Cloud Essentials",
    summary: "Overview of AWS core services and cloud computing concepts.",
    content:
      "Amazon Web Services (AWS) is a comprehensive cloud platform offering computing power, storage, and databases on demand, helping businesses scale and grow efficiently...",
  },
];

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Blog not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default BlogDetail;
