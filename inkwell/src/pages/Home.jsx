import React from 'react';
import './Home.css';

const Home = () => {
  const messages = [
    { sender: 'Mr. Squid', text: 'Sounds like you had a fun day, Pranav! I\'d say...', time: '11:32am' },
    { sender: 'Sharky', text: 'Hm. I don\'t know what to say to that. Let\'s see...', time: '8:56am' },
    { sender: 'Whale-O', text: 'Sounds like you had a fun day, Pranav! I\'d say...', time: '11:32am' },
    { sender: 'Mr. Squid', text: 'Hm. I don\'t know what to say to that. Let\'s see...', time: '8:56am' },
    { sender: 'Mr. Squid', text: 'Sounds like you had a fun day, Pranav! I\'d say...', time: '11:32am' },
    { sender: 'Eelvis', text: 'Hm. I don\'t know what to say to that. Let\'s see...', time: '8:56am' },
    { sender: 'Raymond', text: 'Sounds like you had a fun day, Pranav! I\'d say...', time: '11:32am' },
    { sender: 'Captain Starfish', text: 'Hm. I don\'t know what to say to that. Let\'s see...', time: '8:56am' },
    { sender: 'Mr. Squid', text: 'Sounds like you had a fun day, Pranav! I\'d say...', time: '11:32am' },
  ];

  return (
    <div className="home-container">
      <div className="app">
        <header className="top-bar">
          <img src="/inkwell-pink-new.png" alt="Inkwell" className="logo" />
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
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className="message">
                  <button className="star-button">★</button>
                  <div className="message-sender">{message.sender}</div>
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">{message.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 