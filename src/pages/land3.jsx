import React, { useEffect, useState } from 'react';
import styles from './land3.module.css';
import supabase from '../supabaseClient';

const Land3 = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [landUrl, setLandUrl] = useState('');
  const [cardImages, setCardImages] = useState({
    spirit: '',
    fin: '',
    mental: ''
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const [
          { data: vid },
          { data: img },
          { data: spirit },
          { data: fin },
          { data: mental }
        ] = await Promise.all([
          supabase.storage.from('asset').getPublicUrl('compassion.mp4'),
          supabase.storage.from('asset').getPublicUrl('universe.webp'),
          supabase.storage.from('asset').getPublicUrl('spiritCard.webp'),
          supabase.storage.from('asset').getPublicUrl('finCard.webp'),
          supabase.storage.from('asset').getPublicUrl('mentalCard.webp'),
        ]);

        // Load background image first for LCP
        const image = new Image();
        image.src = img.publicUrl;

        image.onload = () => {
          setLandUrl(img.publicUrl);
          setVideoUrl(vid.publicUrl);
          setCardImages({
            spirit: spirit.publicUrl,
            fin: fin.publicUrl,
            mental: mental.publicUrl
          });
          setIsReady(true);
        };
      } catch (error) {
        console.error('Error loading media:', error);
      }
    };

    loadAssets();
  }, []);

  const handleClick = () => window.location.href = '/contact';
  const handleLinkClick = (link) => () => window.location.href = link;

  const focusCardsData = [
    {
      title: 'Spirituality',
      image: cardImages.spirit,
      points: ['Finding inner peace', 'Exploring different perspectives', 'Living with purpose'],
      link: '/spirituality'
    },
    {
      title: 'Financial Literacy',
      image: cardImages.fin,
      points: ['Understanding budgeting & saving', 'Managing debt wisely', 'Planning for financial freedom'],
      link: '/financial-literacy'
    },
    {
      title: 'Mental Health',
      image: cardImages.mental,
      points: ['Building emotional resilience', 'Self-discovery & mindfulness', 'Creating a support network'],
      link: '/mental-health'
    }
  ];

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
        <div className={styles.heroTextContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.fadeIn}>
              Welcome to <br />
              <span className={styles.headline}>Metta Stars</span>
            </h1>
            <button className={styles.heroBtn} onClick={handleClick}>
              Get Started
            </button>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <img
            src={landUrl}
            alt="UNIVERSE"
            loading="eager"
            width={1200}
            height={600}
            className={styles.heroImage}
          />
        </div>
      </div>

      <div className={styles.focusCards}>
        {focusCardsData.map((item, index) => (
          <div className={styles.card} key={index}>
            <div
              className={styles.cardFront}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h2>{item.title}</h2>
            </div>
            <div className={styles.cardBack}>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button className={styles.heroBtn} onClick={handleLinkClick(item.link)}>Learn more</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.aboutSection}>
        <h2>Empowering Lives Through Wisdom</h2>
        <p>
          Empowering lives through financial wisdom, mental strength, and spiritual growth.
          At Metta Stars Foundation, we believe true success isn’t just about wealth – it’s
          about clarity, resilience, and purpose. Whether you're looking to take control of
          your finances, build emotional strength, or find deeper meaning of life, we’re here
          to support your journey.
        </p>
        <button className={styles.heroBtn} onClick={handleClick}>Get Started</button>
      </div>

      <div className={styles.quoteSection}>
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className={styles.quoteBackground}
        />
        <p className={styles.quoteText}>
          <span className="italic">
            “Compassion isn’t just a word; it’s a movement. And you’re a part of it.”
          </span>
        </p>
      </div>
    </div>
  );
};

export default Land3;
