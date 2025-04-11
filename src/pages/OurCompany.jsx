import React from 'react'
import Nav from '../components/Nav';
import Foot from '../components/Foot';
import Hero from '../components/Hero';
import Features2 from '../components/Features2';
import Navbar from '../components/Navbar';
import Features3 from '../components/Features3';

const OurCompany = () => {
  return (
    <div>
      <Nav />
      <Navbar />
      <Hero image={'/boardroom_mitiget.jpg'} button='Learn More' title='OUR COMPANY' subtitle="M-clarion is an Artificial Intelligent(AI) based GRC solution designed to help organizations integrate, facilitate, streamline, and enhance the efficiency and value of their GRC strategies, while offering a unified source of truth"/>
      <hr />
     <Features2 title="M-Clarion GRC Hub" titlecont1="An Integrated Advantage"
     firstcardtitle='GOVERNANCE'  secondcardtitle='RISK'  thirdcardtitle='COMPLIANCE'
     firstcardtext="Alignment | Oversight | Achievement of Business Goals" 
     secondcardtext="Risk identification and quantification | Decision-making Enablement" 
     thirdcardtext="Compliance checks | Risk and compliance Reporting"
     />
     <Features3 />
      <Foot />
    </div>   
  )
}

export default OurCompany