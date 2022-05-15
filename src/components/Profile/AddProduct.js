import React,{useRef,useState} from 'react'
import axios from 'axios'


function AddProduct({setaddProduct}) {
    const title = useRef('')
    const [fileIp,setFileIp] = useState()
    const category = useRef('')
    const description = useRef('')
    const price = useRef(0)
    const [sizes,setSizes] = useState([])
    const [previewImg, setpreviewImg] = useState();
    const tag = useRef('')
    const deposit = useRef()

    const onImageChange = async (e) => {
        console.log(e.target.value);
        const [file] = e.target.files;
        setpreviewImg(URL.createObjectURL(file));
        setFileIp(e.target.files[0])
    };


      
    

    const handleImageUploading = async () => {
        let body = new FormData()
        body.set('key', '9f4aaf55f9d26955db31cfc61a79eb6b')
        body.append('image', fileIp,fileIp.name)

        await axios.post('https://api.imgbb.com/1/upload',body).then(Response => {
            console.log(Response.data.data.display_url);
        }).catch(error => {
            console.log(`Unable to upload image..`,error);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleImageUploading();

    }

    const handleChange = () => {
        document.getElementById('fileIp').click()
    }

    const handleSize = (event)=>{
        setSizes((prevState)=>{
            if(prevState.indexOf(event.target.value) !== -1){
                var index = prevState.indexOf(event.target.value)
                prevState.splice(index,1)
                // console.log(prevState);
                return prevState
            }else{
                var state = [...prevState]
                state.push(event.target.value)
                return state
            }
        })
        console.log(sizes);
    }

  return (
    <div className='grid place-items-center min-h-[90vh]'>
        <div className="innerContainer bg-white border-2 w-[80%] min-h-[40%] flex p-2">
            <div className="imageContainer flex-[0.3] bg-[rgb(245,245,245)] grid place-items-center">
            {
                previewImg && 
                    <img src={previewImg} alt="" className='w-full h-[300px] object-contain' />
            }
            <>
                <input type="file" accept='image/*' id='fileIp' className='w-[100%]' style={{display: "none"}} onChange={onImageChange}/>
                <button onClick={handleChange} className='bg-white w- p-1 px-2 border-2 border-black rounded-md hover:bg-[#f5f5f5]'>Upload Image</button>
                </>
            </div>
            <div className="productInfo flex-[0.7] p-2">
                <form action="" className='flex flex-col' onSubmit={() => handleSubmit()}>
                    <input type="Text" placeholder='Title' className='p-2 border-b-2 focus:border-black outline-none' ref={title}/>
                    <input type="Text" placeholder='Category' className='p-2 border-b-2 focus:border-black outline-none' ref={category}/>
                    <input type="Text" placeholder='Description' className='p-2 border-b-2 focus:border-black outline-none' ref={description}/>
                    <label htmlFor="" className='p-2'>Select Available Sizes</label>
                    <div class="flex justify-evenly">
                        <div class="form-check">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="small" name='small' id="flexCheckDefault" onChange={handleSize}/>
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            Small
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="medium" name='medium' id="flexCheckChecked" onChange={handleSize}/>
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                            Medium
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="large" name='large' id="flexCheckChecked" onChange={handleSize}/>
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked" >
                            Large
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="extraLarge" name='extraLarge' id="flexCheckChecked" onChange={handleSize}/>
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked" >
                            Extra Large
                        </label>
                        </div>
                    </div>
                    <input type="number" placeholder='Price' min='0' className='p-2 border-b-2 focus:border-black outline-none' ref={price}/>
                    <input type="text" name="tag" id="" placeholder='Enter a Tag' className='p-2 border-b-2 focus:border-black outline-none' ref={tag}/>
                    <input type="number" name="" id="" placeholder='Security Deposit' className='p-2 border-b-2 focus:border-black outline-none' ref={deposit}/>
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