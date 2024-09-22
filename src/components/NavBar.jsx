import { useLocation, useNavigate } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

function NavBar({ showSideBar, handleSideBar } ) {
  const navigate = useNavigate();
  const location = useLocation();
  const param = location.pathname;
 
  return (
    
      <div className="p-3 w-full bg-[#026487] text-white flex items-center gap-10">
      <div onClick={handleSideBar} className={`cursor-pointer text-white ${showSideBar && "hidden"}`}>
            <IoMdMenu />
        </div>
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-lg">DISCOS NETWORK FEED</h1>
        <ul className="flex items-center gap-8">
          <li className={`${param === '/' ? "font-bold" : ''} cursor-pointer`} onClick={()=> navigate('/')}>Home</li>
          <li className={`${param === '/signup' ? "font-bold" : ""} cursor-pointer`}>Sign Up</li>
          <li className={`${param === '/login' ? "font-bold" : ""} cursor-pointer`}>Login</li>
          <li>
            <img src="/dark_mode.png" alt="Dark Mode" />
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default NavBar
