import React, { useState } from "react";
import styles from "./FeedbackForm.module.css";

const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [comment, setComment] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    if (!liked) {
      setDisliked(false);
    }
  };

  const handleDislikeClick = () => {
    setDisliked(!disliked);
    if (!disliked) {
      setLiked(false); // If disliked, reset liked state
    }
  };

  const handleSubmit = () => {
    // Package feedback data and submit it
    const feedbackData = {
      rating,
      liked,
      disliked,
      comment,
    };
    onSubmit(feedbackData);
  };

  return (
    <div className={styles.feedbackForm}>
      <h2>Feedback</h2>
      <div className={styles.ratingSection}>
        <label>Rate your experience:</label>
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`${styles.ratingButton} ${
                rating >= value ? styles.active : ""
              }`}
              onClick={() => handleRatingChange(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.likeDislikeSection}>
        <label>Did you like the response?</label>
        <button
          className={`${styles.likeButton} ${liked ? styles.active : ""}`}
          onClick={handleLikeClick}
        >
          👍
        </button>
        <label>Did you dislike the response?</label>
        <button
          className={`${styles.dislikeButton} ${disliked ? styles.active : ""}`}
          onClick={handleDislikeClick}
        >
          👎
        </button>
      </div>
      <div className={styles.commentSection}>
        <label>Additional comments:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles.commentInput}
          placeholder="Enter your comments here..."
        ></textarea>
      </div>
      <button onClick={handleSubmit} className={styles.submitButton}>
        Submit
      </button>
    </div>
  );
};

export default FeedbackForm;
