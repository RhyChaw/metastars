import React from 'react';
import styles from './Spirituality.module.css'; // Ensure this CSS file exists
import SPIRITUALITY_IMAGE from '../assets/spirituality.jpg'; // Import your image
import COMPASSION from '../assets/compassion.jpg'; // Import your image
import SeekSpir from '../assets/seekSpir.jpeg'; // Import your image

const Spirituality = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.heroSection}>
                <img src={SPIRITUALITY_IMAGE} alt="Spirituality" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Spirituality</h1>
                    <p className='italic smol'>"You are not a human being searching for a spiritual experience, you are a spiritual being navigating through being human."</p>
                </div>
            </div>

            <div className={styles.focusCards}>
                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <h2>Meditation</h2>
                        </div>
                        <div className={styles.cardBack}>
                            <h2>Meditation</h2>
                            <ul>
                                <li>Unlock mindfulness</li>
                                <li>Reduce stress</li>
                                <li>Enhance focus</li>
                                <li>Connect with inner self</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <h2>Philosophy</h2>
                        </div>
                        <div className={styles.cardBack}>
                            <h2>Philosophy</h2>
                            <ul>
                                <li>Explore ancient wisdom</li>
                                <li>Find deeper meaning</li>
                                <li>Expand your perspective</li>
                                <li>Live with purpose</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <h2>Well-being</h2>
                        </div>
                        <div className={styles.cardBack}>
                            <h2>Well-being</h2>
                            <ul>
                                <li>Strengthen body & mind</li>
                                <li>Boost emotional balance</li>
                                <li>Improve mental clarity</li>
                                <li>Align with your true self</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.quoteSection}>
                <img src={SeekSpir} alt="Inspiring Visual" className={styles.blendedImage} />
                <div className={styles.floatingQuote}>
                    <p className='italic'>What you seek is seeking you.</p>
                </div>
            </div>
        </div>
    );
};

export default Spirituality;
