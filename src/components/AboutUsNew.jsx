import React from "react";
import { Fade } from "react-awesome-reveal";
const AboutUsNew = () => {
  return (
    <div >
      <div  className="flex items-center justify-center w-full md:h-72 h-64" style={{backgroundImage: 
 `url(banner2.jpg)`, backgroundPosition: "0% 85%", backgroundSize: "cover",boxShadow: "5px 5px 5px #80808085",cursor:"pointer" }}>
        
        {/* <Fade direction="left" triggerOnce> */}
          <h1 className="text-5xl font-semibold py-3 text-white px-2" style={{marginRight: "38%", textAlign:'start',boxShadow: "20px 20px 20px rgb(24 0 0)",cursor:"pointer"}}>About Us</h1>
     {/* </Fade>     */}
      </div> 
      <section className="flex flex-col md:flex-row box-border  p-6 pt-16">
        <div  className="basis-1/2 box-border md:pr-0 flex justify-center items-start">
          <Fade  direction="left" style={{ zIndex: "-1" }} triggerOnce>
            <div style={{ height: "600px", width: "500px" ,zIndex:"10",boxShadow: "10px 10px 10px #80808085",cursor:"pointer"}}>
              <img
                src="about.jpg"
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
          </Fade>
        </div>

        <div className="basis-1/2 flex flex-col sm:flex-row pl-5 sm:pl-0 ">
          <div className="basis-1/6 "></div>
          <div class="basis-5/6  pt-9 ">
            <Fade direction="right" triggerOnce>
              <div className="flex flex-row items-center justify-start">
                <div
                  className="w-11 h-0"
                  style={{ borderTop: "3px solid #c5b58f" }}
                ></div>

                <div
                  className="pl-1 tracking-wider text-xl font-semibold"
                  style={{ color: "#c5b58f" }}
                  
                >
                  ABOUT OUR COMPANY
                </div>
              </div>

              <div className="flex items-start text-left mt-4">
                <span className="font-semibold font-sans text-4xl sm:text-xl md:text-xl">
                  We CHAVAN Group of Companies welcome you to the HOUSE OF
                  CHAVAN
                </span>
              </div>
              <div
                className="w-11 my-3"
                style={{ borderTop: "3px solid black" }}
              ></div>
              <div className=" font-thin text-left text-xl flex flex-row justify-start items-center">
                {/* <LocationOnOutlinedIcon className="m-2" /> */}
                <p className="text-base text-black text-left">
                  <p className="mt-2 text-black font-normal">
                    {" "}
                    A <strong>brand CHAVAN</strong> known for its best
                    construction quality and work ethics. There are our
                    different companies under the{" "}
                    <strong>flagship of CHAVAN. </strong>
                    <br />
                  </p>
                  <p className="mt-2 text-black font-normal">
                    {" "}
                    <strong>OSSK Corp</strong> is a part of CHAVAN Group and
                    formerly known as{" "}
                    <strong>OM SHRI SAI KRUPA CORPORATION</strong> which is
                    established in the year 1983. Today with all the values
                    followed by the group it stands firm and tall amongst all
                    MMR’s premier real estate developers, active mostly in the
                    region of Pune, Thane, Twin City of Kalyan-Dombivali and
                    neighbouring MMR.
                    <br />
                  </p>
                  <p className="mt-2 text-black font-normal">
                    The Group is into this field of construction for more than 2
                    decades and their experience in developing and building up
                    the projects with large number housing units and modern
                    technically advanced systems. It has already carried the
                    development of over 11 lakh sq. ft. of residential and
                    commercial spaces till date and currently it has some of the
                    best projects in the region of Pune, Thane, Kalyan, Ambivali
                    and Titwala amongst others which are in process of
                    development along with some prestigious upcoming projects.
                  </p>
                </p>
              </div>
              {/* <div className="flex flex-start items-center justify-start mt-7">
                        <button className="ml-0 h-16 w-36 border-2 bg-blackDmain text-white  bg-navGreen m-2 hover:bg-amber-500 hover:text-black">
                        More About Us
                        </button>
                    </div> */}
            </Fade>
          </div>
        </div>
      </section>

      <Fade direction="up" triggerOnce>
        <div style={{boxShadow: " 3px 3px #80808085"}} className="flex items-center justify-center pt-24 flex-col">
          <div  className="flex flex-col justify-center items-center">
            <div className="text-4xl font-semibold">OUR VISION</div>
            <div
              className="m-2 w-16"
              style={{ borderBottom: "2px solid black" }}
            ></div>
          </div>
          <div className="text-base font-medium mt-2 text-black p-3">
            "To excel in developing the quality infrastructure in residential,
            commercial & retail spaces for all needs."
          </div>
        </div>
        <div style={{boxShadow: " 3px 3px #80808085"}} className="flex items-center justify-center  mt-14 flex-col">
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl font-semibold">OUR MISSION</div>
            <div
              className="m-2 w-16"
              style={{ borderBottom: "2px solid black" }}
            ></div>
          </div>
          <div className="text-base font-medium mt-2 text-black p-3">
            "To make this world happy with shelter to everyone with the quality
            of work for better sustainability".
          </div>
        </div>
        <div style={{boxShadow: " 3px 3px #80808085"}} className="flex items-center justify-center  mt-14 flex-col mb-16">
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl font-semibold">OUR GOAL</div>
            <div
              className="m-2 w-16"
              style={{ borderBottom: "2px solid black" }}
            ></div>
          </div>
          <div className="text-base font-medium mt-2 text-black p-3">
            "To set the benchmark for best quality in world of competition for
            best price for the money you invest."
          </div>
        </div>
      </Fade>

      {/* tailblocks component starts */}
      <div>
        <p className="text-4xl text-dark font-mono font-semibold pt-14">More About Us</p>
        <section class="text-gray-600 body-font">
          <div class="container px-5 pt-10 pb-24 mx-auto">
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0" style={{boxShadow: "10px 10px 10px #80808085"}}>
                {/* <Fade direction="left" triggerOnce> */}
                
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="sm:w-16 sm:h-16 w-10 h-10 rounded-full p-3"
                    viewBox="0 0 24 24"
                    style={{boxShadow: "10px 10px 10px #80808085"}}
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                {/* </Fade> */}
              </div>

              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                {/* <Fade direction="right" triggerOnce> */}
                  <h2 class=" text-lg  font-semibold mb-2">
                    The other companies under the flagship of CHAVAN
                  </h2>
                  <ol className="py-1 font-medium">
                    <li>1) OM SHRI SAI KRUPA CONSTRUCTION</li>
                    <li>2) SAIDEEP ENTERPRISES</li>
                    <li>3) SAIDEEP CONSTRUCTION</li>
                    <li>4) CHAVAN BUILDCON</li>
                    <li>5) VASUNDHARA BUILDCON</li>
                  </ol>
                  <p class="tracking-tighter text-lg mt-2 font-semibold">
                    A loyal, highly skilled, and motivated team ensures
                    continuity of excellent service and strong relationships
                    with existing and new clients.
                  </p>
                {/* </Fade> */}
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                {/* <Fade direction="left" triggerOnce> */}
                  <h2 class=" text-lg  font-semibold mb-2">
                    OUR PHILOSOPHY:
                  </h2>
                  <ol className="py-1 font-medium">
                    <li>1) Getting things done; only the right way</li>
                    <li>2) Seek innovation for betterment</li>
                    <li>3) Being there for BENEFIT OF our stake holders</li>
                    <li>
                      4) Budding talent within organization and nurturing them
                    </li>
                  </ol>
                {/* </Fade> */}
              </div>
              <div style={{boxShadow: "10px 10px 10px #80808085"}} class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                {/* <Fade direction="right" triggerOnce> */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="sm:w-16 sm:h-16 w-10 h-10 rounded-full p-3"
                    style={{boxShadow: "10px 10px 10px #80808085"}}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                {/* </Fade> */}
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div style={{boxShadow: "10px 10px 10px #80808085"}} class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                {/* <Fade direction="left" triggerOnce> */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="sm:w-16 sm:h-16 w-10 h-10 rounded-full p-3"
                    viewBox="0 0 24 24"
                    style={{boxShadow: "10px 10px 10px #80808085"}}
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                {/* </Fade> */}
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0 md:pl-4">
                {/* <Fade direction="right" triggerOnce> */}
                  <h2 class=" text-lg  font-semibold mb-2">
                    OUR VALUES:
                  </h2>
                  <ol className="py-1 font-medium">
                    <li>
                      1) Being Honest and transparent with all our stakeholders.
                    </li>
                    <li>
                      2) Whole-heartedly contribute towards communities'
                      betterment and environment at large
                    </li>
                    <li>3) Work only with the best people in Industry</li>
                    <li>
                      4) Create benchmarks through innovative and world-class
                      technologies
                    </li>
                    <li>
                      5) Aim to seek excellence in all kind of work that we
                      undertake
                    </li>
                  </ol>
                {/* </Fade> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* tailblocks component starts */}
      <Fade direction="up" triggerOnce>
        <div className="flex items-center justify-center pt-8  pb-14 flex-col" style={{boxShadow:" 0px -0px 3px #80808085"}}>
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl font-semibold">QUALITY:</div>
            <div
              className="m-2 w-16"
              style={{ borderBottom: "2px solid black" }}
            ></div>
          </div>
          <div className="text-base font-normal mt-2 text-slate-800 p-3 w-4/5">
            Our firm has always been praised and applauded for our unique style
            and approach; mainly towards designing structures with definitive
            lifestyle theme. We guarantee satisfaction of our customers by
            providing them their desired quality of apartments / buildings /
            complexes or townships always along with the requisite
            infrastructure. As a practice we have set SOPs to regularly monitor
            the set measurable quality objectives and have established well
            these systems into our management and employees equally to monitor
            our progress.
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AboutUsNew;
