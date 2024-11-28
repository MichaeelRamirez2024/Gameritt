import React from 'react';

function Chat() {
  return (
    <div className="bg-orange-400 rounded-3xl p-5 relative text-white mt-5">
    <h1 className="text-3xl font-bold mb-2">CHAT NOW</h1>
    <p className="mb-4">Chat with anybody!</p>

    <div className='bg-onClickColor p-4 rounded-3xl'>
    <div className="flex items-center mb-4 ">
      <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-2">
        <img src="arlet.jpeg" alt="Chat Icon" className="rounded-full" />
      </div>
      <span className="text-lg">r/Arlettnew</span>
    </div>

    <div className="bg-brown-400 rounded-lg p-2 flex items-center">
      <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-2">
        <img src="profile2.jpg" alt="Chat Icon" className="rounded-full" />
      </div>
      <input 
        type="text" 
        placeholder="Type a message..." 
        className="flex-1 p-2 rounded-lg border border-gray-300 text-black"
      />
    </div>
    </div>
    
  </div>

  );
}

export default Chat;
