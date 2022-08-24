import React, { useRef } from "react";
import SummeryText from "./SummeryText";

const OrderSummeryModal = ({
  content,
  price,
  userInput,
  display,
  setDisplay,
}) => {
  // creating a ref for the div
  const backgroundRef = useRef();

  const closeModal = (event) => {
    //current points to the mounted div element
    if (backgroundRef.current === event.target) {
      setDisplay(false);
    }
  };

  return (
    <>
      {display ? (
        <div
          className="flex justify-center items-center opacity-80"
          onClick={closeModal}
          ref={backgroundRef}
          display={display}
        >
          <div>
            <h2>{content.heading}</h2>
            <SummeryText userInput={userInput} />
            <p>{content.confirm}</p>
            <button> Checkout - {price}</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OrderSummeryModal;
