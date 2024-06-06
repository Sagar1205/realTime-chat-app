import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] bg-gray-400 rounded-lg overflow-hidden shadow-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
