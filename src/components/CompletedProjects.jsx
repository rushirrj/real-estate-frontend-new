import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Fade } from 'react-awesome-reveal';
const CompletedProjects = () => {
    return (
        <div>
            <div className='flex justify-center items-center text-4xl font-semibold w-full md:h-64 h-72  p-1 m-3' style={{backgroundImage: 
 `url(banner1.jpg)`, backgroundPosition: "0% 70%", backgroundSize: "cover" ,boxShadow: "5px 5px 5px #80808085",cursor:"pointer"}}>
                <h1  class="mb-2 text-2xl md:text-4xl w-max font-semibold tracking-tight text-white m-2 p-1" style={{marginRight: "65%", textAlign:'start',boxShadow: "5px 5px 5px rgb(0 0 0)",cursor:"pointer"}}>
                    On Going Projects
                </h1>
            </div>
            <div className='flex items-center justify-center my-8'>
                <div className='flex items-center justify-center flex-col p-3 bg-slate-300'>
                    <div className='flex flex-col'>
                        {/* cards */}
                            <Fade direction='left' triggerOnce>
                        <div className='m-2 bg-white cursor-pointer' style={{border:"0.5px solid black"}}>

                            <div className='m-2 flex flex-row'>
                                <ChevronRightIcon />
                                <p className='font-semibold text-base '>VASUNDHARA PRIDE, Baner, Pune</p>
                            </div>
                        </div>
                        <div className='m-2 bg-white cursor-pointer'  style={{border:"0.5px solid black"}}>
                            <div className='m-2 flex flex-row'>
                                <ChevronRightIcon />
                                <p className='font-semibold text-base'>VASUNDHARA-HIGH STREET, Baner, Pune</p>
                            </div>
                        </div>
                            </Fade>
                        {/* <div className='m-2 bg-white' style={{border:"0.5px solid black"}}>
                            <div className='m-2 flex flex-row'>
                                <ChevronRightIcon />
                                <p className='font-semibold text-base'>SAIDEEP CONSTRUCTION</p>
                            </div>
                        </div>
                        <div className='m-2 bg-white' style={{border:"0.5px solid black"}}>
                            <div className='m-2 flex flex-row'>
                                <ChevronRightIcon />
                                <p className='font-semibold text-base'>CHAVAN BUILDCON</p>
                            </div>
                        </div>
                        <div className='m-2 bg-white' style={{border:"0.5px solid black"}}>
                            <div className='m-2 flex flex-row'>
                                <ChevronRightIcon />
                                <p className='font-semibold text-base'>VASUNDHARA BUILDCON</p>
                            </div>
                        </div> */}
                        {/* cards */}
                    </div>
                </div>
            </div>
    </div>
    )
}

export default CompletedProjects