import React from 'react';
import styles from '../styles/AboutMS.module.css';
import DHAMMAWHEEL from '../assets/DharmaWheel.png';
import CHAKRAS from '../assets/chakras.png';
import LOGO from '../assets/logo.jpeg';

function AboutMS() {
  const handleClick = () => {
    window.location.href = '/fill-form';
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.mw1200}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>About Metta Stars</h1>
        <p>Empowering lives with financial wisdom, mental well-being, and spiritual depth.</p>
      </section>
 
      {/* Who We Are */}
      <section className={styles.section2}>
        <div className={styles.content}>
          <h2>Who We Are</h2>
          <p>
          Metta Stars Foundation was born from the belief that fulfillment lies in the harmony of financial stability, emotional resilience, and spiritual wisdom. Established in July 2024, our movement is dedicated to empowering individuals with knowledge, strength, and compassion.
          </p>
          <p>
          What started as a late-night conversation between two people, reflecting on the world’s struggles and the power of compassion, soon became a mission. 'What if we could do something? What if we could create real change?' From this heartfelt exchange, Metta Stars was born.
          </p>
          <p>
          We recognize that wealth is more than money, health is more than the body, and wisdom is more than knowledge. Our holistic approach ensures that financial success does not come at the cost of mental peace, and spiritual growth remains connected to real-world responsibilities.
          </p>
        </div>
        <img src={LOGO} alt="Who We Are" className={styles.image} />
      </section>

      

      {/* The Meaning of Metta */}
      <section className={styles.section}>
        <img src={CHAKRAS} alt="The Meaning of Metta" className={styles.image} />
        <div className={styles.content}>
          <h2>The Meaning of ‘Metta’</h2>
          <p>
            The name "Metta" originates from the Pali word <strong>Mettā</strong>, meaning unconditional goodwill, loving-kindness, and boundless compassion. Inspired by Buddhist teachings, Metta is not just an emotion—it is an active practice of extending warmth, understanding, and kindness.
          </p>
          <p>
            Just as the stars guide travelers in the dark, compassion and wisdom light the way to true success. At Metta Stars, we integrate financial literacy, mental wellness, and spirituality to help individuals radiate their light and transform their lives.
          </p>
        </div>
      </section>



    <section className={styles.dhamma}>
    <h1 className={styles.dhaamaTitle}>The Eight Corners of Dhamma</h1>
    <img src={DHAMMAWHEEL} alt="Chakras" className={styles.chakrasImage} />
    <div className={styles.dhammaContainer}>
        <div className={styles.dhammaGrid}>
            {[
                { title: "Right Understanding", desc: "Seeing life with clarity, integrating financial, mental, and spiritual well-being." },
                { title: "Right Intent", desc: "Acting with purpose, integrity, and commitment to growth." },
                { title: "Right Speech", desc: "Using words to uplift and inspire positive connections." },
                { title: "Right Action", desc: "Making decisions aligned with ethical values and the greater good." },
                { title: "Right Livelihood", desc: "Pursuing careers that create prosperity without harm." },
                { title: "Right Effort", desc: "Developing perseverance, discipline, and self-improvement." },
                { title: "Right Mindfulness", desc: "Practicing awareness to navigate life with wisdom and balance." },
                { title: "Right Concentration", desc: "Focusing on meaningful goals without distractions." }
            ].map((item, index) => (
                <div key={index} className={styles.dhammaItem}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>

        <img src={DHAMMAWHEEL} alt="Dhamma Wheel" className={styles.dhammaImage} />
    </div>
</section>
          
      {/* Join the Metta Movement */}
      <section className={styles.join}>
        <h2>Join the Metta Stars Movement</h2>
        <p>Whether you seek financial independence, mental clarity, or spiritual depth, embark on this journey with us.</p>
        <button className={styles.joinButton} onClick={() => handleClick()}>Get involved</button>
      </section>
      </div>

    </div>
  );
}

export default AboutMS;
