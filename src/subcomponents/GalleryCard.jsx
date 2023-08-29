import React from 'react';
import { Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

function GalleryCard({imgLink}) {
  return (
    <div className="flex items-center justify-center basis-1/4 cursor-pointer">
        <Item
            original={imgLink}
            thumbnail={imgLink}
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
                <div className="w-4/5 h-4/5">
                    <img ref={ref} onClick={open} src={imgLink} />
                </div>
            )}
          </Item>
    </div>
  )
}

export default GalleryCard