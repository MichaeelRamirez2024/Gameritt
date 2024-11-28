import React from "react";
import "./Search.css";

export function Search() {
    return(
  <div className="search-bar">
    <input type="text" placeholder="Buscar..." className="search-input" />
    <button className="search-button">
      <span role="img" aria-label="search-icon">Lupa</span>
    </button>
  </div>
    )
};

