// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [view, setView] = useState('login'); // Estado para manejar la vista actual

  const handleToggle = () => {
    setView(view === 'login' ? 'signup' : 'login');
  };

  return (
    <div>
      <h1>Welcome! Please log in or sign up.</h1>
      {view === 'login' ? <Login /> : <Signup />}
      <button onClick={handleToggle}>
        {view === 'login' ? 'Go to Sign Up' : 'Go to Login'}
      </button>
    </div>
  );
};

export default App;
