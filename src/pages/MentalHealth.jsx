import React, { useState } from 'react';
import styles from '../styles/MentalHealth.module.css'; // Ensure this CSS file exists
import MENTAL_HEALTH_IMAGE from '../assets/mentalhealth.jpg'; // Import your image
import SeasonTree from '../assets/SeasonTree.jpeg'; // Import your image

// cards
import StressCard from '../assets/stressManagementCard.jpg'; // Import your image
import TherapyCard from '../assets/TherapyCard.jpg'; // Import your image
import SelfCareCard from '../assets/selfCareCardd.jpg'; // Import your image

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
            points: [
                "Practice mindfulness and meditation",
                "Exercise regularly to reduce tension",
                "Use deep-breathing techniques"
            ]
        },
        { 
            front: 'Therapy & Counseling', 
            image: TherapyCard,
            points: [
                "Seek professional guidance for emotional support",
                "Engage in cognitive behavioral therapy (CBT)",
                "Join support groups for shared experiences"
            ]
        },
        { 
            front: 'Self-Care', 
            image:  SelfCareCard,
            points: [
                "Maintain a balanced sleep schedule",
                "Engage in hobbies that bring joy",
                "Set healthy boundaries in daily life"
            ]
        }
    ];

    return (
        <div className={styles.landingPage}>
            {/* Hero Section */}
            <div className={styles.heroSection}>
                <img src={MENTAL_HEALTH_IMAGE} alt="Mental Health" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Mental Health</h1>
                    <p className='italic smol'>Prioritizing and creating space for emotional and psychological well-being.</p>
                </div>
            </div>

            {/* Focus Areas with Flip Cards */}
            <div className={styles.focusCards}>
                {cardsData.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <div 
                            className={styles.cardFront} 
                            style={{ backgroundImage: `url(${item.image})` }} 
                        >
                            <h2>{item.front}</h2>
                        </div>
                        <div className={styles.cardBack}>
                            <ul>
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <button className={styles.heroBtn}>Learn more</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quote Section */}
            <div className={styles.quoteSection}>
                <div className={styles.quoteBackground}></div>
                <p className={styles.quoteText}>
                    <em>"Be patient with yourself, Nothing in nature blooms all year."</em>
                    <br />
                    <em> - Cristina Smith</em>
                </p>
                <img src={SeasonTree} alt="Inspiring Visual" className={styles.quoteImage} />
            </div>
        </div>
    );
};

export default MentalHealth;
