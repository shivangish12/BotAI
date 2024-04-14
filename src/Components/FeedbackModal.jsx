import React, { useState } from "react";
import styles from "./FeedbackModal.module.css";
import FeedbackForm from "./FeedbackForm";

const FeedbackModal = ({ onClose, onSave }) => {
  const [feedbackData, setFeedbackData] = useState(null);

  const handleFeedbackSubmit = (data) => {
    setFeedbackData(data);
  };

  const handleClose = () => {
    onClose();
    setFeedbackData(null);
  };

  const handleSaveFeedback = () => {
    onSave(feedbackData);
    setFeedbackData(null);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={handleClose}>
          &times;
        </span>
        {feedbackData ? (
          <div className={styles.feedbackSaved}>
            <h2>Feedback Saved!</h2>
            <button onClick={handleClose}>Close</button>
          </div>
        ) : (
          <FeedbackForm onSubmit={handleFeedbackSubmit} />
        )}
        <button
          className={styles.saveButton}
          onClick={handleSaveFeedback}
          disabled={!feedbackData}
        >
          Save Feedback
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
