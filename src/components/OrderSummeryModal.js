import React, { useRef } from "react";
import SummeryText from "./SummeryText";

const OrderSummeryModal = ({
  content,
  price,
  userInput,
  displayModal,
  setDisplayModal,
}) => {
  // creating a ref for the div
  const backgroundRef = useRef();

  const closeModal = (event) => {
    //current points to the mounted div element
    if (backgroundRef.current === event.target) {
      setDisplayModal(false);
    }
  };

  return (
    <>
      {displayModal ? (
        <div
          className="flex fixed w-full h-full left-0 top-0 justify-center items-center bg-transparent  opacity-100"
          onClick={closeModal}
          ref={backgroundRef}
          display={displayModal}
        >
          <div
            className="w-[540px] max-w-[70%] mb-10 bg-white relative  z-10  mx-auto shadow-xl rounded-xl"
            style={{
              visibility: (displayModal) =>
                displayModal ? "visible" : "hidden",
              animation: (displayModal) =>
                displayModal ? "fadeIn 3s linear" : null,
            }}
            display={displayModal}
          >
            <h2 className="bg-[#333d4b] mb-10 flex text-white text-3xl w-full p-8 font-bold rounded-xl ">
              {content.heading}
            </h2>

            <div className="text-black mx-8">
              <SummeryText displayModal={displayModal} userInput={userInput} />
            </div>

            <p className="text-gray-500 p-4 text-base mx-5 mb-5">
              {content.confirm}
            </p>
            <button className="flex p-4 mx-8 text-xl bg-teal-500 font-bold text-white  rounded-lg mb-10">
              {" "}
              Checkout - {price}/mo
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OrderSummeryModal;
