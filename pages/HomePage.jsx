import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Nav from '../components/Nav'
import SecondCard from '../components/SecondCard'
import LatestSection from '../components/LatestSection'
import Foot from '../components/Foot'


const HomePage = () => {
  return (
    <div>
     <Nav />
  <Navbar />
  <Card />
  <SecondCard />
  <LatestSection />
  <Foot />
    </div>
  )
}

export default HomePage