import { FaComments } from "react-icons/fa";

function ChatWidget() {
  const openChat = () => {
    alert("Live Chat Coming Soon");
  };

  return (
    <button
      onClick={openChat}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center"
    >
      <FaComments size={24} />
    </button>
  );
}

export default ChatWidget;