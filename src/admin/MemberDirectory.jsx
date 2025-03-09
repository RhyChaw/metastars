import React from 'react';
import styles from './AdminDashboard.module.css'; // Create a CSS module for Member Directory styling

const MemberDirectory = ({ members }) => {
  return (
    <div className={styles.memberDirectoryContainer}>
      <h2>Member Directory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberDirectory;
