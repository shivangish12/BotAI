// PastConversation.jsx
import React from "react";
import styles from "./PastConversation.module.css";

const PastConversation = ({ conversations, onSelect }) => {
  return (
    <div className={styles.pastContainer}>
      <h2>Past Conversations</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li key={index} onClick={() => onSelect(conversation)}>
            <div>
              <span>Question:</span>
              <span>{conversation.question}</span>
            </div>
            <div>
              <span>Answer:</span>
              <span>{conversation.answer}</span>
            </div>
            <div>
              <span>Rating:</span>
              <span>{conversation.rating}</span>
            </div>
            <div>
              <span>Subjective Feedback:</span>
              <span>{conversation.subjectiveFeedback}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastConversation;
