import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Messages from './Messages';
import MemberDirectory from './MemberDirectory';
import Blogs from './Blogs';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('messages');

  const renderContent = () => {
    switch (activeTab) {
      case 'messages':
        return <Messages />;
      case 'members':
        return <MemberDirectory />;
      case 'blogs':
        return <Blogs />;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
