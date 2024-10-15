import { useState, useEffect } from "react";

// Custom WebSocket hook
const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");

  useEffect(() => {
    // Create WebSocket connection
    const socket = new WebSocket(url);

    // Connection opened
    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    };

    // Listen for messages
    socket.onmessage = (message) => {
      console.log("Received Message: ", message.data);
      setLatestMessage(message.data);
    };

    // Clean up WebSocket connection on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [url]);

  // Function to send message
  const sendMessage = (message: string) => {
    if (socket && message) {
      socket.send(message);
    }
  };

  return { socket, latestMessage, sendMessage };
};

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const { socket, latestMessage, sendMessage } = useWebSocket("ws://localhost:8080");

  // Handle sending message
  const handleSendMessage = () => {
    if (inputMessage) {
      sendMessage(inputMessage);
      setInputMessage(""); // Clear input after sending
    }
  };

  if (!socket) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-lg text-gray-700">Connecting to Socket Server .....</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">WebSocket Chat</h1>

        <div className="mb-4">
          <p className="text-gray-700">
            <strong>Latest Message: </strong>
            {latestMessage || "No messages yet"}
          </p>
        </div>

        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
