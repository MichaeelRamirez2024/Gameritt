import { Navbar } from './Navbar.js';
import { Juego } from './Juego.js';
import './Playing.css';


export function Playing() {
  return (
    <div className="playing-container flex flex-col h-screen">
      <Navbar />
      <div className="content flex flex-grow">
        <div className="flex-grow p-4"> {/* Contenedor para el juego */}
          <Juego />
        </div>
      </div>
    </div>
  );
}

export default Playing;

