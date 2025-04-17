import React from 'react'
import { Link } from 'react-router';

const Features1 = (props) => {
  return (
    <div>
        <section class="dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-white xl:text-3xl dark:text-white">
            Bring your Business to the <span class="text-blue-500">next level.</span>
        </h2>

        <p class="max-w-4xl mt-6 text-center text-white dark:text-gray-300">
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
            explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
        </p>

        <div class="inline-flex w-full mt-6 sm:w-auto">
          <Link to="/subscribe" className='bg-white font-bold text-black p-2 rounded-2xl'>Subscribe</Link>
        </div>
    </div>
</section>
    </div>
  )
}

export default Features1