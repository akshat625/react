import React from "react";
import styles from "./Buttons.module.css";
import { IoMdBackspace } from "react-icons/io";

function Buttons({ onButtonClick }) {

  const buttonList = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", ".","←"];

  return (
    <div className={styles.buttonsContainer}>
      {buttonList.map((item) => (
        <button
          key={item}
          className={styles.button}
          onClick={() => onButtonClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
