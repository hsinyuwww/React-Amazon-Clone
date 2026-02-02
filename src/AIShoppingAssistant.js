import React, { useState, useRef, useEffect } from "react";
import "./AIShoppingAssistant.css";

const SYSTEM_PROMPT = `You are a professional Amazon stylist and shopping advisor. Your role is to help customers discover products that match their style, needs, and budget. You are warm, knowledgeable, and concise. When recommending products, reference the current catalog when relevant. Suggest outfit ideas, gift picks, and complementary items. Keep responses friendly and under 3 short paragraphs unless the user asks for more detail.`;

async function mockAssistantApi(userMessage, productsContext, conversationHistory) {
  const apiKey = process.env.REACT_APP_GROQ_API_KEY;

  if (!apiKey) return "API Key missing in .env!";

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // This is a powerful free model
        messages: [
          { 
            role: "system", 
            content: `You are a professional Amazon stylist. Context: ${JSON.stringify(productsContext)}` 
          },
          ...conversationHistory.map(m => ({ role: m.role, content: m.content })),
          { role: "user", content: userMessage }
        ],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Groq Error:", error);
    return "I'm having a quick technical glitch. Try again?";
  }
}

function AIShoppingAssistant({ products = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m your Amazon stylist. What are you looking for today—outfit ideas, gifts, or something specific?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const reply = await mockAssistantApi(
        text,
        products,
        messages
      );
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        className="ai-assistant__fab"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close assistant" : "Open shopping assistant"}
      >
        <span className="ai-assistant__fab-icon">✦</span>
      </button>

      {isOpen && (
        <div className="ai-assistant__window">
          <div className="ai-assistant__header">
            <span className="ai-assistant__title">Style Assistant</span>
            <button
              className="ai-assistant__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="ai-assistant__messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`ai-assistant__message ai-assistant__message--${msg.role}`}
              >
                <div className="ai-assistant__bubble">{msg.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="ai-assistant__message ai-assistant__message--assistant">
                <div className="ai-assistant__bubble ai-assistant__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="ai-assistant__input-wrap">
            <input
              type="text"
              className="ai-assistant__input"
              placeholder="Ask for style or product ideas..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              type="button"
              className="ai-assistant__send"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label="Send"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AIShoppingAssistant;
