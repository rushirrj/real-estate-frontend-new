import React from 'react'
import PageOne from '../subcomponents/PageOne'
import PageTwo from '../subcomponents/PageTwo'
import PageThree from '../subcomponents/PageThree'
import Testimonial from '../subcomponents/Testimonial'
import GetInTouch from '../subcomponents/GetInTouch'
import { ToastContainer, toast } from 'react-toastify';
const HomePage = () => {
  const notify = () => toast("Please Enter Full Details");
  return (
    <div style={{ position: "relative" }}>
      <PageOne />
      <PageTwo />
      <PageThree />
      <Testimonial />
     {/* <GetInTouch notify={notify}/> */}
     <ToastContainer />
    </div>
  )
}

export default HomePage