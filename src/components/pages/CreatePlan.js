import React, { useState } from "react";
import hero from "../../images/image-hero-blackcup.jpg";
import heroMb from "../../images/mb/image-hero-blackcup.jpg";
import heroTab from "../../images/tab/image-hero-blackcup.jpg";
import Steps from "../steps";
import Accordion from "../Accordion";
import Order from "../Order";

const CreatePlan = ({ content }) => {
  // Receiving props from parent App.js
  const { orderForm } = content;

  console.log(content);

  return (
    <>
      <div className="flex flex-col mx-[5%] relative ">
        {/* for mb */}
        <img
          className="w-full h-full   rounded-2xl sm:hidden"
          src={heroMb}
          alt="hero banner"
        />

        {/* for tab */}
        <img
          className="hidden w-full h-full  rounded-2xl sm:block md:hidden"
          src={heroTab}
          alt="hero banner"
        />
        {/* for desktop */}
        <img
          className="hidden w-full h-full  rounded-2xl  md:block"
          src={hero}
          alt="hero banner"
        />

        <div className="absolute   left-10 px-4 md:mx-[5%] mx-[5%] top-[30%]">
          <h1 className="text-4xl text-white font-bold mb-8">Create a plan</h1>
          <p className="text-gray-300  text-base text-center md:text-left sm:text-left w-full ">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </div>
      <div className="bg-[#333d4b] text-white sm:mx-[5%] lg:mx-[5%]  h-[50%]  lg:w-[90%] p-4  mt-[15%] rounded-lg">
        <Steps />
      </div>
      <section className="flex  mt-[15%] mx-[5%] space-x-10">
        <Order content={orderForm} />
      </section>
    </>
  );
};

export default CreatePlan;
