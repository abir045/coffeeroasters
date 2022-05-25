import React from "react";
import Coffee from "../images/coffee.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex p-6 sm:p-8 justify-start ">
          <img className="w-[30px] -rotate-90 mx-1" src={Coffee} alt="coffee" />
          <h3 className="font-bold text-3xl">coffeeroasters</h3>
        </div>
        <div className="hidden sm:flex p-8 font-medium  text-gray-900">
          <div className="text-xs  uppercase sm:mx-1">Home</div>
          <div className="text-xs uppercase sm:mx-1">About Us</div>
          <div className="text-xs uppercase sm:mx-1">Create your plan</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
