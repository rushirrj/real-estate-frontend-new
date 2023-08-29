import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useNavigate } from "react-router-dom";
import { Fade } from 'react-awesome-reveal'
 
const PageOne = () => {
    let id=1;
    const navigate = useNavigate();
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const slider = (
        <AutoplaySlider
          animation='cubeAnimation'
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={1000}
            // style={{height:"75vh"}}
          >
          {/* <div className="h-full"><img src='slider1.jpg' className="h-full"/></div> */}
          <div className="h-full"><img src='https://cdn.discordapp.com/attachments/989604828504293440/992894621707407470/post-11-copyright-1536x864.jpg' className="h-full"/></div>
          <div className="h-full"><img src='slider2.jpg' className="h-full"/></div>
          <div className="h-full"><img src='slider3.jpg' className="h-full"/></div>
          <div className="h-full"><img src='slider4.jpg' className="h-full"/></div>
          <div className="h-full"><img src='https://cdn.discordapp.com/attachments/989604828504293440/992532303702138960/post-3-copyright.jpg' className="h-full"/></div>
        </AutoplaySlider>
      );
  return (
    <div className="flex flex-col md:flex-row box-border mb-44" style={{height:"max-content"}} >
        
        <div className="basis-1/2 flex flex-col sm:flex-row pl-5 sm:pl-0 ">
            <div className="basis-1/4 ">

            </div>
            <div class="basis-3/4  pt-24 pb-20 ">
                <Fade direction='up' triggerOnce>

                <div className='flex items-start text-left'>
                    <span className="font-semibold text-4xl sm:text-4xl md:text-5xl">Find a Home You<br></br> Love!</span>
                </div>   
                <div className='w-11 my-8' style={{borderTop:"3px solid black"}}>
                </div>
                <div className=" font-thin text-left text-xl flex flex-row justify-start items-center">
                    <LocationOnOutlinedIcon className="m-2" />
                    <p className='text-lg from-neutral-800 font-normal text-left'>402, Ramkrishna Bhavan-2, Sahajanand Chowk,  <br></br>Opp. Sun Soman Square Kalyan (w), 421301</p>
                </div>
                <div className="flex flex-start items-center justify-start pt-2" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">
                    <button style={{boxShadow: "7px 7px 7px #80808085",cursor:"pointer"}} className="ml-0 h-16 w-36 border-2 text-md font-semibold  leading-normal text-gray-800 hover:bg-amber-500 bg-navGreen m-2 "
                    onClick={(e)=>{ 
                        e.preventDefault();
                        // navigate(`/enquiry?q=${id}`)
                    }}
                    >
                        BOOK A TOUR
                    </button>
                </div>
                        </Fade>
            </div>
        </div>

        <div className="basis-1/2 box-border pr-3 md:pr-0" style={{borderTop:"20px solid white",borderLeft:"20px solid white",height:"75vh"}}>
        <Fade direction='down' triggerOnce>
            {
                slider
            }
            </Fade>
        </div>
    </div>
  )
}

export default PageOne