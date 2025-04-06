import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/TempBlog.module.css";

const blogData = [
    {
        id: 1,
        title: "Breaking Free from Financial Anxiety",
        author: "Jane Doe",
        content: "Here's the full story of how I overcame financial anxiety...",
        date: "March 25, 2025",
    },
    {
        id: 2,
        title: "From Burnout to Balance",
        author: "John Smith",
        content: "Burnout can be challenging, but here's how I managed it...",
        date: "April 10, 2025",
    },
    {
        id: 3,
        title: "The Art of Letting Go",
        author: "Emily Johnson",
        content: "Life is full of change. Here's how to embrace it...",
        date: "May 5, 2025",
    },
    {
        id: 4,
        title: "Mindfulness in Action",
        author: "Michael Lee",
        content: "Mindfulness is powerful. Here’s how to apply it daily...",
        date: "June 15, 2025",
    },
];

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === Number(id));

    if (!blog) {
        return <h2 className={styles.notFound}>Blog not found</h2>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.date}>{blog.date}</p>
            
            <div className={styles.authorSection}>
                <p className={styles.author}>{blog.author}</p>
                <p className={styles.role}>Guest Writer</p>
            </div>
            
            <img className={styles.placeholderImage} src="/placeholder.jpg" alt="Blog Image" />
            
            <p className={styles.content}>{blog.content}</p>
        </div>
    );
};

export default BlogDetails;
