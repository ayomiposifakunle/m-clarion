import React from 'react'

const Testimonial = () => {
  return (
    <>



<div id="default-carousel" className="relative w-full my-1" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/boardroom_mitiget.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/boardroom_mitiget.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/boardroom_mitiget.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/boardroom_mitiget.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/boardroom_mitiget.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
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



{/* 
<div id="default-carousel" classNameName="relative w-full p-15" data-carousel="slide">
<h1 classNameName='text-center font-bold text-2xl'>SIMPLE RISK IS <span style={{color: '#FF00FF'}}>TRUSTED </span> BY HUNDREDS OF COMPANIES WORLDWIDE</h1>
    <div classNameName="relative mx-auto h-50 w-100 overflow-hidden rounded-lg md:h-96">
         
        <div classNameName="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/gucci.jpg" classNameName="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
     
        <div classNameName="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/d & g.png" classNameName="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div classNameName="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/prada.jpg" classNameName="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
       
        <div classNameName="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/luis vuitton.jpg" classNameName="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div classNameName="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/Background+Overlay.png" classNameName="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
   
    <div classNameName="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <button type="button" classNameName="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span classNameName="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg classNameName="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span classNameName="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" classNameName="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span classNameName="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg classNameName="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span classNameName="sr-only">Next</span>
        </span>
    </button>
</div> */}






{/* <div id="indicators-carousel" classNameName="relative container" data-carousel="static">
 
    <div classNameName="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div classNameName="hidden duration-700 ease-in-out w-50" data-carousel-item="active">
         <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum ullam hic, consequuntur unde nostrum similique! Autem cupiditate quidem repellendus eaque deleniti perspiciatis, numquam doloribus?</i></p>
        <p><strong>Mr Fred</strong></p>
        <p>Teacher</p>
        </div>
     
        <div classNameName="hidden duration-700 ease-in-out" data-carousel-item="active">
         <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum ullam hic, consequuntur unde nostrum similique! Autem cupiditate quidem repellendus eaque deleniti perspiciatis, numquam doloribus?</i></p>
        <p><strong>Mr Fred</strong></p>
        <p>Teacher</p>
        </div>

        <div classNameName="hidden duration-700 ease-in-out" data-carousel-item="active">
         <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum ullam hic, consequuntur unde nostrum similique! Autem cupiditate quidem repellendus eaque deleniti perspiciatis, numquam doloribus?</i></p>
        <p><strong>Mr Fred</strong></p>
        <p>Teacher</p>
        </div>

        <div classNameName="hidden duration-700 ease-in-out" data-carousel-item="active">
         <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum ullam hic, consequuntur unde nostrum similique! Autem cupiditate quidem repellendus eaque deleniti perspiciatis, numquam doloribus?</i></p>
        <p><strong>Mr Fred</strong></p>
        <p>Teacher</p>
        </div>

        <div classNameName="hidden duration-700 ease-in-out" data-carousel-item="active">
         <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum ullam hic, consequuntur unde nostrum similique! Autem cupiditate quidem repellendus eaque deleniti perspiciatis, numquam doloribus?</i></p>
        <p><strong>Mr Fred</strong></p>
        <p>Teacher</p>
        </div>
    </div>

    <div classNameName="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" classNameName="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
   
    <button type="button" classNameName="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span classNameName="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg classNameName="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span classNameName="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" classNameName="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span classNameName="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg classNameName="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span classNameName="sr-only">Next</span>
        </span>
    </button>
</div> */}

    </>
  )
}

export default Testimonial
