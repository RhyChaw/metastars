import React from 'react';
import styles from './AdminDashboard.module.css'; // Create a CSS module for Blogs styling

const Blogs = ({ blogs }) => {
  return (
    <div className={styles.blogContainer}>
      <h2>Blogs</h2>
      {blogs.map((blog, index) => (
        <div key={index} className={styles.blogPost}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
