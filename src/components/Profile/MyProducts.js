import React,{useEffect,useState} from 'react'
import axios from 'axios';
import AddProduct from './AddProduct';
import ProductCard from './ProductCard';
function MyProducts() {
  const [products,setProducts] = useState([])
  const [addProduct,setaddProduct] = useState(false)
  useEffect(() => {
    axios.get(process.env.REACT_APP_PRODUCT_API)
      .then(res => {
        setProducts(res.data)
      }).catch(eroor=> {
        console.log(`Unable to Fetch Data..`);
      })
  }, []);

  return (
    <div className='flex-[0.8] overflow-y-scroll h-screen p-2 scrollbar-hide'>
      <div className="container border-2 p-1 flex justify-between items-center sticky top-0 bg-pink-600  text-white ">
       <h1 className='font-bold text-2xl'>My Products</h1>
       {
         addProduct?(<button className='mr-3 border-2 p-1 border-white border-solid hover:bg-white hover:text-black font-body font-semibold' onClick={() => setaddProduct(false)}>BACK TO PRODUCTS</button>):
         <button className='mr-3 border-2 p-1 border-white border-solid hover:bg-white hover:text-black font-body font-semibold' onClick={() => setaddProduct(true)}>ADD PRODUCT</button>
       }
       
      </div>
      {
        addProduct ? <AddProduct setaddProduct = {setaddProduct}/> :
        (products.map(product => (
          <ProductCard title={product.title} category={product.category} imageUrl={product.image} price={product.price} description={product.description}/>
        )))
      }
    </div>
  )
}

export default MyProducts