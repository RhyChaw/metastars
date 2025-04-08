import React, { useEffect, useState } from 'react';
import styles from '../styles/land3.module.css';
import supabase from '../supabaseClient';

const Land3 = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [logo, setLogo] = useState('');
  const [backgroundUrl, setBackgroundUrl] = useState('');
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
          { data: mental },
          { data: background },
          { data: logo }
        ] = await Promise.all([
          supabase.storage.from('asset').getPublicUrl('compassion.mp4'),
          supabase.storage.from('asset').getPublicUrl('universe.webp'),
          supabase.storage.from('asset').getPublicUrl('spiritCard.webp'),
          supabase.storage.from('asset').getPublicUrl('finCard.webp'),
          supabase.storage.from('asset').getPublicUrl('mentalCard.webp'),
          supabase.storage.from('asset').getPublicUrl('bluebkg.webp'),
          supabase.storage.from('asset').getPublicUrl('logo.webp')
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
          setBackgroundUrl(background.publicUrl);
          setLogo(logo.publicUrl);
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
 
      {/* Our Mission */}
      <section className={styles.mission}>
        <div className={styles.missionLeft}>
          <img
            src={logo}
            alt="Metta Stars Logo"
            className={styles.missionLogo}
            loading="lazy"
          />
        </div>
        <div className={styles.missionRight}>
          <h2>Our Mission</h2>
          <ul>
            <li>At Metta Stars, we are igniting a movement rooted in compassion, community, and lasting impact. Backed by over 15 years of collective experience and a trusted network of professionals, we are here to be a beacon of support in a world that often feels overwhelming and disconnected.            </li>
            <li>Our mission is to bridge the gap between knowledge and humanity- to empower minds, uplift spirits, and guide hearts through life’s financial, emotional, and spiritual challenges. We believe in the healing power of connection, and we’re building a community where people feel seen, safe, and supported every step of the way.
            </li>
            <li>This is more than guidance. This is a revolution of care. A space where truth is shared, growth is nurtured, and no one is left behind. <strong>Together, we’re not just dreaming of a better world- We’re building it.</strong></li>
          </ul>
        </div>
      </section>


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
        <div className={styles.leftSide} style={{ backgroundImage: `url(${backgroundUrl})` }}></div>
        <div className={styles.rightSide}>
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
