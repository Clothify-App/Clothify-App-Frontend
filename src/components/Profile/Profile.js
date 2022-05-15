import React from 'react';
import men from '../../assets/men.jpg';
import {AiOutlineMail} from 'react-icons/ai';

import {BsTelephone} from 'react-icons/bs';
import MiniProductCard from './MiniProductCard';
function Profile() {
  return (
        <div className="profileContent flex-[0.8] h-screen bg-white overflow-y-scroll overflow-x-hidden scrollbar-hide relative">
           <div className="innerContainer max-h-[80%] top-[10%] absolute w-[100%] bg-white py-1 px-6 flex justify-evenly">
                <div className="leftInfo max-h-full flex-[0.35] border-2 rounded-md flex flex-col">
                    <div className="leftImageContainer h-[40%] w-full object-contain p-3 bg-[#F5F5F5]">
                        <img src={men} alt="" className='h-[100%] w-[100%] object-contain'/>
                    </div>
                    <div className="leftContactInfo p-3 h-[60%]">
                        <h3 className='font-bold'>Contact Details</h3>
                        <div className="leftTextOption flex flex-col my-2 border-b-2">
                            <p className='mb-1 '>Name</p>
                            <div className="innerText">
                                <p className='text-lg'>Chetan Gamne</p>
                            </div>
                        </div>
                        <div className="leftTextOption flex flex-col my-2 border-b-2">
                            <p className='mb-1'>Email</p>
                            <div className="innerText flex justify-between">
                                <p className='text-lg'>Chetangamner12@gmail.com</p>
                                <span>
                                    <AiOutlineMail />
                                </span>
                            </div>
                        </div>
                        <div className="leftTextOption flex flex-col my-2 border-b-2">
                            <p className='mb-1'>Phone Number</p>
                            <div className="innerText flex justify-between">
                                <p className='text-lg'>+91 9588601697</p>
                                <span>
                                    <BsTelephone />
                                </span>
                            </div>
                        </div>
                        <div className="leftTextOption flex flex-col my-2 border-b-2">
                            <p className='mb-1'>Address</p>
                            <div className="innerText">
                                <p className='text-lg'>Dwarka Bhavan,Morwadi,Cidco,<br/>
                                Nashik-422009</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightInfo flex-[0.45] border-2 rounded-md flex flex-col">
                    <div className="rightTopText border-b-2 flex-[0.1] flex items-center">
                        <h2 className='w-full  text-center text-2xl font-bold'>Your Rented Products</h2>
                    </div>
                    <div className="rightMiddleSection flex-[0.8] flex flex-col p-2 overflow-y-scroll">
                        <MiniProductCard />
                        <MiniProductCard />
                        <MiniProductCard />
                        <MiniProductCard />
                        <MiniProductCard />
                    </div>
                    <div className="decriptionText flex-[0.1] p-2">
                        <p className='text-sm'>Disclaimer:
                            If AnyKind Of fault or damaged Occured in product User will gets charged for Product whole original Price.</p>
                    </div>
                </div>
           </div>
        </div>
  )
}

export default Profile