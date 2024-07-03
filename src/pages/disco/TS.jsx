import React, { useState, useEffect } from 'react'
import Feeder from '../../components/Feeder'

function TS() {
    const [ datas, setData ] = useState([]);
    const [ tS, setTs ] = useState(null);
    const [hideTs, setHideTs] = useState(true);
    const [feeder, showFeeder] = useState(false);
    const displayedTs = new Set();
    useEffect(() => {
        fetch('http://localhost:8000/data')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
        }, []);

        const filteredTsData =  datas.filter(data => data.transmission_station === tS);
        const handleStation = (station)=> {
            setHideTs(false);
            showFeeder(true);
            setTs(station);
        };
        const gotoTs = () => {
            showFeeder(false);
            setHideTs(true);
        }
    
  return (
    <div>
      { hideTs && <div className='grid grid-cols-3 gap-4 [&>p]:font-bold p-12 mx-auto'>
        {datas && datas.map((data, index) => {
          if(!displayedTs.has(data.transmission_station)){
              displayedTs.add(data.transmission_station);
              return (
                <div key={index} onClick={() => handleStation(data.transmission_station)} className='bg-gray-400 shadow-md rounded-sm cursor-pointer'>
                 <p>TRANSMISSION STATION: {data.transmission_station} </p>
                </div>
              )
          }
          return null;
            
        })}
      </div>}
      {feeder && <div>
        <Feeder datas={datas} filteredTsData={filteredTsData} gotoTs={gotoTs} />
      </div>}
    </div>
  )
}

export default TS
