import React from 'react';
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
  return (
    <div className={styles.container}>
        <div className={styles.mw}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <p className={styles.updated}>Last Updated: August 2024</p>
      
      <section className={styles.section}>
        <h2>1. Introduction</h2>
        <p>Welcome to MettaStars! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.</p>
      </section>
      
      <section className={styles.section}>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Personal Information: When you sign up, we collect your name, email, and any other details required for registration.</li>
          <li>Content: If you submit blogs or other content, we store and display them publicly as per your settings.</li>
          <li>Usage Data: We may collect data on how you interact with our website to improve user experience.</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To communicate with you regarding updates and relevant content.</li>
          <li>To moderate and manage user-submitted blogs and other content.</li>
          <li>To ensure the security of our platform.</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>4. Sharing of Information</h2>
        <p>We do not sell or share your personal information with third parties except as required by law or to improve our services with trusted partners.</p>
      </section>
      
      <section className={styles.section}>
        <h2>5. Security</h2>
        <p>We implement appropriate security measures to protect your personal data. However, no online system is completely secure, so we encourage users to take precautions.</p>
      </section>
      
      <section className={styles.section}>
        <h2>6. Your Rights</h2>
        <p>You can update or delete your account information at any time. Contact us if you wish to remove your data from our platform.</p>
      </section>
      
      <section className={styles.section}>
        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Users will be notified of significant changes.</p>
      </section>
      
      <section className={styles.section}>
        <h2>8. Contact Us</h2>
        <p>If you have any questions, please contact us at privacy@mettastars.org.</p>
      </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
