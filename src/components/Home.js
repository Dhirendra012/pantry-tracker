import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => 
{
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
      <p className='bg-gray-700 rounded-full m-2 py-2 px-4 text-gray-300 text-xl'>Introducing to Pantry Tracker</p>
      <div className='flex flex-col items-center'>
        <p className='font-bold text-5xl m-1 p-1 text-gray-800'>Effortlessly Manage Pantry</p>
        <p className='font-bold text-4xl m-1 p-1 text-gray-800'>With my Smart Tracker</p>
      </div>
      <p className='text-xl text-white'>Take Control of your Kitchen</p>
      <Link className='m-3 py-3 px-4 font-bold bg-slate-500 rounded-lg text-gray-300' to={"/main"}>CLICK HERE TO START</Link>
    </div>
  )
}

export default Home;
