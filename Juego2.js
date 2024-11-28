import React from 'react';
import { Link } from 'react-router-dom';

export function Juego2() {
  return (
    <div className="juego-container bg-white shadow-md rounded-md flex flex-col h-full max-w-4xl mx-auto p-6">
      {/* Botón para volver */}
      <h2 className="text-lg font-semibold mb-4">
        <Link
          to="/"
          className="text-orange-500 hover:text-orange-600 transition"
        >
          ← Volver
        </Link>
      </h2>
      {/* Contenedor del iframe */}
      <div className="iframe-container relative w-full flex-grow">
        <iframe
          src="https://www.retrogames.cc/embed/9123-marvel-vs-capcom-clash-of-super-heroes-980123-usa.html"
          title="MarvelvsCapcom"
          className="w-full h-[70vh] max-w-full rounded-md border border-gray-300"
          allowFullScreen
          scrolling="no"
        />
      </div>
    </div>
  );
}

export default Juego2;