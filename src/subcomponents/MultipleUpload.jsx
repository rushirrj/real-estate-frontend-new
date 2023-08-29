import React, { useState } from "react";
import axios from "axios";

const MultipleUpload = () => {
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const handleChange = (e) => {
    const arr = [...e.target.files];
    setImage(arr);
    console.log(image);
  };
  const updateImage = async (e) => {
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
        setImagePreview(imageLinks);
      });
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleChange(e)} multiple />
      <button
        onClick={(e) => updateImage(e)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        upload
      </button>
      <div className="flex">
        {imagePreview.map((ele) => {
          return (
            <div>
              <img src={ele} width={100} height={100} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleUpload;
