import React from "react";

const FormProgress = ({ content, userInput, grindOptionDisabled }) => {
  let updatedContent = content;

  // filtering grindOptionDisabled from the content , meaning if the condition grindOptionDisabled
  //exists we will filter the array element in the content which consists of grind option
  if (grindOptionDisabled) {
    updatedContent = updatedContent.filter(
      (fieldset) => fieldset.id !== "grindOption"
    );
  }

  return (
    <div className="mb-6 px-6 mx-6 w-[50%] hidden lg:flex flex-col">
      {updatedContent.map((fieldset, index) => (
        <div className="flex justify-between items-center text-base mb-10 font-bold">
          <span>{`0${index + 1}`}</span>
          <span>{fieldset.altHeading}</span>
          <span className="text-[#0E8784] font-bold">
            {userInput[fieldset.id] || "___"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FormProgress;
