import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import PastConversation from "./PastConversation";
import FeedbackForm from "./FeedbackForm";
import styles from "./ChatApp.module.css";

const ChatApp = () => {
  const [conversationHistory, setConversationHistory] = useState([]);

  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSaveConversation = (conversation) => {
    setConversationHistory([...conversationHistory, conversation]);
  };

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <PastConversation
          conversations={conversationHistory}
          onSelect={handleConversationSelect}
        />
      </div>
      <div className={styles.right}>
        <ChatWindow onSaveConversation={handleSaveConversation} />
      </div>
    </div>
  );
};

export default ChatApp;
