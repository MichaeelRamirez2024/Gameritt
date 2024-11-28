import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export function Landing() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);
  return (
    <>
    <Navbar></Navbar>
    <div className="flex h-screen">
      {/* Imagen a la izquierda */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <img src="landing-removebg-preview.png" alt="Imagen" className="object-cover md:w-2/3 lg:w-3/4" />
      </div>

      {/* Contenido a la derecha */}
      <div className="flex-1 flex flex-col justify-center p-10">
        <h1 className="text-6xl font-bold text-orange-600 size-6 my-10">GAMERITT</h1>
        <p className="mt-4 text-gray-700 mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique sapien non gravida euismod. Sed iaculis interdum elit, 
        ac elementum ante placerat ac. Vivamus nec dui eu urna auctor luctus eu nec neque. Vestibulum eleifend, diam et facilisis sagittis, 
        lacus quam vulputate mi, sit amet posuere dolor dui in ipsum. Duis sapien eros, volutpat id sagittis id, auctor sit amet arcu. 
        Integer tincidunt, turpis vel bibendum iaculis, nunc libero finibus elit, vitae dictum ligula nisi ac nunc. Morbi volutpat risus eget orci auctor ornare. 
        Nunc at orci velit. Ut tristique massa eget orci ultricies, eu luctus nisi aliquet.
        </p>
        <div className="mt-8 flex space-x-4">
        <button className="border border-orange-500 text-orange-500 rounded-full px-6 py-2"><Link to="/Login">Sign In</Link></button>
        <button className="bg-orange-500 text-white rounded-full px-6 py-2"><Link to="/news">Invitado</Link></button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Landing;
