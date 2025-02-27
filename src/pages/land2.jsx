import React from "react";
import "./MettaStars.css";
import { useNavigate } from "react-router-dom";
import Home1 from "../assets/home1.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate('/fill-form');
  };
  return (
    <>
    <div className="landing-container">
    <header className="hero">
        <div className="hero-content">
          <img src={Home1} className="hero-image" alt="Metta Stars" />
          <div className="hero-text">
            <h1>Welcome to Metta Stars Foundation</h1>
            <p>A Journey of Compassion, Growth, and Transformation</p>
            <p>Imagine a world where financial security, mental peace, and spiritual 
              wisdom come together to create a fulfilling life. At Metta Stars Foundation, 
              we are dedicated to turning this vision into reality. Rooted in the Buddhist 
              concept of Metta—unconditional loving-kindness—we believe in empowering individuals 
              to lead balanced and meaningful lives through Financial Literacy, Mental Health, 
              and Spirituality.</p>
            <button className="join-btn" onClick={handleJoinClick}>Join Us</button>
            <h2>What we offer?</h2>
            <ul>
              <li>A compassionate space to learn, grow, and transform.</li>
              <li>Resources, workshops, and community support to guide you.</li>
              <li>A movement that fosters personal and collective well-being.</li>
            </ul>
          </div>
        </div>
      </header>
      
      <section className="focus-areas">
  <h2 className="Focus-areas-name-title-12341234">FOCUS AREAS</h2>
  <div className="focus-cards">
    <div className="focus-card">
      <div className="card-inner">
        <div className="card-front">
          <h3>Financial Literacy</h3>
          <p>Master Your Money, Own Your Future</p>
          <p>Your relationship with money can shape your life. Whether you're struggling with debt, planning for your future, or seeking financial freedom, we provide practical guidance to help you make informed choices.</p>
        </div>
        <div className="card-back">
          <h3>Interactive Tools & Resources:</h3>
          <ul>
            <li>Personalized budgeting templates</li>
            <li>Real-life case studies on overcoming financial struggles</li>
            <li>Live Q&A sessions with financial experts</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="focus-card">
      <div className="card-inner">
        <div className="card-front">
          <h3>Mental Health</h3>
          <p>A Healthy Mind for a Fulfilling Life</p>
          <p>Mental well-being is the foundation of success and happiness. We create a safe space for open conversations, self-discovery, and emotional resilience.</p>
        </div>
        <div className="card-back">
          <h3>How We Support You:</h3>
          <ul>
            <li>Guided meditations & mindfulness exercises</li>
            <li>Interactive webinars with therapists</li>
            <li>Community support groups for shared healing</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="focus-card">
      <div className="card-inner">
        <div className="card-front">
          <h3>Spirituality</h3>
          <p>Connecting with Your True Self</p>
          <p>Spirituality isn’t just about religion—it’s about understanding yourself, finding purpose, and embracing inner peace. We help you explore different perspectives to enrich your life.</p>
        </div>
        <div className="card-back">
          <h3>Ways to Explore:</h3>
          <ul>
            <li>Virtual retreats for self-reflection</li>
            <li>Inspiring stories of transformation</li>
            <li>Guided practices in mindfulness & gratitude</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      
<section className="initiatives">
  <h2 className="initiatives-title">Creating Impact, One Step at a Time</h2>

  <div className="initiatives-section">
    <h3 className="initiatives-subtitle">Past Initiatives</h3>
    <p className="initiatives-tagline">Real Change, Real Stories</p>
    <ul className="initiatives-list">
      <li>🎯 <strong>Financial Freedom Bootcamp</strong> – Over 200 participants found strategies to break free from debt.</li>
      <li>💙 <strong>Mental Health Open Circles</strong> – Safe spaces for emotional healing and resilience-building.</li>
      <li>🧘 <strong>Mindfulness Retreats</strong> – Transformative weekends filled with peace, reflection, and growth.</li>
    </ul>
  </div>

  <div className="initiatives-section">
    <h3 className="initiatives-subtitle">Upcoming Initiatives</h3>
    <p className="initiatives-tagline">What’s Next? Be Part of the Change!</p>
    <ul className="initiatives-list">
      <li>📊 <strong>Interactive Financial Well-being Challenges</strong></li>
      <li>🧠 <strong>Monthly Mental Health Support Webinars</strong></li>
      <li>🙏 <strong>In-person & Online Spirituality Gatherings</strong></li>
    </ul>
  </div>

  <button className="initiative-btn">Join an Initiative Today</button>
</section>
    </div>
    </>
    
  );
};

export default LandingPage;
