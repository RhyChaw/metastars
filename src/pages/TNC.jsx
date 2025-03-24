import React from 'react';
import styles from './TNC.module.css';

function TNC() {
  return (
    <div className={styles.container}>
        <div className={styles.mw}>
      <h1 className={styles.heading}>Terms and Conditions</h1>
      <p className={styles.updated}>Last Updated: August 2024</p>
      
      <section className={styles.section}>
        <h2>1. Introduction</h2>
        <p>Welcome to MettaStars! By using our website, you agree to comply with these Terms and Conditions. Please read them carefully.</p>
      </section>
      
      <section className={styles.section}>
        <h2>2. User Responsibilities</h2>
        <p>Users must be respectful and responsible while engaging with our finance, mental health, and spirituality resources.</p>
      </section>
      
      <section className={styles.section}>
        <h2>3. Content Usage</h2>
        <p>All materials provided are for educational purposes only. Unauthorized reproduction or distribution is prohibited.</p>
      </section>
      
      <section className={styles.section}>
        <h2>4. Privacy Policy</h2>
        <p>We value your privacy. Please review our Privacy Policy for details on how we handle your personal data.</p>
      </section>
      
      <section className={styles.section}>
        <h2>5. Disclaimers</h2>
        <p>MettaStars does not provide professional financial, medical, or spiritual advice. Users should seek expert guidance where necessary.</p>
      </section>
      
      <section className={styles.section}>
        <h2>6. Contact Us</h2>
        <p>If you have any questions about these terms, please contact us at support@mettastars.org.</p>
      </section>
      </div>
    </div>
  );
}

export default TNC;