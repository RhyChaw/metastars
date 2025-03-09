import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Messages from './Messages';
import MemberDirectory from './MemberDirectory';
import Blogs from './Blogs';
import styles from './AdminDashboard.module.css'; // Ensure you have CSS styling for the main container

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('messages'); // Default tab is messages

  // Sample data
  const messages = [
    { name: 'John Doe', email: 'john@example.com', message: 'This is a test message.' },
    { name: 'Jane Smith', email: 'jane@example.com', message: 'I have a question about the platform.' },
  ];

  const memberDirectory = [
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
    { name: 'Bob Brown', email: 'bob@example.com', role: 'Designer' },
  ];

  const blogs = [
    { title: 'First Blog', content: 'This is the content of the first blog post.' },
    { title: 'Second Blog', content: 'This is the content of the second blog post.' },
  ];

  // Render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'messages':
        return <Messages messages={messages} />;
      case 'members':
        return <MemberDirectory members={memberDirectory} />;
      case 'blogs':
        return <Blogs blogs={blogs} />;
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
