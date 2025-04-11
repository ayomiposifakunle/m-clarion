import React from 'react'

const KcProps = (props) => {

  return (
    <div>

<div  class="max-w-sm m-5 p-7 px-5 mx-10 border-[pink] rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 font-bold tracking-tight text-black dark:text-white">{props.title}</h5>
    </a>
    <p class="mb-3 font-normal text-white dark:text-gray-400">{props.text}</p>
    {/* <a style={{backgroundColor: 'white'}} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#FF0099] bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        MORE
    </a> */}
</div>

</div>

  )
}

export default KcProps