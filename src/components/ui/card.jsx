import React from 'react';
import styles from './card.module.css';

export const Card = ({ children, className = '' }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className = '' }) => {
  return <div className={`${styles.cardContent} ${className}`}>{children}</div>;
};
