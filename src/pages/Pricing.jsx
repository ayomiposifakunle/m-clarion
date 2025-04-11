import React from 'react'
import Nav from '../components/Nav'
import Foot from '../components/Foot'
import PricingComponent from '../components/PricingComponent'
import Features1 from '../components/Features1'
import Hero from '../components/Hero'

const Pricing = () => {
  return (
    <div>
      <Nav />
      <div className='ml-5 my-5'>
      <h1 className='text-2xl font-semibold my-2'>Our Pricing</h1>
      <p className='font-serif'>Our pricing is designed to be simple, just like our <br /> product. However, if at any point you have questions please <br /> don't hesitate to schedule a pricing call to speak with a real person.</p>
      </div>
      <PricingComponent />
     <br />
<Hero image={'/pexels-karolina-grabowska-7875953.jpg'}  title='DISCOUNTS' subtitle="Up to a 20% discount for multi-year contract commitments or advanced payments."/>
      <Foot />
    </div>
  )
}

export default Pricing
