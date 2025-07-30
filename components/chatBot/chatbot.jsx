import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);

    const botResponse = getBotReply(input.toLowerCase());
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500);

    setInput('');
  };

  const getBotReply = (msg) => {
    if (msg.includes('hi') || msg.includes('hello')) {
      return 'Hello! What can I do for you?';
    } else if (msg.includes('services')) {
      return 'We provide web development, design, and AI integration.';
    } else if (msg.includes('contact')) {
      return 'You can reach us at support@example.com.';
    } else if (msg.includes('thank')) {
      return 'You’re welcome!';
    } else {
      return 'Sorry, I didn’t understand that.';
    }
  };

  return (
    <div className="chatbot-popup">
      <div className="chat-header">
        <span>Chatbot</span>
        <button onClick={() => setMessages([])}>✖</button>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'user-msg' : 'bot-msg'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
