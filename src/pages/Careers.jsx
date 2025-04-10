import React from 'react'
import Nav from '../components/Nav';
import Foot from '../components/Foot';
import Hero from '../components/Hero';
import KcProps from '../components/KcProps';

const Careers = () => {
  return (
    <div>
      <Nav />
      
      <div className="relative h-64 w-full bg-cover bg-center bg-[url('/m-clarion-logo_big.png')]">
  <div className="absolute inset-0 bg-black opacity-10" />
  <div className="relative z-10 text-white p-4">
  </div>
</div> 
<Hero image={'/governance_mitiget.jpg'} button='Learn More' title='CAREERS' subtitle="M-clarion's AI-powered GRC capabilities is designed for a wide range of industries, helping organizations streamline compliance, manage risks, and improve operational efficiency. It does not matter your sector, M-clarion has got you covered."/>
<hr />
<h1 className='mt-7 text-center text-2xl '>M-clarion is a Platform Where Business Needs Meet Technical Enablers In A Consolidated Manner</h1>
  <div className="flex flex-row justify-evenly align-center">
  <KcProps title="INTERNAL CONTROL" text="Maintain data and process integrity, operational efficiency, and business rules through testing of internal controls. Explore profile of control adequacy and effectiveness."/>
  <KcProps title="STRATEGIC PLANNING" text="Plan an execute your strategy by breaking it down into smaller tasks, projects and actions with clear deadlines to easily track progress."/>
  </div>
      <Foot />
    </div>
  )
}

export default Careers
