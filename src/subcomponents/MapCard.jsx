import React from 'react';
import { Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

function MapCard({imgLink}) {
  return (
    // <div>
        <div className='basis-1/2 flex items-center justify-center scale-100 hover:scale-95 transition-all duration-300'>
          <Item
            original={imgLink}
            thumbnail={imgLink}
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
                <div className="w-4/5 h-4/5">
                    <img ref={ref} onClick={open} src={imgLink} style={{height:"100%",width:"100%"}}/>
                </div>
            )}
          </Item>
        </div>
    // </div>
  )
}

export default MapCard