import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  const gotoDashboard = () => {
    navigate('/dashboard')
  }
  const gotoSubstation = () =>{
    navigate('/substation')
  }
  // const gotoDiagram =() =>{
  //   navigate('/diagram')
  // }
  return (
    <div className="mt-16 flex flex-col items-center gap-20 text-white">
      <h1 className="font-bold text-2xl">Welcome, Please Choose Your Preferred View</h1>
      <div className="flex gap-32 [&>div]:cursor-pointer text-center">
        <div onClick={gotoDashboard}>
          <img src="/account_circle.png" alt="Dashboard" />
          <p>Dashboard</p>
        </div>
        <div onClick={gotoSubstation}>
          <img src="/notifications.png" alt="Alert" />
          <p>Alert</p>
        </div>
        <div>
          <img src="/videocam.png" alt="Live Feed" />
          <p>Live Feed</p>
        </div>
        <div>
          <img src="/settings.png" alt="Settings" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Home
