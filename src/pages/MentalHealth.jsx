import React, { useState, useEffect } from 'react';
import styles from '../styles/MentalHealth.module.css'; // Ensure this CSS file exists
import supabase from '../supabaseClient'; // Import supabase client

const MentalHealth = () => {
  const [images, setImages] = useState({
    heroImage: '',
    stressImage: '',
    therapyImage: '',
    selfCareImage: '',
    quoteImage: ''
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const [
          { data: heroImg },
          { data: stressImg },
          { data: therapyImg },
          { data: selfCareImg },
          { data: quoteImg }
        ] = await Promise.all([
          supabase.storage.from('asset').getPublicUrl('mentalhealth.webp'),
          supabase.storage.from('asset').getPublicUrl('stressManagementCard.webp'),
          supabase.storage.from('asset').getPublicUrl('TherapyCard.webp'),
          supabase.storage.from('asset').getPublicUrl('selfCareCardd.webp'),
          supabase.storage.from('asset').getPublicUrl('SeasonTree.webp'),
        ]);

        setImages({
          heroImage: heroImg.publicUrl,
          stressImage: stressImg.publicUrl,
          therapyImage: therapyImg.publicUrl,
          selfCareImage: selfCareImg.publicUrl,
          quoteImage: quoteImg.publicUrl,
        });

        setIsReady(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadAssets();
  }, []);

  const cardsData = [
    { 
      front: 'Stress Management', 
      image: images.stressImage,
      points: [
        "Practice mindfulness and meditation",
        "Exercise regularly to reduce tension",
        "Use deep-breathing techniques"
      ]
    },
    { 
      front: 'Therapy & Counseling', 
      image: images.therapyImage,
      points: [
        "Seek professional guidance for emotional support",
        "Engage in cognitive behavioral therapy (CBT)",
        "Join support groups for shared experiences"
      ]
    },
    { 
      front: 'Self-Care', 
      image: images.selfCareImage,
      points: [
        "Maintain a balanced sleep schedule",
        "Engage in hobbies that bring joy",
        "Set healthy boundaries in daily life"
      ]
    }
  ];

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <img src={images.heroImage} alt="Mental Health" className={styles.heroImage} />
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
        <img src={images.quoteImage} alt="Inspiring Visual" className={styles.quoteImage} />
      </div>
    </div>
  );
};

export default MentalHealth;
