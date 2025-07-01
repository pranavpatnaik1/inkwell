import React, { useState, useEffect } from 'react';
import { messageService } from '../services/messageService';
import './Home.css';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    // TODO: Implement write functionality
    console.log('Write button clicked');
  };

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedMessage(null), 300); // Clear after animation
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
    </div>
  );
};

export default Home; 