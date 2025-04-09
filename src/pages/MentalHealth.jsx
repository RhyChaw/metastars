import React, { useState, useEffect } from 'react';
import styles from '../styles/MentalHealth.module.css'; // Ensure this CSS file exists
import supabase from '../supabaseClient'; // Import supabase client

const MentalHealth = () => {
  const [images, setImages] = useState({
    heroImage: '',
    stressImage: '',
    therapyImage: '',
    selfCareImage: '',
    quoteImage: '',
    happyPpl: '',
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
          { data: quoteImg },
          { data: happyPplImg }
        ] = await Promise.all([
          supabase.storage.from('asset').getPublicUrl('mentalhealth.webp'),
          supabase.storage.from('asset').getPublicUrl('stressManagementCard.webp'),
          supabase.storage.from('asset').getPublicUrl('TherapyCard.webp'),
          supabase.storage.from('asset').getPublicUrl('selfCareCardd.webp'),
          supabase.storage.from('asset').getPublicUrl('SeasonTree.webp'),
          supabase.storage.from('asset').getPublicUrl('colorfulboxes.jpg'),
        ]);

        setImages({
          heroImage: heroImg.publicUrl,
          stressImage: stressImg.publicUrl,
          therapyImage: therapyImg.publicUrl,
          selfCareImage: selfCareImg.publicUrl,
          quoteImage: quoteImg.publicUrl,
          happyPpl: happyPplImg.publicUrl,
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


      {/* About Section */}
      <div className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <img src={images.happyPpl} alt="Happy People" className={styles.happyPeopleImage} />
        </div>

        <div className={styles.textContainer}>
          <h2>Your Mind Matters. So Do You.</h2>
          <p>
            Mental health is strength – not weakness. At Metta Stars, we hold space for the real, the raw, and the healing. Whether 
            you’re battling anxiety, burnout, or just feeling stuck, we’re here to remind you: you’re not alone.
            We collaborate with mental health professionals, therapists, and credible organizations to bring you insights 
            and tools that actually help. Through awareness, community, and compassion, we guide you toward resilience, 
            self-understanding, and emotional clarity. Healing begins with being seen.<strong> We see you. We feel you. We’re with you.</strong>

          </p>
        </div>
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
