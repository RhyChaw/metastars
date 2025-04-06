import React, { useEffect, useState } from "react";
import styles from "../compStyling/Loader.module.css"; // Adjust the path as necessary

const Loader = ({ logo, duration = 2000, onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    // Start the transition after a short delay
    setTimeout(() => {
      setMoving(true);
    }, duration);

    // Hide loader after animation
    setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, duration);
  }, [duration, onComplete]);

  if (!loading) return null;

  return (
    <div className={`${styles.loader_container} ${moving ? styles.moving : ""}`}>
      <img src={logo} alt="Logo" className={`${styles.loader_logo}`} />
    </div>
  );
};

export default Loader;
