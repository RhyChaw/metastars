import React, { useEffect, useState } from 'react';
import styles from './land3.module.css'; // Make sure to create and style this CSS file
import UNIVERSE from '../assets/universe.jpg'; // Import your image
import Loader from '../components/Loader';
import LOGO from '../assets/logo.jpeg';

const Land3 = () => {
  const handleClick = () => {
    window.location.href = '/fill-form';
  }

  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  if (loading) {
    return <Loader logo={LOGO} duration={2500} onComplete={() => setLoadingComplete(true)} />; // Show loader first
  }

  return (
    <div className={styles.landingPage}>
      <div className={styles.heroSection}>
        <img src={UNIVERSE} alt="UNIVERSE" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h2>Welcome to Metta Stars</h2>
          <h4>Shaping the future with cutting-edge technology and innovation.</h4>
          <h4>[ Add text ]</h4>
          <button className={styles.heroBtn} onClick={handleClick}>Get Started</button>
        </div>
      </div>

      {/* Add other sections if needed */}
      <div className={styles.infoSection}>
        <h2>[ Can also do other designs here. ]</h2>
      </div>

      {/* Focus Cards */}
      <div className={styles.focusCards}>
        <div className={styles.card}>
          <h2>Card 1</h2>
          <p>Some description for card 1.</p>
        </div>
        <div className={styles.card}>
          <h2>Card 2</h2>
          <p>Some description for card 2.</p>
        </div>
        <div className={styles.card}>
          <h2>Card 3</h2>
          <p>Some description for card 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Land3;
