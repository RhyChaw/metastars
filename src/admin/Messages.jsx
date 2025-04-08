import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import styles from '../adminStyling/AdminDashboard.module.css';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        const fetchMessages = async () => {
            const { data, error } = await supabase.from('contacted').select('*');

            if (error) {
                console.error('Error fetching messages:', error.message);
            } else {
                setMessages(data);
            }
        };

        fetchMessages();
    }, []);

    const openModal = (message) => {
        setSelectedMessage(message);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedMessage(null);
    };

    return (
        <div className={styles.messagesContainer}>
            <h2>Messages</h2>
            {messages.length > 0 ? (
                <table className={styles.messageTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((message, index) => (
                            <tr key={index}>
                                <td>{message.name}</td>
                                <td>{message.email}</td>
                                <td>{message.message.slice(0, 100)}...</td>
                                <td>
                                    <button onClick={() => openModal(message)} className={styles.viewButton}>
                                        View Full Message
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No messages found.</p>
            )}

            {/* Modal for displaying full message */}
            {modalOpen && selectedMessage && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedMessage.name}</h3>
                        <p><strong>Email:</strong> {selectedMessage.email}</p>
                        <p><strong>Message:</strong></p>
                        <p>{selectedMessage.message}</p>
                        <button onClick={closeModal} className={styles.closeButton}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Messages;
