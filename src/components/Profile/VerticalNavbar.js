import React, { useState } from 'react'
import icon from '../../assets/icon.png'
import Profile from './Profile';
import MyProducts from './MyProducts';
import OrderHistory from './OrderHistory';
import AddProduct from './AddProduct';

function VerticalNavbar() {

    function renderIem(param){
        switch (param) {
            case 1:
                return <Profile />;
                break;
            case 2:
                return <MyProducts />;
                break;
            case 3:
                return <OrderHistory />
                break;
            case 4:
                return <AddProduct setNavbarOption={setNavbarOption}/>
            default:
                return <h1>Hello Chetan</h1>;
        }
    };

    const [navbarOption,setNavbarOption] = useState(1);
  return (
    <div className='flex h-full mt-16'>
        <div className="verticalNavbar p-2 flex-[0.2] h-screen bg-gray-100">
            <div className="imageContainer w-full border-b-2 border-black border-solid">
                <img src={icon} alt="" className='object-contain m-auto'/>
            </div>
            <div className="navbarOptions h-[100%]">
                <ul className='flex flex-col justify-start mt-10 h-[100%]'>
                    <li className='my-2 text-center hover:bg-black hover:text-white hover:duration-300 cursor-pointer p-3 font-bold' onClick={()=>{setNavbarOption(1)}}>Profile</li>
                    <li className='my-2 text-center hover:bg-black hover:text-white hover:duration-300 cursor-pointer p-3 font-bold' onClick={()=>{setNavbarOption(2)}}>My Products</li>
                    <li className='my-2 text-center hover:bg-black hover:text-white hover:duration-300 cursor-pointer p-3 font-bold' onClick={()=>{setNavbarOption(4)}}>Add Product</li>
                    <li className='my-2 text-center hover:bg-black hover:text-white hover:duration-300 cursor-pointer p-3 font-bold' onClick={()=>{setNavbarOption(3)}}>Order History</li>
                    <li className='my-2 text-center hover:bg-red-500 hover:text-white hover:duration-300 cursor-pointer p-3 font-bold'>Log Out</li>
                </ul>
            </div>
        </div>
        {
            renderIem(navbarOption)
        }
    </div>
  )
}

export default VerticalNavbar