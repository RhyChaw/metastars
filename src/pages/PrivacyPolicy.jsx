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
        <p>Welcome to MettaStars! We are committed to safeguarding your privacy and ensuring a secure online experience. This Privacy Policy outlines the types of personal information that we collect, how we use it, and the measures we take to protect it. By using our services, you consent to the practices described in this policy.</p>
      </section>
      
      <section className={styles.section}>
        <h2>2. Information We Collect</h2>
        <p>We collect various types of information to enhance your user experience and to provide our services effectively. The information we gather includes:</p>
        <ul>
          <li><strong>Personal Information:</strong> This includes your name, email address, and any other details necessary for account creation and user registration.</li>
          <li><strong>User-Generated Content:</strong> If you choose to submit content, such as blogs, comments, or other forms of user-generated content, we may store and publicly display such content in accordance with your settings and preferences.</li>
          <li><strong>Usage Data:</strong> We may collect data regarding your interactions with our website, including pages visited, time spent, and features used, to improve the functionality and user experience of the platform.</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>3. How We Use Your Information</h2>
        <p>The information we collect is utilized for a variety of purposes, including but not limited to:</p>
        <ul>
          <li><strong>Provision of Services:</strong> To provide and maintain our services, ensuring that you have access to all of the features and functionalities available on our platform.</li>
          <li><strong>Communication:</strong> To communicate important updates, promotional content, and relevant information that may enhance your experience with us.</li>
          <li><strong>Content Moderation:</strong> To moderate and manage the content you submit, ensuring it adheres to our platform's community guidelines.</li>
          <li><strong>Security and Fraud Prevention:</strong> To monitor, detect, and prevent fraudulent activity and to ensure the safety and integrity of our platform.</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>4. Sharing of Information</h2>
        <p>We do not sell, rent, or trade your personal information to third parties. However, we may share your information under the following circumstances:</p>
        <ul>
          <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities, including complying with judicial or legal processes.</li>
          <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our platform, conducting business, or servicing you, provided they agree to keep this information confidential.</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>5. Security of Your Information</h2>
        <p>We take appropriate technical and organizational measures to safeguard your personal information from unauthorized access, alteration, disclosure, or destruction. While we strive to protect your data, no system is completely secure, and we cannot guarantee the absolute security of your data.</p>
      </section>
      
      <section className={styles.section}>
        <h2>6. Your Rights and Control Over Your Data</h2>
        <p>You have the right to access, update, or delete your personal information at any time. You may also withdraw your consent to our processing of your personal data where applicable. To exercise these rights, or if you wish to remove your data from our platform, please contact us directly.</p>
      </section>
      
      <section className={styles.section}>
        <h2>7. Data Retention</h2>
        <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Upon request, we will delete or anonymize your data when it is no longer needed for these purposes.</p>
      </section>
      
      <section className={styles.section}>
        <h2>8. Changes to This Privacy Policy</h2>
        <p>We reserve the right to update and modify this Privacy Policy at any time. Any changes to this policy will be posted on this page with an updated “Last Updated” date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
      </section>
      
      <section className={styles.section}>
        <h2>9. International Transfers</h2>
        <p>If you are accessing our platform from outside of the country in which we are based, please be aware that your information may be transferred to, stored, and processed in a country that may have different data protection laws. By using our platform, you consent to the transfer of your data to such locations.</p>
      </section>
      
      <section className={styles.section}>
        <h2>10. Contact Us</h2>
        <p>If you have any questions or concerns regarding this Privacy Policy or our data practices, please do not hesitate to contact us at <strong>privacy@mettastars.org</strong>. We are committed to addressing any inquiries you may have in a timely and efficient manner.</p>
      </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
