import React from 'react';

export function Post() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md border border-orange-500 relative w-full max-w-lg">
      <div className="flex items-center mb-2">
        <img
          src="arlet.jpeg"
          alt="User Icon"
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <p className="font-bold">/ArlettNew</p>
          <span className="text-gray-400 text-sm">3d ago</span>
        </div>
      </div>
      <p className="text-gray-700 mb-2">
        Hey! Look I've bought the new DS game! Now I can compete against @personname!!!!!
      </p>
      <img
        src="post.png"
        alt="Game"
        className="w-full rounded-md mb-2"
      />
      <div className="flex space-x-4">
        <span className="text-red-500">❤️</span>
        <span className="text-blue-500">💬</span>
      </div>
      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-4 h-4 bg-orange-500 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-green-500 rounded-full"></div>
    </div>
  );
}

export default Post;
