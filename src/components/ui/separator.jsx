import React from 'react';
import styles from './separator.module.css';

export const Separator = ({ className = '' }) => {
  return <hr className={`${styles.separator} ${className}`} />;
};
