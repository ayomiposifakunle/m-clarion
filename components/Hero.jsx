import React from 'react'
import {Link} from 'react-router'


const Hero = (props) => {
  return (
    <div>
        
        <header className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{props.title}</h1>
                    
                    <p className="my-3 text-gray-600 dark:text-gray-400">{props.subtitle}</p>
                    
                    <Link to={props.buttonroute} className="w-full bg-black px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform rounded-lg lg:w-auto">{props.button}</Link>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl rounded-2xl" src={props.image} alt="Catalogue-pana.svg" />
            </div>
        </div>
    </div>
</header>
    </div>
  )
}

export default Hero