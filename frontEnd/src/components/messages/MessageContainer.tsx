import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessage } from "react-icons/ti";

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser?.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessage className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

const MessageContainer = () => {
    const { selectedConversation } = useConversation();

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? <NoChatSelected /> : (
                <>
                    <div className="bg-gray-500 py-2 px-4 mb-2">
                        <span className="label-text">To: </span>
                        <span className="font-bold text-gray-900">{selectedConversation.fullName}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>

  )
}

export default MessageContainer
