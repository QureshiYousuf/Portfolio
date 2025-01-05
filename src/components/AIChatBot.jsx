import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const OPENAIKEY =
    "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";

  //   My OpenAI Key
  //   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
  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { user: true, text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            ...newMessages.map((msg) => ({
              role: msg.user ? "user" : "assistant",
              content: msg.text,
            })),
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAIKEY}`,
          },
        }
      );

      setMessages([
        ...newMessages,
        { user: false, text: response.data.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessages([
        ...newMessages,
        { user: false, text: "Sorry, I couldn't process that." },
      ]);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded shadow-md">
      <div className="h-96 overflow-y-auto mb-4 border p-4 rounded bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${
              msg.user
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="px-4 bg-blue-600 text-white rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
