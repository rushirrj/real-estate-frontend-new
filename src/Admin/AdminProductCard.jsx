import React from "react";
import { useNavigate } from "react-router-dom";
const AdminProductCard = (props) => {
  const navigate = useNavigate();
  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://realestatebackend-1tat.onrender.com/admin/product/${props.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const parseRes = await response.json();
    console.log(parseRes);
    props.getAdminProducts();
  };
  return (
    <div
      className="basis-1/4 flex flex-col gap-3 p-5 bg-white "
      style={{ boxShadow: "10px 10px 10px #80808085", cursor: "pointer" }}
    >
      <div className="overflow-hidden flex items-center justify-center">
        <div className="flex items-center justify-center scale-100 hover:scale-110 transition-all duration-300 h-64 w-64">
          <img
            src={props.img}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
      <div className="">
        <div className="text-sm font-semibold text-black">{props.name}</div>
      </div>
      <div className="flex justify-center w-full">
        <button
          className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mb-4 mx-2"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/admin/main/product/edit?q=${props.id}`);
          }}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={(e) => handleDelete(e)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;
