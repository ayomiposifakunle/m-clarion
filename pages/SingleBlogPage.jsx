import React from 'react'
import Nav from './../components/Nav';
import Foot from './../components/Foot';

const SingleBlogPage = () => {
  return (
    <div>
        <Nav />
            <div className='w-100 mx-auto my-5'>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="mt-8">
                    <span className="uppercase text-[#FF0099] text-sm">category</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        What do you want to know about UI
                    </h1>

                    <div className="mt-2">
                        <div>
                            <p href="#" className="text-sm text-gray-500 dark:text-gray-400">
                                <small>John snow</small>
                            </p>

                            <p className="text-sm text-gray-500 dark:text-gray-400"><small>February 1, 2022</small></p>
                        </div> 

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>
                    </div>
                    
                </div>
            </div>
            <Foot />
    </div>
  )
}

export default SingleBlogPage
