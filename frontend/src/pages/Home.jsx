import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import OfferBox from '../components/OfferBox'

const Home = () => {
  return (
    <div>
       <Hero/>
       <LatestCollection/>
       <BestSeller/>
       <OurPolicy/>
        <OfferBox/>
    </div>
  )
}

export default Home
