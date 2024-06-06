import SearchInput from "./SearchInput"
import Conversations from "./Conversations"
import Logoutbutton from "./Logoutbutton"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-1 md:p-4 flex flex-col w-44 md:w-1/2">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <Logoutbutton />
    </div>
  )
}

export default Sidebar
