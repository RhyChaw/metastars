import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";

const blogData = [
    { id: 1, title: "Breaking Free from Financial Anxiety", author: "Jane Doe", description: "How I overcame financial anxiety and gained confidence in money management...", category: "Finance" },
    { id: 2, title: "From Burnout to Balance", author: "John Smith", description: "A guide to overcoming burnout and finding peace in daily life...", category: "Wellness" },
    { id: 3, title: "The Art of Letting Go", author: "Emily Johnson", description: "Learn how to embrace change and personal growth...", category: "Self-Improvement" },
    { id: 4, title: "Mindfulness in Action", author: "Michael Lee", description: "Simple daily practices to transform your life with mindfulness...", category: "Mindfulness" },
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
                            <option value="Mindfulness">Mindfulness</option>
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
                                        <Link to={`/blog/${blog.id}`} className={styles.readMoreButton}>Read More</Link>
                                        {/* <Link to="/submit-blog" className={styles.submitBlogButton}>Submit Your Own Blog</Link> */}

                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className={styles.noResults}>No blogs found.</p>
                        )}
                        
                        <div className={styles.submitBlogSection}>
                            <Link to="/submit-blog" className={styles.submitBlogButton}>Submit Your Own Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
