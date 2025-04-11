import React from 'react'
import Nav from '../components/Nav';
import Foot from '../components/Foot';
import Testimonial from '../components/Testimonial';

const OurPartners = () => {
  return (
    <div>
      <Nav />
      <div className='ml-5 my-5'>
      <h1 className='text-2xl font-semibold my-2'>Industries We Serve</h1>
      <p className='font-serif'>M-clarion's AI-powered GRC capabilities is designed for a wide range of industries, helping organizations <br /> streamline compliance, manage risks, and improve operational efficiency. It does not matter <br /> your sector, M-clarion has got you covered</p>
      </div>
      <marquee behavior="" direction="" className='bg-[#FF0099] text-white text-2xl font-mono'>
 Financial Services and Capital Markets | Manufacturing and Supply Chain | Warehouse and Inventory | Hospitality and Aviation | Professional Services and NGOs | Government and Public Sector | Energy and Utilities | Retail and E-Commerce | Constuction and Real Estate | Education and Research | Insurance | Healthcare and Pharmaceuticals | Legal and Consulting Services | Telecoms and Technology
      </marquee>
     <div className='mt-6'>
<h1 className='text-2xl text-center font-semibold font-serif'>OUR PARTNERS</h1>
     <Testimonial />
     </div>
      <Foot />
    </div>
  )
}

export default OurPartners
