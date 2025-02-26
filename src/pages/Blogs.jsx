import React from 'react';
import styles from './Blogs.module.css';

const Blogs = () => {
    return (
        <div className={styles.blogsContainer}>
            <h1>Stories That Inspire Change</h1>
            <p>Our blog is a sanctuary for deep insights, real stories, and thought-provoking discussions. We believe in storytelling that resonates and transforms.</p>
            
            <h2>Popular Reads:</h2>
            <ul>
                <li>Breaking Free from Financial Anxiety: A Personal Journey</li>
                <li>From Burnout to Balance: A Mental Health Guide</li>
                <li>The Art of Letting Go: Embracing Change and Growth</li>
                <li>Mindfulness in Action: Simple Daily Practices to Transform Your Life</li>
            </ul>
            
            <button className={styles.readMoreButton}>Read More & Share Your Thoughts</button>
            <p>Want to contribute? We welcome guest writers!</p>
            <button className={styles.submitStoryButton}>Submit Your Story</button>
        </div>
    );
};

export default Blogs;
