import React, { useEffect, useState } from 'react'
import ProductCard from '../subcomponents/ProductCard'
import { Fade } from 'react-awesome-reveal';

const AllProductPage = () =>  {
  // const [loading, setLoading] = useState(false);
  const [property_arr, setProperty_arr] = useState([]);
  const getProduct = async () => {
    // setLoading(false);
    const response = await fetch('https://realestatebackend-1tat.onrender.com/admin/products', {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    });
    const parseRes = await response.json();
    console.log(parseRes);
    setProperty_arr(parseRes.data);
    // setLoading(true);
}
useEffect(() => {
    getProduct();
}, [])
  return (
    <div className='pb-5'>
        <div className='flex justify-center items-center w-full md:h-72 h-64 text-5xl font-semibold text-dark tracking-wider' style={{backgroundImage: 
 `url(banner3.jpg)`, backgroundPosition: "0% 10%", backgroundSize: "cover",boxShadow: "5px 5px 5px #80808085",cursor:"pointer" }}>
            <h1 class="mb-2 text-4xl md:text-5xl font-semibold tracking-tight text-white m-2 p-3" style={{marginRight: "55%", textAlign:'start',boxShadow: "5px 5px 5px rgb(65 66 105)"}}>
                    Projects
                </h1>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap  items-center justify-center gap-6 p-4 pt-16'>
          <Fade triggerOnce direction='left'>
            {
              !property_arr.length  ? 
              <div>Loading Please Wait</div>
              : 
              (
                property_arr.map((ele, key) => {
                  return (
                    <ProductCard img={ele.property_thumbnail} name={ele.property_name} location={ele.property_address} id={ele._id} key={key}/>

                  )
                })
              )

            }
            {/* <ProductCard img="project1.jpg" name="SHRAM SAFALYA" location="Beturkar Pada,Kalyan West"/>
            <ProductCard img="project2.jpg" name="MADHU MILIND" location="Aptewadi,Badlapur East"/>
            <ProductCard img="project3.jpg" name="ANJALI APARTMENT" location="Wayale Nagar,Kalyan West"/>
            <ProductCard img="project4.jpg" name="GEETANJALI APARTMENT" location="Nikki Nagar,Kalyan West"/>
            <ProductCard img="project5.jpg" name="VARSHA PARK" location="Wayale Nagar,Kalyan West"/>
            <ProductCard img="vedant.jpg" name="VEDANT" location="Wayale Nagar,Kalyan West"/>
            <ProductCard img="project5.jpg" name="NAMRATA HEIGHTS" location="Adharwadi,Kalyan West"/>
            <ProductCard img="project1.jpg" name="TARANGAN" location="Wayale Nagar,Kalyan West"/>
            <ProductCard img="omkar.jpg" name="OMKAR RESIDENCY" location="Titwala,Kalyan West"/>
            <ProductCard img="mrun.jpg" name="MRUNMAYEE PALACE" location="Chikanghar,Kalyan West"/>
            <ProductCard img="saiv.jpg" name="SAI VINAYAK RESIDENCY" location="Chikanghar,Kalyan West"/>
            <ProductCard img="trimbak.jpg" name="TRIMBAK HEAVEN 1 & 2" location="Aptewadi,Badlapur East"/>
            <ProductCard img="saish.jpg" name="SAI SHARNAM PLOT-1" location="Wadeghar,Kalyan West"/>
            <ProductCard img="saish2.jpg" name="SAI SHARNAM PLOT-2" location="Wadeghar,Kalyan West"/>
            <ProductCard img="vyank.jpg" name="SAI VYANKATESH" location="Chikanghar,Kalyan West"/>
            <ProductCard img="sarvesh2.jpg" name="SAI SARVESH PLOT-1" location="Vadavli,Ambivali West"/>
            <ProductCard img="sarvesh1.jpg" name="SAI SARVESH PLOT-2" location="Vadavli,Ambivali West"/> */}
          </Fade>
        </div>
    </div>
  )
}

export default AllProductPage