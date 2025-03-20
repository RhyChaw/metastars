import React, { useEffect, useState } from 'react';
import styles from './land3.module.css'; // Make sure to create and style this CSS file
import UNIVERSE from '../assets/universe.jpg'; // Import your image
import COMPASSION from '../assets/compassion.jpg'; // Import your image
import Loader from '../components/Loader';
import LOGO from '../assets/logo.jpeg';

const Land3 = () => {
  const handleClick = () => {
    window.location.href = '/fill-form';
  }

  // const [loading, setLoading] = useState(true);
  // const [loadingComplete, setLoadingComplete] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer); // Cleanup timeout on unmount
  // }, []);

  // if (loading) {
  //   return <Loader logo={LOGO} duration={3000} onComplete={() => setLoadingComplete(true)} />; // Show loader first
  // }

  return (
    <div className={styles.landingPage}>
      <div className={styles.heroSection}>
        <img src={UNIVERSE} alt="UNIVERSE" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h2>Welcome to Metta Stars</h2>
          <h4>Life can be tough, but no one should have to navigate it alone. Let’s grow together.</h4>
          <h4>Whether you're here to learn, grow, or give back, you’re in the right place.</h4>
          <button className={styles.heroBtn} onClick={handleClick}>Get Started</button>
        </div>
      </div>

      {/* Focus Cards */}
      <div className={styles.focusCards}>
        <div className={styles.card}>
          <h2>Financial Literacy</h2>
          <p>Your relationship with money can shape your life. 
            Whether you're struggling with debt, planning for your future, 
            or seeking financial freedom, we provide practical guidance to 
            help you make informed choices.</p>
            <button className={styles.heroBtn}>Learn more</button>
        </div>
        <div className={styles.card}>
          <h2>Mental Health</h2>
          <p>Mental well-being is the foundation of success and happiness. We create a safe space for open conversations, self-discovery, and emotional resilience.</p>
          <button className={styles.heroBtn}>Learn more</button>
        </div>
        <div className={styles.card}>
          <h2>Spirituality</h2>
          <p>Spirituality isn’t just about religion—it’s about understanding yourself, finding purpose, and embracing inner peace. We help you explore different perspectives to enrich your life.</p>
          <button className={styles.heroBtn} >Learn more</button>
        </div>
      </div>

      <div className={styles.quoteSection}>
        <div className={styles.quoteBackground}></div>
        <p className={styles.quoteText}>
          <p className='italic'>“Compassion isn’t just a word; it’s a movement. And you’re a part of it.”</p>
        </p>
        <img src={COMPASSION} alt="Inspiring Visual" className={styles.quoteImage} />
      </div>

      
    </div>
  );
};

export default Land3;
