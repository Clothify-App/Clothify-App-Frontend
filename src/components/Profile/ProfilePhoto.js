import React from "react";
import Cropper from "./cropper";
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineCamera} from 'react-icons/ai'

function ProfilePhoto({setimgURL}) {
  return (
    <>
    <div className="outer-Container h-[80%]">

    <div className="h-full flex items-center justify-center relative">
      <div class="flex justify-between items-center ">
        <div className="upload_btn flex justify-center items-center flex-[0.5]">
        <button
          type="button"
          class="inline-block px-1  rounded-full border-gray-600 py-1 text-black font-medium text-xs leading-tight uppercase  shadow-sm  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:text-black active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal" 
          data-bs-target="#exampleModalXl"
        >
        <AiOutlineCamera size={20}/>
        </button>
        </div>
      </div>
      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalXl"
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
                Upload Image
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close"
              ><AiOutlineClose className="hover: scale-105" /></button>
            </div>
            <div class="modal-body relative p-4">
                {
                    <Cropper setimgURL={setimgURL} />
                }
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</>
  );
}

export default ProfilePhoto;
