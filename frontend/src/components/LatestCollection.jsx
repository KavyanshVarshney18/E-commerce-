import React, { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Product_Item from './Product_Item';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestproduct, setlatestproduct] = useState([]);

    useEffect(() => {
        setlatestproduct(products.slice(0,10));
    }, [])
    

    // console.log(products);

  return (
    <div className='my-10 '>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Quality you can trust, prices you'll love.
        </p>
      </div>


      {/* rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestproduct.map((items,index)=>(
                    <Product_Item key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
                ))
            }
        </div>

    </div>
  )
}

export default LatestCollection
