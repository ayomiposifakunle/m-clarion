import React from 'react'
import ReactPlayer from './ReactPlayer'

const Card = () => {

function buttonEffect(){
  const but =  document.getElementById('butt');
  but.style.backgroundColor = 'green';
}

function unButtonEffect(){
    const but =  document.getElementById('butt');
    but.style.backgroundColor = '#FF00BF';
}

  return (
    <>
   <div id='features'>
    
   <div className='text-black p-8'>
    <h1 style={{color: '#FF00BF'}} className='text-2xl font-bold'>AN INTEGRATED APPROACH TO GRC POWERED BY AI</h1>
<h3 style={{color: '#FF00BF'}} className='font-bold'>This Is Where Intelligence Meets Integrity in GRC for Business Success.</h3>
    <p className='m-3'>M-clarion is distributed by its capability to align risk with business objectives, which empowers your organization to reliably accomplish its objectives, navigate through uncertainties, and showcase integrity.
    Our solution which is either cloud-based or on-prem offers notable configurable, adaptable, and straightforward to use capabilities. Its integrated nature allows for effective mapping across GRC use cases, creating risk intelligence that underpins strategic decision-making processes.
    </p>
    </div>

   <div className='flex  flex-row justify-center pb-10 text-grey'>
    
    <div style={{border: '1px solid #FF00BF'}} class="max-w-sm p-6 m-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 style={{color: '#FF00BF'}} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GOVERNANCE</h5>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Alignment, Oversight, and Achievement of business goals</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Corporate culture</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Governance structure</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Laws and policies</p> 
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Processes and workflows</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Communication system</p>
        <a style={{backgroundColor: '#FF00BF'}} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more      
        </a>
    </div>
    
    
    <div style={{border: '1px solid #FF00BF'}}  class="max-w-sm p-6 m-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 style={{color: '#FF00BF'}} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RISK MANAGEMENT</h5>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Identify, Track, and, Manage risks of different categories with confidence. </p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Risk governance and framework</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Risk register</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Risk assessment and measurement</p>   
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Key risk indicators</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Controls and monitoring</p> 
        <a style={{backgroundColor: '#FF00BF'}} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a>
    </div>
    
    
    <div style={{border: '1px solid #FF00BF'}} class="max-w-sm p-6 m-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 style={{color: '#FF00BF'}} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">COMPLIANCE</h5>
        </a>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Set up a  library of obligations and ensure compliance with laws and procedures.</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Compliance of policies, regulation, and laws</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Organizational structure, processes and related controls</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Internal control checks</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> Reporting and certification</p> 
        <a style={{backgroundColor: '#FF00BF'}} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a>
    </div>
    
        </div>

        <h1 className='text-center font-bold text-2xl my-10 text-black'>LEARN MORE ABOUT M-CLARION</h1>
    <div className="py-5 bg-black" style={{display : 'flex', justifyContent : 'center', margin : '0 auto'}}>
    <ReactPlayer />
    </div>

   </div>
    </>
  )
}

export default Card
