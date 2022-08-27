import { Children, Fragment, useState } from "react";

import {
  AccordionItemButton,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
} from "react-accessible-accordion";

import { FaAngleDown } from "react-icons/fa";
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example({
  fieldset,
  index,
  prices,
  priceFormatter,
  userInput,
  setUserInput,
  grindOptionDisabled,
  setGrindOptionDisabled,
  accordionIndices,
  setAccordionIndices,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleChange = (event) => {
    // destructuring name and id from user input
    const { name, id } = event.target;
    // setting new userinput
    let newUserInput = { ...userInput, [name]: id };
    setUserInput(newUserInput);

    // const currentIndex = Number(event.target.dataset.fieldsetindex);
    // let newAccordionIndices = [];
    // if (grindOptionDisabled && currentIndex === 2) {
    //   // skip grindOption if it is disabled
    //   newAccordionIndices = [...accordionIndices, currentIndex + 2];
    // } else {
    //   newAccordionIndices = [...accordionIndices, currentIndex + 1];
    // }

    // disable and close grindOption if preference is capsule
    // if (newUserInput.preference === "Capsule") {
    //   setGrindOptionDisabled(true);
    //   newAccordionIndices = newAccordionIndices.filter((num) => num !== 3);
    // } else {
    //   setGrindOptionDisabled(false);
    // }
    // setAccordionIndices([...new Set(newAccordionIndices)]);
  };

  const getPricePerShipment = (card) => {
    const quantity = userInput.quantity;
    const delivery = card.heading;
    if (!quantity) {
      return "___";
    }
    const PricePerShipment = priceFormatter.format(
      prices[quantity][delivery][0]
    );

    return PricePerShipment;
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const cards = fieldset.cards.map((card) => (
    <div
      className="flex  items-center p-2 w-auto h-auto cursor-pointer"
      fieldset={fieldset.id}
      key={card.heading}
      cardName={card.heading}
      userInput={userInput}
    >
      <input
        className="hidden "
        type="radio"
        name={fieldset.id}
        id={card.heading}
        onChange={handleChange}
        data-fieldsetindex={index}
      />
      {/* <div className="hover:bg-red-200"> */}
      <label
        htmlFor={card.heading}
        className="block  rounded-lg  p-4 w-full hover:bg-red-200 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor:
            userInput.preference === card.heading
              ? "#0E8784"
              : "#f4f1eb" && userInput.beanType === card.heading
              ? "#0E8784"
              : "#f4f1eb" && userInput.quantity === card.heading
              ? "#0E8784"
              : "#f4f1eb" && userInput.grindOption === card.heading
              ? "#0E8784"
              : "#f4f1eb" && userInput.delivery === card.heading
              ? "#0E8784"
              : "#f4f1eb" && isHover
              ? "#d6b0ae"
              : "#f4f1eb",

          color:
            userInput.preference === card.heading
              ? "white"
              : "black" && userInput.beanType === card.heading
              ? "white"
              : "black" && userInput.quantity === card.heading
              ? "white"
              : "black" && userInput.grindOption === card.heading
              ? "white"
              : "black" && userInput.delivery === card.heading
              ? "white"
              : "black",
        }}
      >
        <h3 className="text-2xl font-bold mb-2 ">{card.heading}</h3>
        <p>
          {fieldset.id === "delivery"
            ? getPricePerShipment(card) + " " + card.description
            : card.description}
        </p>
      </label>
      {/* </div> */}
    </div>
  ));

  return (
    <AccordionItem>
      <AccordionItemHeading
        style={{
          display:
            userInput.preference === "Capsule" && fieldset.id === "grindOption"
              ? "none"
              : "flex",
        }}
      >
        <AccordionItemButton
          className="flex justify-between w-full space-x-8 items-center mb-4 font-bold text-2xl text-gray-600 hover:text-teal-500  "
          index={index}
          accordionIndices={accordionIndices}
        >
          {/* <div
            className="flex justify-between items-center mb-4 font-bold text-2xl text-gray-600 hover:text-teal-500 "
            index={index}
            accordionIndices={accordionIndices}
          >
            {fieldset.heading}
            
          </div> */}

          {fieldset.heading}
          <div className="flex justify-end ">
            <FaAngleDown className="justify-end" />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className="flex flex-col  sm:flex-row  mb-8 ">
        {cards}
      </AccordionItemPanel>
    </AccordionItem>
  );
}
