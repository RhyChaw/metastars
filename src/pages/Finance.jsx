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
    points: ["Track expenses", "Save effectively", "Set financial goals"],
  },
  {
    title: "Financial Independence",
    image: FinancialIndependenceCard,
    description: "Achieve long-term financial security through smart planning.",
    points: ["Invest wisely", "Minimize debt", "Increase savings"],
  },
  {
    title: "Passive Income",
    image: PassiveIncomeCard,
    description: "Learn how to make money work for you while you sleep.",
    points: ["Stock dividends", "Real estate", "Online businesses"],
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
          <p className='italic smol'>Financial literacy is a tool that helps in building a secure future</p>
        </div>
      </div>

      {/* Focus Areas with Flip Cards */}
      <div className={styles.focusCards}>
        {cardData.map((item, index) => (
          <div className={styles.card} key={index}>
            <div 
              className={styles.cardFront} 
              style={{ backgroundImage: `url(${item.image})` }} // Fix: Correct image styling
            >
              <h2>{item.title}</h2>
            </div>
            <div className={styles.cardBack}>
              <ul>
                {item.points && item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button className={styles.heroBtn}>Learn more</button>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className={styles.quoteSection}>
        <div className={styles.quoteBackground}></div>
        <p className={styles.quoteText}>
          <em>"It's not about how much money you make, but how much you keep, how hard it works for you, and how many generations you keep it for." <br/></em>
          <em> - Robert Kiyosaki</em>
        </p>
        <img src={FinLit} alt="Inspiring Visual" className={styles.quoteImage} />
      </div>
    </div>
  );
};

export default Finance;
