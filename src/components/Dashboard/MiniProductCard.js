import React from "react";
import men from "../../assets/men.jpg";

function MiniProductCard() {
  return (
    <div className="bg-[#F5F5F5] rounded-md p-4 flex my-2">
      <div className="imageContent flex-[0.3] p-1 bg-white">
        <img
          src={men}
          alt="Product Image"
          className="h-[100px] w-[100px] object-contain m-auto"
        />
      </div>
      <div className="productDescription flex-[0.7] px-3 flex flex-col justify-between">
        <div className="topOption">
          <div className="option">
            <p className="text-lg">Leather Black Jacket</p>
          </div>
          <div className="option">
            <p className="text-sm">By Krishna Borse</p>
          </div>
        </div>
        {/* <div className="option flex justify-between">
                <p className='text-lg font-semibold'>Time Left :</p>
                <span>
                    <p className='text-[#B52547] font-bold'>10:19:59</p>
                </span>
            </div> */}
      </div>
    </div>
  );
}

export default MiniProductCard;
