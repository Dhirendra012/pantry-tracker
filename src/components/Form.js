import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from "../store/itemSlice";

const Form = ({show}) => {

    const [ name , setName ] = useState("");
    const [ quantity , setQuantity ] = useState(0);
    const [ coverPic , setCoverPic ] = useState("");

    const dispatch = useDispatch();

    const addItemHandler = () => 
    {
        dispatch(addItem({
            name: name, quantity: quantity, coverPic: coverPic
        }));

        show();
    }

    return ( 
        <form onClick={(e) => e.preventDefault() } className='fixed inset-0 flex flex-col justify-center items-center z-50 h-[500px] bg-blue-200 w-[450px] m-auto rounded-lg'>
            <p className='p-2 font-bold text-2xl'>Add New Item</p>
            <div className='flex flex-col m-1 p-1'>
                <label for="name">Name</label>
                <input id="name" type="text" onChange={(e) => setName(e.target.value) } value={name} className='border border-black rounded-lg my-1 px-2 py-1 w-[300px]' />
            </div>
            <div className='flex flex-col m-1 p-1'>
                <label for="quantity">Quantity</label>
                <input id="quantity" type="number" onChange={(e) => setQuantity(e.target.value) } value={quantity} className='border border-black rounded-lg my-1 px-2 py-1 w-[300px]' />
            </div>
            <div className='flex flex-col m-1 p-1'>
                <label for="img">Image URL</label>
                <input id="img" type="text" onChange={(e) => setCoverPic(e.target.value) } value={coverPic} className='border border-black rounded-lg my-1 px-2 py-1 w-[300px]' />
            </div>

            <div>
                <button className='m-1 py-1 px-4 bg-green-400 rounded-lg' onClick={show}>Cancel</button>
                <button onClick={ addItemHandler} className='m-1 py-1 px-4 bg-green-400 rounded-lg'>Submit</button>
            </div>
        </form>
    )
}

export default Form;
