import React from "react";
import { useNavigate } from "react-router-dom";
const Main = (props) => {
  let navigate = useNavigate();
  return (
    <div className="pb-5 bg-dark">
      <div className="flex justify-center items-center h-24 text-5xl font-semibold text-white bg-dark tracking-wider">
        Admin Page
      </div>
      
      <div className="flex flex-col md:flex-row flex-wrap bg-dark  h-screen md:h-full  p-4">
        <div className="basis-1/3 h-80  p-3 w-full">
          <div
            className="h-full w-full flex items-center justify-center rounded-md border-double border-4 opacity-80 hover:opacity-100 border-sky-500 hover:bg-slate-700"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
            }}
          >
            <div>
              <p className="text-slate-900 font-semibold  tracking-widest font-mono text-2xl bg-white p-2 rounded-md hover:bg-transparent mb-5">
                Projects
              </p>

              <p
                className="text-slate-900 font-semibold  tracking-widest font-mono text-xl bg-white p-2 rounded-md hover:bg-transparent cursor-pointer mb-2"
                onClick={() => {
                  navigate("/admin/main/add_product");
                }}
              >
                Add New Project
              </p>
              <p
                className="text-slate-900 font-semibold  tracking-widest font-mono text-xl bg-white p-2 rounded-md hover:bg-transparent cursor-pointer"
                onClick={() => {
                  navigate("/admin/main/products");
                }}
              >
                Edit/Delete Project
              </p>
            </div>
          </div>
        </div>
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
        <div className="basis-1/3 h-80 p-3 w-full">
          <div
            className="h-full w-full flex items-center justify-center rounded-md border-double border-4 opacity-80 hover:opacity-100 border-sky-500 hover:bg-slate-700"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
            }}
          >
            <div>
              <p className="text-slate-900 font-semibold mb-4 tracking-widest font-mono text-2xl bg-white p-2 rounded-md hover:bg-transparent">
                Blog
              </p>
              <p
                className="text-slate-900 font-semibold  tracking-widest font-mono text-xl bg-white p-2 rounded-md hover:bg-transparent cursor-pointer mb-2"
                onClick={() => {
                  navigate("/admin/main/add_blog");
                }}
              >
                Add New Blog
              </p>
              <p
                className="text-slate-900 font-semibold  tracking-widest font-mono text-xl bg-white p-2 rounded-md hover:bg-transparent cursor-pointer"
                onClick={() => {
                  navigate("/admin/main/blogs");
                }}
              >
                Edit/Delete Blog
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
  );
};

export default Main;
