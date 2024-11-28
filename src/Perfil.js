import React, { useEffect } from 'react';
import Status from './Status';
import Post from './Post';
import Post2 from './Post2';
import Navbar from './Navbar';

export function Perfil() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-container flex gap-4 p-4 h-screen overflow-hidden">
        <div className="w-1/2 flex justify-center sticky top-20 h-screen">
          <Status />
        </div>
        
        <div className="w-1/2 overflow-y-scroll h-screen">
          <Post />
          <Post2 />
          <Post />
          <Post2 />
          <Post />
          <Post2 />
        </div>
      </div>
    </>
  );
}

export default Perfil;
