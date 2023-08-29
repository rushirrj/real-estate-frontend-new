import React from 'react'
import { useNavigate } from "react-router-dom";

const FloorPLanCard = (props) => {
    const navigate = useNavigate();
    return (
 
        <div  class=" md:p-10 box-border h-full">
            <div  class="h-full  border-opacity-60 rounded-lg overflow-hidden">
                <div >
                <img  class="h-full w-full object-cover object-center" src={props.img} alt="blog" />                    
                </div>

                <div class="flex flex-col justify-start p-5 gap-2 ">
                    <div className='text-white text-2xl font-bold text-left'>
                        {props.title}
                    </div>
                    <div className='text-navGreen text-lg font-bold text-left'>
                        {props.sqft}
                    </div>
                    <div className='text-white tracking-widest text-left text-lg'>
                        {props.desc}
                    </div>
                    <div className="flex flex-start items-center justify-start mt-7">
                        <button onClick={
                            ()=>{navigate('product?q=62ddc9dc232a370b073ba2e9')}
                        } style={{boxShadow: "10px 10px 10px rgb(6 5 5 / 52%)",cursor:"pointer"}} className="ml-0 h-16 w-36 border-2 text-md font-semibold  leading-normal text-gray-800 hover:bg-amber-500 bg-navGreen m-2">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloorPLanCard