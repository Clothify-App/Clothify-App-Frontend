import React,{useState} from 'react';
import men from '../../assets/men.jpg';
import {AiOutlineMail} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';
import MiniProductCard from './MiniProductCard';
import ProfilePhoto from './ProfilePhoto';
import ContactChange from './ContactChange';
function Profile() {
    const [imgURL,setImgURL] = useState(men)
    const [email,setEmail] = useState("chetangamne12@gmail.com")
    const [phoneNo,setPhoneNo] = useState("9588601697")
    const [address,setAddress] = useState("Dwarka Bhavan Near Datta Mandir Morwadi Cidco Nashik-422009")

  return (
        <div className="profileContent flex-[0.8] h-screen bg-white overflow-y-scroll overflow-x-hidden scrollbar-hide relative">
           <div className="innerContainer max-h-[80%] top-[10%] absolute w-[100%] bg-white py-1 px-6 flex justify-evenly">
                <div className="leftInfo max-h-full flex-[0.35] border-2 rounded-md flex flex-col">
                    <div className="leftImageContainer h-[40%] w-full object-contain p-3 bg-[#F5F5F5] relative" >
                        <img src={imgURL} alt="" className='h-[100%] w-[100%] object-contain'/>
                        <div className={`editImage absolute bottom-0 right-0 p-2`}>
                            <span className='cursor-pointer'>
                            <ProfilePhoto setimgURL={setImgURL}/>
                            </span>
                        </div>
                    </div>
                    <div className="leftContactInfo p-3 h-[60%]">
                        <div className="option1 flex justify-between">
                        <h3 className='font-bold'>Contact Details</h3>
                        <span>
                        <ContactChange setEmail={setEmail} setPhoneNo={setPhoneNo} setAddress={setAddress}/>
                        </span>
                        </div>
                        <div className="leftTextOption flex flex-col my-2 border-b-2">
                            <p className='mb-1 '>Name</p>
                            <div className="innerText">
                                <p className='text-lg'>Chetan Gamne</p>
                            </div>
                        </div>
                        <div className="leftTextOption flex flex-col my-2 border-b-2">
                            <p className='mb-1'>Email</p>
                            <div className="innerText flex justify-between">
                                <p className='text-lg'>{email}</p>
                                <span>
                                    <AiOutlineMail />
                                </span>
                            </div>
                        </div>
                        <div className="leftTextOption flex flex-col my-2 border-b-2">
                            <p className='mb-1'>Phone Number</p>
                            <div className="innerText flex justify-between">
                                <p className='text-lg'>+91 {phoneNo}</p>
                                <span>
                                    <BsTelephone />
                                </span>
                            </div>
                        </div>
                        <div className="leftTextOption flex flex-col my-2 border-b-2">
                            <p className='mb-1'>Address</p>
                            <div className="innerText flex-wrap break-words">
                                <p className='text-lg'>{address}</p>
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