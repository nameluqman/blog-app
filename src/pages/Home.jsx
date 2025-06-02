import React from "react";
import BlogCard from "../components/BlogCard";

// Sample hardcoded blog data
const blogs = [
  {
    id: "1",
    title: "Understanding DevOps",
    summary: "Learn the basics of DevOps culture and practices.",
    content:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops)...",
  },
  {
    id: "2",
    title: "Introduction to Kubernetes",
    summary: "A beginner's guide to Kubernetes container orchestration.",
    content:
      "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management...",
  },
  {
    id: "3",
    title: "Docker for Beginners",
    summary: "How to get started with Docker containers.",
    content:
      "Docker is a platform designed to help developers build, share, and run applications inside containers...",
  },
  {
    id: "4",
    title: "AWS Cloud Essentials",
    summary: "Overview of AWS core services and cloud computing concepts.",
    content:
      "Amazon Web Services (AWS) is a comprehensive cloud platform offering computing power, storage, and databases...",
  },
];

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Home</h1>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Home;
