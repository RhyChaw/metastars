import React, { useState } from "react";
import styles from "./SubmitBlog.module.css";
import supabase from "../supabaseClient";

const SubmitBlog = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        job: "",
        content: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { data, error } = await supabase
            .from("blogs")
            .insert([{ ...formData, status: "Pending for review" }]);

        if (error) {
            alert("Error submitting blog: " + error.message);
        } else {
            alert("Blog submitted for review!");
            setFormData({ title: "", author: "", job: "", content: "" });
        }
    };

    return (
        <div className={styles.submitBlogContainer}>
            <h1 className={styles.headingPrimary}>Submit Your Blog</h1>
            <p className={styles.paragraph}>Share your thoughts with our community!</p>
            
            <form onSubmit={handleSubmit} className={styles.submitBlogForm}>
                <div className={styles.inputGroup}>
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required placeholder="Enter your blog title" />
                </div>
                
                <div className={styles.inputGroup}>
                    <label htmlFor="author">Author Name</label>
                    <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required placeholder="Enter your name" />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="job">Author Job</label>
                    <input type="text" id="job" name="job" value={formData.job} onChange={handleChange} required placeholder="Your profession" />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="content">Blog Content</label>
                    <textarea id="content" name="content" value={formData.content} onChange={handleChange} rows="6" required placeholder="Write your blog here..." />
                </div>
                
                <button type="submit" className={styles.submitButton}>Submit for Review</button>
            </form>
        </div>
    );
};

export default SubmitBlog;