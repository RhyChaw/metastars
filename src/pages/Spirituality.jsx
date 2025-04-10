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
        wellbeing: '',
        happyPpl: ''
    });
    const [landUrl, setLandUrl] = useState('');
    const [isReady, setIsReady] = useState(false);
    const [backgroundUrl, setBackgroundUrl] = useState('');
    const handleClick = () => window.location.href = '/contact';
    const handleClickButton = () => window.location.href = '/blogs';
    useEffect(() => {
        const loadAssets = async () => {
            try {
                const [
                    { data: spiritualityImage },
                    { data: meditationImage },
                    { data: philosophyImage },
                    { data: wellBeingImage },
                    { data: seekSpirImage },
                    { data: backgroundImage }
                ] = await Promise.all([
                    supabase.storage.from('asset').getPublicUrl('spirituality.webp'),
                    supabase.storage.from('asset').getPublicUrl('meditationCard.webp'),
                    supabase.storage.from('asset').getPublicUrl('philCard.webp'),
                    supabase.storage.from('asset').getPublicUrl('wellBeingCard.webp'),
                    supabase.storage.from('asset').getPublicUrl('seekSpir.webp'),
                    supabase.storage.from('asset').getPublicUrl('yellowave.jpg')
                ]);

                // Set state after fetching all assets
                setLandUrl(spiritualityImage.publicUrl);
                setCardImages({
                    spirit: spiritualityImage.publicUrl,
                    meditation: meditationImage.publicUrl,
                    philosophy: philosophyImage.publicUrl,
                    wellbeing: wellBeingImage.publicUrl,
                    seekSpir: seekSpirImage.publicUrl,
                    backgroundUrl: backgroundImage.publicUrl

                });
                setBackgroundUrl(backgroundImage.publicUrl);
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
                            <button onClick={handleClickButton} className={styles.heroBtn}>Learn more</button>
                        </div>
                    </div>
                ))}
            </div>


        {/* About Section */}
            <div className={styles.aboutSection}>
                <div className={styles.imageContainer}>
                <img src={cardImages.backgroundUrl} alt="Happy People" className={styles.happyPeopleImage} />
                </div>

                <div className={styles.textContainer}>
                <h2>Come Home to Yourself.</h2>
                <p>
                Spirituality isn’t about perfection – it’s about connection. It’s the quiet strength behind every storm, the deeper “why” behind your journey. At Metta Stars, we blend ancient teachings with modern insight to help you reconnect – with yourself, with others, and with life itself.
                We tap into a circle of credible spiritual guides, mentors, and lived experiences – so the support you receive is grounded, diverse, and authentic. This is a safe space to ask questions, explore truth, and grow into the person you were always meant to be.
                </p>
                </div>
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
