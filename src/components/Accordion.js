import { Children, Fragment, useState } from "react";

import {
  AccordionItemButton,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
//import DisplayName from "react-accessible-accordion/dist/types/helpers/DisplayName";

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
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    // destructuring name and id from user input
    const { name, id } = event.target;
    // setting new userinput
    let newUserInput = { ...userInput, [name]: id };
    setUserInput(newUserInput);

    const currentIndex = Number(event.target.dataset.fieldsetindex);
    let newAccordionIndices = [];
    if (grindOptionDisabled && currentIndex === 2) {
      // skip grindOption if it is disabled
      newAccordionIndices = [...accordionIndices, currentIndex + 2];
    } else {
      newAccordionIndices = [...accordionIndices, currentIndex + 1];
    }

    // disable and close grindOption if preference is capsule
    if (newUserInput.preference === "Capsule") {
      setGrindOptionDisabled(true);
      newAccordionIndices = newAccordionIndices.filter((num) => num !== 3);
    } else {
      setGrindOptionDisabled(false);
    }
    setAccordionIndices([...new Set(newAccordionIndices)]);
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

  const cards = fieldset.cards.map((card) => (
    <div
      className="flex flex-col p-6 w-full cursor-pointer  "
      fieldset={fieldset.id}
      key={card.heading}
      cardName={card.heading}
      userInput={userInput}
    >
      <input
        className="hidden"
        type="radio"
        name={fieldset.id}
        id={card.heading}
        onChange={handleChange}
        data-fieldsetindex={index}
      />
      <label
        htmlFor={card.heading}
        className="block rounded-lg  px-4 py-4 w-full"
        style={{
          backgroundColor:
            userInput.preference === card.heading
              ? "#0E8784"
              : "#FEFCF7" && userInput.beanType === card.heading
              ? "#0E8784"
              : "#FEFCF7" && userInput.quantity === card.heading
              ? "#0E8784"
              : "#FEFCF7" && userInput.grindOption === card.heading
              ? "#0E8784"
              : "#FEFCF7" && userInput.delivery === card.heading
              ? "#0E8784"
              : "#FEFCF7",
        }}
      >
        <h3 className="text-2xl font-bold mb-4">{card.heading}</h3>
        <p>
          {fieldset.id === "delivery"
            ? getPricePerShipment(card) + " " + card.description
            : card.description}
        </p>
      </label>
    </div>
  ));

  console.log(cards);

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
        <AccordionItemButton>
          <div
            className="flex justify-between items-center mb-4 font-bold text-2xl text-gray-600 "
            index={index}
            accordionIndices={accordionIndices}
          >
            {fieldset.heading}
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className="flex mb-8">{cards}</AccordionItemPanel>
    </AccordionItem>
  );
}
