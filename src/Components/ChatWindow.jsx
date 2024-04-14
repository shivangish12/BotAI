// ChatWindow.jsx
import React, { useState } from "react";
import styles from "./ChatWindow.module.css";
import Button from "./Button";
import chatData from "./chatData";
import FeedbackModal from "./FeedbackModal";

const ChatWindow = ({ onSaveConversation }) => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [rating, setRating] = useState(0);
  const [subjectiveFeedback, setSubjectiveFeedback] = useState("");
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const newMessage = { text: message, fromUser: true };
    setConversation([...conversation, newMessage]);

    const response = getAIResponse(message);
    const newResponse = { text: response, fromUser: false };
    setConversation([...conversation, newResponse]);
    setMessage("");
  };

  const handleSaveConversation = () => {
    onSaveConversation({ conversation, rating, subjectiveFeedback });
    setConversation([]);
    setRating(0);
    setSubjectiveFeedback("");
    setShowFeedbackModal(true);
  };

  const getAIResponse = (question) => {
    const matchedResponse = chatData.find((item) => item.question === question);
    return matchedResponse
      ? matchedResponse.response
      : "Sorry, I don't have a response for that.";
  };

  return (
    <div className={styles.chatWindow}>
      <h2 className={styles.head}>BotAI</h2>
      <div className={styles.conversation}>
        {conversation.map((message, index) => (
          <div
            key={index}
            className={`message ${message.fromUser ? "user" : "ai"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.questions}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.inputArea}
        />
        <Button onClick={handleSendMessage} text={"Ask"} />
        <Button onClick={handleSaveConversation} text={"Save"} />
      </div>
      {showFeedbackModal && (
        <FeedbackModal
          onClose={() => setShowFeedbackModal(false)}
          onSave={(feedbackData) => {
            onSaveConversation({
              ...feedbackData,
              conversation,
              rating,
              subjectiveFeedback,
            });
            setShowFeedbackModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ChatWindow;
