import React from "react";
import Hero from "../../images/hero_wide.jpeg";
import Mobile from "../../images/hero_mobile.jpeg";
import Tablet from "../../images/hero_tablet.jpeg";
import CoffeBag from "../../images/gran_espresso.png";
import Planalto from "../../images/planato.png";
import Piccolo from "../../images/piccolo.png";
import Danche from "../../images/danche.png";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className="flex flex-col relative">
        <img
          className="hidden w-full h-full object-cover lg:block"
          src={Hero}
          alt="cover"
        />
        <img
          className="w-full h-full object-cover sm:hidden"
          src={Mobile}
          alt="cover"
        />

        <img
          className="hidden w-full h-full object-cover sm:block md:block lg:hidden"
          src={Tablet}
          alt="cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-70  text-white sm:hidden"></div>

        <div className="absolute left-[3%] top-[15%] md:left-8 md:top-35 lg:top-[10%] lg:left-[5%]">
          <h1 className="text-center text-white p-4 font-bold text-5xl sm:text-left  md:text-5xl lg:text-6xl w-full lg:w-1/2 xl:w-1/3  md:w-1/2 sm:w-2/3">
            Great coffee made simple.
          </h1>
          <p className="text-xl text-center md:text-left sm:text-left  text-gray-300 p-4 tracking-wide w-full leading-10 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-4/5 ">
            Start your mornings with the worlds best coffee.Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule
          </p>

          <button className="text-white mx-14  text-3xl bg-teal-700 font-bold rounded-lg p-4 my-10 sm:mx-4">
            Create your plan
          </button>
        </div>
      </div>

      {/*Menu conatainer  */}
      <div className="block">
        <h1 className="mt-4 text-center text-5xl font-bold sm:text-7xl lg:text-9xl xl:text-9xl sm:tracking-[.1em] text-gray-300">
          our collection
        </h1>
      </div>

      <div className="flex flex-col p-8 items-center sm:-mt-11 md:flex-row md:justify-between md:ml-7 md:-mt-12 md:pt-1">
        <div className="flex flex-col sm:flex-row w-full mb-2">
          <img className="w-[200px] mx-auto" src={CoffeBag} alt="menu" />
          <div className="md:hidden">
            <h3 className="text-3xl text-center font-bold text-gray-800 ">
              Gran Espresso
            </h3>
            <p className="text-base text-center  m-2 p-2 leading-10 text-gray-500">
              Light and flavorful blend with cocoa and black pepper for an
              intense exoperience
            </p>
          </div>
        </div>

        {/* 2nd item */}
        <div className="flex flex-col sm:flex-row w-full mb-2">
          <img className="w-[200px] mx-auto" src={Planalto} alt="menu" />

          <div className="md:hidden">
            <h3 className="text-center text-3xl font-bold text-gray-800">
              Planalto
            </h3>
            <p className="text-center text-base w-full p-2 m-2 leading-10 text-gray-500">
              Brazilian dark roast with rich velvety and body, and rich with
              fruits and nuts
            </p>
          </div>
        </div>

        {/* 3rd item */}

        <div className="flex flex-col sm:flex-row w-full mb-2">
          <img className="w-[200px] mx-auto" src={Piccolo} alt="menu" />
          <div className="md:hidden">
            <h3 className="text-3xl text-center font-bold text-gray-800">
              Piccolo
            </h3>
            <p className="text-lg text-center w-full p-4 leading-10 text-gray-500">
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </div>
        </div>

        {/* 4th item */}
        <div className="flex flex-col sm:flex-row  w-full mb-2 ">
          <img className="w-[200px] mx-auto" src={Danche} alt="menu" />
          <div className="md:hidden">
            <h3 className="text-3xl text-center font-bold text-gray-800">
              Danche
            </h3>
            <p className="text-center text-lg w-full p-2 m-2 leading-10 text-gray-500">
              Ethiopian hand-hervested blend densly packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-8 sm:flex-col md:flex-row md:justify-evenly">
        {/* <div className="flex flex-col  w-full">
          <h3 className="text-3xl text-center font-bold text-gray-800 ">
            Gran Espresso
          </h3>
          <p className="text-lg text-center w-full m-2 p-2 leading-10 text-gray-500">
            Light and flavorful blend with cocoa and black pepper for an intense
            exoperience
          </p>
        </div>

        <div className="flex flex-col w-full ">
          <h3 className="text-center text-3xl font-bold text-gray-800">
            Planalto
          </h3>
          <p className="text-center text-lg w-full p-2 m-2 leading-10 text-gray-500">
            Brazilian dark roast with rich velvety and body, and rich with
            fruits and nuts
          </p>
        </div>

        <div className="flex flex-col w-full">
          <h3 className="text-3xl text-center font-bold text-gray-800">
            Piccolo
          </h3>
          <p className="text-lg text-center w-full p-4 leading-10 text-gray-500">
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-3xl text-center font-bold text-gray-800">
            Danche
          </h3>
          <p className="text-center text-lg w-full p-2 m-2 leading-10 text-gray-500">
            Ethiopian hand-hervested blend densly packed with vibrant fruit
            notes
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Home;
