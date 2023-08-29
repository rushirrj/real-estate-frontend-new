import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Fade } from "react-awesome-reveal";
function Testemonial() {
  return (
    <div className="px-12 ">
      {/* <h2 class="text-2xl leading-6 text-gray-800 dark:text-white text-center px-4">Testimonials</h2> */}
      <h1 class="font-semibold mt-12 font-sans text-4xl sm:text-4xl md:text-5xl">
        People Trust Us
      </h1>
      <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   py-20 gap-6">
        <Fade direction="left" triggerOnce delay={200}>
          <TestimonialCard
            name="Tejas Warambhe"
            position="Developer"
            desc="When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone"
          />
        </Fade>
        <Fade direction="left" triggerOnce delay={400}>
          <TestimonialCard
            desc="When our designs need an expert opinion or approval, I know I
        can rely on your agency Thank you for all your help-I will be
        recommending you to everyone"
            name="Rushikesh Jadhav"
            position="Designer"
          />
        </Fade>
        <Fade direction="left" triggerOnce delay={600}>
          <TestimonialCard
            desc="When our designs need an expert opinion or approval, I know I
            can rely on your agency Thank you for all your help-I will be
            recommending you to everyone"
            name="Aditya Ingole"
            position="Support"
          />
        </Fade>
      </div>
    </div>
  );
}

export default Testemonial;
