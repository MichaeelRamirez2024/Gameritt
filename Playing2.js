import { Navbar } from './Navbar.js';
import { Juego2 } from './Juego2.js';
import './Playing.css';


export function Playing2() {
  return (
    <div className="playing-container flex flex-col h-screen">
      <Navbar />
      <div className="content flex flex-grow">
        <div className="flex-grow p-4"> {/* Contenedor para el juego */}
          <Juego2 />
        </div>
      </div>
    </div>
  );
}

export default Playing2;

