import React from "react";
import styles from "./Card.module.css";

const Card = ({ question, response }) => {
  return (
    <div className={styles.card}>
      <div className={styles.you}>
        <div className={styles.title}>You</div>
        <div className={styles.txt}>{question}</div>
      </div>
      <div className={styles.you}>
        <div className={styles.title}>Soul AI</div>{" "}
        <div className={styles.txt}>{response}</div>
      </div>
    </div>
  );
};

export default Card;
