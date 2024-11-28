import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Status() {
  const [liked, setLiked] = useState(false); // State to track like status

  const toggleLike = () => {
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
      <div className="relative mx-auto mb-4 flex justify-center">
        <img
          src="arlet.jpeg"
          alt="Avatar"
          className="rounded-full w-32 h-32"
        />
        {/* Círculos decorativos */}
        <div className="absolute -top-4 -left-4 w-10 h-10 bg-pink-400 rounded-full"></div>
        <div className="absolute top-4 right-4 w-6 h-6 bg-green-400 rounded-full"></div>
        <div className="absolute -bottom-4 left-8 w-8 h-8 bg-orange-400 rounded-full"></div>
      </div>
      <h2 className="text-orange-600 text-3xl font-bold text-center">ARLETTT</h2>
      <p className="text-gray-500 italic text-center mb-2">Online 4d ago</p>
      <p className="text-gray-700 text-center mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
      <div className="flex justify-center space-x-4 mb-4">
        <div className="text-pink-500 flex items-center space-x-1">
          <span>❤️</span>
          <span>10002 hearts given</span>
        </div>
        <div className="text-gray-500 flex items-center space-x-1">
          <span>👥</span>
          <span>426 friends</span>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        {/* Heart button */}
        <button
          className={`rounded-full px-6 py-2 flex items-center justify-center ${
            liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={toggleLike}
        >
          {liked ? '❤️ Liked' : '🤍 Like'}
        </button>

        {/* Chat button */}
        <button className="border border-orange-500 text-orange-500 rounded-full px-6 py-2"><Link to={"/chat"}>Chat</Link>
        </button>

        {/* Go Back button */}
        <button className="bg-orange-500 text-white rounded-full px-6 py-2">
          <Link to="/news">Go Back</Link>
        </button>
      </div>
    </div>
  );
}

export default Status;

