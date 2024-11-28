import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export function Sidebar() {
  const players = ['imThe_Best', 'PlayerGood', 'BeingGood', 'player011', 'Arlet', 'Daniel', 'Walt', 'Carlitoos', 'Bojack_Horseman'];

  return (
    <div className="hot-players-container">
      <div className="title-section">
        <button className="border border-black-100 text-white-500 rounded-full px-6 py-2"><Link to="/news">News</Link></button>
        <p>Play and compete with others!</p>
      </div>
      <div className="players-list">
        {players.map((player, index) => (
          <div key={index} className="player-item">
            <div className="avatar-circle"></div>
            <span>{player}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
