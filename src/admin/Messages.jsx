import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import styles from '../adminStyling/AdminDashboard.module.css'; // Create a CSS module for Sidebar styling

const Messages = () => {
    const [messages, setMessages] = useState([]);

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

    return (
        <div className={styles.messagesContainer}>
            <h2>Messages</h2>
            {messages.length > 0 ? (
                messages.map((message, index) => (
                    <div key={index} className={styles.message}>
                        <h3>{message.name}</h3>
                        <p><strong>Email:</strong> {message.email}</p>
                        <p><strong>Message:</strong> {message.message}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No messages found.</p>
            )}
        </div>
    );
};

export default Messages;
