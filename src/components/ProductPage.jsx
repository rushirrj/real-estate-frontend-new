import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import GalleryCard from "../subcomponents/GalleryCard";
import MapCard from "../subcomponents/MapCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Fade } from "react-awesome-reveal";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useSearchParams, useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SuscribeToNewsletterCard from "../subcomponents/SuscribeToNewsletterCard";
import IsometricCard from "../subcomponents/IsometricCard";

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [flatType, setFlatType] = useState(0);
  const [loading, setLoading] = useState(false);
  const [typeDetail, setTypeDetail] = useState([])
  const [curType, setCurType] = useState(0);
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    property_name: "Sai Sharnam",
    phone: "",
    additional_info: "",
    type_of_enquiry: "Enquiry",
    scheduled_time: "Not Selected By User",
  });

  const navigate = useNavigate();
  const onSubmitForm = async (e) => {
    e.preventDefault();
  
    // console.log(body);
    try {
      // const body = { email, name, property_name, phone, scheduled_time, type_of_enquiry };
      const response = await fetch("https://realestatebackend-1tat.onrender.com/user/enquiry", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      
      const ParseRes = await response.json();
      console.log(ParseRes);
      console.log("Successfull");
      navigate('/success?q=3');
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmitForm1 = async () => {
    // e.preventDefault();
  
    // console.log(body);
    try {
      // const body = { email, name, property_name, phone, scheduled_time, type_of_enquiry };
      const response = await fetch("https://realestatebackend-1tat.onrender.com/user/enquiry", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      
      const ParseRes = await response.json();
      console.log(ParseRes);
      window.open(flatType.brochure_url, "_blank")
    } catch (err) {
      console.log(err);
    }
  };
  
  const onDateChange = (e) => {
    console.log(e.target);
    setInputs({ ...inputs, [e.target.name]: e.target.valueAsDate });
  }

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const getFlatDetails = async () => {
    setLoading(false);
    const id = searchParams.get("q");
    const response = await fetch(`https://realestatebackend-1tat.onrender.com/admin/product/from/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parseRes = await response.json();
    console.log(parseRes);
    setFlatType(parseRes.data)
    const curData = parseRes.data;
    setTypeDetail([
      {
        type: curData.type1,
        price: curData.price1,
        area: curData.area1,
        floor_no: curData.floor_no1,
        isometric: curData.isometric1,
        floor: curData.floor1,
      },
      {
        type: curData.type2,
        price: curData.price2,
        area: curData.area2,
        floor_no: curData.floor_no2,
        isometric: curData.isometric2,
        floor: curData.floor2,
      },
      {
        type: curData.type3,
        price: curData.price3,
        area: curData.area3,
        floor_no: curData.floor_no3,
        isometric: curData.isometric3,
        floor: curData.floor3,
      },
      {
        type: curData.type4,
        price: curData.price4,
        area: curData.area4,
        floor_no: curData.floor_no4,
        isometric: curData.isometric4,
        floor: curData.floor4,
      }
    ]);
    // const arr = [];
    setInputs({...inputs, property_name : curData.property_name});
    setLoading(true)
  };

  useEffect(() => {
    getFlatDetails();
  }, [])


  return (
    loading &&
    <div>
      <div className="p-4 ">
        <div>
          <section class="text-gray-600 body-font overflow-hidden">
            <Fade direction="up" triggerOnce>
              <div class="container px-3 pt-16 mx-auto">
                <div class="lg:w-4/5 mx-auto flex  flex-wrap">
                  <img
                    alt="ecommerce"
                    class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded mb-6"
                    src={flatType.property_thumbnail}
                  />
                  <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">
                    {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">
                    BRAND NAME
                  </h2> */}
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                      {flatType.property_name}
                    </h1>
                    <div class="flex mb-4">
                      <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                        Description
                      </a>
                      {/* <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                    <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
                    </div>
                    <p class="leading-relaxed mb-4 text-left">
                      {flatType.property_details}
                    </p>
                    <div class="flex border-t border-gray-200 py-2">
                      <span class="text-gray-500">Type</span>
                      <select
                        className="ml-auto text-gray-900 form-select appearance-none
                        block
                        px-3
                        py-1.5
                        text-base
                        font-semibold

                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        w-36
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        defaultValue={flatType.type1}
                        onChange={(e) => {
                          // console.log(e.target)
                          setCurType(e.target.options.selectedIndex);
                        }}
                      >
                        {typeDetail.map((ele, index) => {
                          return (
                            ele.type ? (

                              <option value={ele.type} id={index}>{ele.type}</option>
                            ) :
                              (
                                ""
                              )
                          )
                        })}
                        {/* <option value="1BHK" defaultChecked>
                          1 BHK
                        </option>
                        <option value="3BHK">3 BHK</option> */}
                      </select>
                    </div>
                    <div class="flex border-t border-gray-200 py-2">
                      <span class="text-gray-500">Area</span>
                      <span class="ml-auto text-gray-900">{typeDetail[curType].area} sqFt</span>
                    </div>
                    <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                      <span class="text-gray-500">Floor</span>
                      <span class="ml-auto text-gray-900">{typeDetail[curType].floor_no}</span>
                    </div>
                    <div class="flex">
                      <span class="title-font font-medium text-2xl text-gray-900">
                        ₹{typeDetail[curType].price}
                      </span>
                      <button class="flex ml-auto text-white bg-navGreen border-0 py-2 px-6 focus:outline-none hover:bg-amber-500 rounded">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </section>
        </div>

        <div className="section listing-wrapper">
          <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap ">
              {/* <!-- Listings Start --> */}
              <div className="lg:w-2/3 pr-4 pl-4">
                <Fade direction="up" triggerOnce>
                  {/* <!-- Content Start --> */}
                  <div className="listing-content">
                    <h4 className="flex justify-center text-gray-900 text-3xl title-font font-medium mb-10">
                      Property Overview
                    </h4>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="basis-1/2 border-double border-4 border-navGreen text-left p-3 flex gap-2 flex-col bg-transparent">
                        <div>
                          <strong className="text-left">
                            Structural Design:
                          </strong>
                          Earthquake resistant structure conforming to IS code.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="text-left">Ceiling: </strong>
                          Earthquake resistant structure conforming to IS code.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="text-left">Walls:</strong> High
                          quality bricks.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="text-left">Plaster:</strong>
                          External — Sand faced finish, Internal - POP finish.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="text-left">Painting:</strong>
                          Internal plastic paint & outside with water proof
                          acrylic paint.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="">Kitchen:</strong>Granite Kitchen
                          platform with stainless steel Sink with service
                          platform & tiles up to ceiling. Kitchen Trolley From
                          Well Known Company. Water purifier in kitchen. Loft in
                          Kitchen in Each Flat For Storage
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="">Toilet - Bathroom: </strong>
                          Designer tiles full in all toilets and bathrooms.
                          Elegant Bathroom fittings & Sanitary wares. Wash Basin
                          with mirror. Granite Door Frames in Bathrooms and W/C.
                          Loft in bathroom in Each flat for storage.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="">Lift:</strong> High Speed
                          Elevators of Reputed manufacturers.
                        </div>

                      </div>
                      <div className="basis-1/2 border-double border-4 border-navGreen text-left p-3 flex gap-2 flex-col bg-transparent">
                        <div>
                          <strong className="text-left">
                            Living Room & Bedroom:
                          </strong>
                          32"X32" vitrified Tiles Flooring in Hall & Bedroom. In
                          Hall half fall ceiling & Cornice moulding in the Bed &
                          Master Bedrooms.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="text-left">Doors: </strong> All
                          doors and frames with good quality fittings.
                          Cylindrical locks to bedroom doors.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="text-left">Windows: </strong>{" "}
                          French Windows in hall, Bed, Master Bed with Granite
                          seals. Powder coated sliding window in all Room with
                          One Way Glass. Louvre window FOr Toilets.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="text-left">Water Supply:</strong>
                          Sufficient water supply through overhead and ground
                          water tank.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="text-left">Plumbing:</strong>
                          Branded material used for Concealed Plumbing and
                          Wiring.
                        </div>
                        <hr className="border-navGreen border-1 border-solid" />
                        <div>
                          <strong className="">Electrification:</strong>
                          Concealed Copper wiring with main Circuit breakers.
                          ISI approved quality switches. Well-known ceiling fan
                          with one Tube light in each Hall, Bedroom & Kitchen.
                          T.V / Cable and telephone points in Living room and
                          all Bedrooms. Inverter Wiring in Flats for Adequate
                          point.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Content End --> */}

                  {/* floor plan starts */}
                  <p className="text-3xl text-black mt-12">FLOOR PLAN</p>
                  <Gallery>
                    <div className="flex  flex-row mt-7 flex-wrap">
                      {
                        typeDetail[curType].floor.map((ele, key) => {
                          return(
                            <MapCard key={key} imgLink={ele} />
                          ) 
                          
                        })
                      }
                      {/* <MapCard imgLink="https://www.osskcorp.com/img/sharnam-fp.jpg" />
                      <MapCard imgLink="https://www.osskcorp.com/img/sharnam-fp2.jpg" />
                      </div>
                      <div className="flex  flex-row mt-7 basis-1/2">
                      <MapCard imgLink="https://www.osskcorp.com/img/sharnam-fp3.jpg" />
                      <MapCard imgLink="https://www.osskcorp.com/img/sharnam-fp0.jpg" /> */}
                    </div>
                    {/* <div className="flex flex-col md:flex-row mt-7"> */}
                    {/* </div> */}
                  </Gallery>
                  {/* floor plan Ends */}


                  <div className="section section-padding pt-0 acr-listing-features">
                    <h4>Amenities</h4>
                    <div className="flex flex-wrap ">
                      <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 ">
                        <div className="listing-feature-wrapper">
                          <div className="listing-feature">
                            <i className="flaticon-picture"></i>
                            <h6 className="listing-feature-label">
                              Propery Type
                            </h6>
                            <span className="listing-feature-value">House</span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-bone"></i>
                            <h6 className="listing-feature-label">
                              Pet Friendly
                            </h6>
                            <span className="listing-feature-value">Yes</span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-chair"></i>
                            <h6 className="listing-feature-label">Furnished</h6>
                            <span className="listing-feature-value">Yes</span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-fan"></i>
                            <h6 className="listing-feature-label">Play Area</h6>
                            <span className="listing-feature-value">Yes</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/2 pr-4  md:w-1/2  pl-4">
                        <div className="listing-feature-wrapper">
                          <div className="listing-feature">
                            <i className="flaticon-bathroom"></i>
                            <h6 className="listing-feature-label">Bathrooms</h6>
                            <span className="listing-feature-value">3</span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-pillow"></i>
                            <h6 className="listing-feature-label">Bed Rooms</h6>
                            <span className="listing-feature-value">4</span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-mailbox"></i>
                            <h6 className="listing-feature-label">
                              Water Supply
                            </h6>
                            <span className="listing-feature-value">Yes</span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-ruler"></i>
                            <h6 className="listing-feature-label">
                              Property Size
                            </h6>
                            <span className="listing-feature-value">
                              3,000 Sqft
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden-listing-features">
                      <div className="flex flex-wrap ">
                        <div className="lg:w-1/2  pl-4 md:w-1/2 pr-4 ">
                          <div className="listing-feature">
                            <i className="flaticon-key"></i>
                            <h6 className="listing-feature-label">
                              Property Id
                            </h6>
                            <span className="listing-feature-value">
                              BPFXQEI
                            </span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-garage"></i>
                            <h6 className="listing-feature-label">Parking</h6>
                            <span className="listing-feature-value">Yes</span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-history"></i>
                            <h6 className="listing-feature-label">
                              Year Built
                            </h6>
                            <span className="listing-feature-value">1979</span>
                          </div>
                        </div>
                        <div className="lg:w-1/2  pl-4 md:w-1/2 pr-4 ">
                          <div className="listing-feature">
                            <i className="flaticon-new"></i>
                            <h6 className="listing-feature-label">Condition</h6>
                            <span className="listing-feature-value">New</span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-ruler"></i>
                            <h6 className="listing-feature-label">Lot Size</h6>
                            <span className="listing-feature-value">
                              89 Acres
                            </span>
                          </div>
                          <div className="listing-feature">
                            <i className="flaticon-eye"></i>
                            <h6 className="listing-feature-label">View</h6>
                            <span className="listing-feature-value">
                              City View
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Isometric View starts */}
                  <p className="text-3xl text-black my-12">Isometric View</p>
                  <Gallery>
                  <div className="flex flex-col md:flex-row mb-12 overflow-hidden">
                    <div className=" flex overflow-hidden">
                      {
                        typeDetail[curType].isometric.map((ele, key) => {
                          return (
                              <IsometricCard key={key} imgLink={ele} />
                          )
                        })
                      }
                    </div>
                    {/* <div className="overflow-hidden">
                      <div className="basis-1/2 flex flex-col items-center justify-center scale-100 hover:scale-110 transition-all duration-300">
                        <img
                          src="https://www.osskcorp.com/img/img.1.png"
                          alt=""
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-lg tracking-wider font-semibold">
                          1 BHK Isometric View
                        </p>
                      </div>
                    </div> */}
                    {/* <div className="overflow-hidden">
                      <div className="basis-1/2 flex flex-col items-center justify-center scale-100 hover:scale-110 transition-all duration-300">
                        <img
                          src="https://www.osskcorp.com/img/img.2.png"
                          alt=""
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-lg tracking-wider font-semibold">
                          2 BHK Isometric View
                        </p>
                      </div>
                    </div> */}
                  </div>
                  </Gallery>
                  {/* Isometric View Ends */}
                  <div className="section pt-0 acr-listing-nearby">
                    <h4>What's Nearby</h4>

                    <div className="listing-nearby-item">
                      <h6 className="custom-success">
                        <i className="fas fa-utensils"></i>Restaurants
                      </h6>
                      <ul>
                        <li>
                          <span>
                            <b>The One</b> <span>(1.3 km)</span>{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <b>Elephant</b> <span>(0.2 km)</span>{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <b>Jorgie and Clyne</b> <span>(3.2 km)</span>{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="listing-nearby-item">
                      <h6 className="custom-danger">
                        <i className="fas fa-graduation-cap"></i>Education
                      </h6>
                      <ul>
                        <li>
                          <span>
                            <b>Greater Moscow Liberty School</b>{" "}
                            <span>(1.3 km)</span>{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <b>Chandler Highschool</b> <span>(0.2 km)</span>{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <b>Insitution of Science and Technology</b>{" "}
                            <span>(3.2 km)</span>{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="listing-nearby-item">
                      <h6 className="custom-warning">
                        <i className="fas fa-shopping-basket"></i>Essentials
                      </h6>
                      <ul>
                        <li>
                          <span>
                            <b>Joe's 24/7 Groceries</b> <span>(0.6 km)</span>{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <b>Frank and Joe</b> <span>(0.9 km)</span>{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <b>All United Store</b> <span>(1.2 km)</span>{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Maharera Starts */}
                  <div className="flex flex-col items-center justify-center gap-8  mb-20">
                    <div className="text-3xl text-black">MAHARERA NO</div>
                    <div class="border-dashed border-4 border-sky-500 w-3/4 p-4 text-xl font-medium">
                      MAHARERA NUMBER : {flatType.maharera_no}
                    </div>
                  </div>

                  {/* Maharera Ends */}
                  <div className="section pt-0">
                    <h4>Property Video</h4>
                    {/* <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap
                    </p> */}
                    <div className="w-full h-96 mt-6">
                      <iframe
                        className="w-full h-full"
                        src={flatType.property_video}
                      ></iframe>
                    </div>
                  </div>

                  {/* map starts */}
                  <div className=" h-96 mt-6">
                    <iframe
                      class=" inset-0"
                      // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                      title="map"
                      marginheight="0"
                      marginwidth="0"
                      scrolling="no"
                      // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15066.724692923148!2d73.129081!3d19.252722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7182da00630785a3!2sHouse%20of%20Chavan!5e0!3m2!1sen!2sin!4v1656408371055!5m2!1sen!2sin"
                      src={flatType.property_map}
                      width="100%"
                      height="100%"
                      frameborder="0"
                    >
                      {" "}
                    </iframe>
                  </div>
                  {/* map starts */}
                </Fade>
              </div>
              {/* <!-- Listings End --> */}

              {/* <!-- Sidebar Start --> */}
              <div className="lg:w-1/3 pr-4 pl-4">
                <div className="sidebar sticky-sidebar">
                  <Fade direction="up" triggerOnce>
                    <div className="sidebar-widget">
                      <h5>Meet The Builder</h5>
                      {/* <!-- Author Start --> */}
                      <div className="flex items-start sidebar-author listing-agent">
                        {/* <a href=""><img src="https://via.placeholder.com/292x300" alt="agent" /></a> */}
                        <div className="flex-1">
                          <h6>
                            {" "}
                            <a href="">Chavan Group Of Companies</a>{" "}
                          </h6>
                          <span>Company Agent</span>
                        </div>
                      </div>
                      {/* <!-- Author End --> */}

                      {/* <!-- Contact Start --> */}
                      <form method="post ">
                        <div className="mb-4 ">
                          <input
                            type="text"
                            className="block h-12 appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            placeholder="Name"
                            name="name"
                          onChange={(e) => onChange(e)}
                          value={inputs.name}
                          />
                        </div>

                        <div className="mb-4 mt-6">
                          <input
                            type="text"
                            className="block h-12 appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            placeholder="Email Address"
                            name="email"
                          onChange={(e) => onChange(e)}
                          value={inputs.email}
                          />
                        </div>
                        <div className="">
                          <input
                            type="text"
                            className="block h-12 appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            placeholder="Phone Number"
                            name="phone"
                          onChange={(e) => onChange(e)}
                          value={inputs.phone}
                          />
                        </div>

                        <div className="mb-2 mt-2">
                          <TextareaAutosize
                          onChange={(e) => onChange(e)}
                          value={inputs.additional_info}
                          name="additional_info"
                            className='p-3 rounded-md'
                            aria-label="empty textarea"
                            placeholder="Any Other message..?"
                            style={{ width: "100%", border: "0.2px solid gray" }}
                          />
                        </div>
                        <div className="flex justify-around items-center">
                          <FormControl>
                            <RadioGroup

                              aria-labelledby="demo-row-radio-buttons-group-label"
                              // name="row-radio-buttons-group"
                              defaultValue="Enquiry"
                              name="type_of_enquiry"
                            onChange={(e) => onChange(e)}
                            value={inputs.type_of_enquiry}
                              row
                            >
                              <FormControlLabel className="m-0" value="Enquiry" control={<Radio />} label="Enquiry" />
                              <FormControlLabel className="m-0" value="Book a site visit" control={<Radio />} label="Book a site visit" />
                              <FormControlLabel className="m-0" value="Ask for a callback" control={<Radio />} label="Ask for a callback" />
                            </RadioGroup>
                          </FormControl>
                        </div>

                        <Stack
                          component="form"
                          noValidate
                          spacing={3}
                          className="flex items-center justify-center w-full py-4"
                        >
                          <TextField
                            name="scheduled_time"
                            onChange={(e) => onDateChange(e)}
                            // name="scheduled_time"
                            id="datetime-local"
                            className="w-full"
                            type="datetime-local"
                            defaultValue="2022-05-24T10:30"
                            sx={{ width: "100%" }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Stack>
                        <div

                          className="btn p-4 cursor-pointer bg-navGreen hover:bg-amber-500 block w-full font-semibold"
                        onClick={(e) => onSubmitForm(e)}
                        >
                          Submit
                        </div>
                        {/* <a

                          className="btn p-4 cursor-pointer bg-orange-500 hover:bg-orange-300 block w-full font-semibold my-5"
                          // onClick={(e) => onSubmitForm(e)}
                          href={flatType.brochure_url}
                        >
                          Download Brochure
                        </a> */}
                      </form>

                      {/* <!-- Contact End --> */}
                    </div>
                  </Fade>
                </div>
              </div>
              {/* <!-- Sidebar End --> */}
            </div>
          </div>
        </div>
        <Fade direction="up" triggerOnce>
        <div class="container px-4">
            <SuscribeToNewsletterCard download={true} onSubmitForm={onSubmitForm1} />
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row flex-wrap items-center justify-center my-11">
            <Gallery>
              {
                flatType.gallery_array.map((ele, key) => {
                  return (

                    <GalleryCard imgLink={ele} key={key} />
                  )
                })
              }
              {/* <GalleryCard imgLink="slider1.jpg" />
              <GalleryCard imgLink="slider2.jpg" />
              <GalleryCard imgLink="slider3.jpg" />
              <GalleryCard imgLink="slider4.jpg" />
              <GalleryCard imgLink="logo192.png" />
              <GalleryCard imgLink="logo512.png" />
              <GalleryCard imgLink="https://cdn.discordapp.com/attachments/989604828504293440/992894621707407470/post-11-copyright-1536x864.jpg" /> */}
            </Gallery>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProductPage;
