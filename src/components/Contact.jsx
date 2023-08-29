import React from 'react'
import ContactUsProject from '../subcomponents/ContactUsProject'
import EnquiryForm from '../subcomponents/EnquiryForm'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
// import Banner from '../../public/banner1.jpg';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import GetInTouch from '../subcomponents/GetInTouch';
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
    const notify = () => toast("Please Enter Full Details");
    return (
        <div style={{position: "relative"}}>     
           
        <GetInTouch notify={notify}/>     
        <ToastContainer/>                                                  
        <div>
            <div class="font-bold text-xl mb-2 w-full md:h-72 h-64 flex justify-center items-center" style={{
                backgroundImage:
                `url(banner1.jpg)`, backgroundPosition: "0% ", backgroundSize: "cover", boxShadow: "5px 5px 5px rgb(0 0 0)", cursor: "pointer"
            }}>
                <h1 class="mb-2 text-4xl md:text-5xl font-semibold tracking-tight text-white m-2 p-3" style={{ marginRight: "45%", textAlign: 'start', boxShadow: "20px 20px 20px rgb(2 2 3)" }}>
                    Contact Us
                </h1>

            </div> 
            <div className='flex flex-col md:flex-row flex-wrap p-1 m-10'>
                <div className='basis-1/4 h-52  p-1 w-full rounded-lg' >
                    <div style={{boxShadow: "10px 10px 10px #80808085",cursor:"pointer"}} className='p-3 h-full flex-col w-full gap-2 flex items-center justify-center rounded-md border-double border-4 opacity-80 hover:opacity-100 border-navGreen hover:border-lime-700 hover:bg-transparent cursor-pointer'>
                        <div className='h-8 w-8'>
                            <LocationOnIcon style={{color:"black",height:"100%",width:"100%"}}/>
                        </div>
                        <div className='flex flex-col gap-1 md:gap-2'>
                            <p className='text-lg text-dark font-mono font-semibold'>Visit Our Office</p>
                            <p className='text-xs text'>001 Anjali Apartment,<br/>
                                Opp.Bank of Maharashtra,<br/>
                                Khadakpada Kalyan (w): 421301</p>
                        </div>
                    </div>
                </div>
                <div className='basis-1/4 h-52  p-1 w-full rounded-lg' >
                    <div style={{boxShadow: "10px 10px 10px #80808085",cursor:"pointer"}} className='p-3 h-full flex-col w-full gap-2 flex items-center justify-center rounded-md border-double border-4 opacity-80 hover:opacity-100 border-navGreen hover:border-lime-700 hover:bg-transparent cursor-pointer'>
                        <div className='h-8 w-8'>
                            <EmailIcon style={{color:"black",height:"100%",width:"100%"}}/>
                        </div>
                        <div className='flex flex-col gap-1 md:gap-2 '>
                            <p className='text-lg text-dark font-mono font-semibold'>Mail Us</p>
                            <p className='text-xs text'>sales@osskcorp.com</p>
                        </div>
                    </div>
                </div>
                <div className='basis-1/4 h-52 p-1  w-full rounded-lg'>
                    <div style={{boxShadow: "10px 10px 10px #80808085",cursor:"pointer"}} className='p-2 h-full flex-col w-full gap-2 flex items-center justify-center rounded-md border-double border-4 opacity-80 hover:opacity-100 border-navGreen hover:border-lime-700 hover:bg-transparent cursor-pointer'>
                        <div className='h-8 w-8'>
                            <CallIcon style={{color:"black",height:"100%",width:"100%"}}/>
                        </div>
                        <div className='flex flex-col gap-1 md:gap-2 '>
                            <p className='text-lg text-dark font-mono font-semibold'>Visit Our Office</p>
                            <p className='text-xs text'>Call Us Now</p>
                            <p className='text-xs text'>+91-76666 15001</p>
                        </div>
                    </div>
                </div>
                <div className='basis-1/4 h-52  p-1 w-full rounded-lg' >
                    <div style={{boxShadow: "10px 10px 10px #80808085",cursor:"pointer"}} className='p-2 h-full flex-col w-full gap-2 flex items-center justify-center rounded-md border-double border-4 opacity-80 hover:opacity-100 border-navGreen hover:border-lime-700 hover:bg-transparent cursor-pointer'>
                        <div className='h-8 w-8'>
                            <WatchLaterIcon style={{color:"black",height:"100%",width:"100%"}}/>
                        </div>
                        <div className='flex flex-col gap-1 md:gap-2 '>
                            <p className='text-lg text-dark font-mono font-semibold'>Working Hour</p>
                            <p className='text-xs text'>Mon - Sat : 10am to 7pm<br/>
                                Sunday : Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="py-6 mt-12 flex flex-nowrap overflow-x-auto lg:flex-row " style={{boxShadow: "10px 10px 10px #80808085",cursor:"pointer"}}> */}
                {/* <div className='   order-2 lg:order-1  lg:scrollbar-thin lg:scrollbar-thumb-navGreen lg:scrollbar-track-yellow-100 lg:overflow-y-scroll'> */}
                    <div className='flex items-center justify-center mb-9'>
                        <div className='w-4/5 '>
                        <div className='px-3 flex flex-nowrap overflow-x-scroll overflow-y-hidden lg:scrollbar-thin lg:scrollbar-thumb-navGreen lg:scrollbar-track-yellow-100'>
                            <ContactUsProject style={{flex: "0 0 auto",  marginRight : "3px"}} address="402, Ramkrishna Bhavan-2, Sahajanand Chowk, Opp. Sun Soman Square, Kalyan (w) 421301" phone="+91-76666 15001" email="info@houseofchavan.com" company="Om Shri Saikrupa Construction" mapLink="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15066.724692923148!2d73.129081!3d19.252722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7182da00630785a3!2sHouse%20of%20Chavan!5e0!3m2!1sen!2sin!4v1656408371055!5m2!1sen!2sin" />
                            <ContactUsProject style={{flex: "0 0 auto",  marginRight : "3px"}} address="402, Ramkrishna Bhavan-2, Sahajanand Chowk, Opp. Sun Soman Square, Kalyan (w) 421301" phone="+91-76666 15001" email="info@houseofchavan.com" company="Om Shri Saikrupa Construction" mapLink="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15066.724692923148!2d73.129081!3d19.252722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7182da00630785a3!2sHouse%20of%20Chavan!5e0!3m2!1sen!2sin!4v1656408371055!5m2!1sen!2sin" />
                            <ContactUsProject style={{flex: "0 0 auto",  marginRight : "3px"}} address="402, Ramkrishna Bhavan-2, Sahajanand Chowk, Opp. Sun Soman Square, Kalyan (w) 421301" phone="+91-76666 15001" email="info@houseofchavan.com" company="Om Shri Saikrupa Construction" mapLink="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15066.724692923148!2d73.129081!3d19.252722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7182da00630785a3!2sHouse%20of%20Chavan!5e0!3m2!1sen!2sin!4v1656408371055!5m2!1sen!2sin" />
                            <ContactUsProject style={{flex: "0 0 auto",  marginRight : "3px"}} address="402, Ramkrishna Bhavan-2, Sahajanand Chowk, Opp. Sun Soman Square, Kalyan (w) 421301" phone="+91-76666 15001" email="info@houseofchavan.com" company="Om Shri Saikrupa Construction" mapLink="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15066.724692923148!2d73.129081!3d19.252722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7182da00630785a3!2sHouse%20of%20Chavan!5e0!3m2!1sen!2sin!4v1656408371055!5m2!1sen!2sin" />
                            <ContactUsProject style={{flex: "0 0 auto",  marginRight : "3px"}} address="402, Ramkrishna Bhavan-2, Sahajanand Chowk, Opp. Sun Soman Square, Kalyan (w) 421301" phone="+91-76666 15001" email="info@houseofchavan.com" company="Om Shri Saikrupa Construction" mapLink="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15066.724692923148!2d73.129081!3d19.252722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7182da00630785a3!2sHouse%20of%20Chavan!5e0!3m2!1sen!2sin!4v1656408371055!5m2!1sen!2sin" />
                        </div>  
                        </div> 
                    </div>
                    


                {/* </div> */}
                {/* <div className='basis-1/3  order-1 lg:order-2'>
                    <EnquiryForm />
                </div> */}
            {/* </div> */}
           
        </div>
                </div>
    )
}

export default Contact