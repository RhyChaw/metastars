import React, { useState, useEffect } from 'react';
import styles from '../styles/Finance.module.css'; // Ensure this CSS file exists
import supabase from '../supabaseClient';

const Finance = () => {
  const [images, setImages] = useState({
    heroImage: '',
    budgetImage: '',
    passiveIncomeImage: '',
    finDepImage: '',
    quoteImage: ''
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const [
          { data: heroImg },
          { data: budgetImg },
          { data: passiveIncomeImg },
          { data: finDepImg },
          { data: quoteImg },
          { data: grennBox }
        ] = await Promise.all([
          supabase.storage.from('asset').getPublicUrl('Financee.webp'),
          supabase.storage.from('asset').getPublicUrl('budgetingCard.webp'),
          supabase.storage.from('asset').getPublicUrl('passiveIncomeCard.webp'),
          supabase.storage.from('asset').getPublicUrl('FinDependance.webp'),
          supabase.storage.from('asset').getPublicUrl('finlit.webp'),
          supabase.storage.from('asset').getPublicUrl('greenbox.jpg'),
        ]);

        setImages({
          heroImage: heroImg.publicUrl,
          budgetImage: budgetImg.publicUrl,
          passiveIncomeImage: passiveIncomeImg.publicUrl,
          finDepImage: finDepImg.publicUrl,
          quoteImage: quoteImg.publicUrl,
          happyPpl: grennBox.publicUrl
        });

        setIsReady(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadAssets();
  }, []);
  const handleClickButton = () => window.location.href = '/blogs';


  const cardData = [
    {
      title: "Budgeting",
      imageName: images.budgetImage,
      description: "Manage your finances and budget for the future accordingly",
      points: ["Track expenses", "Save effectively", "Set financial goals"],
    },
    {
      title: "Financial Independence",
      imageName: images.finDepImage,
      description: "Achieve long-term financial security through smart planning.",
      points: ["Invest wisely", "Minimize debt", "Increase savings"],
    },
    {
      title: "Passive Income",
      imageName: images.passiveIncomeImage,
      description: "Learn how to make money work for you while you sleep.",
      points: ["Stock dividends", "Real estate", "Online businesses"],
    },
  ];

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <img src={images.heroImage} alt="Finance" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1>Finance</h1>
          <p className='italic smol'>Financial literacy is a tool that helps in building a secure future</p>
        </div>
      </div>

      {/* Focus Areas with Flip Cards */}
      <div className={styles.focusCards}>
        {cardData.map((item, index) => (
          <div className={styles.card} key={index}>
            <div 
              className={styles.cardFront} 
              style={{ backgroundImage: `url(${item.imageName})` }} // Correctly setting the background image URL
            >
              <h2>{item.title}</h2>
            </div>
            <div className={styles.cardBack}>
              <ul>
                {item.points && item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button className={styles.heroBtn} onClick={handleClickButton}>Learn more</button>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
            <div className={styles.aboutSection}>
              <div className={styles.imageContainer}>
                <img src={images.happyPpl} alt="Happy People" className={styles.happyPeopleImage} />
              </div>
      
              <div className={styles.textContainer}>
                <h2>Take Control. Build Freedom.</h2>
                <p>
                At Metta Stars, we believe financial literacy isn’t just about numbers – it’s about reclaiming your power. Whether you’re getting out of debt, saving for your dreams, or trying to make sense of money for the first time, we’re here to simplify the complex.
                Through our network of trusted advisors, educators, and credible financial sources, we bring you guidance that’s real, relevant, and rooted in wisdom. This is about freedom, confidence, and building a future you’re proud of – with every decision, one step closer to peace of mind.
                </p>
              </div>
            </div>

      {/* Quote Section */}
      <div className={styles.quoteSection}>
        <div className={styles.quoteBackground}></div>
        <p className={styles.quoteText}>
          <em>"It's not about how much money you make, but how much you keep, how hard it works for you, and how many generations you keep it for." <br/></em>
          <em> - Robert Kiyosaki</em>
        </p>
        <img src={images.quoteImage} alt="Inspiring Visual" className={styles.quoteImage} />
      </div>
    </div>
  );
};

export default Finance;
