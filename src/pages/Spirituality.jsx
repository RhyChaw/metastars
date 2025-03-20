import React from 'react';
import styles from './Spirituality.module.css'; // Ensure this CSS file exists
import SPIRITUALITY_IMAGE from '../assets/spirituality.jpg'; // Import your image
import COMPASSION from '../assets/compassion.jpg'; // Import your image


const Spirituality = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.heroSection}>
                <img src={SPIRITUALITY_IMAGE} alt="Spirituality" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Spirituality</h1>
                    <p className='italic'>"You are not a human being searching for a spiritual experience, you are a spiritual being navigating through being human."</p>
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

            <div className={styles.quoteSection}>
                            <div className={styles.quoteBackground}></div>
                            <p className={styles.quoteText}>
                            <p className='italic'>[ Add Quote ]</p>
                            </p>
                            <img src={COMPASSION} alt="Inspiring Visual" className={styles.quoteImage} />
                        </div>

        </div>
    );
};

export default Spirituality;
