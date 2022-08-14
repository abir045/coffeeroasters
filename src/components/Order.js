import React, { useState } from "react";

const Order = ({ content }) => {
  //setting user inputs states
  const [userInput, setUserInput] = useState({
    preference: null,
    beanType: null,
    quantity: null,
    grindOption: null,
    delivery: null,
  });

  return <div>OrderForm</div>;
};

export default Order;
