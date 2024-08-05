import React from 'react';

const Card = ({name , url ,quantity}) => 
{
  return (
    <div className='text-white m-4 p-1 w-52 bg-slate-500 rounded-lg'>
        <img className='rounded-md' src={url}/>
        <div className='px-3 py-2 font-bold'>
            <p className=''>{name}</p>
            <p>Quantity : <span>{quantity}</span></p>
            <div className='flex justify-evenly my-1'>
                <button className='bg-slate-400 w-10 rounded-md p-1'>+</button>
                <button className='bg-slate-400 w-10 rounded-md p-1'>-</button>
                <button className='bg-slate-400 rounded-md p-1 px-6'>Used</button>
            </div>
        </div>
    </div>
  )
}

export default Card;
