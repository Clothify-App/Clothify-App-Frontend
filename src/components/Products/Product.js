import React from 'react'
import women from '../../assets/women.png'
import {AiFillStar} from 'react-icons/ai'
function Product() {
  return (
    <div className='m-5 flex'>
        <div className="imageContent w-1/2">
            <img src={women} alt="" className='w-full h-1/2 object-contain'/>
        </div>
        <div className="content px-10 pt-2 flex flex-col w-1/2 pr-5">
            <h2 className='font-bold'>Twist Font Textured Slinky Ruched Midi Dress</h2>
            <h6 className='my-3'>Product code: F2243A</h6>
            <p className='font-bold text-4xl text-[#C52424] my-3'>$ 15.24</p>
            <h3 className='font-semibold my-3'>Colour: Black</h3>
            <div className="startContent flex">
                <AiFillStar className='text-[#C52]'/>
                <AiFillStar className='text-[#C52]'/>
                <AiFillStar className='text-[#C52]'/>
                <AiFillStar className='text-[#C52]'/>
                <AiFillStar className='text-[#C52]'/>
            </div>
            <p className='text-sm my-2'>Hight Quality CLoth Available.it is a sign of trending fashion and this is what you should have in your cloth collection</p>
            <label htmlFor="size" className='mt-3'>Select Size:</label>
            <select name="size" id="size" className='flex border-2'>
                <option value="large"><button className='p-2'>L</button></option>
                <option value="small"><button className='p-2'>S</button></option>
                <option value="medium"><button className='p-2'>M</button></option>
            </select>
            <button className='w-full bg-black text-white my-10 p-2'>ADD TO CART</button>
        </div>
    </div>
  )
}

export default Product