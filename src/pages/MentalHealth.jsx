import React from 'react';
import styles from './MentalHealth.module.css'; // Ensure this CSS file exists
import MENTAL_HEALTH_IMAGE from '../assets/mentalhealth.jpg'; // Import your image

const MentalHealth = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.heroSection}>
                <img src={MENTAL_HEALTH_IMAGE} alt="Mental Health" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Mental Health</h1>
                    <h2>Prioritizing emotional and psychological well-being.</h2>
                    <h2>[ Add text ]</h2>
                </div>
            </div>
            <div className={styles.focusCards}>
                <div className={styles.card}>
                    <h2>Stress Management</h2>
                    <p>Learn techniques to handle daily stress.</p>
                </div>
                <div className={styles.card}>
                    <h2>Therapy & Counseling</h2>
                    <p>Seek guidance from mental health professionals.</p>
                </div>
                <div className={styles.card}>
                    <h2>Self-Care</h2>
                    <p>Develop routines for a healthier mind.</p>
                </div>
            </div>
        </div>
    );
};

export default MentalHealth;
