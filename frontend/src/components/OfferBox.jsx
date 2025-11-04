import React from 'react'

const OfferBox = () => {
    const onsubmithandler =() => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <div className='text-2xl font-medium text-gray-800'>
            Subscribe now &  get 20% off    
        </div>  

        <p className='text-gray-600 py-3'> subscribe now and you will get 20% of on all products </p>

        <form onSubmit={onsubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none ' type='email' placeholder='Enter your e-mail'></input>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4' > SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default OfferBox
