import React from 'react'
import Nav from '../components/Nav'
import Foot from '../components/Foot'
import Card from './../components/Card';
import Features1 from './../components/Features1';

const Features = () => {
  return (
    <div>
      <Nav />
   <div className='flex  flex-row justify-center pb-10 text-grey'>
    
    <div style={{border: '1px solid #FF0099'}} class="max-w-sm p-6 m-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 style={{color: '#FF0099'}} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GOVERNANCE</h5>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Alignment, Oversight, and Achievement of business goals</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Corporate culture</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Governance structure</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Laws and policies</p> 
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Processes and workflows</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Communication system</p>
        <a style={{backgroundColor: '#FF0099'}} href="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more      
        </a>
    </div>
    
    
    <div style={{border: '1px solid #FF0099'}}  class="max-w-sm p-6 m-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 style={{color: '#FF0099'}} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RISK MANAGEMENT</h5>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Identify, Track, and, Manage risks of different categories with confidence. </p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Risk governance and framework</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Risk register</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Risk assessment and measurement</p>   
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Key risk indicators</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Controls and monitoring</p> 
        <a style={{backgroundColor: '#FF0099'}} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a>
    </div>
    
    
    <div style={{border: '1px solid #FF0099'}} class="max-w-sm p-6 m-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 style={{color: '#FF0099'}} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">COMPLIANCE</h5>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Set up a  library of obligations and ensure compliance with laws and procedures.</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Compliance of policies, regulation, and laws</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Organizational structure, processes and related controls</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Internal control checks</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Reporting and certification</p> 
        <a style={{backgroundColor: '#FF0099'}} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a>
    </div>
    
        </div>
      <div className='bg-[#FF0099]'>
      <Features1 />
      </div>
      <Foot />
    </div>
  )
}

export default Features
