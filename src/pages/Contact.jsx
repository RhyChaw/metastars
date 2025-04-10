import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient'; // Ensure correct import
import styles from '../styles/Contact.module.css';

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
                <h1 className={styles.heroTextAnimate}>Contact Us</h1>
                <p className={styles.heroTextAnimate}>
                    Every message matters to us. We reply with care, because at Metta Stars, you’re not just reaching out<br />
                    <strong>you’re being welcomed in.</strong>
                </p>
            </div>
                <div className={styles.heroImageContainer}>
                    <img src={landUrl} alt="UNIVERSE" className={styles.heroImage} />
                </div>
            </div>

            <div className={styles.sideBySide}>
            <div className={styles.someMoreStuff}>
                <p>
                    <strong>We’d Love to Hear From You.</strong>
                </p>
                <p>
                    If something you read here moved you, made you pause, or made you feel seen - <strong>don’t let it end here.</strong> Tell us your story. Share your thoughts. Whether you’re looking for guidance, collaboration, or just need someone to listen, <strong>Metta Stars is more than a platform - it’s a community.</strong>
                </p>
                <p>
                    And if you feel called to be part of our mission - <strong>to contribute, collaborate, or join our team in spreading wisdom, healing, and hope - reach out.</strong> We’re always looking for kindred spirits who want to make a real impact.
                </p>
                <p>
                    Drop us a message. <strong>Let’s connect, heart to heart.</strong>
                </p>
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
            

        </div>
    );
};

export default Contact;
