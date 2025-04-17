import React from 'react'
import Nav from '../components/Nav'
import Foot from '../components/Foot'
import Hero from '../components/Hero'
import Features3 from '../components/Features3'

const Compliance = () => {
  return (
    <div>
      <Nav />
      <Hero image={'/boardroom_mitiget.jpg'} title='COMPLIANCE' subtitle="M-clarion is an Artificial Intelligent(AI) based GRC solution designed to help organizations integrate, facilitate, streamline, and enhance the efficiency and value of their GRC strategies, while offering a unified source of truth"/>
  
  <div className='bg-[#FF0099] text-white'>
  <Features3 />
  </div>
  <section class="dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-black xl:text-3xl dark:text-black">
            Bring your Business to the <span class="text-blue-500">next level.</span>
        </h2>

        <p class="max-w-4xl mt-6 text-center text-black dark:text-gray-300">
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
            explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
        </p>

        <div class="inline-flex w-full mt-6 sm:w-auto">
            <a href="#" class="bg-[#FF0099] text-white inline-flex font-bold font-sans items-center justify-center w-full px-6 py-2duration-300 #FF0099 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Sign Up
            </a>
        </div>
    </div>
</section>
      <Foot />
    </div>
  )
}

export default Compliance
