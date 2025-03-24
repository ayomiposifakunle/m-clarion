import React from 'react'

const Card = () => {
  return (
    <>
   <div className='' style={{backgroundColor: 'grey'}} id='features'>
    
   <div className='text-white p-8' style={{backgroundColor: 'black'}}>
    <h1 className='text-3xl font-bold'>WHY SIMPLE RISK?</h1>
    <p className='m-3 font-bold'><strong><span style={{color: 'red'}}>• SIMPLE</span> - INTUITIVE WORKFLOWS PROMOTES ORGANIZATION-WIDE ADOPTION.</strong></p>
    <p className='m-3 font-bold'><strong> <span style={{color: 'red'}}>• EFFECTIVE</span> - FROM "ZERO TO GRC" IN MINUTES.</strong></p>
    <p className='m-3 font-bold'><strong><span style={{color: 'red'}}>• AFFORDABLE</span> - COMPREHENSIVE GOVERNANCE, RISK MANAGEMENT AND COMPLIANCE AT A FRACTION OF THE COST.</strong></p>
    </div>

   <div className='flex  flex-row justify-center pb-10 bg-black text-white'>
    
    <div style={{border: '3px solid red'}} class="max-w-sm p-6 m-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 style={{color: 'red'}} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GOVERNANCE</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat.</small></p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat.</small></p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat.</small></p> 
        <a style={{backgroundColor: 'red'}} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more      
        </a>
    </div>
    
    
    <div style={{border: '3px solid red'}}  class="max-w-sm p-6 m-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 style={{color: 'red'}} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RISK MANAGEMENT</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat.</small></p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat.</small></p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat.</small></p>   
        <a style={{backgroundColor: 'red'}} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a>
    </div>
    
    
    <div style={{border: '3px solid red'}} class="max-w-sm p-6 m-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 style={{color: 'red'}} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">COMPLIANCE</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat.</small></p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat.</small></p>
        <p className='m-4'> <img src="\icons8-tick-32.png" alt="" style={{display: 'inline'}} /> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat.</small></p> 
        <a style={{backgroundColor: 'red'}} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a>
    </div>
    
        </div>

        <h1 className='text-center font-bold text-2xl mt-10 text-white'>LEARN MORE ABOUT M-CLARION</h1>
    <div className="pb-10">
        <img src="/images__1_-removebg-preview.png" className='flex justify-center mx-auto size-90' alt="pc image" style={{zIndex: '0', position: 'relative', top: '300px'}}  />
<video className='flex justify-center mx-auto w-60' controls muted style={{}}>
  <source src="/WhatsApp Video 2024-11-20 at 11.46.28 AM.mp4" type="video/mp4" />
</video>
    </div>
   </div>
    </>
  )
}

export default Card
