import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from "react-router-dom";
const PageTwo = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row box-border mb-28 p-6 pt-11 mt-40 md:mt-40"style={{height:"max-content"}} >
      <div className="basis-1/2 box-border md:pr-0" style={{height:"100%", zIndex: '-1'}} >
        <Fade direction='left'triggerOnce style={{boxShadow: "10px 10px 10px #80808085",cursor:"pointer"}}>

            <img  src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" style={{width:"100%",height:"auto"}} alt='' />
        </Fade>
      </div>
      <div className="basis-1/2 flex flex-col sm:flex-row pl-5 sm:pl-0 ">
          <div className="basis-1/6 ">

          </div>
          <div class="basis-5/6  pt-8 ">
            <Fade direction='right'  triggerOnce>

              <div className='flex flex-row items-center justify-start'>
                <div className='w-11 h-0' style={{borderTop:"3px solid #c5b58f"}}>
                </div>
                <div className='pl-1 tracking-wider text-xl font-semibold' style={{color:"#c5b58f"}}>
                  Welcome to Our
                </div>
              </div>
              
              <div className='flex items-start text-left mt-4'>
                  <span className="font-semibold font-sans text-4xl sm:text-4xl md:text-5xl">Simple Modern <br></br>Apartments</span>
              </div>   
              <div className='w-11 my-8' style={{borderTop:"3px solid black"}}>
              </div>
              <div className=" font-thin text-left text-xl flex flex-row justify-start items-center">
                  {/* <LocationOnOutlinedIcon className="m-2" /> */}
                  <p className='text-base from-neutral-800 font-thin text-left'>Welcome to our real estate agency, the place to start your new comfortable <br></br> life at! We provide our clients with a great selection of luxury, modern, and unique living spaces in the best areas of New York,<br></br> California and Southern regions of the country. Discover our benefits!</p>
              </div>
              <div className="flex flex-start items-center justify-start mt-7"
              
              >
                  <button
                  onClick={()=>{navigate('/about')}}
                  style={{boxShadow: "10px 10px 10px #80808085",cursor:"pointer"}} className="ml-0 h-16 w-36 border-2 text-md font-semibold  leading-normal text-gray-800 hover:bg-amber-500 bg-navGreen m-2">
                      MORE ABOUT US
                  </button>
              </div>
            </Fade>
          </div>
      </div>

    </section>
  )
}

export default PageTwo