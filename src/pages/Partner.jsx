import React from 'react'
import Nav from '../components/Nav';
import Foot from '../components/Foot';

const Partner = () => {
  return (
    <div>
      <Nav />  
 <div className='bg-[whitesmoke] p-7'>
 <form className="max-w-sm mx-auto mt-7">
    <h1 className='text-center my-5 text-3xl'>REGISTER TO BE A PARTNER</h1>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-black bg-[pink] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
</form>
 </div>

    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ's</h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
            <div>
                <details className="flex mt-8 md:mx-10 open:bg-white max-w-3xl px-4 text-gray-500 dark:text-gray-300"> Info  on how to pay for appointment
                    <summary className="mx-4 text-xl text-gray-700 dark:text-white">How can I pay for my appointment ?</summary>
                    </details>
                </div>
            </div>             

            <hr className="my-8 border-gray-200 dark:border-gray-700" />
            <div>
            <div>
                <details className="flex mt-8 md:mx-10 open:bg-white max-w-3xl px-4 text-gray-500 dark:text-gray-300"> Info  on how to pay for appointment
                    <summary className="mx-4 text-xl text-gray-700 dark:text-white">How can I pay for my appointment ?</summary>
                    </details>
                </div>
            </div> 

            <hr className="my-8 border-gray-200 dark:border-gray-700" />
            <div>
            <div>
                <details className="flex mt-8 md:mx-10 open:bg-white max-w-3xl px-4 text-gray-500 dark:text-gray-300"> Info  on how to pay for appointment
                    <summary className="mx-4 text-xl text-gray-700 dark:text-white">How can I pay for my appointment ?</summary>
                    </details>
                </div>
            </div> 

        </div>
  
</section>
    </div>
  )
}

export default Partner
