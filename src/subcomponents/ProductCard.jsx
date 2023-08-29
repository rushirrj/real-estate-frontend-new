import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductCard = (props) => {
    const navigate = useNavigate();
  return (
    <div className='basis-1/4 flex flex-col gap-3 p-5 bg-white ' onClick={()=>{navigate(`/product?q=${props.id}`)}} style={{boxShadow: "10px 10px 10px #80808085",cursor:"pointer"}}>
        <div className='overflow-hidden flex items-center justify-center'>
            <div className="flex items-center justify-center scale-100 hover:scale-110 transition-all duration-300 h-64 w-64">
                <img src={props.img} alt="" style={{height:"100%",width:"100%"}} />
            </div>
        </div>
        <div className=''>
            <div className='text-sm font-semibold text-black'>{props.name}</div>
            <div className='text-gray-600 tracking-wider'>{props.location}</div>
        </div>
    </div>
  )
}

export default ProductCard