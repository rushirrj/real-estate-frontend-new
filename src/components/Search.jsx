import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import ProductCard from "../subcomponents/ProductCard";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [result, setResult] = useState({ products: [], blogs: [] });
  const [searchInputs, setSearchInputs] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchInputs(e.target.value);
  };

  const getResultsProducts = async () => {
    const resposne = await fetch("https://realestatebackend-1tat.onrender.com/admin/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parseRes = await resposne.json();
    const arr = parseRes.data;
    const searchQuery = searchParams.get("q");
    const filteredArr = arr.filter((ele) => {
      return (ele.property_name.toLowerCase().includes(searchQuery.toLowerCase()) || ele.property_address.toLowerCase().includes(searchQuery.toLowerCase()));
    });
    // setResult({ ...result, products: filteredArr });
    // console.log(parseRes);
    const resposne1 = await fetch("https://realestatebackend-1tat.onrender.com/admin/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parseRes1 = await resposne1.json();
    const arr1 = parseRes1.data;
    const searchQuery1 = searchParams.get("q");
    const filteredArr1 = arr1.filter((ele) => {
      return (ele.author.toLowerCase().includes(searchQuery1.toLowerCase()) || ele.title.toLowerCase().includes(searchQuery1.toLowerCase()));
    });
    setResult({
      ...result,
      blogs: filteredArr1,
      products: filteredArr
    });
  };
  const getResultsBlogs = async () => {
    const resposne1 = await fetch("https://realestatebackend-1tat.onrender.com/admin/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parseRes1 = await resposne1.json();
    const arr1 = parseRes1.data;
    const searchQuery1 = searchParams.get("q");
    const filteredArr1 = arr1.filter((ele) => {
      return (ele.author.toLowerCase().includes(searchQuery1.toLowerCase()) || ele.title.toLowerCase().includes(searchQuery1.toLowerCase()));
    });
    setResult({
      ...result,
      blogs: filteredArr1
    });
    // console.log(parseRes);
  };
  useEffect(() => {
    getResultsProducts();
    // getResultsBlogs();
  }, [navigate]);
  return (
    <div>
      <div className="flex justify-center items-center">
        <div class="input-group relative flex items-stretch w-2/5 mb-4">
          <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" name="search"
            onChange={
              (e) => handleChange(e)
            }
            value={
              searchInputs.value
            } />
          <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2"
            onClick={
              (e) => {
                e.preventDefault();
                navigate(`/search?q=${searchInputs}`);
                navigate(0);
                // getResults();
              }
            }>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="text-3xl font-semibold p-2">Projects</div>
      {
        result.products.length ? (result.products.map((ele, key) => {
          return (
            <ProductCard img={
              ele.property_thumbnail
            }
              name={
                ele.property_name
              }
              location={
                ele.property_address
              }
              id={
                ele._id
              }
              key={key} />
          );
        })) : (
          <div>
            No Results Round</div>
        )
      }
      <div className="text-3xl font-semibold p-2 mt-8">Blogs</div>

      <div className='flex gap-3 p-5 bg-white'>
        <div class="bg-transparent rounded-lg flex justify-center items-center flex-col md:flex-row flex-wrap w-full" >
      {
        result.blogs.length ? (result.blogs.map((ele, key) => {
          return (

                <div className="basis-1/3 p-3" key={key}
                  onClick={
                    () => {
                      navigate(`/blog?q=${ele._id
                        }`)
                    }
                  }>
                  <div className="rounded py-1 flex justify-between">
                    <span class="bg-primary rounded inline-block text-center font-bold text-xs leading-loose text-black ">                                                                                                          
                      {
                        ele.author
                      } </span>
                    <span class="bg-primary rounded inline-block text-center italic text-xs leading-loose font-semibold text-black ">                                                                                                                                                     
                      {
                        ele.date.slice(0, 10)
                      } 
                      </span>
                  </div>
                  <div class="rounded overflow-hidden mb-8 h-64">
                    <img src={
                      ele.blog_thumbnail
                    }
                      alt="image"
                      class="w-full"
                      style={
                        { height: "100%" }
                      } />
                  </div>
                  <h3>
                    <Link to={"/blog"}
                      class="font-semibold text-xl sm:text-2xl lg:text-xl  xl:text-2xl  mb-4  inline-block text-dark  hover:text-primary  "> 
                      {
                        ele.title
                      }
                    </Link>
                  </h3>
    
                </div>
  
          );
        })) : (
          <div>
            No Results Round</div>
        )
      }
                  </div>
            </div>
      </div>
  );
};

export default Search;
              {/* {ele.blog_content} */}
                  {/* <p class="text-base text-body-color">
                              <td dangerouslySetInnerHTML={{ __html: ele.blog_content }} />
                            </p> */} 
