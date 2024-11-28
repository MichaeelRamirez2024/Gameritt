import React from 'react';
import { Link } from 'react-router-dom';


function MainContent3() {
  return (
    <div className="flex-grow bg-white p-3 border-l-2 border-mainColor pl-1">
      <h1 className="text-5xl text-mainColor pl-5 my-8 font-bold ">NEWS</h1>
      <div className='m-3'>
        <button className=" text-2xl border-2 bg-white border-onClickColor w-48 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5 mr-2"><Link to={"/news"}>FYP</Link></button>
        <button className=" text-2xl border-2 bg-white border-onClickColor w-48 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5  mr-2"><Link to={"/news2"}>CREW</Link></button>
        <button className=" text-2xl border-2 bg-white border-onClickColor w-48 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5"><Link to={"/news3"}>Trending</Link></button>
      </div>
    <div className=" mb-3 ">
      <textarea
        className="mb-2 w-full h-24 border-2 border-onClickColor rounded-lg p-2 text-xl"
        placeholder="Utiliza #Trending para publicar una tendencia!"
      />
      <button className=" text-2xl border-2 bg-white border-onClickColor w-48 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5">Publicar</button>
    </div>
      <div className=''>
        <p className='bold italic text-2xl'><img alt=''/>r/MarisolOrantesCandelario</p>
        <p className='bold text-lg my-2'>#Trending! Vieron que el pacman volvio a ser trending???? Ahora me siento como cuando mi apa jugaba pacman en los arcades</p>
        <img alt='' src='/pacman.gif' className='h-auto w-auto rounded-3xl my-7'/>
      </div>
      <div className='my-10'>
        <p className='bold italic text-2xl'><img alt=''/>r/KerenMaday</p>
        <p className='bold text-lg my-2'>#Trending! Vean vean mucha' va a salir un nuevo juego de Hora de Aventuras!!! Necesitamos que salga con retrocompatibilida asi todos podamos jugarlooo</p>
        <img alt='' src='/bimbo.gif' className='h-auto w-auto rounded-3xl my-10'/>
      </div>
   
  </div>
  
  );
}

export default MainContent3;
