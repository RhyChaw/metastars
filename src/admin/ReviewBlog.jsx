import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../adminStyling/ReviewBlog.module.css";
import supabase from "../supabaseClient";


const ReviewBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            console.error("Error fetching blog:", error);
        } else {
            setBlog(data);
        }
    };

    const publishBlog = async () => {
        const { error } = await supabase
            .from("blogs")
            .update({ status: "Reviewed" })
            .eq("id", id);

        if (error) {
            console.error("Error publishing blog:", error);
        } else {
            alert("Blog published successfully!");
            navigate("/admin");
        }
    };

    if (!blog) return <p>Loading...</p>;

    return (
        <div className={styles.reviewContainer}>
            <h1>{blog.title}</h1>
            <h3>By {blog.author}, {blog.job}</h3>
            <p>{blog.content}</p>
            <button className={styles.publishButton} onClick={publishBlog}>Publish</button>
        </div>
    );
};

export default ReviewBlog;
