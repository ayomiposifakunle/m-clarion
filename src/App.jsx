import React from 'react'
import { useState } from 'react'
import './index.css' 
import Navbar from './components/Navbar'
import Card from './components/Card'
import Nav from './components/Nav'
import SecondCard from './components/SecondCard'
import Testimonial from './components/Testimonial'
import LatestSection from './components/LatestSection'
import Foot from './components/Foot'



const App = () => {
  return (
      <>
      <Nav />
  <Navbar />
  <Card />
  <SecondCard />
  <Testimonial />
  <LatestSection />
<Foot />
      </>
    )
}

export default App
