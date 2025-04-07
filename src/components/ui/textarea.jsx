import React from 'react';
import styles from './textarea.module.css';

export const Textarea = (props) => {
  return <textarea className={styles.textarea} {...props} />;
};
