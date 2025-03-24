import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const handleMessageSend = () => {
        window.location.href = '/contact';
    };

    return (
        <footer className={styles.footer}>
            {/* <p className={styles.heading}>
                <p className='italic'>Compassion isn’t just a word; it’s a movement. And you’re a part of it.</p>
            </p> */}
            <h2 className={styles.heading}>Let’s Build Something Beautiful Together</h2>
            <p className={`${styles.paragraph} ${styles.fadeIn}`}>
                We’d love to connect with you. Whether you have questions, want to collaborate, or seek guidance, reach out to us.
            </p>
            {/* <p className={styles.contact}>
                Email: <a href="mailto:contact@mettastars.org" className={styles.link}>contact@mettastars.com</a>
            </p> */}
            <p className={styles.paragraph}>
            </p>
            {/* <p className={styles.location}>
                Location: <span className={styles.highlight}>Waterloo, ON</span>
            </p> */}

            <div className={styles.socials}>
                <span className={styles.highlight}>@MettaStars</span>
                <div className={styles.icons}>
                    <a href='https://www.instagram.com/mettastars?igsh=MXZyNzZmOXBnaWgzeg==' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} size={36} />
                    </a>
                    <a href='https://www.facebook.com/share/169DVcab48/' target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={styles.icon} size={36} />
                    </a>
                    <a href='https://www.linkedin.com/company/metta-stars-foundation/' target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.icon} size={36} />
                    </a>
                </div>
            </div>

            <button className={styles.button} onClick={handleMessageSend}>
                Send Us a Message
            </button>
            <div className={styles.flexDown}>
                <p className={styles.contact}>
                    <a href='/privacy'>Privacy policy |</a>     
                </p>
                <p className={styles.contact}>
                    <a href='/tnc'> Terms & Conditions |</a>  
                </p>  
                <p className={styles.contact}>
                    <a href='/aboutMS'>About us</a>
                </p>
                </div>
            
            <p className={styles.contact}>
                ©MettaStars 2025, all rights reserved.
            </p>
            <p>
                Site created by <a href='https://linkedin.com/in/rhychaw' className={styles.link}>Rhythm Chawla</a>
            </p>
        </footer>
    );
};

export default Footer;
