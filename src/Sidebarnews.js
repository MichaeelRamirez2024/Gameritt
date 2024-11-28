import React from 'react';
import Profile from './Profile';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className='bg-orange-400'>
      <div className='border-b-2 border-b-mainColor pl-5'>
      <div className='mt-1 inline-flex'>
      <img src="/home.png" className='w-12 h-12 mr-4' alt="Home" />
      <button className=" text-2xl border-2 bg-white border-onClickColor w-52 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5"><Link to={"/news"}> News </Link></button>
      </div>
      <div className='mt-3 inline-flex'>
      <img src='/game.png' alt='Lets Play!' className='w-12 h-12 mr-4'></img>
      <button className=" text-2xl border-2 bg-white border-onClickColor w-52 h-12 rounded-full hover:bg-onClickColor hover:text-white mb-5"><Link to="/">Let's Play!</Link></button>
      </div>
      </div>
    
      <div className='bg-mainColor rounded-3xl mt-8 mb-auto'>
          <div className=" m-5 pt-4  text-white">
            <h2 className="font-bold text-5xl ">HOT NEWS!</h2>
            <h3 className='font-semibold italic'>Popular at the moment:</h3>
            <div className='font-bold bg-onClickColor rounded-3xl px-8 py-5 mt-6'>
                <p>#retro</p>
                <p>#sparkingzero</p>
                <p>#pokemon</p>
                <p>#newnintendo</p>
                <p>#comicgames</p>
            </div>
           
          </div>
      <Profile />
      </div>
      
    </div>
  );
}

export default Sidebar;
