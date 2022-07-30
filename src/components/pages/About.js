import React from "react";
import hero from "../../images/image-hero-whitecup.jpg";

const About = () => {
  return (
    <div className="flex relative ">
      <img className="h-full rounded" src={hero} alt="hero banner" />
      <div className="absolute left-10 top-[30%]">
        <h1 className="text-4xl text-white">About us</h1>
        <p className="text-gray-300 p-4  text-base">
          Coffeeroasters began its journey of exotic discovery in 1999,
          <br />
          highlighting stories of coffee from around the world. We have <br />
          {""}
          since been dedicated to bring the perfect cup - from bean to <br />{" "}
          brew - in every shipment.
        </p>
      </div>
    </div>
  );
};

export default About;
