import React from "react";
import style from "./checkbox.module.css";

export const Checkbox = ({ isChecked, name, setIsChecked, text }) => {
  return (
    <div className={style.checkbox}>
      <label>{text}</label>
      <input
        type="checkbox"
        value={isChecked}
        name={name}
        onClick={(e) => {
          setIsChecked(e);
        }}
      />
    </div>
  );
};
