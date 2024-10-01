// src/components/Signup.js
import React from 'react';
import './Auth.css'; // Importa tu CSS

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
