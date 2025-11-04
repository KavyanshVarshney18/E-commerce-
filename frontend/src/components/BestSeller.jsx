import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState,useEffect } from 'react';
import Title from '../components/Title';
import Product_Item from './Product_Item';



const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestseller, setbestseller] = useState([]);
    useEffect(() => {
      const bestproduct = products.filter((item)=> (item.bestseller))
      setbestseller(bestproduct.slice(0,5));
    }, [])
    
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'Best '} text2={'Sellers'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-shadow-gray-600'>
            Style is a way to say who you are without having to speak... </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
            bestseller.map((item,index)=> (
                <Product_Item key={index} id={item.id}  name={item.name} image={item.image} price={item.price}/>
            ))
            }
        </div>
      
    </div>
  )
}

export default BestSeller
