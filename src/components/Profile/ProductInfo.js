import React from "react";

function ProductInfo({title,category,description,handleSize,price,tag,deposit,setToggle,color,setForWhom,forWhom}) {
  return (
    <div>
      <div className="productInfo flex-[0.7] p-2 z-0">
        <form
          action=""
          className="flex flex-col"
          class="z-0"
          onSubmit={(e) => {
            setToggle(2)}}
        >
          <div className="option1 flex">
          <div className="option flex flex-col justify-center w-1/2 mr-5">
            {/* Title */}
            <label htmlFor="title" className="text-[#00008B] after:content-['*'] font-bold">Title</label>
            <input
              type="Text"
              id="title"
              placeholder="Title"
              className="p-2 border-b-2 focus:border-black outline-none"
              onChange={(e) =>  title(e.target.value)}
              required
            />
          </div>
          <div className="option flex flex-col justify-center w-1/2 ml-1">
            {/* Category */}
            <label htmlFor="category" className="text-[#00008B] after:content-['*'] font-bold">Category</label>
            <input
              type="Text"
              id="category"
              placeholder="Category"
              className="p-2 border-b-2 focus:border-black outline-none"
              onChange={(e) => category(e.target.value)}
              required
            />
          </div>
          </div>
          <div className="option flex flex-col justify-center">
            {/* Description */}
            <label htmlFor="desc" className="text-[#00008B] after:content-['*'] font-bold">Description</label>
            <input
              type="Text"
              id="desc"
              placeholder="Description"
              className="p-2 border-b-2 focus:border-black outline-none"
              onChange={(e) => description(e.target.value)}
              required
            />
          </div>
          <div className="option1 flex">
          <div className="option flex flex-col justify-center w-1/2 mr-5">
            {/* Color */}
            <label htmlFor="col" className="text-[#00008B] after:content-['*'] font-bold">Color</label>
            <input
              type="Text"
              id="col"
              placeholder="Color"
              className="p-2 border-b-2 focus:border-black outline-none"
              onChange={(e) => color(e.target.value)}
              required
            />
          </div>
          <div className="option flex flex-col justify-center w-1/2">
            {/* forWhom */}
            <label htmlFor="forwhom" className="text-[#00008B] after:content-['*'] font-bold">For Whom</label>
            <select name="forWhom" id="forWhom" required onChange={e => setForWhom(e.target.value)} value={forWhom} className='border-2 p-2 border-gray-400 rounded-md'>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="kid">Kid</option>
            </select>
          </div>
          </div>
          <div className="option flex flex-col justify-center">
            {/* Available Sizes */}
            <label htmlFor="" className='py-1 after:content-["*"] text-[#00008B] font-bold'>
              Select Available Sizes
            </label>
            <div class="flex justify-evenly">
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value="small"
                  name="small"
                  id="flexCheckDefault"
                  onChange={handleSize}
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault"
                >
                  Small
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value="medium"
                  name="medium"
                  id="flexCheckChecked"
                  onChange={handleSize}
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckChecked"
                >
                  Medium
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value="large"
                  name="large"
                  id="flexCheckChecked"
                  onChange={handleSize}
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckChecked"
                >
                  Large
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value="extraLarge"
                  name="extraLarge"
                  id="flexCheckChecked"
                  onChange={handleSize}
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckChecked"
                >
                  Extra Large
                </label>
              </div>
            </div>
          </div>
          <div className="option flex flex-col justify-center">
            {/* Price */}
            <label htmlFor="price" className="text-[#00008B] after:content-['*'] font-bold">Price</label>
            <input
              required
              type="number"
              id="price"
              placeholder="Price"
              min="0"
              className="p-2 border-b-2 focus:border-black outline-none"
              onChange={(e) => price(e.target.value)}
            />
          </div>
          <div className="option flex flex-col justify-center">
            {/* Tag */}
            <label htmlFor="tag" className="text-[#00008B] after:content-['*'] font-bold">Tag(any particular function wear)</label>
            <input
              required
              type="text"
              name="tag"
              id="tag"
              placeholder="Enter a Tag for multiple tag follow following format eg: Party,Casual"
              className="p-2 border-b-2 focus:border-black outline-none"
              onChange={(e) => {
                let value = e.target.value.trim();
                let values = value.split(',')
                // console.log(values)
                tag(values)
              }}
            />
          </div>
          <div className="option flex flex-col justify-center">
            {/* Security Deposit */}
            <label htmlFor="deposit" className="text-[#00008B] after:content-['*'] font-bold">Security Deposit:</label>
            <input
              required
              type="number"
              name=""
              id="deposit"
              placeholder="Security Deposit"
              className="p-2 border-b-2 focus:border-black outline-none"
              onChange={(e) => deposit(e.target.value)}
            />
          </div>
          {/* <input type="submit" value="" /> */}
          <div className="submitBtn flex justify-end mt-3 items-center">
            <button
              className="p-2 px-5 bg-black text-white font-semibold cursor-pointer hover:shadow-lg"
            >
              <input type="submit" value="Continue" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductInfo;
