import React, { useEffect, useState } from 'react';
import styles from './land3.module.css'; // Make sure to create and style this CSS file
import UNIVERSE from '../assets/universe.jpg'; // Import your image
import COMPASSION from '../assets/compassion.mp4'; // Import your video
import Loader from '../components/Loader';
import LOGO from '../assets/logo.jpeg';

const Land3 = () => {
  const handleClick = () => {
    window.location.href = '/fill-form';
  }

  return (
    <div className={styles.landingPage}>
      <div className={styles.heroSection}>
        <img src={UNIVERSE} alt="UNIVERSE" className={styles.heroImage} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroText}>
          <h1 className={styles.fadeIn}>Welcome to <br/>
            <span className={styles.headline}>Metta Stars</span>
          </h1>
          <button className={styles.heroBtn} onClick={handleClick}>Get Started</button>
        </div>
      </div>

      {/* Focus Cards */}
      <div className={styles.focusCards}>
        {[{
          title: "Financial Literacy",
          points: [
            "Understanding budgeting & saving",
            "Managing debt wisely",
            "Planning for financial freedom"
          ]
        }, {
          title: "Mental Health",
          points: [
            "Building emotional resilience",
            "Self-discovery & mindfulness",
            "Creating a support network"
          ]
        }, {
          title: "Spirituality",
          points: [
            "Finding inner peace",
            "Exploring different perspectives",
            "Living with purpose"
          ]
        }].map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardFront}>
              <h2>{item.title}</h2>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className={styles.cardBack}>
              <button className={styles.heroBtn}>Learn more</button>
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
          <span className="italic">“Compassion isn’t just a word; it’s a movement. And you’re a part of it.”</span>
        </p>
      </div>
    </div>
  );
};

export default Land3;
