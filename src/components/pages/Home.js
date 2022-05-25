import React from "react";
import Hero from "../../images/hero_wide.jpeg";
import Mobile from "../../images/hero_mobile.jpeg";
import Tablet from "../../images/hero_tablet.jpeg";
import CoffeBag from "../../images/carton.png";

const Home = () => {
  return (
    <>
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

      {/*Menu conatainer  */}
      <div className="flex flex-col p-8 items-center mx-auto relative">
        <h1 className="text-5xl font-bold tracking-wide  text-gray-300">
          our collection
        </h1>
        <img className="p-8" src={CoffeBag} alt="menu" />
        <h2 className="absolute left-[35%] top-[10%] text-3xl w-1/4 italic font-bold rotate-90">
          Gran Espresso
        </h2>
        <h3 className="text-5xl font-bold text-gray-800">Gran Espresso</h3>
        <p className="text-center text-2xl p-4 leading-10 text-gray-500">
          Light and flavorful blend with cocoa and black pepper for an intense
          exoperience
        </p>
        {/* 2nd item */}
        <img className="p-8" src={CoffeBag} alt="menu" />
        <h2 className="absolute top-[35%] left-[30%] text-3xl italic font-bold rotate-90">
          Planalto
        </h2>
        <h3 className="text-5xl font-bold text-gray-800">Planalto</h3>
        <p className="text-center text-2xl p-4 leading-10 text-gray-500">
          Brazilian dark roast with rich velvety and body, and rich with fruits
          and nuts
        </p>

        {/* 3rd item */}
        <img className="p-8" src={CoffeBag} alt="menu" />
        <h2 className="absolute bottom-[40%] left-[35%] text-3xl italic font-bold rotate-90">
          Piccolo
        </h2>
        <h3 className="text-5xl font-bold text-gray-800">Piccolo</h3>
        <p className="text-center text-2xl p-4 leading-10 text-gray-500">
          Mild and smooth blend featuring notes of toasted almond and dried
          cherry
        </p>
        {/* 4th item */}
        <img className="p-8" src={CoffeBag} alt="menu" />
        <h2 className="absolute bottom-[15%] left-[35%] text-3xl italic font-bold rotate-90">
          Danche
        </h2>

        <h3 className="text-5xl font-bold text-gray-800">Danche</h3>
        <p className="text-center text-2xl p-4 leading-10 text-gray-500">
          Ethiopian hand-hervested blend densly packed with vibrant fruit notes
        </p>
      </div>
    </>
  );
};

export default Home;
