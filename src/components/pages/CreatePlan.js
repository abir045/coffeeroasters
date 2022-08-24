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

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="flex flex-col relative ">
        {/* for mb */}
        <img
          className="w-full h-full mx-6 rounded-2xl sm:hidden"
          src={heroMb}
          alt="hero banner"
        />

        {/* for tab */}
        <img
          className="hidden w-full h-full mx-8 rounded-2xl sm:block md:hidden"
          src={heroTab}
          alt="hero banner"
        />
        {/* for desktop */}
        <img
          className="hidden w-full h-full  mx-[5%] rounded-2xl  md:block"
          src={hero}
          alt="hero banner"
        />

        <div className="absolute left-10 px-4 md:mx-[5%]  top-[30%]">
          <h1 className="text-4xl text-white font-bold mb-8">Create a plan</h1>
          <p className="text-gray-300  mx-auto text-base w-[400px] ">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </div>
      <div className="bg-[#333d4b] text-white  h-[50%]  w-full p-4  mt-[15%] rounded-lg">
        <Steps />
      </div>
      <section className="flex mx-[5%] mt-[15%] space-x-10">
        <Order content={orderForm} />
      </section>
    </>
  );
};

export default CreatePlan;
