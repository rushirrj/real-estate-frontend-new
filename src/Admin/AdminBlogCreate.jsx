import React, { useState } from "react";
import axios from "axios";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TagsInput from "../subcomponents/TagsInput";
const AdminBlogCreate = () => {
    const [article, setArticle] = useState();
  const [inputs, setInputs] = useState({
    blog_thumbnail: "",
    blog_content: "",
    tags:[]
  });
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  // const [imagePreview, setImagePreview] = useState([]);
  const [imageArr, setImageArr] = useState({});
  const handleImageChange = (e) => {
    const arr = [...e.target.files];
    setImage(arr);
    console.log(image);
  };
  console.log(article);
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
      .post(
        "https://realestatebackend-1tat.onrender.com/admin/multiple_img",
        data,
        config
      )
      .then((res) => {
        const imageLinks = res.data;
        // console.log(res, "link here");
        // res.data.forEach((ele) => {
        //   imageLinks.push(
        //     "https://realestatebackend-1tat.onrender.com/public/images/" + ele.filename
        //   );
        // });
        // console.log(name);
        // setImagePreview(imageLinks);
        setImageArr({ ...imageArr, [name]: imageLinks });
        setInputs({ ...inputs, [name]: imageLinks[0] });
      });
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  // console.log(inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://realestatebackend-1tat.onrender.com/admin/blog",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      }
    );

    const parseRes = await response.json();
    navigate(`/admin/main/product/success?q=1`);
    console.log(parseRes);
  };
  return (
    <div className="flex justify-center">
      <form class="w-full max-w-lg">
      <div className="block uppercase tracking-wide text-gray-700 text-5xl font-bold mb-4">
          Add New Blog
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
        
          <div class="w-full  px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Title  
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here"
              name="title"
              value={inputs.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full  px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Sub Heading  
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here"
              name="subheading"
              value={inputs.subheading}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full  px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Author  
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Here"
              name="author"
              value={inputs.author}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="formFile"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Blog Thumbnail
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
              name="blog_thumbnail"
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
              onClick={(e) => updateImage(e, "blog_thumbnail")}
            >
              {" "}
              Upload
            </button>
          </div>
          {imageArr.blog_thumbnail !== undefined ? (
            <img src={imageArr.blog_thumbnail[0]} alt="img"/>
          ) : (
            ""
          )}
          <div class="w-full  px-3">
          <CKEditor
                    editor={ ClassicEditor }
                    data="<p></p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setArticle(data);
                        setInputs({...inputs, blog_content: data});
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
          </div>
          
          <TagsInput inputs={inputs} setInputs={setInputs} edit={true}/>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={(e) => handleSubmit(e)}>Submit</button>

      </form>
    </div>
  );
};

export default AdminBlogCreate;
