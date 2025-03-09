import React, { useState } from 'react';
import styles from './Contact.module.css'; // Assuming your styles are here
import UNIVERSE from '../assets/universe.jpg'; // Import your image

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add logic here to handle form submission
        alert('Form submitted!');
    };

    return (
        <div className={styles.landingPage}>
            <div className={styles.heroSection}>
                <img src={UNIVERSE} alt="UNIVERSE" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Contact us</h1>
                    <h2>[ Add text ]</h2>
                </div>
            </div>

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
