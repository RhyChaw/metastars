import React, { useState } from 'react';
import styles from './MentalHealth.module.css'; // Ensure this CSS file exists
import MENTAL_HEALTH_IMAGE from '../assets/mentalhealth.jpg'; // Import your image
import SeasonTree from '../assets/SeasonTree.jpeg'; // Import your image

// cards
import StressCard from '../assets/stressManagementCard.jpg'; // Import your image
import TherapyCard from '../assets/TherapyCard.jpg'; // Import your image
import SelfCareCard from '../assets/selfCareCard.jpg'; // Import your image

const MentalHealth = () => {
    const [flipped, setFlipped] = useState([false, false, false]);

    const handleFlip = (index) => {
        setFlipped(prev => {
            const newFlipped = [...prev];
            newFlipped[index] = !newFlipped[index];
            return newFlipped;
        });
    };

    const cardsData = [
        { 
            front: 'Stress Management', 
            image: StressCard,
            back: 'Techniques to handle stress like meditation and mindfulness.'
        },
        { 
            front: 'Therapy & Counseling', 
            image: TherapyCard,
            back: 'Professional guidance to navigate mental health challenges.' },
        { 
            front: 'Self-Care', 
            image:  SelfCareCard,
            back: 'Develop routines to support emotional well-being.' }
    ];

    return (
        <div className={styles.landingPage}>
            <div className={styles.heroSection}>
                <img src={MENTAL_HEALTH_IMAGE} alt="Mental Health" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Mental Health</h1>
                    <h2>Prioritizing emotional and psychological well-being.</h2>
                </div>
            </div>

            <div className={styles.focusCards}>
                    {cardsData.map((card, index) => (
                      <div key={index} className={styles.card}>
                        <div className={styles.cardInner}>
                          <div className={styles.cardFront}>
                            <img src={card.image} alt={card.title} className={styles.cardImage} />
                            <h2>{card.front}</h2>
                          </div>
                          <div className={styles.cardBack}>
                            <p>{card.back}</p>
                            <button className={styles.learnMoreButton}>Learn More</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

            <div className={styles.quoteSection}>
                <div className={styles.quoteBackground}></div>
                <p className={styles.quoteText}>
                    <em>"Be patient with yourself. Nothing in nature blooms all year."</em>
                </p>
                <img src={SeasonTree} alt="Inspiring Visual" className={styles.quoteImage} />
            </div>
        </div>
    );
};

export default MentalHealth;
