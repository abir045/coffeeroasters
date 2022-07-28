import React from "react";
import Coffee from "../images/coffee-2.svg";
import { AiFillFacebook } from "react-icons/ai";

import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";
import Instagram from "../images/instagram.svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full bg-gray-900">
      <div className="flex p-6 sm:p-8 justify-between ">
        <img className="w-[30px] -rotate-90 mx-1" src={Coffee} alt="coffee" />
        <h3 className="font-bold text-3xl text-white">coffeeroasters</h3>
      </div>

      {/* <GiHamburgerMenu size={40} className="mx-auto mr-8 sm:hidden" /> */}

      <div className="hidden sm:flex  p-8 font-medium  text-gray-900 sm:mr-[5%]">
        <a
          className="text-xs  cursor-pointer uppercase sm:mx-1 text-white"
          href="/"
        >
          Home
        </a>
        <a
          className="text-xs cursor-pointer uppercase sm:mx-1 text-white"
          href="/about"
        >
          About Us
        </a>
        <a className="text-xs cursor-pointer uppercase sm:mx-1 text-white">
          Create your plan
        </a>
      </div>
      <div className="flex  space-x-3 mr-10">
        <img className="bg-white w-[30px]" src={Facebook} />
        <img className="bg-white w-[30px]" src={Twitter} />
        <img className="bg-white w-[30px]" src={Instagram} />
      </div>
    </div>
  );
};

export default Footer;
