import React from "react";
import Hero from "../../images/hero_wide.jpeg";
import Mobile from "../../images/hero_mobile.jpeg";

const Home = () => {
  return (
    <>
      <div className="flex flex-col relative">
        <img
          className="hidden w-full h-full object-cover sm:block"
          src={Hero}
          alt="cover"
        />
        <img
          className="w-full h-full object-cover sm:hidden"
          src={Mobile}
          alt="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-70  text-white"></div>

        <div className="absolute left-[3%] top-[15%] md:left-8 md:top-35 lg:top-40">
          <h1 className="text-center text-white p-4 font-bold text-5xl sm:text-left  md:text-6xl  w-full  xl:w-1/3  md:w-1/2 sm:w-2/3">
            Great coffee made simple.
          </h1>
          <p className="text-base text-center md:text-left sm:text-left  text-gray-300 p-4 tracking-wide w-full leading-7 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-4/5 ">
            Start your mornings with the worlds best coffee.Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule
          </p>

          <button className="text-white mx-14  text-3xl bg-teal-700 font-bold rounded-lg p-6 m-4 sm:mx-4">
            Create your plan
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
