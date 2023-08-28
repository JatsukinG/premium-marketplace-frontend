import { IoNotifications } from "react-icons/io5"
import { FiLogOut } from "react-icons/fi"
import { useAuth } from "../../hooks/useAuth.js"

const MainNavbar = () => {

  const {logout} = useAuth()

  const handleClickLogout = () => {
    logout()
  }

  return (
      <div className="sticky top-0 left-0 w-full flex justify-between items-center bg-black px-4">
        <p className="font-bold text-xl text-white">MERCATTO</p>
        <div className="flex items-center gap-4 py-2">
          <span className="text-white font-bold flex items-center gap-2 hover:cursor-pointer hover:text-gray-200" onClick={()=>handleClickLogout()}>
            <FiLogOut size="18px"/>
            logout
          </span>
          <span className="text-white"><IoNotifications size="18px" /></span>
          <div className="w-8 h-8 rounded-full overflow-hidden border">
            <img src="/bg2.jpg" alt="profile-img" width="32px"/>
          </div>
        </div>
      </div>
  )
}

export default MainNavbar