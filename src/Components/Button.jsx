import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
export default Button;
