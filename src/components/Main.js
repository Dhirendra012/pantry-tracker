import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';
import { useSelector } from 'react-redux';

const Main = () => {
  const [showForm, setShowForm] = useState(false);
  const [ store , setStore ] = useState([]);

  const { storeItem } = useSelector((store) => store.item);
  const showFormHandler = () => { setShowForm(true); }
  const hideFormHandler = () => { setStore(storeItem); setShowForm(false);  }

  return (
    <div className='p-4 flex bg-black h-screen z-0'>
      <div className='w-9/12'>
        <div>
          <div className='flex justify-between items-center m-2 p-1'>
            <h1 className='text-white font-bold text-3xl '>-| Pantry Tracker</h1>
            <button className='text-slate-300 font-bold text-xl bg-[#599e87] px-3 py-2 rounded-lg' 
              onClick={showFormHandler}>Add Item</button>
          </div>
          <div className='z-10'>{showForm && <Form show={hideFormHandler}/> }</div>
          <div className='m-4 flex'>
            <input placeholder='Search Items..' className='w-9/12 py-2 px-4 rounded-lg border border-black' />
            <p className='font-bold w-3/12 py-2 mx-3 px-2 text-gray-300 bg-[#599e87] rounded-lg'>Sort By :
              <select className='bg-[#599e87] pl-5' name="sort" id="item">
                <option value="name">Name </option>
                <option value="quantity">Quantity</option>
              </select>
            </p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          { storeItem.map((item) => <Card name={item.name} url={item.coverPic} quantity={item.quantity}/> ) }
        </div>
        
      </div>
      <div className='w-3/12 rounded-lg m-2 p-3'>
        <p className='font-bold text-2xl text-white '>Low Inventory </p>

      </div>
    </div>
  )
}

export default Main;
