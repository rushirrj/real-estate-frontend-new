import React from 'react'


function ContactUsProject(props) {
  return (
    <div style={{zIndex: "-1"}}>
        <section class="text-gray-600 body-font relative" style={{width:"350px"}}>
                    <div class="container px-5 py-8 mx-auto flex flex-col item-center justify-center ">
                        <div class=" h-72 bg-gray-300 rounded-lg overflow-hidden  p-10 flex items-end justify-start relative">
                            <iframe
                                class="absolute inset-0"
                                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                                title="map"
                                marginheight="0"
                                marginwidth="0"
                                scrolling="no"
                                src={props.mapLink}
                                width="100%"
                                height="100%"
                                frameborder="0"
                            > </iframe>
                        </div>
                        <div class="p-6 mt-1 " style={{border:"5px solid white"}}>
                                <p className='text-3xl font-semibold text-black text-left'>{props.company}</p>
                                <p className="text-black text-left mt-2"><b>Contact Us: </b>{props.phone}</p>
                                <p className="text-black text-left"><b>Email: </b>{props.email}</p>
                                <p className="text-black text-left "><b>Address: </b>   {props.address}</p>
                                {/* <p className="text-black text-left"></p> */}
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default ContactUsProject