import React from "react";
import styles from "./Card.module.css";

const Card = ({ question, response }) => {
  return (
    <div className={styles.card}>
      <div className={styles.you}>
        <p>You: {question}</p>
      </div>
      <p>Soul AI: {response}</p>
    </div>
  );
};

export default Card;
