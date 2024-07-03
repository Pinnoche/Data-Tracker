import { Link } from "react-router-dom"
function AEDC() {
        
  return (
    <div>
      <div className='text-blue-900 text-center rounded-sm shadow-md p-6'>
        <h1>WELCOME TO AEDC</h1>

        <Link to='/disco/aedc/ts'>
          <h3>Feeder Information</h3>
        </Link>
     </div>
      
    </div>
   
  )
}

export default AEDC
