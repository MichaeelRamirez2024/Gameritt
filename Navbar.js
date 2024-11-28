import React from 'react'
import './Navbar.css';

export function Navbar() {
  return (
    <div className="header-container">
      <div className="left-icon">
        <span className="star-icon">✦</span>
        <span className="text">GAMERIT</span>
      </div>
      <div className="right-icons">
        <span className="dot">●</span>
        <span className="dot">●</span>
        <span className="dot">●</span>
      </div>
    </div>
  )
}

export default Navbar;