import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminSuperVisor = (props) => {
    const navigate = useNavigate();
  return (
    <div className="pb-5 bg-dark">
      <div className="flex justify-center items-center h-24 text-5xl font-semibold text-white bg-dark tracking-wider">
        Supervisor Page
      </div>
      <div className="flex flex-col md:flex-row flex-wrap bg-dark  h-screen md:h-full  p-4">
       
        <div className="basis-1/3 h-80 p-3 w-full">
          <div
            className="flex items-center justify-center h-full w-full rounded-md border-double border-4 opacity-80 hover:opacity-100 border-sky-500 hover:bg-slate-700"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
            }}
          >
            <div>
              <p
                className="text-slate-900 my-4 font-semibold tracking-widest font-mono text-2xl bg-white p-2 rounded-md hover:bg-transparent cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/admin/main/enquiry");
                }}
              >
                Enquiry
              </p>
              <p
                className="text-slate-900 my-2 font-semibold tracking-widest font-mono text-2xl bg-white p-2 rounded-md hover:bg-transparent cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/admin/main/subscriptions");
                }}
              >
                Subscriptions
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <p
                className="text-slate-900 font-semibold  tracking-widest font-mono text-xl bg-white p-2 rounded-md hover:bg-transparent cursor-pointer mb-2"
                onClick={() => {
                  props.setAuth(false);
                  navigate('/admin')
                }}
              >
                Logout
              </p>
    </div>
  )
}

export default AdminSuperVisor