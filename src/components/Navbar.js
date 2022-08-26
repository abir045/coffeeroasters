import React, { useState, useRef } from "react";
import Coffee from "../images/coffee-2.svg";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const navRef = useRef();

  const closeNav = (event) => {
    //current points to the mounted div element
    if (navRef.current === event.target) {
      setDisplayNav(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex p-6 sm:p-8 justify-start ">
          <img className="w-[30px] -rotate-90 mx-1" src={Coffee} alt="coffee" />
          <h3 className="font-bold text-3xl">coffeeroasters</h3>
        </div>

        {/* nav icon */}

        <GiHamburgerMenu
          onClick={() => setDisplayNav(!displayNav)}
          size={40}
          className="mx-auto mr-[5%] md:hidden"
        />

        {displayNav ? (
          <div
            display={displayNav}
            ref={navRef}
            onClick={closeNav}
            className="flex fixed w-full h-full left-0 top-0   text-center items-center z-[100]  bg-transparent"
          >
            <div className="w-full font-bold  mt-10  space-y-20 bg-white relative flex flex-col p-10   mx-auto shadow-xl ">
              <a
                className="text-xl hover:text-teal-500  cursor-pointer  uppercase sm:mx-1"
                href="/"
              >
                Home
              </a>
              <a
                className="text-xl hover:text-teal-500 cursor-pointer  uppercase  sm:mx-1"
                href="/about"
              >
                About Us
              </a>
              <a
                className="text-xl hover:text-teal-500 cursor-pointer  uppercase  sm:mx-1"
                href="/create"
              >
                Create your plan
              </a>
            </div>
          </div>
        ) : null}

        {/* destop nav */}

        <div className="hidden md:flex p-8 font-bold space-x-6  text-gray-600 sm:mr-[5%]">
          <a className="text-xs  cursor-pointer  uppercase sm:mx-1" href="/">
            Home
          </a>
          <a
            className="text-xs cursor-pointer uppercase  sm:mx-1"
            href="/about"
          >
            About Us
          </a>
          <a
            className="text-xs cursor-pointer uppercase  sm:mx-1"
            href="/create"
          >
            Create your plan
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
