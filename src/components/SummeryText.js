import React from "react";

const SummeryText = ({ userInput }) => {
  let { preference, beanType, quantity, grindOption, delivery } = userInput;

  if (preference === "Capsule") {
    return (
      <p className="text-white font-bold text-2xl">
        &quot; I drink my coffee using{" "}
        <span className="text-teal-500">{preference || "___"}</span> with a{" "}
        <span className="text-teal-500">{beanType || "___"}</span> type of bean.
        {""}
        <span className="text-teal-500">{quantity || "___"}</span>, sent to me
        {""}
        <span className="text-teal-500">{delivery || "___"}</span>
        &quot;
      </p>
    );
  } else
    return (
      <p className="text-white font-bold text-2xl">
        &quot;I drink my coffee using{" "}
        <span className="text-teal-500">{preference || "___"}</span> with a{" "}
        <span className="text-teal-500">{beanType || "___"}</span> type of bean.
        {""}
        <span className="text-teal-500">{quantity || "___"}</span> ground ala{" "}
        {""}
        <span className="text-teal-500">{grindOption || "___"}</span>, sent to
        me {""}
        <span className="text-teal-500">{delivery || "___"}</span>
        .&quot;
      </p>
    );
};

export default SummeryText;
