import React, { useState } from "react";
import Example from "./Accordion";
import { Accordion } from "react-accessible-accordion";
import OrderSummery from "./OrderSummery";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Order = ({ content }) => {
  //setting user inputs states
  const [userInput, setUserInput] = useState({
    preference: null,
    beanType: null,
    quantity: null,
    grindOption: null,
    delivery: null,
  });

  console.log(userInput);

  // display modal states

  const [displayModal, setDisplayModal] = useState(false);
  const [grindOptionDisabled, setGrindOptionDisabled] = useState(false);
  const [price, setPrice] = useState(0);
  const [accordionIndices, setAccordionIndices] = useState([0]);
  const [formComplete, setFormComplete] = useState(false);

  const toggleItem = (toggleIndex) => {
    if (accordionIndices.includes(toggleIndex)) {
      setAccordionIndices(
        accordionIndices.filter((currentIndex) => currentIndex !== toggleIndex)
      );
    } else {
      // sorted by string value of the numbers as no function was passed to sort
      setAccordionIndices([...accordionIndices, toggleIndex].sort());
    }
  };

  const getPrice = () => {
    const { quantity, delivery } = userInput;
    const [pricePerDelivery, deliveries] = content.prices[quantity][delivery];

    setPrice(priceFormatter.format(pricePerDelivery * deliveries));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayModal(true);
  };

  return (
    <div>
      <Accordion onChange={toggleItem} accordionIndices={accordionIndices}>
        {content.fieldsets.map((fieldset, index) => (
          <Example
            key={fieldset.id}
            index={index}
            fieldset={fieldset}
            userInput={userInput}
            setUserInput={setUserInput}
            prices={content.prices}
            priceFormatter={priceFormatter}
            grindOptionDisabled={grindOptionDisabled}
            setGrindOptionDisabled={setGrindOptionDisabled}
            accordionIndices={accordionIndices}
            setAccordionIndices={setAccordionIndices}
          />
        ))}
      </Accordion>

      <OrderSummery content={content.summary} userInput={userInput} />
    </div>
  );
};

export default Order;
