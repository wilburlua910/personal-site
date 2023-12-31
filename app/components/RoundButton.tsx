import React from "react";

const RoundButton = ({ text, subtitle }: RoundButton) => {
  return (
    <button className="rounded-3xl border border-black p-3 m-3">{text}</button>
  );
};

export default RoundButton;
