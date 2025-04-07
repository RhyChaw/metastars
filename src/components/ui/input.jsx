import React from 'react';
import styles from './input.module.css';

export const Input = ({ type = 'text', ...props }) => {
  return <input type={type} className={styles.input} {...props} />;
};
