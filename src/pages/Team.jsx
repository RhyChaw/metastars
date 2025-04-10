import React, { useState, useEffect } from "react";
import styles from "../styles/Team.module.css";
import { motion } from "framer-motion";
import supabase from '../supabaseClient';

const Team = () => {
  const [teamImages, setTeamImages] = useState({
    rahul: '',  
    rhythm: ''
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const [
          { data: rahulImage },
          { data: rhythmImage }
        ] = await Promise.all([
          supabase.storage.from('asset').getPublicUrl('rah.webp'),
          supabase.storage.from('asset').getPublicUrl('me.webp')
        ]);

        setTeamImages({
          rahul: rahulImage.publicUrl,
          rhythm: rhythmImage.publicUrl
        });

        setIsReady(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadAssets();
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

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
          <img src={teamImages.rahul} alt="Rahul Dhingra" className={styles.image} />
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
          <img src={teamImages.rhythm} alt="Rhythm Chawla" className={styles.image} />
          <div className={styles.info}>
            <h3>Rhythm Chawla</h3>
            <em>Software Developer</em>
            <p>
            Rhythm is a second-year Computer Science student at the University of Waterloo, 
            with a deep passion for AI and full-stack web development. They are inspired by 
            the vision of Metta Stars and are eager to contribute to the community's growth 
            and betterment. With a strong desire to help bring positive change, Rhythm is 
            committed to using their skills to support innovative projects and make a meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
