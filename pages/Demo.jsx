import React from 'react'
import Nav from '../components/Nav'
import Foot from '../components/Foot'
import ReactPlayer from '../components/ReactPlayer'
import Features1 from '../components/Features1'
import ContactUsComp from './../components/ContactUsComp';

const Demo = () => {
  return (
    <div>
    <Nav />

    <ContactUsComp title="REQUEST A DEMO" text="info@m-clarion.com, www.m-clarion.com"
placeholder1="Title"
placeholder2="First Name"
placeholder3="Last Name"
placeholder4="Company Name"
placeholder5="Address"
placeholder6="City"
placeholder7="Country"
placeholder8="Email"
placeholder9="Phone"
placeholder10="Why do you want to partner with M-clarion"
/>

    <div className="py-5 bg-black" style={{display : 'flex', justifyContent : 'center', margin : '0 auto'}}>
    <ReactPlayer />
    </div>

    <div className='bg-[#FF0099]'>
    <Features1 />
    </div>
    {/* <div className='p-10 my-1 flex justify-center mx-auto align-center'>
      <h1 className='font-bold'>PICK A DATE AND TIME </h1> <br />
    <input type="datetime-local" className='w-100' />
    </div> */}
    <Foot />
    </div>
  )
}

export default Demo