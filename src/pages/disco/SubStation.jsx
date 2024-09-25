import React from 'react';
import Sub from './Sub';

function SubStation() {
  const stations = ['OLUYOLE', 'OLUYOLE T1', 'OLUYOLE T2', 'OBASANJO FARM', 'ZARTEC OLUYOLE'];
  const stationA = ['OLuwole', 'OLUffLE T1', 'OfYOLE T2', 'OSjkdANJO FARM', 'ZjTkkC OLUYOLE'];

  return (
    <div>
        <div>
            <div className='max-w-md p-1 rounded-md font-bold text-center my-2 text-sm mx-auto shadow-lg text-white '>
                MULTI-STATION VIEW
            </div>
            <div className='flex justify-evenly rounded-md text-center p-1 mb-20 max-w-md font-bold text-sm mx-auto shadow-lg text-white'>
                <p>T1, 100MVA</p>
                <p>T1, 100MVA</p>
                <p>T1, 100MVA</p>
            </div>
        </div>
        <div className='grid grid-cols-2 justify-between mx-24'>
            <Sub stations={stations} />
            <Sub stations={stationA} />
            <Sub stations={stationA} />
        </div>
    </div>    
  );
}

export default SubStation;
