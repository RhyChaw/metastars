import React, { useState } from "react";
import styles from "../styles/SubmitBlog.module.css";
import supabase from "../supabaseClient";

const SubmitBlog = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        job: "",
        content: "",
        images: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const { data, error } = await supabase.storage
            .from("blog-images")
            .upload(`blog-${Date.now()}-${file.name}`, file);
        
        if (error) {
            alert("Error uploading image: " + error.message);
        } else {
            const imageUrl = supabase.storage.from("blog-images").getPublicUrl(data.path);
            setFormData(prevState => ({ ...prevState, images: [...prevState.images, imageUrl] }));
        }
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
            setFormData({ title: "", author: "", job: "", content: "", images: [] });
        }
    };

    return (
        <div className={styles.submitBlogContainer}>
            <h1 className={styles.headingPrimary}>Write & Preview Your Blog</h1>
            <p className={styles.paragraph}>Format your blog and arrange images before submission.</p>
            
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
                    <textarea 
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows="10"
                        placeholder="Write your blog here..."
                    />
                </div>
                
                <div className={styles.inputGroup}>
                    <label>Upload Images</label>
                    <input type="file" onChange={handleImageUpload} accept="image/*" />
                </div>
                
                <button type="submit" className={styles.submitButton}>Submit for Review</button>
            </form>

            <div className={styles.previewSection}>
                <h2>Live Preview</h2>
                <h3>{formData.title}</h3>
                <p><strong>{formData.author}</strong> - {formData.job}</p>
                <div>{formData.content}</div>
                <div className={styles.imagePreview}>
                    {formData.images.map((img, index) => (
                        <img key={index} src={img} alt={`Uploaded ${index}`} className={styles.previewImage} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubmitBlog;
