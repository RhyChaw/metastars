import React from 'react';
import styles from './AdminDashboard.module.css'; // Create a CSS module for Messages styling

const Messages = ({ messages }) => {
  return (
    <div className={styles.messagesContainer}>
      <h2>Messages</h2>
      {messages.map((message, index) => (
        <div key={index} className={styles.message}>
          <h3>{message.name}</h3>
          <p><strong>Email:</strong> {message.email}</p>
          <p><strong>Message:</strong> {message.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Messages;
