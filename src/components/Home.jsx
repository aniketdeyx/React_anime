// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AnimeSearch from './AnimeSearch';
import './Home.css';  // Import the CSS file

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Anime World</h1>
        <p>Your one-stop destination for all things anime.</p>
        <Link to="/tour" className="cta-button">
          Take a Tour
        </Link>
      </div>
      <div className="features-section">
        <h2>Explore our features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Latest Anime</h3>
            <p>Stay updated with the latest anime releases and news.</p>
          </div>
          <div className="feature-card">
            <h3>Personalized Dashboard</h3>
            <p>Access your dashboard for personalized content and recommendations.</p>
          </div>
          <div className="feature-card">
            <h3>Community</h3>
            <p>Join our community to discuss and share your favorite anime.</p>
          </div>
        </div>
      </div>
      <AnimeSearch />
    </div>
  );
}
