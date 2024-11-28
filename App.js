import React, { useEffect } from 'react';
import { Navbar } from './Navbar.js';
import { CatalogCard } from './CatalogCard.js';
import {CatalogCard2} from './CatalogCard2.js';
import './CatalogCard.js';
import { Sidebar } from './Sidebarnews.js';
import './App.css';
import Widget from './Widget';
import Chat from './Chat';


function App() {
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
          <CatalogCard />
          <CatalogCard2></CatalogCard2>
        </div>

        {/* Chat and Widget */}
        <div className="col-span-1 sticky top-0 space-y-4 mr-6 mt-6">
          <Widget />
          <Chat />
        </div>
      </div>
    </>
  );
}
 
export default App;