import React, { useEffect, useState } from "react";
import Example from "./Accordion";
import { Accordion } from "react-accessible-accordion";
import OrderSummery from "./OrderSummery";
import FormProgress from "./FormProgress";
import OrderSummeryModal from "./OrderSummeryModal";

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

  // display states of the order modal

  const [displayModal, setDisplayModal] = useState(false);
  const [grindOptionDisabled, setGrindOptionDisabled] = useState(false);
  // price states
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
    // destructuring quantity and delivery from the user input
    const { quantity, delivery } = userInput;

    const [pricePerDelivery, deliveries] = content.prices[quantity][delivery];

    // setting price with price formatter
    setPrice(priceFormatter.format(pricePerDelivery * deliveries));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayModal(true);
  };

  // handling formcomplete states in mounting

  useEffect(() => {
    if (grindOptionDisabled) {
      if (
        userInput.preference &&
        userInput.beanType &&
        userInput.quantity &&
        userInput.delivery
      ) {
        setFormComplete(true);
      } else {
        if (
          userInput.preference &&
          userInput.beanType &&
          userInput.quantity &&
          userInput.grindOption &&
          userInput.delivery
        ) {
          setFormComplete(true);
        }
      }
    }
  }, [userInput, grindOptionDisabled]);

  return (
    <div className="flex">
      <FormProgress
        content={content.fieldsets}
        userInput={userInput}
        grindOptionDisabled={grindOptionDisabled}
      />

      <div className="flex-col w-full">
        <form
          onSubmit={(event) => {
            handleSubmit(event);
            getPrice();
          }}
        >
          <Accordion
            allowMultipleExpanded
            onChange={toggleItem}
            index={accordionIndices}
          >
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

          <div className="flex justify-center">
            <button
              className="p-4 px-8 text-white font-bold rounded-lg bg-[#0E8784] hover:ease-in-out hover:opacity-40"
              type="submit"
              // disabled={!formComplete}
            >
              {content.buttons.first}
            </button>
          </div>

          <OrderSummeryModal
            displayModal={displayModal}
            setDisplayModal={setDisplayModal}
            content={content.summary}
            userInput={userInput}
            price={price}
          />
        </form>
      </div>
    </div>
  );
};

export default Order;
