import React from 'react';
import styles from '../adminStyling/AdminDashboard.module.css'; // Create a CSS module for Sidebar styling

const Sidebar = ({ activeTab, onTabChange }) => {
  return (
    <div className={styles.sidebar}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. Here you can manage the application.</p>
      <ul>
        <li
          onClick={() => onTabChange('messages')}
          className={activeTab === 'messages' ? styles.activeTab : ''}
        >
          Messages
        </li>
        <li
          onClick={() => onTabChange('members')}
          className={activeTab === 'members' ? styles.activeTab : ''}
        >
          Member Directory
        </li>
        <li
          onClick={() => onTabChange('blogs')}
          className={activeTab === 'blogs' ? styles.activeTab : ''}
        >
          Blogs
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
