import React from 'react';

function Widget() {
  return (
    <div className="bg-orange-400 rounded-3xl p-5 relative text-white">
    <h1 className="text-3xl font-bold mb-2">JOIN!</h1>
    <p className="mb-4">Find your crew!</p>
    
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-2">
        <img src="geek1.jpg" alt="NewGeeks" className="rounded-full" />
      </div>
      <span className="text-lg bold">NewGeeks</span>
    </div>
    
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-2">
        <img src="geek2.jpg" alt="RetroLovers" className="rounded-full" />
      </div>
      <span className="text-lg bold">RetroLovers</span>
    </div>


  </div>
  );
}

export default Widget;
