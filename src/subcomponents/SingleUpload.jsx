import React, { useState } from "react";
import axios from "axios";

const SingleUpload = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const handleChange = (e) => {
    setImage(e.target.files);
    console.log(image);
  };
  const updateImage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image[0]);
    data.append("cow", "here");
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("https://realestatebackend-1tat.onrender.com/admin/single_img", data, config)
      .then((res) => {
        console.log(res.data);
        setImagePreview(
          "https://realestatebackend-1tat.onrender.com/public/images/" + res.data.filename
        );
      });
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleChange(e)} />
      <button
        onClick={(e) => updateImage(e)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        upload
      </button>
      <div>
        <img src={imagePreview} width={100} height={100} alt="img" />
      </div>
    </div>
  );
};

export default SingleUpload;
