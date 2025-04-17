import React from 'react'

const ContactUsComp = (props) => {
  return (
    <div>
<div className='bg-[whitesmoke] p-7'>
<h1 className='my-5 text-3xl ml-10 font-bold'>{props.title}</h1>
<p className='my-5 ml-10'>{props.text}</p>
 <form className="max-w-sm mx-auto mt-7">
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder1}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder2}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
    <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder3}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder4}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder5}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder6}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder7}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder8}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder9}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.placeholder10}</label>
    <input type="text" id="email" className="border-[#FF0099] outline-offset-2 focus:outline-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="accent-[#FF0099] border-[#FF0099] w-4 h-4 border rounded-sm focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-[#FF0099] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Register</button>
</form>
 </div>
    </div>
  )
}

export default ContactUsComp