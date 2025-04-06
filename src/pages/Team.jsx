import React from "react";
import styles from "../styles/Team.module.css";
import rahulImg from "../assets/rah.jpeg"; // Replace with actual image path
import rhythmImg from "../assets/me.jpg"; // Replace with actual image path
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className={styles.bigContainer}>
    <div className={styles.teamContainer}>
      <h2 className={styles.heading}>Meet The Team</h2>
      
      <motion.div
        className={styles.member}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={rahulImg} alt="Rahul Dhingra" className={styles.image} />
        <div className={styles.info}>
          <h3>Rahul Dhingra</h3>
          <em>Founder | Director</em>
          <p>
          Rahul founded Metta Stars with a vision to bring financial literacy,
           mental well-being, and spirituality into people’s lives. His leadership 
           is driven by a deep passion and compassion for empowering others and 
           creating meaningful change.
          </p>
        </div>
      </motion.div>
      
      <motion.div
        className={styles.member}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src={rhythmImg} alt="Rhythm Chawla" className={styles.image} />
        <div className={styles.info}>
          <h3>Rhythm Chawla</h3>
          <em>IT Specialist</em>
          <p>
            A Computer Science enthusiast who played a key role in website development
            and design, ensuring a seamless and stunning user experience.
          </p>
        </div>
      </motion.div>
    </div>
    </div>

  );
};

export default Team;
