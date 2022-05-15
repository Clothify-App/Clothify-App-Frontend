import React,{useRef} from 'react'

function AddProduct({setaddProduct}) {
    const title = useRef('')
    const file = useRef('')
    const category = useRef('')
    const description = useRef('')
    const quantity = useRef(0)
    const price = useRef(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title.current.valueOf,file.current.valueOf,category.current.value);
    }

  return (
    <div className='grid place-items-center min-h-[100vh]'>
        <div className="innerContainer bg-white border-2 w-[80%] min-h-[40%] flex p-2">
            <div className="imageContainer flex-[0.3] bg-[rgb(245,245,245)] grid place-items-center">
                <input type="file"  className='w-[100%]' ref={file}/>
                <img src="" alt="" className='w-full object-contain'/>
            </div>
            <div className="productInfo flex-[0.7] p-2">
                <form action="" className='flex flex-col' onSubmit={() => handleSubmit()}>
                    <input type="Text" placeholder='Title' className='p-2 border-b-2 focus:border-black outline-none' ref={title}/>
                    <input type="Text" placeholder='Category' className='p-2 border-b-2 focus:border-black outline-none' ref={category}/>
                    <input type="Text" placeholder='Description' className='p-2 border-b-2 focus:border-black outline-none' ref={description}/>
                    <input type="number" placeholder='Quantity' className='p-2 border-b-2 focus:border-black outline-none' ref={quantity}/>
                    <input type="number" placeholder='Price' min='0' className='p-2 border-b-2 focus:border-black outline-none' ref={price}/>
                    <div className="submitBtn flex justify-end mt-3 items-center">
                        <button className='p-2 px-5 bg-black text-white font-semibold cursor-pointer' onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default AddProduct