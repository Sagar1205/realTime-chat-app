import useConversation, { ConversationType } from "../../zustand/useConversation"

const Conversation = ({ conversation, emoji } : {conversation: ConversationType, emoji:string}) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const isSelected = selectedConversation?.id === conversation.id

  const isOnline = false;
  return (
    <>
    <div className={`flex gap-2 rounded items-center hover:bg-sky-500 p-2 cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className={`avatar ${isOnline ? 'online' : ''}`}>
        <div className="rounded-full h-10 w-10 overflow-hidden">
          <img src={conversation.profilePic} alt="user avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="text-gray-200 font-bold">{conversation.fullName}</p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>
    </div>
    <div className="divider my-0 py-0 h-1"/>
    </>
  )
}

export default Conversation
