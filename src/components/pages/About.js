import React from "react";
import hero from "../../images/image-hero-whitecup.jpg";
import commitment from "../../images/image-commitment.jpg";
import quality from "../../images/image-quality.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col relative mb-[15%] ">
        <img
          className="w-full h-full px-2 mx-10  rounded-2xl"
          src={hero}
          alt="hero banner"
        />
        <div className="absolute left-10 px-8 mx-10 top-[30%]">
          <h1 className="text-4xl text-white mb-8">About us</h1>
          <p className="text-gray-300   text-base">
            Coffeeroasters began its journey of exotic discovery in 1999,
            <br />
            highlighting stories of coffee from around the world. We have <br />
            {""}
            since been dedicated to bring the perfect cup - from bean to <br />{" "}
            brew - in every shipment.
          </p>
        </div>
      </div>
      <div className="flex justify-between mx-20 px-6 mb-[15%] pb-20">
        <img className="rounded-lg w-[300px]" src={commitment} alt="barista" />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold px-8 mx-16 pb-6">Our commitment</h1>
          <p className="text-sm mx-16 px-8 leading-8">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-slate-800 mx-6 py-20 mt-20 relative">
        <h1 className="text-white text-4xl mx-16 my-10">
          Uncompromising <br /> quantity
        </h1>
        <p className="text-white mx-16 leading-8">
          Although we work with growers who pay close attention to all <br />{" "}
          stages of harvest and processing, we employ, on our end, a <br />{" "}
          rigorous quality control program to avoid over-roasting or <br />
          baking the coffee dry. Every bag of coffee is tagged with a <br />{" "}
          roast date and batch number. Our goal is to roast consistent, <br />
          user-friendly coffee, so that brewing is easy and enjoyable.
        </p>
        <div className="flex  absolute right-20 top-[-25%]">
          <img
            className="rounded-lg object-cover w-[200px] h-[500px] "
            src={quality}
          />
        </div>
      </div>
    </>
  );
};

export default About;
