import { useState } from "react"
import { BsSend } from "react-icons/bs"
import useSendMessages from "../../hooks/useSendMessages";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading,sendMessage } = useSendMessages();

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if(!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-2 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text" 
              className="border text-white text-sm bg-gray-700 border-gray-600 rounded-lg w-full block p-2.5" 
              placeholder="Send a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="flex absolute pe-3 inset-y-0 end-0 items-center">
                {loading ? <span className="loading loading-spinner"/> : <BsSend />}
            </button>
        </div>
    </form>
  )
}

export default MessageInput
