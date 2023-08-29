import React from 'react'
import { Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const IsometricCard = ({imgLink}) => {
    return (
        <div className="basis-1/2" >
             <Item
            original={imgLink}
            thumbnail={imgLink}
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
                    <div className="p-3 basis-1/2 flex flex-col items-center justify-center scale-100 hover:scale-90 transition-all duration-300 w-4/5 h-4/5">
                    <img
                        ref={ref} onClick={open}    
                        src={imgLink}
                        alt="loading"
                        style={{ height: "100%", width: "100%" }}
                    />
                </div>
            )}
           
            </Item>
        </div>

    )
}

export default IsometricCard