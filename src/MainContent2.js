import React from 'react';
import { Link } from 'react-router-dom';


function MainContent2() {
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
        placeholder="¡Anuncia Algo con tu Crew!"
      />
      <button className=" text-2xl border-2 bg-white border-onClickColor w-48 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5">Publicar</button>
    </div>
      <div className=''>
        <p className='bold italic text-2xl'><img alt=''/>r/YoshiElBonito</p>
        <p className='bold text-lg my-2'>Sup CREW WAOAOAO! Ayer compre el Kirby dos que me vendieron en las moritas, deberian comprarlo y así podemos jugar; cualquier cosa escribanme al privado y yo les respondo donde comprarlo :DDDD</p>
        <img alt='' src='/kirbypost.jpg' className='h-auto w-auto rounded-3xl my-7'/>
      </div>
      <div className='my-10'>
        <p className='bold italic text-2xl'><img alt=''/>r/NoahEldePisto</p>
        <p className='bold text-lg my-2'>Ey ey ey, vieron que salio el nuevo juego de dragon ball? Deberiamos comprarlo y caerle a la casa con la abuelita de @YoshiElBonito y prendemos la pley pa jugar un rato! Cualquier cosa yo tengo 20 dolares y ahi pongan lo demas ustedes</p>
        <img alt='' src='/sparkingpost.jpg' className='h-auto w-auto rounded-3xl my-7'/>
      </div>
   
  </div>
  
  );
}

export default MainContent2;
