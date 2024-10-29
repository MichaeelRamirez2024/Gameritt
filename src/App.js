import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./navbar/Navbar"
import {Login} from "./login/Login";
import { Registro } from "./registro/Registro";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}
