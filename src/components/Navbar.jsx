import React from 'react'

const Navbar = () => {
  return (
    <>
<div className='flex flex-col' style={{position: 'absolute', zIndex: '+3', right: '1px', bottom: '180px'}}>
     <button type="button" class="my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 text-white dark:focus:ring-blue-800" style={{backgroundColor: '#FF0099'}}>Schedule A Demo</button>
      <button type="button" class="my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 text-white dark:focus:ring-blue-800" style={{backgroundColor: '#FF0099'}}>Download Our Brouche</button>
      <button type="button" class="my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 text-white dark:focus:ring-blue-800" style={{backgroundColor: '#FF0099'}}>Speak With Our Expert</button>
     </div>

<div id="default-carousel" className="relative w-full" data-carousel="slide" style={{zIndex :'-1'}}>

    <div className="relative h-100 overflow-hidden rounded-lg md:h-96">
         
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/mitiget_m-clarion_integrated_capabilities.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
     
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/mitiget_m-clarion_achieve_objectives_in_reliably.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/mitiget_m-clarion_address_uncertainty.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/mitiget_m-clarion_enabling_organization.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/WhatsApp Image 2024-05-24 at 4.20.12 PM.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Fourth Slider Image" />
        </div> */}
    </div>
   
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        {/* <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
    </div>

    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

    </>
  )
}

export default Navbar



// Slider 1 Text overlay
// Main Title: Your Integrated Collection of Capabilities
// Tagline:  Be forward-thinking organization with M-Clarion to enable success.
// Button: Read more...

// Slider 2 Text overlay
// Main Title: Enable Achieving Objectives In A Reliable Manner
// Tagline:  M-Clarion supports and improves business, making it a critical piece of business operations.
// Button: Read more...

// Slider 3 Text overlay
// Main Title: Address Uncertainty, and Act With Integrity
// Tagline:  M-Clarion gives total visibility with data for sound decision-making.
// Button: Read more...

// Slider 4 Text overlay
// Main Title: Keep Your Corporate Vision On Track, Go For It.
// Tagline:  M-Clarion enables performance with transparency, effective risk management with sustained collaboration.
// Button: Read more...