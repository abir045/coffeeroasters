import React from "react";
import Coffee from "../images/coffee-2.svg";
import { AiFillFacebook } from "react-icons/ai";

import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";
import Instagram from "../images/instagram.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full  pt-10 bg-gray-800 mx-[5%] my-6 rounded-lg   sm:flex-col md:flex-row">
      <div className="flex p-4 sm:p-8 justify-between ">
        <img className="w-[30px] -rotate-90 mx-1" src={Coffee} alt="coffee" />
        <h3 className="font-bold text-3xl text-white">coffeeroasters</h3>
      </div>

      {/* <GiHamburgerMenu size={40} className="mx-auto mr-8 sm:hidden" /> */}

      <div className="flex flex-col text-gray-400 space-y-6 text-center mt-5 sm:hidden">
        <a className="text-xs  cursor-pointer uppercase" href="/">
          Home
        </a>
        <a className="text-xs cursor-pointer uppercase  " href="/about">
          About Us
        </a>
        <a className="text-xs cursor-pointer uppercase  ">Create your plan</a>
      </div>
      <div className="hidden  sm:flex space-x-10 p-4 font-medium  text-gray-400 sm:mr-[5%]">
        {/* for mobile */}

        <a className="text-xs  cursor-pointer uppercase sm:mx-1  " href="/">
          Home
        </a>
        <a className="text-xs cursor-pointer uppercase sm:mx-1 " href="/about">
          About Us
        </a>
        <a className="text-xs cursor-pointer uppercase sm:mx-1 ">
          Create your plan
        </a>
      </div>
      <div className="flex justify-center items-center p-6  mt-5 mb-10 space-x-3 ">
        <img className="bg-white w-[30px]" src={Facebook} />
        <img className="bg-white w-[30px]" src={Twitter} />
        <img className="bg-white w-[30px]" src={Instagram} />
      </div>
    </div>
  );
};

export default Footer;
