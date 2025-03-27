import React from 'react';
import styles from './Finance.module.css'; // Ensure this CSS file exists
import FINANCE_IMAGE from '../assets/Finance.jpg'; // Import your image
// import MONEY_GROWTH from '../assets/moneyGrowth.jpg'; // Additional Finance-related images
// import FINLIT_BG from '../assets/finlit.jpeg'; // Background image for quote section

const Finance = () => {
    return (
        <div className={styles.landingPage}>
            {/* Hero Section */}
            <div className={styles.heroSection}>
                <img src={FINANCE_IMAGE} alt="Finance" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Finance</h1>
                    <h2>Mastering financial literacy and independence.</h2>
                    <h2>Understanding money is the key to freedom.</h2>
                </div>
            </div>

            {/* Focus Areas with Flip Cards */}
            <div className={styles.focusCards}>
                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <h2>Investing</h2>
                        </div>
                        <div className={styles.cardBack}>
                            <p>Grow wealth through stocks, real estate, and passive income.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <h2>Budgeting</h2>
                        </div>
                        <div className={styles.cardBack}>
                            <p>Track expenses, cut unnecessary spending, and save efficiently.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <h2>Financial Independence</h2>
                        </div>
                        <div className={styles.cardBack}>
                            <p>Achieve long-term financial security through smart planning.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <h2>Passive Income</h2>
                        </div>
                        <div className={styles.cardBack}>
                            <p>Learn how to make money work for you while you sleep.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className={styles.quoteSection}>
                <div className={styles.quoteContent}>
                    <p className="italic">
                        {`"It's not about how much money you make, but how much you keep, how hard it works for you, and how many generations you keep it for."`}
                    </p>
                    <p>- Robert Kiyosaki</p>
                </div>
            </div>
        </div>
    );
};

export default Finance;
