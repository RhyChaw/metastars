import React from 'react';
import styles from './switch.module.css';

export const Switch = ({ checked, onCheckedChange }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={onCheckedChange} />
      <span className={styles.slider} />
    </label>
  );
};
