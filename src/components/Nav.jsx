import React from 'react'
import '../index.css'

import {Link} from 'react-router'
const Nav = () => {

const dropdownStyling = {
  backgroundColor : 'black',
  color : 'white',
  border : '1px solid white',
}

function navdisplay(){
  const val = document.getElementById('navli');
  val.style.display = 'block'
}

function navDontdisplay(){
  const val = document.getElementById('navli');
  val.style.display = 'none'
}

function pnavdisplay(){
  const val = document.getElementById('pnavli');
  val.style.display = 'block'
}

function pnavDontdisplay(){
  const val = document.getElementById('pnavli');
  val.style.display = 'none'
}


  return (
    <> 
<nav class="bg-white dark:bg-gray-900 w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/m-clarion-logo.png" class="h-8" alt="m-clarion Logo" />
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li><Link to='/'   className="block py-2 px-3 text-grey bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link></li>
          
            <a href="#"  onMouseEnter={navdisplay} onMouseLeave={navDontdisplay}  >About Us
            <ul className='dropdown'id='navli' style={{
                width : '100%',
postion : 'absolute',
zIndex : '999',
display : 'none',
color : 'grey',
borderTop : '2px solid #FF00FF'

              }}>
                <div>
                  <div>
                  <li className='m-3 text-sm'><Link to='/company'>Our Company</Link></li>
                  </div>

                  <div>
                <li className='m-3 text-sm'><Link to='../careers'>Careers</Link></li>
                  </div>
                </div>
              </ul>
            </a>
              

            <li> 
       <Link to='/features' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Features</Link>
            </li>
            <li> 
       <Link to='/blog' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</Link>
            </li>
            <li> 
       <Link to='/demo' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Demo</Link>
            </li>
            <li> 
       <Link to='/pricing' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
            </li>
        <a href="#"  onMouseEnter={pnavdisplay} onMouseLeave={pnavDontdisplay} >Partners
        <ul className='dropdown' id="pnavli" style={{
                width : '100%',
postion : 'absolute',
zIndex : '999',
display : 'none',
color : 'grey',
borderTop : '2px solid #FF00FF'

              }}>
            <div>
                <div>
                <li className='m-3 text-sm'><Link to='/our-partners'>See Our Partners</Link></li>
                </div>

                <div>
                <li className='m-3 text-sm'><Link to='/partner'>Register To Be A Partner</Link></li>
                </div>
            </div>
              </ul>
        </a>
          </ul>
  </div>
  </div>
</nav>        
    </>
  )
}

export default Nav