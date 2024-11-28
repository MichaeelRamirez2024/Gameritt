import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export const Playerchat = () => {
  const [messages, setMessages] = useState([]); // Lista de mensajes
  const [message, setMessage] = useState('');  // Mensaje actual

  const sendMessage = () => {
    if (message.trim()) {
      // Agregar el mensaje actual a la lista de mensajes
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage(''); // Limpiar el campo de entrada
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="chat-container p-4">
      <h2 className="text-xl font-bold mb-4">Chat</h2>

      {/* Ventana de mensajes */}
      <div className="messages bg-gray-100 p-4 rounded-md h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="message bg-white p-2 mb-2 rounded-md shadow">
            {msg}
          </div>
        ))}
      </div>

      {/* Campo de entrada y botón de enviar */}
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-grow border border-gray-300 p-2 rounded-l-md"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        >
          Enviar
        </button>
        <button className="bg-orange-500 text-white rounded-full px-6 py-2">
          <Link to="/perfil">Go Back</Link>
        </button>
      </div>
    </div>
    </>
  );
};

export default Playerchat;
