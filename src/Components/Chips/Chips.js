import React from "react";
import style from "./chips.module.css";

export const Chips = ({ isChecked, name, setIsChecked, text }) => {
  return (
    <button
      className={style.chips}
      style={{ backgroundColor: isChecked ? "#a7a7a7" : "#ffffff" }}
      value={isChecked}
      name={name}
      onClick={(e) => {
        setIsChecked(e);
      }}
    >
      {text}
    </button>
  );
};
