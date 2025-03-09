import React from 'react';
import styles from './Spirituality.module.css'; // Ensure this CSS file exists
import SPIRITUALITY_IMAGE from '../assets/spirituality.jpg'; // Import your image

const Spirituality = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.heroSection}>
                <img src={SPIRITUALITY_IMAGE} alt="Spirituality" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Spirituality</h1>
                    <h2>Discover inner peace and personal growth.</h2>
                    <h2>[ Add text ]</h2>
                </div>
            </div>
            <div className={styles.focusCards}>
                <div className={styles.card}>
                    <h2>Meditation</h2>
                    <p>Unlock mindfulness and tranquility.</p>
                </div>
                <div className={styles.card}>
                    <h2>Philosophy</h2>
                    <p>Explore the wisdom of ancient teachings.</p>
                </div>
                <div className={styles.card}>
                    <h2>Well-being</h2>
                    <p>Strengthen your mind, body, and soul.</p>
                </div>
            </div>
        </div>
    );
};

export default Spirituality;
