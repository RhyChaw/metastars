import React from 'react';
import styles from './Footer.module.css'; // Importing CSS module

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.heading}>Let’s Build Something Beautiful Together</h2>
            <p className={styles.paragraph}>
                We’d love to connect with you. Whether you have questions, want to collaborate, or seek guidance, reach out to us.
            </p>
            <p className={styles.contact}>
                📧 Email: <a href="mailto:contact@mettastars.org" className={styles.link}>contact@mettastars.org</a>
            </p>
            <p className={styles.location}>
                📍 Location: <span className={styles.highlight}>[Your City, Country]</span>
            </p>
            <p className={styles.socials}>
                📱 Follow Us on Social Media: <span className={styles.highlight}>@MettaStars</span> (Instagram, Facebook, LinkedIn)
            </p>
            <button className={styles.button}>Send Us a Message</button>
        </footer>
    );
};

export default Footer;
