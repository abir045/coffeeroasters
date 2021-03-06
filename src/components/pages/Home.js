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

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className="flex flex-col relative">
        <img
          className="hidden w-full h-full object-cover rounded-xl px-2 mx-10 lg:block "
          src={Hero}
          alt="cover"
        />
        <img
          className="w-full h-full object-cover mx-6 px-2 rounded-xl  sm:hidden"
          src={Mobile}
          alt="cover"
        />

        <img
          className="hidden w-full h-full object-cover sm:block md:block lg:hidden"
          src={Tablet}
          alt="cover"
        />

        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-70  text-white sm:hidden"></div> */}

        <div className="absolute left-[3%] top-[15%] md:left-8 md:top-35 lg:top-[10%] lg:left-[5%]">
          <h1 className="text-center text-white p-4 font-bold text-5xl sm:text-left  md:text-5xl lg:text-6xl w-full lg:w-1/2 xl:w-1/3  md:w-1/2 sm:w-2/3">
            Great coffee made simple.
          </h1>
          <p className="text-sm text-center md:text-left sm:text-left  text-gray-300 p-4 tracking-wide w-full mx-4  leading-6 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-4/5 ">
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
      {/* items container */}
      <div className="flex flex-col p-8 items-center sm:-mt-11 md:flex-row md:justify-between md:ml-7 md:-mt-12 md:pt-1">
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
      <section className="flex-col p-8  bg-gray-900 mx-6 px-2 rounded-lg relative">
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

        <div className="absolute top-[35%] p-8 md:top-[65%] text-center justify-center m-auto left-0 right-0 flex flex-col md:flex-row">
          {/* 1st card */}
          <div className="flex flex-col rounded-lg bg-teal-700 w-full p-4  sm:flex-row sm:w-full sm:mx-auto md:mx-4 md:flex-col">
            <img
              src={Bean}
              alt="beans"
              className="w-1/2 mx-auto m-8 sm:w-1/5"
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

          <div className="flex flex-col rounded-lg bg-teal-700 w-full p-4 my-4 sm:flex-row sm:w-full sm:mx-auto md:mx-4 md:flex-col">
            <img src={Gift} alt="gift" className="w-1/2 mx-auto m-8 sm:w-1/5" />
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
          <div className="flex flex-col rounded-lg bg-teal-700 w-full p-4  sm:flex-row sm:w-full sm:mx-auto md:mx-4 md:flex-col">
            <img
              src={Shipping}
              alt="shipping"
              className="w-1/2 mx-auto m-8 sm:w-1/4"
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
      <section className="flex flex-col ">
        <div className="flex flex-col mt-[200%] p-8 m-6 sm:mt-[60%] md:mt-[50%] lg:mt-[40%] xl:mt-[30%]">
          <h1 className="text-gray-700 text-center font-bold text-2xl bg-blend-color-burn sm:text-left">
            How it works
          </h1>
          {/* indicators */}
          <div className="hidden sm:flex my-8">
            <div className="flex  rounded-full w-[25px] h-[25px] border-2 border-teal-700"></div>

            <hr className="flex items-center h-[3px] justify-center w-[160px] md:w-[200px] lg:w-[280px]  border  border-orange-100 my-3 shadow-inner shadow-orange-100" />

            <div className="flex  rounded-full w-[25px] h-[25px] border-2 border-teal-700"></div>

            <hr className="flex items-center h-[3px] justify-center w-[160px] md:w-[200px] lg:w-[280px] border  border-orange-100 my-3 shadow-inner shadow-orange-100" />

            <div className="flex  rounded-full w-[25px] h-[25px] border-2 border-teal-700"></div>
          </div>

          {/* steps */}

          <div className="flex flex-col sm:flex-row md:flex-row sm:space-x-3">
            <div className="flex flex-col">
              <span className="text-orange-200 font-bold text-center text-7xl my-6 sm:text-left">
                01
              </span>
              <h2 className="text-3xl text-center font-bold my-6 sm:text-left">
                Pick Your Coffee
              </h2>
              <p className="text-sm text-center my-6 w-full sm:text-left sm:p-1">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair price for them. There are new
                coffees in all profiles every month for you to try out
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-orange-200 font-bold text-center text-7xl my-6 sm:text-left">
                02
              </span>
              <h2 className="text-3xl text-center font-bold my-6 sm:text-left">
                Choose the frequency
              </h2>
              <p className="text-sm text-center my-6 w-full sm:text-left sm:p-1">
                Customize your order frequency,quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-orange-200 font-bold text-center text-7xl my-6 sm:text-left">
                03
              </span>
              <h2 className="text-3xl text-center font-bold my-6 sm:text-left">
                Receive and enjoy!
              </h2>
              <p className="text-sm text-center my-6 w-full sm:text-left sm:p-1">
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>
          <button className="text-white text-center mx-auto text-xl bg-teal-700 font-bold rounded-lg p-4 my-10 sm:text-xl sm:ml-0">
            Create your plan
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
