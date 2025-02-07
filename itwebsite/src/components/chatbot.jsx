import { useState } from "react";
import { BsChatDotsFill } from "react-icons/bs"; // Import Chat Icon




const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", fromBot: true }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, fromBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/chat/v1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.text();
      setMessages((prev) => [...prev, { text: data.trim(), fromBot: true }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "⚠️ Error fetching response.", fromBot: true }]);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setMessages([{ text: "Hello! How can I assist you today?", fromBot: true }]); // ✅ Resets chat on close
    setOpen(false);
  };

  return (

    <div className="chatbot-container position-fixed start-50 translate-middle-x" style={{ top: "80px", zIndex: 1000 }}>
      <button onClick={() => (open ? handleClose() : setOpen(true))} className="btn btn-primary chatbot-button rounded-circle p-2">
        {open ? "Close Chat" : "Chat"}
        <BsChatDotsFill size={24} />

      </button>

      {open && (
        <div className="chatbot-window card shadow p-3 mt-2">
          <div className="chat-messages overflow-auto" style={{ maxHeight: "300px" }}>
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 rounded ${msg.fromBot ? "bg-light" : "bg-primary text-white"} my-1`}>
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-muted">Typing...</p>}
          </div>
          <div className="d-flex mt-2">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button className="btn btn-success ms-2" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>

  );
};

export default Chatbot;
