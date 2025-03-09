import React from 'react';
import styles from './Finance.module.css'; // Ensure this CSS file exists
import FINANCE_IMAGE from '../assets/finance.jpg'; // Import your image

const Finance = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.heroSection}>
                <img src={FINANCE_IMAGE} alt="Finance" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Finance</h1>
                    <h2>Mastering financial literacy and independence.</h2>
                    <h2>[ Add text ]</h2>
                </div>
            </div>
            <div className={styles.focusCards}>
                <div className={styles.card}>
                    <h2>Investing</h2>
                    <p>Grow wealth through smart investments.</p>
                </div>
                <div className={styles.card}>
                    <h2>Budgeting</h2>
                    <p>Manage your expenses effectively.</p>
                </div>
                <div className={styles.card}>
                    <h2>Financial Independence</h2>
                    <p>Plan for a secure future.</p>
                </div>
            </div>
        </div>
    );
};

export default Finance;
