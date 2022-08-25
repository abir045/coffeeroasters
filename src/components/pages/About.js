import React from "react";
import hero from "../../images/image-hero-whitecup.jpg";
import commitment from "../../images/image-commitment.jpg";
import quality from "../../images/image-quality.jpg";
import uk from "../../images/illustration-uk.svg";
import canada from "../../images/illustration-canada.svg";
import aussie from "../../images/illustration-australia.svg";
import heroMb from "../../images/mb/image-hero-whitecup.jpg";
import heroTab from "../../images/tab/image-hero-whitecup.jpg";
import commitmentMb from "../../images/mb/image-commitment.jpg";
import commitmentTab from "../../images/tab/image-commitment.jpg";
import qualityMb from "../../images/mb/image-quality.jpg";
import qualityTab from "../../images/tab/image-quality.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col mx-[5%] relative mb-[10%] ">
        {/* for mb */}
        <img className="w-full h-full rounded-2xl sm:hidden" src={heroMb} />

        {/* for tab */}
        <img
          className="hidden w-full h-full  rounded-2xl sm:block md:hidden"
          src={heroTab}
        />
        {/* for desktop */}
        <img
          className="hidden w-full h-full  rounded-2xl  md:block"
          src={hero}
          alt="hero banner"
        />

        <div className="absolute text-center left-10   md:mx-[10%]  top-[30%]">
          <h1 className="text-4xl text-white font-bold mb-8">About us</h1>
          <p className="text-gray-300   text-base ">
            Coffeeroasters began its journey of exotic discovery in 1999,
            <br />
            highlighting stories of coffee from around the world. We have <br />
            {""}
            since been dedicated to bring the perfect cup - from bean to <br />{" "}
            brew - in every shipment.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-3 justify-between mx-[5%]  mb-[15%] pb-20 md:flex-row">
        <img
          className="hidden rounded-lg w-[300px] md:mx-20 md:block"
          src={commitment}
          alt="barista"
        />
        {/* for mb */}
        <img
          className="flex w-full h-full rounded-lg  sm:hidden"
          src={commitmentMb}
          alt="barista"
        />

        {/* for tab */}
        <img
          className="hidden w-full h-full rounded-lg  sm:flex md:hidden "
          src={commitmentTab}
          alt="barista"
        />

        <div className="flex flex-col space-y-3">
          <h1 className="flex text-2xl mx-auto md:text-4xl font-bold mt-6 pb-6">
            Our commitment
          </h1>
          <p className="flex flex-row text-sm  leading-6 md:mx-20">
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

      <div className="flex flex-col bg-[#333D4B] rounded-lg mx-[5%] py-20 mt-20 relative">
        <h1 className="text-white text-4xl p-4 md:text-left md:mx-12 md:my-10 my-8 text-center">
          Uncompromising <br /> quality
        </h1>
        <p className="text-white px- md:mx-16 md:w-[500px] md:leading-8  mx-6">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
        <div className="flex  absolute md:left-[60%]  sm:top-[-5%] left-[8%] top-[-10%]">
          <img
            className="hidden rounded-lg object-cover w-[55%] h-[500px] md:w-[300px]  md:block"
            src={quality}
          />
          {/* for mb */}
          <img
            src={qualityMb}
            className="rounded-lg w-[300px] flex  sm:hidden"
          />

          {/* for tab */}
          <img
            src={qualityMb}
            className="hidden rounded-lg w-[1/2]   sm:flex md:hidden "
          />
        </div>
      </div>
      <div className="flex flex-col mt-10 items-center  space-y-16 ">
        <h2 className="text-3xl font-bold  text-gray-500">Our headquaters</h2>
        <div className="flex flex-col items-center text-center  space-y-3 md:space-x-24  md:flex-row md:justify-between">
          <div className="flex-col">
            <img
              src={uk}
              className="w-[50px] mx-auto h-[50px] mb-6"
              alt="uk map"
            />
            <h1 className="text-3xl font-bold mb-6">United Kingdom</h1>
            <p className="leading-8 ">
              68 Asfordby Rd <br />
              Alcaston <br />
              SY6 1YA <br />
              +44 1241 918425
            </p>
          </div>

          <div className="flex-col">
            <img
              src={canada}
              className="w-[50px] mx-auto mb-6"
              alt="canada map"
            />
            <h1 className="text-3xl font-bold mb-6">Canada</h1>
            <p className="leading-8 ">
              68 Asfordby Rd <br />
              Alcaston <br />
              SY6 1YA <br />
              +44 1241 918425
            </p>
          </div>

          <div className="flex-col">
            <img
              src={aussie}
              className="w-[50px] mx-auto mb-6"
              alt="aussie map"
            />
            <h1 className="text-3xl font-bold mb-6">Australia</h1>
            <p className="leading-8 ">
              68 Asfordby Rd <br />
              Alcaston <br />
              SY6 1YA <br />
              +44 1241 918425
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
