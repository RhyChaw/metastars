import React, { useEffect, useState } from "react";
import styles from "./AdminDashboard.module.css"; // Using the same CSS module
import supabase from "../supabaseClient";

const Blogs = () => {
  const [pendingBlogs, setPendingBlogs] = useState([]);
  const [reviewedBlogs, setReviewedBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data: pending, error: pendingError } = await supabase
      .from("blogs")
      .select("id, title, author")
      .eq("status", "Pending for review");

    const { data: reviewed, error: reviewedError } = await supabase
      .from("blogs")
      .select("id, title, author")
      .eq("status", "Reviewed");

    if (pendingError || reviewedError) {
      console.error("Error fetching blogs:", pendingError || reviewedError);
    } else {
      setPendingBlogs(pending);
      setReviewedBlogs(reviewed);
    }
  };

  return (
    <div className={styles.blogContainer}>
      <h2>Pending Blogs</h2>
      {pendingBlogs.length > 0 ? (
        pendingBlogs.map((blog) => (
          <div key={blog.id} className={styles.blogPost}>
            <h3>{blog.title}</h3>
            <p>By {blog.author}</p>
            <a href={`/admin/review/${blog.id}`} className={styles.reviewButton}>
              Click to Review
            </a>
          </div>
        ))
      ) : (
        <p>No pending blogs</p>
      )}

      <h2>Reviewed Blogs</h2>
      {reviewedBlogs.length > 0 ? (
        reviewedBlogs.map((blog) => (
          <div key={blog.id} className={styles.blogPost}>
            <h3>{blog.title}</h3>
            <p>By {blog.author}</p>
          </div>
        ))
      ) : (
        <p>No reviewed blogs</p>
      )}
    </div>
  );
};

export default Blogs;
