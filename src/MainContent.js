import React from 'react';
import { Link } from 'react-router-dom';


function MainContent() {
  return (
    <div className="flex-grow bg-white p-3 border-l-2 border-mainColor pl-1">
      <h1 className="text-5xl text-mainColor pl-5 my-8 font-bold ">NEWS</h1>
      <div className='m-3'>
        <button className=" text-2xl border-2 bg-white border-onClickColor w-48 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5 mr-2">FYP</button>
        <button className=" text-2xl border-2 bg-white border-onClickColor w-48 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5  mr-2"><Link to={"/news2"}>CREW</Link></button>
        <button className=" text-2xl border-2 bg-white border-onClickColor w-48 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5"><Link to={"/news3"}>Trending</Link></button>
      </div>
    <div className=" mb-3 ">
      <textarea
        className="mb-2 w-full h-24 border-2 border-onClickColor rounded-lg p-2 text-xl"
        placeholder="¿Qué estás pensando?"
      />
      <button className=" text-2xl border-2 bg-white border-onClickColor w-48 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5">Publicar</button>
    </div>
      <div className=''>
        <p className='bold italic text-2xl'><img alt=''/>r/ArlettNew</p>
        <p className='bold text-lg my-2'>Hey! Look I’ve bought the new DS game! Now i can compete against @personname!!!!!!</p>
        <img alt='' src='/post.png' className='h-auto w-auto rounded-3xl my-3'/>
      </div>
    
   
  </div>
  
  );
}

export default MainContent;
