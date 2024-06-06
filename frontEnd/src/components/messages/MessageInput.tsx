import { BsSend } from "react-icons/bs"

const MessageInput = () => {
  return (
    <form className="px-2 my-3">
        <div className="w-full relative">
            <input type="text" className="border text-white text-sm bg-gray-700 border-gray-600 rounded-lg w-full block p-2.5" placeholder="Send a message"></input>
            <button className="flex absolute pe-3 inset-y-0 end-0 items-center">
                <BsSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput
