import React from 'react';
import styles from './Finance.module.css'; // Ensure this CSS file exists
import FINANCE_IMAGE from '../assets/Financee.jpg'; // Import your image
import BudgetCard from '../assets/budgetingCard.jpg'; // Import your image
import PassiveIncomeCard from '../assets/passiveIncomeCard.jpg'; // Import your image
import FinancialIndependenceCard from '../assets/FinDependance.jpg'; // Import your image
import FinLit from '../assets/finlit.jpeg'; // Import your image

const cardData = [
  {
    title: "Budgeting",
    image: BudgetCard,
    description: "Manage your finances and budget for the future accordingly",
  },
  {
    title: "Financial Independence",
    image: FinancialIndependenceCard,
    description: "Achieve long-term financial security through smart planning.",
  },
  {
    title: "Passive Income",
    image: PassiveIncomeCard,
    description: "Learn how to make money work for you while you sleep.",
  },
];

const Finance = () => {
  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <img src={FINANCE_IMAGE} alt="Finance" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1>Finance</h1>
          <p className='italic smol'>Financial literacy is a tool that helps in building secure future</p>
        </div>
      </div>

      {/* Focus Areas with Flip Cards */}
      <div className={styles.focusCards}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={card.image} alt={card.title} className={styles.cardImage} />
                <h2>{card.title}</h2>
              </div>
              <div className={styles.cardBack}>
                <p>{card.description}</p>
                <button className={styles.learnMoreButton}>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* Quote Section */}

     <div className={styles.quoteSection}>
                    <div className={styles.quoteBackground}></div>
                    <p className={styles.quoteText}>
                        <em>"It's not about how much money you make, but how much you keep, how hard it works for you, and how many generations you keep it for." ~ Robert Kiyosaki</em>
                    </p>
                    <img src={FinLit} alt="Inspiring Visual" className={styles.quoteImage} />
                </div>

    </div>
  );
};

export default Finance;
