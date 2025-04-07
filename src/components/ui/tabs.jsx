import React, { useState } from 'react';
import styles from './tabs.module.css';

export const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const tabChildren = React.Children.map(children, child => {
    if (child.type === TabsList) {
      return React.cloneElement(child, { setActiveTab, activeTab });
    }
    if (child.type === TabsContent) {
      return child.props.value === activeTab ? child : null;
    }
    return child;
  });

  return <div>{tabChildren}</div>;
};

export const TabsList = ({ children, setActiveTab, activeTab, className }) => (
  <div className={`${styles.tabList} ${className}`}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { setActiveTab, activeTab })
    )}
  </div>
);

export const TabsTrigger = ({ value, children, setActiveTab, activeTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`${styles.tabTrigger} ${activeTab === value ? styles.active : ''}`}
  >
    {children}
  </button>
);

export const TabsContent = ({ value, children }) => <div>{children}</div>;
