import React from "react";
import Avatar from "./Avatar/Avatar";
const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-60px)] outline flex flex-col common-padding  gap-8 md:gap-12 bg-blue">
      <h1 className="text-center title-font text-3xl md:text-4xl lg:text-7xl">
        ORAWEE <br />
        CHANTRAVUTIKORN
      </h1>

      <div className="flex justify-center">
        <Avatar />
      </div>
      <h2 className="text-center text-2xl md:text-3xl lg:text-6xl">Frontend Engineer</h2>
    </section>
  );
};

export default Hero;
