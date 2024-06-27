import React from "react";
import Avatar from "./Avatar/Avatar";
const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-60px)] outline flex flex-col  justify-center ">
      <h1 className="text-center font-semibold text-3xl">
        Orawee Chantravutikorn
      </h1>
      <div className="flex justify-center">
        <Avatar />
      </div>
      <h2 className="text-center font-semibold ">Frontend Engineer</h2>
    </section>
  );
};

export default Hero;
