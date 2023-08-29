import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SuscribeToNewsletterCard from "../subcomponents/SuscribeToNewsletterCard";


function AllBlogs() {

  // const [color,setColor]= useState(bg-navGreen);
  const [allBlogs, setAllBlogs] = useState([]);
  const navigate = useNavigate();
  const getAllBlogs = async () => {
    const response = await fetch("https://realestatebackend-1tat.onrender.com/admin/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const parseRes = await response.json();
    console.log(parseRes);
    setAllBlogs(parseRes.data);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      <section class="pt-10  pb-10 lg:pb-12">
        <div class="container mx-auto">
          <div class="flex flex-wrap justify-center -mx-4">
            <div class="w-full px-4">
              <div class="text-center mx-auto mb-5 max-w-[510px]">
                <span class="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  class="
                           font-bold
                           text-3xl
                           sm:text-4xl
                           md:text-[40px]
                           text-dark
                        
                           "
                >
                  Our Recent News
                </h2>
                {/* <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p> */}
              </div>
            </div>
          </div>
         
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4 flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 mb-9">
              {
                allBlogs.length
                  ?
                  (
                    allBlogs.map((ele, key) => {
                      return (
                        <div 
                        
                        class="basis-1 md:basis-1/3 max-w-[370px]  bg-transparent rounded-lg flex justify-center items-center" key={key}>

                          <div className="p-3"
                          onClick={()=>{navigate(`/blog?q=${ele._id}`)}}
                          >
                            <div className="rounded py-1 flex justify-between">
                              <span
                                class="
                                        bg-primary
                                        rounded
                                        inline-block
                                        text-center
                                        font-bold
                                        text-xs
                                        leading-loose
                                        
                                        text-black
                                        
                                        "
                              >
                                {ele.author}
                                
                              </span>
                              <span
                                class="
                                        bg-primary
                                        rounded
                                        inline-block
                                        text-center
                                        
                                        italic
                                        text-xs
                                        leading-loose
                                        font-semibold
                                        text-black
                                        
                                        "
                              >
                                {ele.date.slice(0,10)}
                              </span>
                            </div>
                            <div class="rounded overflow-hidden mb-8 h-64">
                            <img
                              src={ele.blog_thumbnail}
                              alt="image"
                              class="w-full"
                              style={{height:"100%"}}
                            />
                          </div>
                            <h3>
                              <Link
                                to={"/blog"}
                                class="font-semibold
                                         text-xl
                                         sm:text-2xl
                                         lg:text-xl
                                         xl:text-2xl
                                         mb-4
                                         inline-block
                                         text-dark
                                         hover:text-primary
                                         "
                              >
                                {ele.title}
                              </Link>
                            </h3>
                            <h3>
                              <Link
                                to={"/blog"}
                                class="font-semibold
                                         text-lg
                                         sm:text-xl
                                         lg:text-lg
                                         xl:text-xl
                                         mb-4
                                         inline-block
                                         text-dark
                                         hover:text-primary
                                         "
                              >
                                {ele.subheading}
                              </Link>
                            </h3>
                            {ele.blog_content.replace(/<(.|\n)*?>/g, '').replace(/&nbsp;/g, ' ').slice(0, 60)}...
                            <div>

                            <a className="cursor-pointer"><strong>Read More</strong></a>
                            </div>
                              {/* {ele.blog_content} */}
                            {/* <p class="text-base text-body-color">
                              <td dangerouslySetInnerHTML={{ __html: ele.blog_content }} />
                            </p> */}
                          </div>
                        </div>
                      )
                    })
                  ) :
                  (
                    <div></div>
                  )
              }
            </div>
            <div class="container px-7 mb-4">
              <SuscribeToNewsletterCard/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllBlogs;
