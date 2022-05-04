import React from 'react'
import women from '../../assets/women.png'
import icon from '../../assets/icon.png'

function Profile() {
  return (
        <div className="profileContent flex-[0.8] h-screen bg-slate-200 overflow-y-scroll overflow-x-hidden scrollbar-hide">
            <div className="coverImg h-56 bg-gradient-to-r from-purple-500 to-pink-500 w-full mb-[6rem]">
                <img src={women} className="profileImg h-36 w-36 rounded-full relative top-[10rem] left-16 " />
            </div>
            <div className="firstBio relative left-16">
                <h1 className='font-semibold text-3xl'>Gulab Chameli</h1>
                <h6 className='text-sm'>prathamesh@gmail.com</h6>
            </div>
            <div className="secondBio">
                <fieldset className='border-2 border-black w-[80%] relative left-16'>
                    <legend>Personalia:</legend>
                    <div className="option1 flex my-2">
                        <label htmlFor="" className='mx-2 font-bold'>Address:</label>
                        <p>Dwarka Bhavan near datta mandir Morwadi Cidco Nashik-422009</p>
                    </div>
                    <div className="option1 flex my-2">
                        <label htmlFor="" className='mx-2 font-bold'>Age:</label>
                        <p>19</p>
                    </div>
                    <div className="option1 flex my-2">
                        <label htmlFor="" className='mx-2 font-bold'>Sex:</label>
                        <p>Female</p>
                    </div>
                    
                </fieldset>
            </div>
        </div>
  )
}

export default Profile