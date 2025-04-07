import React, { useState, useEffect } from 'react';
import styles from '../styles/TempBlog.module.css'; // Assuming you're using CSS Modules

// importing images
import topBanner from '../tempImages/topBanner.png';
import financialAnxiety from '../tempImages/financialAnxiety.png';
import Domino from '../tempImages/Domino.png';


import supabase from '../supabaseClient';

function TempBlog() {

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
    <div className={styles.Bigcontainer}>
      <div className={styles.container}>

      <img className={styles.topBanner} src={topBanner} alt="Top Banner" />
      <h1 className={styles.title}>Money makes the world go round</h1>
      
      <div className={styles.metaContainer}>
        <div className={styles.date}>
          <span className={styles.dateIcon}>📅</span>
          <span>March 25, 2025</span>
        </div>
        <div className={styles.authorSection}>
          <div className={styles.authorText}>
            <p className={styles.author}>Rahul Dhingra</p>
            <p className={styles.role}>Founder</p>
          </div>
          <img className={styles.authorImage} src={teamImages.rahul} alt="Rahul Dhingra" />
        </div>
      </div>

      
      {/* <img className={styles.placeholderImage} src="/placeholder.jpg" alt="Blog Image Placeholder" /> */}
      
      <p className={styles.content}>
        Money makes the world go round - but if you’ve ever laid awake at night wondering how you’ll make ends meet, 
        you know it can also make your world stop spinning. Financial anxiety isn’t just about numbers; it seeps into your health, 
        relationships, and mental well-being. It can make you feel like you're stuck in a never-ending loop of stress, guilt, and frustration. 
        But what if I told you there’s a way out?
      </p>
      <blockquote className={styles.quote}>
        Let's break it down.
      </blockquote>
      <div className={styles.horizontalLine} />
      <h2 className={styles.subheading}>Recognizing Financial Anxiety</h2>

      <p className={styles.content}>
        Ever felt your heart race when checking your bank account? Or avoided looking at bills altogether? 
        Financial anxiety can show up in different ways:
      </p>
      <div className={styles.financialAnxietySigns}>
        <ul className={styles.list}>
          <li>Constant worry about money, even if nothing urgent is happening.</li>
          <li>Feeling ashamed of financial mistakes and not wanting to talk about them.</li>
          <li>Avoiding money-related decisions because it feels overwhelming.</li>
          <li>Losing sleep or experiencing physical stress (headaches, stomach issues).</li>
        </ul>
        <img className={styles.financialAnxietyImage} src={financialAnxiety} alt="Financial Anxiety" />
      </div>

      <p className={styles.content}>
          Financial anxiety thrives in secrecy. The more we avoid facing it, the more power it has over us. 
          The first step to breaking free? Recognizing when you’re in it.
        </p>
      
      <blockquote className={styles.quote}>
        Deep Question: When was the last time you avoided checking your bank balance? What was the fear behind it?
      </blockquote>
      
      <div className={styles.horizontalLine} />
      {/* Domino Effect */}
      <h2 className={styles.subheading}>The Domino Effect: How Financial Anxiety Impacts Your Life</h2>
      <p className={styles.content}>Money stress affects mental health, relationships, and decision-making.</p>
      
      <div className={styles.financialAnxietySigns}>
        <div>
        <h3 className={styles.subsubheading}>Mental & Physical Health</h3>
        <p className={styles.content}>Stress about money can cause anxiety, depression, and even physical issues 
          like high blood pressure. It’s a silent weight on your shoulders, making everyday life harder.</p>
        
        <h3 className={styles.subsubheading}>Personal Relationships</h3>
        <p className={styles.content}>Money problems are one of the leading causes of relationship issues. Whether 
          it’s arguing with your partner, feeling guilty about not supporting family, or isolating yourself from 
          friends—you’re not alone in this.</p>
        
        <h3 className={styles.subsubheading}>Decision-Making & Confidence</h3>
        <p className={styles.content}>Financial stress clouds judgment. You might take a job you hate just for security,
          avoid investing in yourself, or hesitate to take necessary risks. Over time, this creates a cycle of fear 
          rather than growth.</p>
      
        </div>
        <img className={styles.dominoImage} src={Domino} alt="Domino Effect" />
      </div>
      <blockquote className={styles.quote}>
        Imagine if financial stress burned calories. We’d all have six-packs by now.
      </blockquote>
      
      <div className={styles.horizontalLine} />

      <h2 className={styles.subheading}>Overcoming Financial Anxiety: Step by Step</h2>
      <p className={styles.content}>The key isn’t to “fix” everything overnight. It’s about building financial resilience—block by block.</p>
      
      <h3 className={styles.subsubheading}>Accept & Reset</h3>
      <p className={styles.content}>The hardest yet most powerful step is acceptance.</p>
      
      <h3 className={styles.subsubheading}>Small, Daily Wins</h3>
      <ul className={styles.list}>
        <li>Check your bank account daily—just to build awareness.</li>
        <li>Set tiny, achievable financial goals.</li>
        <li>Create a budget that allows space for joy.</li>
      </ul>
      
      <h3 className={styles.subsubheading}>Rewire Your Money Mindset</h3>
      <p className={styles.content}>Stop associating money with fear. See it as a tool, not a monster.</p>
      
      <h3 className={styles.subsubheading}>Surround Yourself with the Right Voices</h3>
      <p className={styles.content}>Talk about money with trusted friends—it removes shame.</p>
      
      <blockquote className={styles.quote}>
        Deep Question: If your bank account reflected your self-worth, what would the balance be?
      </blockquote>
      
      <div className={styles.horizontalLine} />
      <h2 className={styles.subheading}>My Story: From Anxiety to Action</h2>
      <p className={styles.content}>
        I’ve lived through financial chaos - multiple times. From being a student drowning in debt, running a business that didn’t pan out, 
        to restarting my career from scratch, financial anxiety was my constant companion.
      </p>
      <p className={styles.content}>
        I spent years avoiding my finances, hoping things would somehow get better. But nothing changed - until I did.
      </p>
      <div className={styles.horizontalLine} />
      <blockquote className={styles.quote}>
        Final Thought: What’s Your Next Step? Financial anxiety doesn’t define you. Your actions do.
      </blockquote>
      </div>
    </div>
  );
}

export default TempBlog;
