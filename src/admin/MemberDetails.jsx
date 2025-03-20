import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import styles from './MemberDetails.module.css';

const MemberDetailsPage = ( onClose ) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      const { data, error } = await supabase
        .from('volunteers')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching member details:', error);
      } else {
        setMember(data);
      }
    };

    fetchMember();
  }, [id]);

  if (!member) return <p>Loading...</p>;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>{member.firstName} {member.lastName}</h2>
        <p><strong>Email:</strong> {member.email}</p>
        <p><strong>Phone:</strong> {member.phoneNumber}</p>
        <p><strong>Experience:</strong> {member.experience}</p>
        <p><strong>Availability:</strong> {member.availability}</p>
        <p><strong>Preferred Areas:</strong> {Array.isArray(member.preferredAreas) ? member.preferredAreas.join(", ") : member.preferredAreas}</p>
        <p><strong>Can Drive:</strong> {member.canDrive ? "Yes" : "No"}</p>
        <p><strong>Location:</strong> {member.location}</p>
        <p><strong>Physical Limitations:</strong> {member.physicalLimitations}</p>
        <p><strong>Heard About Us:</strong> {member.hearAbout}</p>
        <p><strong>Emergency Contact:</strong> {member.emergencyContact}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MemberDetailsPage;
