import React from "react";
import {AiOutlineEdit} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
function ContactChange({setEmail,setPhoneNo,setAddress}) {
    const handleSubmit =(e) => {
        e.preventDefault()
        var close = document.getElementById('close1')
        close.click()
    }
  return (
    <div>
      <div className="outer-Container h-[80%]">
        <div className="h-full flex items-center justify-center relative">
          <div class="flex justify-between items-center w-full">
            <div className="upload_btn flex justify-center items-center flex-[0.5]">
              <button
                type="button"
                class="inline-block px-1 py-1 text-black font-medium text-xs leading-tight uppercase rounded shadow-sm  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:text-black active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalXy"
              >
                <AiOutlineEdit size={20}/>
              </button>
            </div>
          </div>
          <div
            class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalXy"
            tabindex="-1"
            aria-labelledby="exampleModalXlLabel"
            aria-modal="true"
            role="dialog"
          >
            <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
              <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    class="text-xl font-medium leading-normal text-gray-800"
                    id="exampleModalXlLabel"
                  >
                    Update your Information
                  </h5>
                  <button
                    type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    id="close1"
                  >
                    <AiOutlineClose className="hover: scale-105" />
                  </button>
                </div>
                <div class="modal-body relative p-4">
                    <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="font-bold">Enter Your New E-mail:</label>
                    <input type="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="w-full border-2 border-black rounded-md hover:border-b-2 mb-3 p-1 hover:border-blue-900" onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="Phone" className="font-bold">Enter Your New Phone No:</label>
                    <input type="tel" id="Phone" className="w-full border-2 border-black rounded-md mb-3 p-1 hover:border-b-2 hover:border-blue-900" onChange={e => setPhoneNo(e.target.value)}/>
                    <label htmlFor="address" className="font-bold">Enter Your New Address:</label>
                    <input type="text" id="address" className="w-full border-2 border-black rounded-md mb-3 p-1 bottom-0  hover:border-b-2 hover:border-blue-900" onChange={e => setAddress(e.target.value)}/>
                    <div className="submitbtn flex justify-end">
                        <input type="submit" className="border-2 border-black px-3 py-1 text-black rounded-md hover:bg-black hover:text-white cursor-pointer" value="Submit" />
                    </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactChange;
