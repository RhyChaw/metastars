import React from 'react';
import styles from './landing.module.css';

const Landing = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Meta Stars</h1>
                <nav>
                    <ul className={styles.navList}>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section id="about" className={styles.section}>
                <h2>About Us</h2>
                <p>Meta Stars is a leading company in the tech industry, providing innovative solutions for the modern world.</p>
            </section>
            <section id="features" className={styles.section}>
                <h2>Features</h2>
                <ul>
                    <li>Cutting-edge technology</li>
                    <li>Innovative solutions</li>
                    <li>Expert team</li>
                </ul>
            </section>
            <section id="contact" className={styles.section}>
                <h2>Contact</h2>
                <p>Get in touch with us at contact@metastars.com</p>
            </section>
            <footer className={styles.footer}>
                <p>&copy; 2023 Meta Stars. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;