import React from "react";
import Hero from "../../images/hero_wide.jpeg";
import Mobile from "../../images/image-hero-coffeepress.jpg";
import Tablet from "../../images/hero_tablet.jpeg";
import CoffeBag from "../../images/image-gran-espresso.png";
import Planalto from "../../images/image-planalto.png";
import Piccolo from "../../images/image-piccollo.png";
import Danche from "../../images/image-danche.png";
import Bean from "../../images/coffee-last.svg";
import Gift from "../../images/shipping-2.svg";
import Shipping from "../../images/shipping.svg";
import Steps from "../steps";
import CreateButton from "../createButton";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className="flex flex-col relative">
        <img
          className="hidden w-full h-full object-cover rounded-xl px-2 mx-[5%] lg:block "
          src={Hero}
          alt="cover"
        />
        <img
          className="w-full h-full object-cover mx-6 px-2 rounded-xl  sm:hidden"
          src={Mobile}
          alt="cover"
        />

        <img
          className="hidden w-full h-full object-cover mx-[5%] rounded-xl sm:block md:block lg:hidden"
          src={Tablet}
          alt="cover"
        />

        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-70  text-white sm:hidden"></div> */}

        <div className="absolute  mx-[5%] left-[3%] top-[15%] md:left-8 md:top-35 lg:top-[10%] lg:left-[5%]">
          <h1 className="text-center text-white p-4 font-bold text-5xl sm:text-left  md:text-5xl lg:text-6xl w-full lg:w-1/2 xl:w-1/3  md:w-1/2 sm:w-2/3">
            Great coffee made simple.
          </h1>
          <p className="text-sm text-center md:text-left sm:text-left  text-gray-300 p-4 tracking-wide w-full mx-4  leading-6 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-4/5 ">
            Start your mornings with the worlds best coffee.Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule
          </p>

          <button className="text-white mx-14  text-3xl bg-teal-700 font-bold rounded-lg p-4 my-10 sm:mx-4">
            {" "}
            <a href="/create">Create your plan</a>
          </button>
        </div>
      </div>
      {/*Menu conatainer  */}
      <div className="block mt-[15%]">
        <h1 className="mt-4 text-center text-5xl font-bold sm:text-7xl lg:text-9xl xl:text-9xl sm:tracking-[.1em] text-gray-300">
          our collection
        </h1>
      </div>
      {/* items container */}
      <div className="flex flex-col p-8 items-center   sm:-mt-11 md:flex-row md:justify-between md:ml-7 md:-mt-12 md:pt-1 ">
        <div className="flex flex-col sm:flex-row w-full mb-2">
          <img className="w-[250px] mx-auto" src={CoffeBag} alt="menu" />
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
          <img className="w-[250px] mx-auto" src={Planalto} alt="menu" />

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
          <img className="w-[250px] mx-auto" src={Piccolo} alt="menu" />
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
          <img className="w-[250px] mx-auto" src={Danche} alt="menu" />
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
      {/* text container for desktop size */}
      <div className="hidden p-8 md:flex  md:justify-evenly">
        <div className="flex flex-col  w-full">
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
        </div>
      </div>
      {/* why choose us section */}
      <section className="flex-col p-8  bg-[#333D4B] mx-[5%] px-2 rounded-lg relative">
        <div className="flex-col rounded text-center h-[900px] mb-4 sm:h-[500px]  md:h-[350px] mx-auto">
          <h1 className=" text-white p-4 m-4 text-5xl">Why choose us?</h1>
          <p className=" text-gray-400 text-base mx-2 leading-8 text-center">
            A large part of our role is choosing which particular coffees will
            be featured in our range. That means working closely with the best
            coffee growers to give you a more impactful experience at every
            level.
          </p>
        </div>
        {/* reasons to choose container */}

        <div className="absolute top-[40%] p-8  md:top-[55%] sm:top-[45%]  text-center justify-center m-auto left-0 right-0 flex flex-col md:flex-row ">
          {/* 1st card */}
          <div className="flex flex-col rounded-lg bg-teal-700 w-full p-8  sm:flex-row sm:w-full sm:mx-auto md:mx-4 md:flex-col">
            <img
              src={Bean}
              alt="beans"
              className="w-1/2 mx-auto m-8 p-2 sm:w-1/5"
            />
            <div className="flex flex-col ">
              <h2 className=" text-white text-center  p-4  text-3xl">
                Best Quality
              </h2>
              <p className="text-white p-4 text-center text-sm leading-6 mx-2">
                Discover an endless variety of the world's best artisan coffee
                from each of our roasters
              </p>
            </div>
          </div>

          {/* 2nd card */}

          <div className="flex flex-col rounded-lg bg-teal-700 w-full p-8 my-4 sm:flex-row sm:w-full sm:mx-auto md:mx-4 md:flex-col">
            <img
              src={Gift}
              alt="gift"
              className="w-1/2 mx-auto m-8 p-2 sm:w-1/5"
            />
            <div className="flex flex-col">
              <h2 className="text-white text-center p-4 text-3xl">
                Exclusive Benefits
              </h2>
              <p className="text-white p-4 text-center text-base mx-4">
                Special offers and swag when you subscribe, including 30% off
                your first shipment
              </p>
            </div>
          </div>
          {/* 3rd card */}
          <div className="flex flex-col rounded-lg bg-teal-700 w-full p-8  sm:flex-row sm:w-full sm:mx-auto md:mx-4 md:flex-col">
            <img
              src={Shipping}
              alt="shipping"
              className="w-1/2 mx-auto m-8 p-2 sm:w-1/4"
            />
            <div className="flex flex-col">
              <h2 className="text-white text-center p-4 text-3xl">
                Free Shipping
              </h2>
              <p className="text-white p-4 text-center text-base mx-4">
                We cover the cost and the coffee is delivered fast. Peak
                freshness : guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* procedure description  section*/}
      <div className="flex flex-col  mx-[5%] p-4 w-full pt-[20%] mt-[90%] sm:mt-[-55%] lg:mt-[-90%] ">
        <h1 className="text-gray-700 mx-[5%] mt-[90%] pt-[90%] text-center font-bold text-2xl bg-blend-color-burn lg:mt-[30%] mt-[30%] sm:text-left">
          How it works
        </h1>
        <Steps />
      </div>

      <div className="flex mx-[5%]">
        <button className="text-white  text-3xl bg-teal-700 font-bold rounded-lg p-4 my-10 ">
          <a href="/create">Create your plan</a>
        </button>
      </div>
    </>
  );
};

export default Home;
