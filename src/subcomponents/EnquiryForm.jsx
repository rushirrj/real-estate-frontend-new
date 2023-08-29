import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useSearchParams, useNavigate } from 'react-router-dom';


const EnquiryForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const apartmentNames = ["First Building", "Second Building"];

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    property_name: apartmentNames[searchParams.get("q") - 1],
    phone: "",
    scheduled_time: ""
  });
  

  const { email, name, property_name, phone, scheduled_time } = inputs;
  const navigate = useNavigate();
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    // console.log(body);
    try {
      const body = { email, name, property_name, phone, scheduled_time };
      const response = await fetch("https://realestatebackend-1tat.onrender.com/user/enquiry", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const ParseRes = await response.json();
      console.log(ParseRes);
      console.log("Successfull");
      navigate('/success?q=3');
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='p-5  flex items-center justify-center'>
      <div className="sidebar-widget w-2/3">
        {/* <div className="sidebar-widget lg:w-1/2 md:w-4/5 w-5/6 "> */}
        <h5>{apartmentNames[searchParams.get("q") - 1]}</h5>
        {/* <!-- Author Start --> */}
        <div className="flex items-start sidebar-author listing-agent">
          {/* <a href=""><img src="https://via.placeholder.com/292x300" alt="agent" /></a> */}
          <div className="flex-1">
            <h6>
              {" "}
              <div href="">Meet the builder</div>{" "}
            </h6>

          </div>
        </div>
        {/* <!-- Author End --> */}

        {/* <!-- Contact Start --> */}
        <form method="post ">
          <div className="mb-4 mt-6">
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
          <div className="">
            <select
              className="block h-12 appearance-none w-full py-2 px-2 mb-1 mt-3 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                      <option value="Book a site visit">Book a site visit</option>
                      <option value="Enquiry">Enquiry</option>
                      <option value="Ask for a callback">Ask for a callback</option>
            </select>
          </div>
          <Stack
            component="form"
            noValidate
            spacing={3}
            className="flex items-center justify-center w-full py-4"
          >
            <TextField
              onChange={(e) => onChange(e)}
              value={inputs.scheduled_time}
              name="scheduled_time"
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
        </form>

        {/* <!-- Contact End --> */}
      </div>
    </div>
  )
}

export default EnquiryForm