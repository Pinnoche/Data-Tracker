import Feeder from '../../components/Feeder'
import { useState, useEffect } from 'react'


function AEDC() {
    const [ datas, setData ] = useState([]);
    const [ bandData, setBandData] = useState('');
    useEffect(() => {
        fetch('http://localhost:8000/data')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
        }, []);

        const filteredData =  datas.filter(data => data.band === bandData);
    
  return (
    <div>
    <div className='text-blue-900 text-center rounded-sm shadow-md p-6'>
      <h1>WELCOME TO AEDC</h1>

      <h3>Feeder Information</h3>
      <div className='grid grid-cols-3 gap-4 cursor-pointer [&>p]:font-bold'>
        {['A', 'B', 'C'].map((band, index) => (
            <div key={index} onClick={() => setBandData(band)}>
                <p>BAND {band} </p>
            </div>
            ))}
      </div>
    </div>
    <div>
        <Feeder datas={datas} filteredData={filteredData} />
      </div>
    </div>
   
  )
}

export default AEDC
