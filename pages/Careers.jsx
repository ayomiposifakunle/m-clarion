import React from 'react'
import Nav from '../components/Nav';
import Foot from '../components/Foot';
import Hero from '../components/Hero';
import KcProps from '../components/KcProps';
import Features1 from '../components/Features1';
import Features3 from '../components/Features3';

const Careers = () => {
  return (
    <div>
      <Nav />
      <div className="relative h-75 w-full bg-cover bg-center bg-[url('/mitiget_m-clarion_achieve_objectives_in_reliably.jpg')]">
  <div className="relative z-10 text-black p-4 text-center text-2xl font-bold">
  </div>
</div> 
<Hero buttonroute={'/blog'} image={'/governance_mitiget.jpg'} button='Learn More' title='CAREERS' subtitle="M-clarion's AI-powered GRC capabilities is designed for a wide range of industries, helping organizations streamline compliance, manage risks, and improve operational efficiency. It does not matter your sector, M-clarion has got you covered."/>
<hr />
<h1 className='text-center text-2xl bg-[#FF0099] p-3 font-bold '>M-clarion is a Platform Where Business Needs  <br /> Meet Technical Enablers In A Consolidated Manner</h1>
  <div className="flex flex-row justify-evenly align-center bg-[#FF0099]">
  <KcProps title="INTERNAL CONTROL" text="Maintain data and process integrity, operational efficiency, and business rules through testing of internal controls. Explore profile of control adequacy and effectiveness."/>
  <KcProps title="STRATEGIC PLANNING" text="Plan an execute your strategy by breaking it down into smaller tasks, projects and actions with clear deadlines to easily track progress."/>
  </div>
   <Features3 />
      <Foot />
    </div>
  )
}

export default Careers
