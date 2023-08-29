import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useSearchParams } from "react-router-dom";
import SuscribeToNewsletterCard from "../subcomponents/SuscribeToNewsletterCard";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
  EmailIcon,
} from "react-share-react18";

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [like, setlike] = useState({
    likes: 0,
    status: false,
  });
  const [comment, setComment] = useState("");
  const likeStatus = (e) => {

    if (like.status == false) {
      setlike({
        likes: like.likes + 1,
        status: true,
      });
      updateLikeAndComments(e, 'like');
    }
  };
  const updateLikeAndComments = async (e, ele) => {
    e.preventDefault();
    const id = searchParams.get("q");
    if (ele === 'like')
      data.likes = data.likes + 1;
    else {
      data.comments.push(comment);
    }
    console.log(data);
    const response = await fetch(`https://realestatebackend-1tat.onrender.com/admin/blog/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const parseRes = await response.json();
    console.log(parseRes);
  }
  const fetchBlogDetails = async () => {
    setLoading(false);
    const id = searchParams.get("q");
    const response = await fetch(
      `https://realestatebackend-1tat.onrender.com/admin/blog/from/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const parseRes = await response.json();
    console.log(parseRes);
    setData(parseRes.data);
    setlike({ ...like, likes: parseRes.data.likes })

    setLoading(true);
  };
  useEffect(() => {
    fetchBlogDetails();
  }, []);
  return !loading ? (
    <div>Loading</div>
  ) : (
    <div className="p-3">
      {/* <!--Container--> */}
      <div>
        <img src="coverpic2.jpg" alt="" />
      </div>
      <div class="container w-full md:max-w-4xl mx-auto pt-20 bg-white p-3 rounded-lg">
        <div
          class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
          style={{ fontFamily: "Georgia,serif" }}
        >
          {/* <!--Title--> */}
          <div class="font-sans ">
            <p class="text-base md:text-sm text-green-500 font-bold">
              &lt;{" "}
              <Link
                to={"/allblogs"}
                class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
              >
                BACK TO BLOG
              </Link>
            </p>
            <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {data.title}
            </h1>
            <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-1xl md:text-1xl">
              {data.subheading}
            </h1>
            <p class="text-sm md:text-base font-normal text-gray-600">
              Published on <b>{data.date.slice(0, 10)}</b> by{" "}
              <b>{data.author}</b>
            </p>
          </div>
          <div>
            <img src={data.blog_thumbnail} alt="" />
          </div>
          {/* <!--Post Content--> */}

          {/* <!--Lead Para--> */}
          {/* <p class="py-6">👋 Welcome</p>

          <h1 class="py-2 font-sans text-3xl">
            Why the need to research new properties?
          </h1>

          <p class="py-6">
            Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
            purus, in mattis tortor sollicitudin pretium. Phasellus at diam
            posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
            pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
            condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
            turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
            rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
            molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
            molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
            risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla
            eget sem dictum elementum.
          </p>

          <ol>
            <li class="py-3">
              Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
              libero lectus. Fusce vehicula dictum mi. In non dolor at sem
              ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam
              quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit
              amet tellus scelerisque tortor semper posuere.
            </li>
            <li class="py-3">
              Morbi varius posuere blandit. Praesent gravida bibendum neque eget
              commodo. Duis auctor ornare mauris, eu accumsan odio viverra in.
              Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut
              odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus
              hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium
              nec felis.
            </li>
            <li class="py-3">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
              tristique in risus ac, tristique rutrum velit. Mauris accumsan
              tempor felis vitae gravida. Cras egestas convallis malesuada.
              Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
              suscipit, elementum odio et, consequat tellus.
            </li>
          </ol>

          <blockquote class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
            Example of blockquote - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
            amet ligula.
          </blockquote> */}
          <div className="flex justify-center">
            <td
              className="py-10"
              dangerouslySetInnerHTML={{ __html: data.blog_content }}
            />
          </div>
        </div>

        {/* <!--Tags --> */}
        <div class="text-base flex flex-row flex-wrap items-center justify-center gap-3 mb-4">
          Tags:
          {data.tags.map((tag, key) => {
            return (
              <div
                className="rounded-xl p-2 bg-green-100 text-xs font-semibold"
                key={key}
              >
                {tag}
              </div>
            );
          })}
        </div>

        {/* <!--Divider--> */}
        <hr class="border-b-2 border-gray-400 mb-8 mx-4" />
        <div className="flex gap-2 mb-10 ml-6">
          <LinkedinShareButton
            url={`https://houseofchavan.com/#/blog?q=${data._id}`}
            title="Check out this blog! "
            className="hover:scale-110"
          >
            <LinkedinIcon size={32} round={true} />
            {/* <AiFillLinkedin style={{ opacity: '0.5'}} size={18} /> */}
          </LinkedinShareButton>
          <WhatsappShareButton
            url={`https://houseofchavan.com/#/blog?q=${data._id}`}
            title="Check out this blog! "
            className="hover:scale-110  cursor-pointer"
          >
            <WhatsappIcon size={32} round={true} />
            {/* <AiFillLinkedin style={{ opacity: '0.5'}} size={18} /> */}
          </WhatsappShareButton>
          <FacebookShareButton
            url={`https://houseofchavan.com/#/blog?q=${data._id}`}
            title="Check out this blog! "
            className="hover:scale-110 cursor-pointer"
          >
            <FacebookIcon size={32} round={true} />
            {/* <AiFillLinkedin style={{ opacity: '0.5'}} size={18} /> */}
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://houseofchavan.com/#/blog?q=${data._id}`}
            title="Check out this blog! "
            className="hover:scale-110 cursor-pointer"
          >
            <TwitterIcon size={32} round={true} />
            {/* <AiFillLinkedin style={{ opacity: '0.5'}} size={18} /> */}
          </TwitterShareButton>
          <EmailShareButton
            url={`https://houseofchavan.com/#/blog?q=${data._id}`}
            title="Check out this blog! "
            className="hover:scale-110 cursor-pointer"
          >
            <EmailIcon size={32} round={true} />
            {/* <AiFillLinkedin style={{ opacity: '0.5'}} size={18} /> */}
          </EmailShareButton>
        </div>


        {/* <!--Subscribe--> */}
        <SuscribeToNewsletterCard />
        {/* <!-- /Subscribe--> */}
      </div>
      <div className="container w-full md:max-w-3xl mx-auto my-5 flex ">
        <button
          onClick={likeStatus}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <FavoriteBorderIcon className="m-1 mr-2" />
            <b>Like {like.likes}</b>
          </span>
        </button>
      </div>
      <div class="container w-full md:max-w-3xl mx-auto  my-5 flex">
        <form class="w-full md:max-w-3xl mx-auto my-5">
          <div class="flex flex-wrap -mx-3 mb-6">
            <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a new comment
            </h2>
            <div class="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-32 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                value={comment}
                onChange={
                  (e) => {
                    setComment(e.target.value)
                  }
                }
              // required
              ></textarea>
            </div>
            <div class="w-full md:w-full flex items-start px-3">
              <div class="-mr-1">
                <input
                  type="submit"
                  class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  value="Post Comment"
                  onClick={
                    (e) => {
                      updateLikeAndComments(e, 'comment')
                      setComment("");
                    }

                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-3 w-full">
              {data.comments.map((ele, key) => {
                return (
                  
                    <div key={key} className=" bg-gray-500 text-white rounded-lg p-3 text-left">{ele}</div>
                  
                )
              })}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Blog;
