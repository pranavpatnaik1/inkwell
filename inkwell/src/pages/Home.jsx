import React, { useState, useEffect } from 'react';
import { messageService } from '../services/messageService';
import './Home.css';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isComposeVisible, setIsComposeVisible] = useState(false);
  const [newMessage, setNewMessage] = useState({
    text: '',
    sender: 'You'
  });

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const fetchedMessages = await messageService.getMessages();
        setMessages(fetchedMessages);
      } catch (error) {
        console.error('Failed to load messages:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  const handleWriteClick = () => {
    setIsComposeVisible(true);
  };

  const handleCloseCompose = () => {
    setIsComposeVisible(false);
    setNewMessage({ text: '', sender: 'You' });
  };

  const handleSendMessage = async () => {
    if (!newMessage.text.trim()) return;

    try {
      const messageToSend = {
        ...newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      await messageService.addMessage(messageToSend);
      
      // Refresh messages list
      const updatedMessages = await messageService.getMessages();
      setMessages(updatedMessages);
      
      // Close compose window
      handleCloseCompose();
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedMessage(null), 300); // Clear after animation
  };

  const ComposeWindow = ({ onClose }) => {
    return (
      <div className="compose-window" onClick={(e) => e.stopPropagation()}>
        <div className="compose-header">
          <span>New Message</span>
          <div className="compose-header-actions">
            <button onClick={onClose} title="Close">×</button>
          </div>
        </div>
        
        <div className="compose-content">
          <div className="compose-fields">
            <input type="text" placeholder="To" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea 
            placeholder="Write your message here..."
            className="message-content"
          />
        </div>
        
        <div className="compose-footer">
          <button className="send-button">Send</button>
        </div>
      </div>
    );
  };

  return (
    <div className="home-container">
      <div className="app">
        <header className="top-bar">
          <img src="/inkwell-pink-new-logo.png" alt="Inkwell" className="logo" />
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile">
            <img src="/mrsquid.png" alt="Profile" className="profile-pic" />
          </div>
        </header>
        <div className="content">
          <div className="sidebar">
            <div className="menu-group">
              <div className="menu-item active">inbox</div>
              <div className="menu-item">starred</div>
              <div className="menu-item">sent</div>
            </div>
            <div className="menu-group secondary">
              <div className="menu-item">settings</div>
              <div className="menu-item">drafts</div>
              <div className="menu-item">trash</div>
            </div>
          </div>
          <div className="main">
            {loading ? (
              <div className="loading">Loading messages...</div>
            ) : (
              <div className="messages">
                {messages.map((message) => (
                  <div 
                    key={message.$id} 
                    className="message" 
                    onClick={() => handleMessageClick(message)}
                    style={{ cursor: 'pointer' }}
                  >
                    <button 
                      className="star-button" 
                      onClick={(e) => e.stopPropagation()}
                    >★</button>
                    <div className="message-sender">{message.sender}</div>
                    <div className="message-text">{message.text}</div>
                    <div className="message-time">{message.time}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="write-button" onClick={handleWriteClick} aria-label="Write new message">
        <img src="/write-btn.png" alt="Write" />
      </button>

      {/* Email Modal */}
      <div className={`modal-overlay ${isModalVisible ? 'visible' : ''}`} onClick={handleCloseModal}>
        <div className="email-card" onClick={(e) => e.stopPropagation()}>
          {selectedMessage && (
            <>
              <button className="close-button" onClick={handleCloseModal}>×</button>
              <div className="email-card-header">
                <div className="email-card-field">
                  <div className="email-card-label">From:</div>
                  <div className="email-card-value">{selectedMessage.sender}</div>
                </div>
                <div className="email-card-field">
                  <div className="email-card-label">To:</div>
                  <div className="email-card-value">You</div>
                </div>
                <div className="email-card-field">
                  <div className="email-card-label">Time:</div>
                  <div className="email-card-value">{selectedMessage.time}</div>
                </div>
              </div>
              <div className="email-card-content">
                {selectedMessage.text}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Compose Modal */}
      <div className={`modal-overlay ${isComposeVisible ? 'visible' : ''}`} onClick={handleCloseCompose}>
        <ComposeWindow onClose={handleCloseCompose} />
      </div>
    </div>
  );
};

export default Home; 