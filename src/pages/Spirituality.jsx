import React, { useState, useEffect } from 'react';
import styles from '../styles/Spirituality.module.css'; // Ensure this CSS file exists

import supabase from '../supabaseClient';

const cardsData = [
    {
        title: "Meditation",
        points: [
            "Unlock mindfulness",
            "Reduce stress",
            "Enhance focus",
            "Connect with inner self"
        ]
    },
    {
        title: "Philosophy",
        points: [
            "Explore ancient wisdom",
            "Find deeper meaning",
            "Expand your perspective",
            "Live with purpose"
        ]
    },
    {
        title: "Wellbeing",
        points: [
            "Strengthen body & mind",
            "Boost emotional balance",
            "Improve mental clarity",
            "Align with your true self"
        ]
    }
];

const Spirituality = () => {
    const [cardImages, setCardImages] = useState({
        spirit: '',
        seekSpir: '',
        meditation: '',
        philosophy: '',
        wellbeing: ''
    });
    const [landUrl, setLandUrl] = useState('');
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadAssets = async () => {
            try {
                const [
                    { data: spiritualityImage },
                    { data: meditationImage },
                    { data: philosophyImage },
                    { data: wellBeingImage },
                    { data: seekSpirImage }
                ] = await Promise.all([
                    supabase.storage.from('asset').getPublicUrl('spirituality.webp'),
                    supabase.storage.from('asset').getPublicUrl('meditationCard.webp'),
                    supabase.storage.from('asset').getPublicUrl('philCard.webp'),
                    supabase.storage.from('asset').getPublicUrl('wellBeingCard.webp'),
                    supabase.storage.from('asset').getPublicUrl('seekSpir.webp')
                ]);

                // Set state after fetching all assets
                setLandUrl(spiritualityImage.publicUrl);
                setCardImages({
                    spirit: spiritualityImage.publicUrl,
                    meditation: meditationImage.publicUrl,
                    philosophy: philosophyImage.publicUrl,
                    wellbeing: wellBeingImage.publicUrl,
                    seekSpir: seekSpirImage.publicUrl
                });

                setIsReady(true);
            } catch (error) {
                console.error('Error loading media:', error);
            }
        };

        loadAssets();
    }, []);

    if (!isReady) {
        return (
            <div className={styles.loaderWrapper}>
                <div className={styles.loader}></div>
            </div>
        );
    }

    return (
        <div className={styles.landingPage}>
            <div className={styles.heroSection}>
                <img src={landUrl} alt="Spirituality" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Spirituality</h1>
                    <p className="italic smol">"You are not a human being searching for a spiritual experience, you are a spiritual being navigating through being human."</p>
                </div>
            </div>

            <div className={styles.focusCards}>
                {cardsData.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <div 
                            className={styles.cardFront} 
                            style={{ backgroundImage: `url(${cardImages[item.title.toLowerCase()] || ''})` }} // Dynamically load images
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
                <img src={cardImages.seekSpir} alt="Inspiring Visual" className={styles.quoteImage} />
            </div>

        </div>
    );
};

export default Spirituality;
