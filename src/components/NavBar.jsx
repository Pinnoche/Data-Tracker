import { useLocation } from 'react-router-dom'


function NavBar({ showSidebar } ) {
  const location = useLocation();
  const param = location.pathname;
 
  return (
    
      <div className="p-3 w-full bg-[#026487] text-white flex items-center gap-10">
      
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-lg">DISCOS NETWORK FEED</h1>
        <ul className="flex items-center gap-8">
          <li className={`${param.startsWith('/') && "font-bold"}`}>Home</li>
          <li className={`${param.startsWith('/signup') && "font-bold"}`}>Sign Up</li>
          <li className={`${param.startsWith('/login') && "font-bold"}`}>Login</li>
          <li>
            <img src="/dark_mode.png" alt="Dark Mode" />
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default NavBar
