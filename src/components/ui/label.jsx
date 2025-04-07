import React from 'react';
import styles from './label.module.css';

export const Label = ({ children }) => {
  return <label className={styles.label}>{children}</label>;
};
