const Conversation = () => {
  return (
    <>
    <div className="flex gap-2 rounded items-center hover:bg-sky-500 p-2 cursor-pointer">
      <div className="avatar online">
        <div className="rounded-full h-10 w-10 overflow-hidden">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="text-gray-200 font-bold">John Doe</p>
          <span className="text-xl">🎃</span>
        </div>
      </div>
    </div>
    <div className="divider my-0 py-0 h-1"/>
    </>
  )
}

export default Conversation
