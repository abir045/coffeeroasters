import React from "react";

const Steps = () => {
  return (
    <section className="flex flex-col    p-[5%] ">
      {/* indicators */}
      <div className="hidden sm:flex mt-[5%]">
        <div className="flex  rounded-full w-[25px] h-[25px] border-2 border-teal-700"></div>

        <hr className="flex items-center h-[3px] justify-center w-[160px] md:w-[200px] lg:w-[280px]  border  border-orange-100 my-3 shadow-inner shadow-orange-100" />

        <div className="flex  rounded-full w-[25px] h-[25px] border-2 border-teal-700"></div>

        <hr className="flex items-center h-[3px] justify-center w-[160px] md:w-[200px] lg:w-[280px] border  border-orange-100 my-3 shadow-inner shadow-orange-100" />

        <div className="flex  rounded-full w-[25px] h-[25px] border-2 border-teal-700"></div>
      </div>

      {/* steps */}

      <div className="flex flex-col   sm:flex-row md:flex-row sm:space-x-3">
        <div className="flex flex-col  w-full ">
          <span className="text-orange-200 font-bold text-center text-7xl my-6 sm:text-left">
            01
          </span>
          <h2 className="text-3xl text-center font-bold my-6 sm:text-left">
            Pick Your Coffee
          </h2>
          <p className="text-base text-center my-6 w-full  sm:text-left sm:p-1">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair price for them. There are new
            coffees in all profiles every month for you to try out
          </p>
        </div>

        <div className="flex flex-col w-full">
          <span className="text-orange-200 font-bold text-center text-7xl my-6 sm:text-left">
            02
          </span>
          <h2 className="text-3xl text-center font-bold my-6 sm:text-left">
            Choose the frequency
          </h2>
          <p className="text-base text-center my-6 w-full  sm:text-left sm:p-1">
            Customize your order frequency,quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>

        <div className="flex flex-col w-full">
          <span className="text-orange-200 font-bold text-center text-7xl my-6 sm:text-left">
            03
          </span>
          <h2 className="text-3xl text-center font-bold my-6 sm:text-left">
            Receive and enjoy!
          </h2>
          <p className="text-base text-center my-6 w-full sm:text-left sm:p-1">
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
      {/* <button className="text-white text-center mx-auto text-xl bg-teal-700 font-bold rounded-lg p-4 my-10 sm:text-xl sm:ml-0">
          Create your plan
        </button> */}
      {/* </div> */}
    </section>
  );
};

export default Steps;
