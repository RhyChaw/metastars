import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Blogs.module.css";

const blogData = [
    {
      path: "financialFree",
      title: "Money makes the world go round",
      author: "Rahul Dhingra",
      description: "How I overcame financial anxiety and gained confidence in money management...",
      category: "Finance",
    },
    {
      path: "burnout",
      title: "From Burnout to Balance",
      author: "Rahul Dhingra",
      description: "A guide to overcoming burnout and finding peace in daily life...",
      category: "Wellness",
    },
    {
      path: "lettingGo",
      title: "The Art of Letting Go",
      author: "Rahul Dhingra",
      description: "Learn how to embrace change and personal growth...",
      category: "Self-Improvement",
    },
  ];
  
const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    
    const filteredBlogs = blogData.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              blog.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className={styles.blogsPageContainer}>
            <div className={styles.smallerContainer}>
                <input
                    type="text"
                    placeholder="Search blog topics..."
                    className={styles.searchBar}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <div className={styles.mainContainer}>
                    <aside className={styles.sidebar}>
                        <h3>Filter by Category</h3>
                        <select
                            className={styles.categorySelect}
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Finance">Finance</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Self-Improvement">Self-Improvement</option>
                        </select>
                    </aside>
                    
                    <div className={styles.blogsContainer}>
                        <h1 className={styles.headingPrimary}>Stories That Inspire Change</h1>
                        <p className={styles.paragraph}>Explore deep insights, real stories, and thought-provoking discussions.</p>
                        
                        {filteredBlogs.length > 0 ? (
                            <div className={styles.blogGrid}>
                                {filteredBlogs.map((blog) => (
                                    <div key={blog.id} className={styles.blogCard}>
                                        <h2 className={styles.blogTitle}>{blog.title}</h2>
                                        <p className={styles.blogAuthor}>By {blog.author}</p>
                                        <p className={styles.blogDescription}>{blog.description}</p>
                                        <Link to={`/${blog.path}`} className={styles.readMoreButton}>Read More</Link>
                                        {/* <Link to="/submit-blog" className={styles.submitBlogButton}>Submit Your Own Blog</Link> */}

                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className={styles.noResults}>No blogs found.</p>
                        )}
                        
                        <div>
                            <Link to="/submit-blog" className={styles.submitBlogButton}>Submit Your Own Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
