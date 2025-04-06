import React from 'react';
import styles from './MemberDetails.module.css';

const MemberDetails = ({ member }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{member.firstName} {member.lastName}</h2>
      <div className={styles.details}>
        <p><strong>Email:</strong> {member.email}</p>
        <p><strong>Phone:</strong> {member.phoneNumber}</p>
        <p><strong>Experience:</strong> {member.experience}</p>
        <p><strong>Availability:</strong> {member.availability}</p>
        <p><strong>Preferred Areas:</strong> {member.preferredAreas}</p>
        <p><strong>Can Drive:</strong> {member.canDrive ? 'Yes' : 'No'}</p>
        <p><strong>Location:</strong> {member.location}</p>
        <p><strong>Physical Limitations:</strong> {member.physicalLimitations}</p>
        <p><strong>How did you hear about us?</strong> {member.hearAbout}</p>
        <p><strong>Emergency Contact:</strong> {member.emergencyContact}</p>
      </div>
    </div>
  );
};

export default MemberDetails;
