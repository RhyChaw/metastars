import React from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogDetails.module.css";

const blogData = [
    {
        id: 1,
        title: "Breaking Free from Financial Anxiety",
        author: "Jane Doe",
        content: "Here's the full story of how I overcame financial anxiety...",
    },
    {
        id: 2,
        title: "From Burnout to Balance",
        author: "John Smith",
        content: "Burnout can be challenging, but here's how I managed it...",
    },
    {
        id: 3,
        title: "The Art of Letting Go",
        author: "Emily Johnson",
        content: "Life is full of change. Here's how to embrace it...",
    },
    {
        id: 4,
        title: "Mindfulness in Action",
        author: "Michael Lee",
        content: "Mindfulness is powerful. Here’s how to apply it daily...",
    },
];

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === Number(id));

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <div className={styles.blogDetailsContainer}>
            <h1>{blog.title}</h1>
            <h3>By {blog.author}</h3>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogDetails;
