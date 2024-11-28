import React from 'react';
import './CatalogCard.css';
import { Link } from 'react-router-dom';

export function CatalogCard2() {
  return (
    <div className="card-list">
      <div className="card-container">
        {/* Imagen fija en el div "screen" */}
        <div 
          className="screen bg-cover bg-center" 
          style={{ backgroundImage: `url('marvel.png')` }} // Cambia el path aquí
        ></div>
        <div className="controls">
          <button className="play-button">
            <Link to="/playing2">Play</Link>
          </button>
          <div className="circle large"></div>
          <div className="circle small"></div>
        </div>
      </div>
    </div>
  );
}

export default CatalogCard2;
