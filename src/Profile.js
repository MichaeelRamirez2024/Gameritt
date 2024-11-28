import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="flex items-center ml-6 pb-8 ">
<div className="w-40 h-24 rounded-full bg-blue-200 flex items-center justify-center mr-2">
        <img src="arlet.jpeg" alt="Chat Icon" className="rounded-full" />
      </div>
  <div className=" text-white bg-onClickColor py-5 px-2 ml-6 rounded-3xl">
    <button className="bg-orange-500 text-white rounded-full px-6 py-2"><Link to="/perfil">Arlet Enamorado</Link></button>
    <p className=' inline-flex font-bold rounded-full bg-mainColor my-3 px-3'>Online <p className=' rounded-full bg-green-600 w-3 h-3 mt-2 ml-2'></p></p>
    <button className="border border-orange-500 text-white-500 rounded-full px-6 py-2"><Link to = "/landing">Log Out</Link></button>
  </div>
</div>

  );
}

export default Profile;
