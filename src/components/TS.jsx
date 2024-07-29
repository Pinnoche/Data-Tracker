import React, { useState, useEffect } from 'react'
// import Feeder from './Feeder'
import Diagram from './Diagram';

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
      { hideTs && <div className=''>
        <div className="mx-auto px-5 py-4 bg-gray-100 mt-8 rounded-sm max-w-3xl">
          <div className="border-b border-b-gray-400 grid grid-cols-5 [&>p]:text-lg">
            <p className="col-span-3 text-center">Transmission Station</p>
            <p className="col-span-2 text-center">Description</p>
          </div>
                    
          {datas && datas.map((data, index) => {
            if(!displayedTs.has(data.transmission_station)){
              displayedTs.add(data.transmission_station);
              return (
                <div className="grid grid-cols-6 space-x-0 text-center">
                  <div className="col-span-3 [&>p]:mb-2 [&>p]:border-b [&>p]:border-b-gray-400">
                    <div key={index} onClick={() => handleStation(data.transmission_station)} className='w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-pointer'>
                      {data.transmission_station}
                    </div>
                  </div>
                </div>
              )
           } 
            return null;
            
          })}
        </div>
      </div>}
      {feeder && <div>
        {/* <Feeder filteredTsData={filteredTsData} gotoTs={gotoTs} /> */}
        <Diagram filteredTsData={filteredTsData} gotoTs={gotoTs} />
      </div>}
    </div>
  )
}

export default TS
