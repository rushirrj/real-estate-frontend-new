import React, { useEffect, useState } from "react";
import AdminBlogCard from "./AdminBlogCard";


const AdminAllBlogs = () => {
  const [blogs, setBlogs] = useState(false);

  const getAdminBlogs = async () => {
    try {
      const response = await fetch("https://realestatebackend-1tat.onrender.com/admin/blogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const parseRes = await response.json();
      setBlogs(parseRes.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAdminBlogs();
  }, []);

  return (
    <div>
      {/* <AdminProductCard/> */}
      {/* {blogs
        ? blogs.map((ele, key) => {
            return (
              <AdminProductCard
                name={ele.property_name}
                key={key}
                img={ele.property_thumbnail}
                id={ele._id}
                getAdminProducts={getAdminProducts}
              />
            );
          })
        : ""} */}
        {blogs
        ? blogs.map((ele, key) => {
            return (
              <AdminBlogCard
                title={ele.title}
                key={key}
                img={ele.blog_thumbnail}
                id={ele._id}
                getAdminBlogs={getAdminBlogs}
              />
            );
          })
        : ""}
    </div>
  );
};

export default AdminAllBlogs;
