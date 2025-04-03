import React, { useEffect, useState } from 'react';
import styles from './land3.module.css'; // Make sure to create and style this CSS file
import UNIVERSE from '../assets/universe.jpg'; // Import your image
import COMPASSION from '../assets/compassion.mp4'; // Import your video
import finCard from '../assets/finCard.jpg'; // Financial Literacy card image
import mentalCard from '../assets/mentalCard.jpg'; // Mental Health card image
import spiritCard from '../assets/spiritCard.jpg'; // Spirituality card image

const Land3 = () => {
  const handleClick = () => {
    window.location.href = '/fill-form';
  };

  const handleLinkClick = (link) => {
    return () => {
      window.location.href = link;
    };
  };
  

  const focusCardsData = [
    {
      title: 'Spirituality',
      image: spiritCard,
      points: [
        'Finding inner peace',
        'Exploring different perspectives',
        'Living with purpose'
      ],
      link: '/spirituality'
    },
    {
      title: 'Financial Literacy',
      image: finCard,
      points: [
        'Understanding budgeting & saving',
        'Managing debt wisely',
        'Planning for financial freedom'
      ],
      link: '/financial-literacy'
    },
    {
      title: 'Mental Health',
      image: mentalCard,
      points: [
        'Building emotional resilience',
        'Self-discovery & mindfulness',
        'Creating a support network'
      ],
      link: '/mental-health'
    }
  ];

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
          <img src={UNIVERSE} alt="UNIVERSE" className={styles.heroImage} />
        </div>
      </div>

      {/* Focus Cards */}
      <div className={styles.focusCards}>
        {focusCardsData.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardFront} style={{ backgroundImage: `url(${item.image})` }}>
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

      <div className={styles.quoteSection}>
        <video
          src={COMPASSION}
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
