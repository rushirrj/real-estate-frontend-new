import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div class="text-gray-600 body-font bg-navBg">
      <div className='flex flex-col lg:flex-row justify-around lg:pb-10 '>
        <div className='flex flex-col   justify-center items-center lg:items-start'>
            <div className=' h-40 w-40 bg-white'>
              <img src='Metropolitian.png' style={{ height: "100%", width: "100%" }} className='' alt='' />
            </div>
            <div className='mt-3'>
              <p className='text-center lg:text-left text-xl lg:text-sm text-gray-500 font-medium'>Today it stands tall amongst Mumbai's <br/> premier real estate developers, active mostly <br/>in the region of THANE, KDMC and <br/> neighboring MMR, the Group <br/> has been over a decade in  the field of construction.</p>
            </div>  
        </div>
        <div className='flex flex-col  pt-8 lg:pt-16 p-3 items-center lg:items-start'> 
          <div className=''>
            <p className='text-3xl lg:text-xl tracking-wider font-bold lg:text-left cursor-pointer'>NAVIGATE</p>
          </div>
          <div className='w-2/5' style={{borderTop:"0.8px solid black",marginBottom:"20px",marginTop:"10px"}}>
          </div>
          
          <div className='flex flex-col gap-1 text-center lg:text-left' >
            <Link to="/" ><p className='font-medium hover:pl-1 hover:text-navGreen cursor-pointer text-xl lg:text-base'>Home</p></Link>
            {/* <Link to="/about" ><p className='font-medium hover:pl-1 hover:text-navGreen cursor-pointer text-xl lg:text-base'>About Us</p></Link> */}
            <Link to="/contact" ><p className='font-medium hover:pl-1 hover:text-navGreen cursor-pointer text-xl lg:text-base'>Contact Us</p></Link>
            <Link to="/homeloanfaqs" ><p className='font-medium hover:pl-1 hover:text-navGreen cursor-pointer text-xl lg:text-base'>FAQ's</p></Link>
          </div> 
        </div>
        <div className='flex flex-col pt-8 lg:pt-16 p-3 items-center lg:items-start'> 
          <div className=''>
            <p className=' text-3xl lg:text-xl tracking-wider font-bold lg:text-left cursor-pointer'>OUR PROJECTS</p>
            </div>
            <div className='w-2/5' style={{borderTop:"0.8px solid black",marginBottom:"20px",marginTop:"10px"}}>
            </div>
         
          <div className=' flex flex-col gap-1 text-center lg:text-left'>
          <Link to="/products" ><p className='font-medium hover:pl-1 hover:text-navGreen cursor-pointer text-xl lg:text-base'>Ongoing Projects</p></Link>
          <Link to="/" > <p className='font-medium hover:pl-1 hover:text-navGreen cursor-pointer text-xl lg:text-base' >Upcoming Projects</p></Link>
          <Link to="/completedprojects" ><p className='font-medium hover:pl-1 hover:text-navGreen cursor-pointer text-xl lg:text-base'>Completed Projects</p></Link>
          </div> 
        </div>
        <div className='flex justify-center p-7 '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60266.90207811689!2d73.12906!3d19.252713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7182da00630785a3!2sHouse%20of%20Chavan!5e0!3m2!1sen!2sin!4v1658178545442!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      {/* <div class="bg-gray-100"> */}
      <div class="bg-white">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row bg-white">
            <p class="text-gray-500 text-sm text-center sm:text-left font-bold">© Metropolitian Real Estate. | All Rights Reserved (c) 2022 
            </p>
            {/* <p className='ml-9 text-sm font-semibold'> </p> */}
            {/* <p className='md:ml-24 text-sm text-center font-bold'>Designed By <a href="https://www.himanicc.com" target="_blank">www.himanicc.com</a></p> */}
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="ml-3 text-gray-500" href='#' target="_blank">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500" href='#' target="_blank">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500" href='#' target="_blank">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500" href='#' target="_blank">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Footer