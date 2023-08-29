import React from "react";
import FloorPLanCard from "./FloorPLanCard";
import { Fade } from "react-awesome-reveal";

const PageThree = () => {
  let img1 =
      "https://cdn.discordapp.com/attachments/989604828504293440/992362497128550431/app2_white2.png",
    title1 = "Apartment Plan CC1",
    desc1 =
      "These apartments in 680 square feet are studio type with two bedrooms, big living room, one bathroom, also a terrace and a wardrobe.",
    sqft1 = "600sqFt";
  let img2 =
      "https://cdn.discordapp.com/attachments/989604828504293440/992362497568931890/app_cc1_white.png",
    title2 = "Apartment Plan CC2",
    desc2 =
      "These apartments in 680 square feet are studio type with two bedrooms, big living room, one bathroom, also a terrace and a wardrobe.",
    sqft2 = "500sqft";
  let img3 =
      "https://cdn.discordapp.com/attachments/989604828504293440/992362529420476426/app3_white.png",
    title3 = "Apartment Plan CC3",
    desc3 =
      "These apartments in 680 square feet are studio type with two bedrooms, big living room, one bathroom, also a terrace and a wardrobe.",
    sqft3 = "450sqft";
  return (
    <div
      className="bg-dark p-9 md:p-14"
      style={{
        boxShadow: "10px 10px 10px rgb(48 47 47 / 46%)",
        cursor: "pointer",
      }}
    >
      <div className="flex flex-row items-center justify-start my-5">
        <div
          className="w-11 h-0"
          style={{ borderTop: "3px solid #c5b58f" }}
        ></div>
        <div
          className="pl-1 tracking-wider text-xl font-bold font-mono"
          style={{ color: "#c5b58f" }}
        >
          Apartment's Plan
        </div>
      </div>
      <div className="flex justify-start my-5">
        <Fade direction="left" triggerOnce>
          <div className="text-6xl font-sans font-semibold text-white">
            Plan Your Visit
          </div>
        </Fade>
      </div>
      <div
        className="w-full my-9"
        style={{ borderTop: "3px solid white" }}
      ></div>

      {/* Floor Plan Starts  */}
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="basis-1/3">
          <Fade direction="left" delay={200} triggerOnce>
            <FloorPLanCard
              img={img1}
              title={title1}
              desc={desc1}
              sqft={sqft1}
            />
          </Fade>
        </div>
        <div className="basis-1/3">
          <Fade direction="left" delay={400} triggerOnce>
            <FloorPLanCard
              img={img2}
              title={title2}
              desc={desc2}
              sqft={sqft2}
            />
          </Fade>
        </div>
        <div className="basis-1/3">
          <Fade direction="left" delay={600} triggerOnce>
            <FloorPLanCard
              img={img3}
              title={title3}
              desc={desc3}
              sqft={sqft3}
            />
          </Fade>
        </div>
      </div>
      {/* Floor Plan Ends  */}
    </div>
  );
};

export default PageThree;
