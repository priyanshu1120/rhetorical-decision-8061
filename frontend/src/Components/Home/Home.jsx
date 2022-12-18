import React from 'react'
import Adv from './Constant'
import { Details } from './Details'
import ImageSlider from './ImageSlider'
import Pro from './Pro'
import Product from './Product'

import Search from './Search'
import Skilling from './Skilling'

const Home = () => {
  return (
    <div>
    <Search/>
    <Details/>
    <Pro/>
    <Skilling/>
    <Adv/>
  <ImageSlider/> 
    
    </div>
  )
}

export default Home