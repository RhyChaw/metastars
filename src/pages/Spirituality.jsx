import React from 'react';
import styles from '../styles/Spirituality.module.css'; // Ensure this CSS file exists
import SPIRITUALITY_IMAGE from '../assets/spirituality.jpg'; // Import your image
import COMPASSION from '../assets/compassion.jpg'; // Import your image
import SeekSpir from '../assets/seekSpir.jpeg'; // Import your image
import WellBeingCard from '../assets/wellBeingCard.jpg'; // Import your image
import MeditationCard from '../assets/meditationCard.jpg'; // Import your image
import PhilosophyCard from '../assets/philCard.jpg'; // Import your image

const cardsData = [
    {
        title: "Meditation",
        image: MeditationCard,
        points: [
            "Unlock mindfulness",
            "Reduce stress",
            "Enhance focus",
            "Connect with inner self"
        ]
    },
    {
        title: "Philosophy",
        image: PhilosophyCard,
        points: [
            "Explore ancient wisdom",
            "Find deeper meaning",
            "Expand your perspective",
            "Live with purpose"
        ]
    },
    {
        title: "Well-being",
        image: WellBeingCard,
        points: [
            "Strengthen body & mind",
            "Boost emotional balance",
            "Improve mental clarity",
            "Align with your true self"
        ]
    }
];

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
                               {cardsData.map((item, index) => (
                                 <div className={styles.card} key={index}>
                                   <div 
                                     className={styles.cardFront} 
                                     style={{ backgroundImage: `url(${item.image})` }} // Fix: Correct image styling
                                   >
                                     <h2>{item.title}</h2>
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

            <div className={styles.quoteSection}>
                <div className={styles.quoteBackground}></div>
                <p className={styles.quoteText}>
                    <em>"What you seek is seeking you."</em>
                    <br />
                    <em> - Rumi</em>    
                </p>
                <img src={SeekSpir} alt="Inspiring Visual" className={styles.quoteImage} />
            </div>

        </div>
    );
};

export default Spirituality;
