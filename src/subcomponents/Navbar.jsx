import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = ({openModal}) => {
    // const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [sidebar, setSidebar] = useState(0);
    const switchSidebar=()=>{
        // if(sidebar===0){
            setSidebar(1)
        // }
        console.log(sidebar)
    }
    const closeSidebar=()=>{
        setSidebar(0);
    }
    function handleKeyDown(e) {
		// navigate(`/project?q=${query.toLowerCase()}`);
		// setQuery("");
	}
    return (
        <>
            <div className="bg-transparent shadow" >
                <header className="grid text-gray-600 body-font  md:grid grid-cols-12">

                    <div className='flex col-span-12 cursor-pointer flex-row md:flex-row justify-between items-center md:pt-0  md:pr-0  h-32 md:col-span-10'>
                                <div className='pl-3 md:ml-9 pt-1 mt-1 ' style={{height:"90px",width:"90px"}}>
                                {/* <img src='https://heaven11.axiomthemes.com/wp-content/uploads/2018/06/logo1.png' className='' alt=""/> */}
                                    <img src='Metropolitian.png' style={{height:"100%",width:"100%"}} className='' alt=''/>
                                </div> 
                                <div className='pr-3 md:hidden' onClick={openModal} >
                                    <MenuIcon/>
                                </div>   
              
                        {/* Search Bar Starts */}
                            {/* <div className="flex justify-center border-box mr-3">
                                <div className="xl:w-96 ">
                                    <div className="input-group relative flex  items-stretch w-full mb-4">
                                    <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                    placeholder="Search" aria-label="Search" aria-describedby="button-addon3"
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                    }}
                                    value={query}
                                    onKeyDown={(e) => e.key === "Enter" && handleKeyDown()}
                                    />
                                    <button className="btn inline-block px-2 sm:px-6  py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                                    </div>
                                </div>
                            </div> */}
                        {/*Search Bar ENds  */}
                      
                    </div>
                    <div className='hidden md:flex justify-center items-center bg-navBg col-span-2'>
                        <div className='flex flex-row  items-center justify-center bg-navBg'>
                            {/* <img src="https://cdn.discordapp.com/attachments/989612107626586152/989645628822929448/icons8-ringer-volume-501.png" className='h-8 w-8'  alt=""  /> */}
                            <div className='lg:m-2 h-12 w-10 flex justify-center items-center md:m-0 '>
                                <img src="https://cdn.discordapp.com/attachments/989612107626586152/989645628822929448/icons8-ringer-volume-501.png" className='h-8 w-8 text-navGreen hover:invert-75 cursor-pointer'  alt=""  />
                                {/* <WifiCalling3OutlinedIcon className="text-navGreen hover:invert-75 cursor-pointer" /> */}
                            </div>

                            <div className='flex flex-col bg-navBg'>
                                <span className='font-sans bg text-sm font-bold'>Call Us Now!</span>
                                <span className='text-dark font-mono text-lg hover:text-opacity-50 cursor-pointer'>+91-7666615001</span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar