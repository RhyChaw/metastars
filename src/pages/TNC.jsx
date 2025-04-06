import React from 'react';
import styles from '../styles/TNC.module.css';

function TNC() {
  return (
    <div className={styles.container}>
        <div className={styles.mw}>
      <h1 className={styles.heading}>Terms and Conditions</h1>
      <p className={styles.updated}>Last Updated: August 2024</p>
      
      <section className={styles.section}>
        <h2>1. Introduction</h2>
        <p>Welcome to MettaStars. By accessing or using our website (the "Service") provided by MettaStars ("we," "us," or "our"), you agree to be bound by and comply with these Terms and Conditions ("Terms"). These Terms govern your use of the Service, including all content, features, and functionalities available through the website. If you do not agree to these Terms, you must refrain from using the Service.</p>
        <p>We reserve the right to modify or update these Terms at any time, and any such changes will be effective immediately upon posting. It is your responsibility to review these Terms periodically to ensure you are aware of any updates.</p>
      </section>
      
      <section className={styles.section}>
        <h2>2. User Responsibilities</h2>
        <p>By using our Service, you agree to act in accordance with all applicable laws and regulations. You acknowledge that you are solely responsible for your actions while interacting with the content provided on the Service. You agree to use the website and its features in a manner that is respectful of others and in compliance with the Terms set forth herein.</p>
        <p>Specifically, you agree not to:</p>
        <ul>
          <li>Engage in any conduct that is unlawful, abusive, defamatory, or otherwise harmful to other users or third parties;</li>
          <li>Use the Service for fraudulent or malicious purposes;</li>
          <li>Attempt to hack, disable, or otherwise interfere with the functionality of the website or its servers;</li>
          <li>Distribute or transmit any harmful or illegal content through the Service, including but not limited to viruses, malware, or spyware.</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>3. Content Usage</h2>
        <p>All materials, content, and information provided on the Service, including text, graphics, logos, images, audio clips, and other materials (collectively, "Content") are the property of MettaStars or its licensors and are protected by applicable copyright, trademark, and other intellectual property laws.</p>
        <p>MettaStars grants you a limited, non-exclusive, non-transferable license to access and use the Content for personal, non-commercial purposes. You may not reproduce, distribute, modify, display, or otherwise exploit any Content without the express written permission of MettaStars or the respective owner of the Content.</p>
        <p>Any unauthorized use of the Content may violate copyright, trademark, and other applicable laws, and MettaStars reserves the right to take legal action against such violations.</p>
      </section>
      
      <section className={styles.section}>
        <h2>4. Privacy Policy</h2>
        <p>We take your privacy seriously and are committed to protecting your personal information. Please review our <a href="/privacy-policy" className={styles.link}>Privacy Policy</a> for detailed information regarding the collection, use, and protection of your personal data while using our Service.</p>
        <p>By using the Service, you consent to the collection and use of your data as described in our Privacy Policy. If you do not agree to the terms of our Privacy Policy, please do not use the Service.</p>
      </section>
      
      <section className={styles.section}>
        <h2>5. Disclaimers</h2>
        <p>MettaStars provides the content on the website for educational and informational purposes only. The Service, including all content, is provided on an "as-is" and "as-available" basis without any representations or warranties of any kind, either express or implied, including but not limited to the accuracy, completeness, or reliability of the information.</p>
        <p>MettaStars does not provide professional advice in the areas of finance, mental health, or spirituality. The information on the Service is not intended to substitute for professional advice or guidance. Users should seek advice from qualified professionals before making any financial, medical, or spiritual decisions.</p>
        <p>MettaStars does not warrant that the Service will be uninterrupted, error-free, or free from viruses or other harmful components. You use the Service at your own risk.</p>
      </section>
      
      <section className={styles.section}>
        <h2>6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, MettaStars shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, or data arising from your use or inability to use the Service, even if MettaStars has been advised of the possibility of such damages.</p>
        <p>Your sole and exclusive remedy for dissatisfaction with the Service is to stop using the Service. In no event shall MettaStars' total liability to you for all damages, losses, and causes of action exceed the amount paid by you, if any, for accessing the Service.</p>
      </section>
      
      <section className={styles.section}>
        <h2>7. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless MettaStars, its affiliates, officers, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, and expenses (including attorneys' fees) arising out of or in connection with your use of the Service, your violation of these Terms, or your infringement of any intellectual property or other rights of any third party.</p>
      </section>
      
      <section className={styles.section}>
        <h2>8. Termination</h2>
        <p>MettaStars reserves the right to suspend or terminate your access to the Service at its sole discretion, without notice, for any violation of these Terms or any applicable laws, or if MettaStars believes you have engaged in harmful conduct or misconduct.</p>
        <p>Upon termination, all rights granted to you under these Terms will immediately cease, and you agree to promptly discontinue all use of the Service.</p>
      </section>
      
      <section className={styles.section}>
        <h2>9. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which MettaStars is based, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in the jurisdiction of MettaStars' headquarters.</p>
      </section>
      
      <section className={styles.section}>
        <h2>10. Contact Us</h2>
        <p>If you have any questions, concerns, or comments regarding these Terms and Conditions, please contact us at <a href="mailto:support@mettastars.org" className={styles.link}>support@mettastars.org</a>.</p>
      </section>
      </div>
    </div>
  );
}

export default TNC;
