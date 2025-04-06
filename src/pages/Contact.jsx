import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient'; // Ensure correct import
import styles from './Contact.module.css';

const Contact = () => {
    const [landUrl, setLandUrl] = useState('');
    const [isReady, setIsReady] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { data, error } = await supabase
            .from('contacted')
            .insert([{ name: formData.name, email: formData.email, message: formData.message }]);

        if (error) {
            console.error('Error submitting form:', error.message);
            alert('Error submitting form. Please try again.');
        } else {
            setSuccessMessage('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        }

        setIsSubmitting(false);
    };

    useEffect(() => {
        const loadAssets = async () => {
          try {
            const [{ data: img }] = await Promise.all([
              supabase.storage.from('asset').getPublicUrl('universe.webp'),
            ]);
    
            if (img?.publicUrl) {
              const image = new Image();
              image.src = img.publicUrl;
    
              image.onload = () => {
                setLandUrl(img.publicUrl);
                setIsReady(true); // Render once image is fully loaded
              };
            }
          } catch (error) {
            console.error('Error loading media:', error);
          }
        };
    
        loadAssets();
      }, []);

    return (
        <div className={styles.landingPage}>
            <div className={styles.heroSection}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTextAnimate}>Contact us</h1>
                    <p className={styles.heroTextAnimate}>
                        We’d love to hear from you! Whether you have questions, feedback, or just want to say hi, feel free to reach out.
                    </p>
                </div>
                <div className={styles.heroImageContainer}>
                    <img src={landUrl} alt="UNIVERSE" className={styles.heroImage} />
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
                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
