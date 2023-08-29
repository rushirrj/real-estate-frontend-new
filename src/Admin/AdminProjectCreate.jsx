import React, { useState } from "react";
import axios from "axios";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useNavigate } from 'react-router-dom';
const AdminProjectCreate = () => {
  const [inputs, setInputs] = useState({
    // property_thumbnail: [],
    property_name: "",
    maharera_no: "",
    property_details: "",
    property_video: "",
    property_map: "",
    gallery_array: [],
    type1: "",
    price1: "",
    isometric1: [],
    isometric2: [],
    isometric3: [],
    isometric4: [],
    floor1: [],
    floor2: [],
    floor3: [],
    floor4: []
  });
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [imageArr, setImageArr] = useState({
    // property_thumbnail: [],
    isometric1: [],
    isometric2: [],
    isometric3: [],
    isometric4: [],
    floor1: [],
    floor2: [],
    floor3: [],
    floor4: [],
    gallery_array: [],
    property_thumbnail: [],
  });
  const handleImageChange = (e) => {
    const arr = [...e.target.files];
    setImage(arr);
    console.log(image);
  };
  const updateImage = async (e, name) => {
    e.preventDefault();
    const data = new FormData();
    console.log(typeof image);
    image.forEach((element) => {
      console.log(element);
      data.append("files", element);
    });

    // data.append("cow", "here");
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("https://realestatebackend-1tat.onrender.com/admin/multiple_img", data, config)
      .then((res) => {
        const imageLinks = res.data;
        console.log(res.data);
        // res.data.forEach((ele) => {
        //   imageLinks.push(
        //     "https://realestatebackend-1tat.onrender.com/public/images/" + ele.filename
        //   );
        // });
        // console.log(name);
        if(name === "property_thumbnail"){
          setInputs({...inputs, [name] : imageLinks[0]})
          setImageArr({ ...imageArr, [name] : imageLinks[0]});
        }else{
          setImagePreview(imageLinks);
          let totImg = imageArr[name];
          console.log(totImg, "eerer");
          totImg.push(...imageLinks);
          setImageArr({ ...imageArr, [name]: totImg });
          setInputs({ ...inputs, [name]: totImg });
        }
      });
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  // console.log(inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://realestatebackend-1tat.onrender.com/admin/product', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(inputs)
    });

    const parseRes = await response.json();
    navigate(`/admin/main/product/success?q=1`)
    console.log(parseRes);
    
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form className="w-3/5" >
        <div className="block uppercase tracking-wide text-gray-700 text-5xl font-bold mb-4">
          Add New Project
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Project Photo Thumbnail
            </label>
            <input
              class="form-control
                        
                        w-full
                        pt-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              id="formFile"
              name="property_thumbnail"
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "property_thumbnail")}
            >
              {" "}
              Upload
            </button>
          </div>

          {imageArr.property_thumbnail !== undefined ? (
            <img src={imageArr.property_thumbnail} />
          ) : (
            ""
          )}
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Property Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Type Here..."
              onChange={(e) => handleChange(e)}
              name="property_name"
              value={inputs.property_name}
            />
          </div>
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Property Address in short
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Type Here..."
              onChange={(e) => handleChange(e)}
              name="property_address"
              value={inputs.property_address}
            />
          </div>
          <div class="w-full  px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold "
              for="grid-last-name"
            >
              Property Details
            </label>
            {/* <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="property_details"
              onChange={(e) => handleChange(e)}
              value={inputs.property_details}
              
            /> */}
            <TextareaAutosize
            name="property_details"
            onChange={(e) => handleChange(e)}
            value={inputs.property_details}
                      className='p-3 rounded-md'
                      aria-label="empty textarea"
                      placeholder="Enter Description here"
                      style={{ width: "100%", border: "0.2px solid gray" }}
                    />
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2"
              for="grid-last-name"
            >
              MAHARERA NO.
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="maharera_no"
              onChange={(e) => handleChange(e)}
              value={inputs.maharera_no}
            />
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Property Video URL
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="property_video"
              onChange={(e) => handleChange(e)}
              value={inputs.property_video}
            />
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Property Map Google Maps Link
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="property_map"
              value={inputs.property_map}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Type - 1
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="type1"
              value={inputs.type1}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Price - 1
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="price1"
              value={inputs.price1}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Area - 1
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="area1"
              value={inputs.area1}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Floor No - 1
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="floor_no1"
              value={inputs.floor_no1}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="form-label inline-block mb-2 text-gray-700">
              Isometric View - 1
            </label>
            <input
              name="isometric1"
              class="form-control
            
            w-full
            pt-3
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              multiple
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "isometric1")}
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.isometric1 !== undefined
            ? imageArr.isometric1.map((ele, key) => {
                return (
                  <div key={key}>
                    <img src={ele} width={100} height={100} alt="img" />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setImageArr({
                          ...imageArr,
                          isometric1: imageArr.isometric1.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                        setInputs({
                          ...inputs,
                          isometric1: inputs.isometric1.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="form-label inline-block mb-2 text-gray-700">
              Floor Plan - 1
            </label>
            <input
              name="floor1"
              class="form-control
                        
                        w-full
                        pt-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              onChange={(e) => handleImageChange(e)}
              multiple
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "floor1")}
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.floor1 !== undefined
            ? imageArr.floor1.map((ele, key) => {
                return (
                  <div key={key}>
                    <img src={ele} width={100} height={100} alt="img" />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setImageArr({
                          ...imageArr,
                          floor1: imageArr.floor1.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                        setInputs({
                          ...inputs,
                          floor1: inputs.floor1.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : ""}
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Type - 2
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="type2"
              value={inputs.type2}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Price - 2
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="price2"
              value={inputs.price2}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Area - 2
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="area2"
              value={inputs.area2}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Floor No - 2
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="floor_no2"
              value={inputs.floor_no2}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="form-label inline-block mb-2 text-gray-700">
              Isometric View - 2
            </label>
            <input
              name="isometric2"
              class="form-control
                        
                        w-full
                        pt-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              multiple
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "isometric2")}
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.isometric2 !== undefined
            ? imageArr.isometric2.map((ele, key) => {
                return (
                  <div key={key}>
                    <img src={ele} width={100} height={100} alt="img" />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setImageArr({
                          ...imageArr,
                          isometric2: imageArr.isometric2.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                        setInputs({
                          ...inputs,
                          isometric2: inputs.isometric2.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="form-label inline-block mb-2 text-gray-700">
              Floor Plan - 2
            </label>
            <input
              name="floor2"
              class="form-control
                        
                        w-full
                        pt-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              multiple
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "floor2")}
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.floor2 !== undefined
            ? imageArr.floor2.map((ele, key) => {
                return (
                  <div key={key}>
                    <img src={ele} width={100} height={100} alt="img" />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setImageArr({
                          ...imageArr,
                          floor2: imageArr.floor2.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                        setInputs({
                          ...inputs,
                          floor2: inputs.floor2.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : ""}
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Type - 3
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="type3"
              value={inputs.type3}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Price - 3
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="price3"
              value={inputs.price3}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Area - 3
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="area3"
              value={inputs.area3}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Floor No - 3
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="floor_no3"
              value={inputs.floor_no3}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="form-label inline-block mb-2 text-gray-700">
              Isometric View - 3
            </label>
            <input
              name="isometric3"
              class="form-control
                        
                        w-full
                        pt-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              multiple
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "isometric3")}
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.isometric3 !== undefined
            ? imageArr.isometric3.map((ele, key) => {
                return (
                  <div key={key}>
                    <img src={ele} width={100} height={100} alt="img" />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setImageArr({
                          ...imageArr,
                          isometric3: imageArr.isometric3.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                        setInputs({
                          ...inputs,
                          isometric3: inputs.isometric3.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="form-label inline-block mb-2 text-gray-700">
              Floor Plan - 3
            </label>
            <input
              name="floor3"
              class="form-control
                        
                        w-full
                        pt-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              multiple
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "floor3")}
              
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.floor3 !== undefined
            ? imageArr.floor3.map((ele, key) => {
                return (
                  <div key={key}>
                    <img src={ele} width={100} height={100} alt="img" />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setImageArr({
                          ...imageArr,
                          floor3: imageArr.floor3.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                        setInputs({
                          ...inputs,
                          floor3: inputs.floor3.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : ""}
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Type - 4
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="type2"
              value={inputs.type4}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Price - 4
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="price2"
              value={inputs.price4}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Area - 4
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="area4 "
              value={inputs.area4}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Floor No - 4
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here..."
              name="floor_no4"
              value={inputs.floor_no4}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="form-label inline-block mb-2 text-gray-700">
              Isometric View - 4
            </label>
            <input
              name="isometric4"
              class="form-control
                        
                        w-full
                        pt-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              multiple
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "isometric4")}
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.isometric4 !== undefined
            ? imageArr.isometric4.map((ele, key) => {
                return (
                  <div key={key}>
                    <img src={ele} width={100} height={100} alt="img" />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setImageArr({
                          ...imageArr,
                          isometric4: imageArr.isometric4.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                        setInputs({
                          ...inputs,
                          isometric4: inputs.isometric4.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="form-label inline-block mb-2 text-gray-700">
              Floor Plan - 4
            </label>
            <input
              name="floor4"
              class="form-control
                        
                        w-full
                        pt-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              multiple
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "floor4")}
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.floor4 !== undefined
            ? imageArr.floor4.map((ele, key) => {
                return (
                  <div key={key}>
                    <img src={ele} width={100} height={100} alt="img" />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setImageArr({
                          ...imageArr,
                          floor4: imageArr.floor4.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                        setInputs({
                          ...inputs,
                          floor4: inputs.floor4.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : ""}
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="form-label inline-block mb-2 text-gray-700">
              Multiple Files Input for Gallery
            </label>
            <input
              name="gallery_array"
              class="form-control
                        
                        w-full
                        pt-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              multiple
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          <div class="w-full flex flex-col md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              {`File Size < 512 kb`}
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => updateImage(e, "gallery_array")}
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.gallery_array !== undefined
            ? imageArr.gallery_array.map((ele, key) => {
                return (
                  <div key={key}>
                    <img src={ele} width={100} height={100} alt="img" />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setImageArr({
                          ...imageArr,
                          gallery_array: imageArr.gallery_array.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                        setInputs({
                          ...inputs,
                          gallery_array: inputs.gallery_array.filter((cur) => {
                            return cur !== ele;
                          }),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
        <div class="w-full  px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Give Brochure URL
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Type Here..."
              onChange={(e) => handleChange(e)}
              name="brochure_url"
              value={inputs.brochure_url}
            />
          </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default AdminProjectCreate;
