import React,{useEffect,useState} from 'react'
import axios from 'axios';
import ProductCardProfile from './ProductCardProfile';
function MyProducts() {
  const [products,setProducts] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_PRODUCT_API)
      .then(res => {
        setProducts(res.data)
      }).catch(error=> {
        console.log(`Unable to Fetch Data..`);
      })
  }, []);

  return (
    <div className='flex-[0.8] overflow-y-scroll h-screen px-1 scrollbar-hide'>
      <div className="container border-2 p-2 flex justify-between items-center max-w-full bg-pink-600 sticky top-0 text-white ">
       <h1 className='font-bold text-2xl'>My Products</h1>
       
      </div>
      {
        (products.map(product => (
          <ProductCardProfile title={product.title} category={product.category} imageUrl={product.image} price={product.price} description={product.description}/>
        )))
      }
    </div>
  )
}

export default MyProducts