import React from 'react'
import Adv from './Adv'
import { Details } from './Details'
import ImageSlider from './ImageSlider'
import Product from './Product'
import Search from './Search'

const Home = () => {
  return (
    <div>
    <Search/>
    <Details/>
    <Product/>
    <Adv/>
    <ImageSlider/>
    
    </div>
  )
}

export default Home