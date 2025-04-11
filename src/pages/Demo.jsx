import React from 'react'
import Nav from '../components/Nav'
import Foot from '../components/Foot'
import ReactPlayer from '../components/ReactPlayer'
import Features1 from '../components/Features1'

const Demo = () => {
  return (
    <div>
    <Nav />
    <div className='ml-5 my-5'>
      <h1 className='text-2xl font-semibold my-2'>Watch A Demo To Understand What We Do</h1>
      {/* <p className='font-serif'>M-clarion's AI-powered GRC capabilities is designed for a wide range of industries, helping organizations <br /> streamline compliance, manage risks, and improve operational efficiency. It does not matter <br /> your sector, M-clarion has got you covered</p> */}
      </div>
    {/* <h1 className='text-center font-bold text-2xl my-10 text-black'></h1> */}
    <div className="py-5 bg-black" style={{display : 'flex', justifyContent : 'center', margin : '0 auto'}}>
    <ReactPlayer />
    </div>
    <div className='bg-[#FF0099]'>
    <Features1 />
    </div>
    <Foot />
    </div>
  )
}

export default Demo