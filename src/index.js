import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { News } from './News.js';
import { Playing } from './Playing.js';
import { Playing2 } from './Playing2.js';
import Perfil from './Perfil.js';
import { Landing } from './Landing.js';
import { Registro } from './Registro.js';
import { Login } from './Login.js';
import { News2 } from './News2.js';
import News3 from './News3.js';
import { Playerchat } from './Playerchat.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/news" element={<News />} />
      <Route path="/playing" element={<Playing></Playing>}></Route>
      <Route path="/playing2" element={<Playing2></Playing2>}></Route>
      <Route path='/perfil' element={<Perfil></Perfil>}></Route>
      <Route path='/landing' element={<Landing></Landing>}></Route>
      <Route path='/registro' element={<Registro></Registro>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/news2' element={<News2></News2>}></Route>
      <Route path='/news3' element={<News3></News3>}></Route>
      <Route path='/chat' element={<Playerchat></Playerchat>}></Route>
    </Routes>
  </Router>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
