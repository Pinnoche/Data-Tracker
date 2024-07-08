import { useState } from 'react'

function Time() {
    const [currentTime, setCurrentTime ] = useState(null);
    const [presentDay, setPresentDay ] = useState(null);
    
        const fetchTime = () => {
            const time = new Date().toLocaleTimeString();
            setCurrentTime(time);

           const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
           const day = days[new Date().getUTCDay()];
           setPresentDay(day);
        };
      setInterval(fetchTime, 1000);
       
       
   
        
  return (
    <div  className='flex justify-end pt-2'>
        {currentTime &&<div className='text-black bg-white p-2 mr-2 font-semibold border-2 rounded-md max-w-xs text-center'>
            {presentDay} : {currentTime}
        </div>}
    </div>
  )
}

export default Time