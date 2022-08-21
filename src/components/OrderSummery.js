import React from "react";
import SummeryText from "./SummeryText";

const OrderSummery = ({ content, userInput }) => {
  return (
    <div className="flex flex-col  mb-5 bg-[#333d4b] p-10 rounded-lg">
      <h2 className="text-base uppercase opacity-70 mb-2 text-gray-100">
        {content.heading}
      </h2>

      <SummeryText userInput={userInput} />
    </div>
  );
};

export default OrderSummery;
