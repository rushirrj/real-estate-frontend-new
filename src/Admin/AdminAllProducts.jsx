import React, { useEffect, useState } from "react";
import AdminProductCard from "./AdminProductCard";

const AdminAllProducts = () => {
  const [products, setProducts] = useState(false);

  const getAdminProducts = async () => {
    try {
      const response = await fetch("https://realestatebackend-1tat.onrender.com/admin/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const parseRes = await response.json();
      setProducts(parseRes.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAdminProducts();
  }, []);

  return (
    <div>
      {/* <AdminProductCard/> */}
      {products
        ? products.map((ele, key) => {
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
        : ""}
    </div>
  );
};

export default AdminAllProducts;
