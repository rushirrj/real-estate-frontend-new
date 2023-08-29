import React, { useState } from 'react'
import PageOne from '../subcomponents/PageOne'
import PageTwo from '../subcomponents/PageTwo'
import PageThree from '../subcomponents/PageThree'
import Testimonial from '../subcomponents/Testimonial'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useNavigate } from 'react-router-dom'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetInTouch = (props) => {
  const [fillDetails, setFillDetails] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    property_name: "Sai Sharnam",
    phone: "",
    additional_info: "",
    type_of_enquiry: "Enquiry",
    scheduled_time: "Not Selected By User",
  });

  // const { email, name, property_name, phone, scheduled_time, type } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (inputs.email === "" || inputs.name === "", inputs.phone === "") {
      setFillDetails(true);
      props.notify();
      return false;
    }
    // console.log(body);
    try {
      setFillDetails(false);
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

  const onDateChange = (e) => {
    console.log(e.target);
    setInputs({ ...inputs, [e.target.name]: e.target.valueAsDate });
  }
  console.log(inputs);
  
  return (
    <>
      <div data-bs-toggle="modal" data-bs-target="#exampleModalScrollable" className=' bg-navGreen border-2 hover:bg-transparent border-solid border-navGreen cursor-pointer rounded-l-xl h-36 w-10 flex justify-center items-center' style={{ position: "fixed", bottom: "80px", right: "0px", boxShadow: "10px 10px 10px #80808085" }}>
        <p className='tracking-widest font-bold text-md text-black ' style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }} >GET IN TOUCH</p>
      </div>
      {/* <!-- Main modal --> */}
      <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-center p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-semibold leading-normal text-gray-800" id="exampleModalScrollableLabel">
                GET IN TOUCH
              </h5>
              <button type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"><CloseIcon /></button>
            </div>
            <div class="modal-body relative p-4 mb-2">
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

                <div className="mb-4">
                  <input
                    type="text"
                    className="block h-12 appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => onChange(e)}
                    value={inputs.email}
                  />
                </div>
                <div className="mb-4">
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
                    name="additional_info"
                    className='p-3 rounded-md'
                    aria-label="empty textarea"
                    placeholder="Any Other message..?"
                    style={{ width: "100%", border: "0.2px solid gray" }}
                    onChange={(e) => onChange(e)}
                    value={inputs.additional_info}
                  />
                </div>
                <div className="flex justify-around items-center">
                  {/* <select
                      className="block h-12 appearance-none w-full py-2 px-2 mb-1 mt-3 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                      <option value="Book a site visit">Book a site visit</option>
                      <option value="Enquiry">Enquiry</option>
                      <option value="Ask for a callback">Ask for a callback</option>
                    </select> */}
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      // name="row-radio-buttons-group"
                      defaultValue="Enquiry"
                      name="type_of_enquiry"
                      onChange={(e) => onChange(e)}
                      value={inputs.type_of_enquiry}
                    >
                      <FormControlLabel value="Enquiry" control={<Radio />} label="Enquiry" />
                      <FormControlLabel value="Ask for a callback" control={<Radio />} label="Ask for a callback" />
                      <FormControlLabel value="Book a site visit" control={<Radio />} label="Book a site visit" />
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
                {fillDetails ? <div>
                  Please fill all details properly
                </div> : ""}
                <div

                  className="btn p-4 cursor-pointer bg-navGreen hover:bg-amber-500 block w-full font-semibold" data-bs-dismiss="modal" aria-label="Close"
                  onClick={(e) => { onSubmitForm(e) }}
                >
                  Submit
                </div>

              </form>
            </div>
            <div
                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button type="button"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal">
                Close
                </button>
                <button type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                Save changes
                </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default GetInTouch