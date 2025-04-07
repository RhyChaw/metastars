import React from 'react';
import styles from './button.module.css';

export const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};
