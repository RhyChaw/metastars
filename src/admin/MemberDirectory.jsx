import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import styles from './AdminDashboard.module.css';
import MemberDetails from './MemberDetails';

const MemberDirectory = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase.from('volunteers').select('firstName, lastName, email, phoneNumber, experience, availability, preferredAreas, canDrive, location, physicalLimitations, hearAbout, emergencyContact');
      if (error) {
        console.error('Error fetching members:', error);
      } else {
        setMembers(data);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className={styles.memberDirectoryContainer}>
      <h2>Member Directory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.firstName} {member.lastName}</td>
              <td>{member.email}</td>
              <td>
                <button onClick={() => setSelectedMember(member)}>See More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedMember && <MemberDetails member={selectedMember} onClose={() => setSelectedMember(null)} />}
    </div>
  );
};

export default MemberDirectory;
