import React, { useEffect } from 'react';
import Widget from './Widget';
import Chat from './Chat';
import Navbar from './Navbar';
import Sidebar from './Sidebarnews';
import MainContent2 from './MainContent2';

export function News2() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 h-screen">
        {/* Sidebar */}
        <div className="col-span-1 sticky top-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-2 overflow-y-auto h-full">
          <MainContent2 />
        </div>

        {/* Chat and Widget */}
        <div className="col-span-1 sticky top-0 space-y-4 mt-5 mr-6">
          <Widget />
          <Chat />
        </div>
      </div>
    </>
  );
}
