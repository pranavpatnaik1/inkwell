import React from 'react';
import { Link } from 'react-router-dom';
import '../Inkwell.css';

const Landing = () => {
  return (
    <>
      <div className="inkwell-container">
        <div className="inkwell-text">
          <img 
            src="/new-landing.png"
            alt="inkwell - the journal that writes with you" 
            className="logo-image"
          />
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-container">
          <h2>Your AI-Powered Journal Companion</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Smart Journaling</h3>
              <p>Write freely while our AI helps organize your thoughts and provides gentle prompts for deeper reflection.</p>
            </div>
            <div className="feature-card">
              <h3>Emotional Insights</h3>
              <p>Understand your emotional patterns with AI-powered analysis of your journal entries over time.</p>
            </div>
            <div className="feature-card">
              <h3>Private & Secure</h3>
              <p>Your thoughts stay yours. End-to-end encryption ensures your journal remains completely private.</p>
            </div>
            <div className="feature-card">
              <h3>Writing Assistant</h3>
              <p>Get gentle suggestions and prompts that help you explore your thoughts more deeply.</p>
            </div>
          </div>
          <Link to="/home" className="start-button">Start Your Journey</Link>
        </div>
      </div>
    </>
  );
};

export default Landing; 