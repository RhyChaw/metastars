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

            <section className={styles.hero}>
                <h2>Welcome to Meta Stars</h2>
                <p>Shaping the future with cutting-edge technology and innovation.</p>
                <a href="#contact" className={styles.button}>Get in Touch</a>
            </section>

            <section id="about" className={styles.section}>
                <h2>About Us</h2>
                <p>Meta Stars is a pioneering tech company delivering innovative solutions that redefine industries.</p>
            </section>

            <section id="features" className={styles.section}>
                <h2>Our Features</h2>
                <ul>
                    <li>🚀 Cutting-edge Technology</li>
                    <li>💡 Innovative Solutions</li>
                    <li>👨‍💻 Expert Development Team</li>
                </ul>
            </section>

            <section id="contact" className={styles.section}>
                <h2>Contact Us</h2>
                <p>Email us at <strong>contact@metastars.com</strong></p>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 Meta Stars. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;
