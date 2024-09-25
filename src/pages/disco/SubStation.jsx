import React from 'react';
import Sub from './Sub';

function SubStation() {
  const stations = ['OLUYOLE', 'OLUYOLE T1', 'OLUYOLE T2', 'OBASANJO FARM', 'ZARTEC OLUYOLE'];
  const stationA = ['OLuwole', 'OLUffLE T1', 'OfYOLE T2', 'OSjkdANJO FARM', 'ZjTkkC OLUYOLE'];

  return (
    <div>
        <div>
            <div className='max-w-md p-1 rounded-md font-bold text-center my-2 text-sm mx-auto text-[#026487] bg-white'>
                MULTI-STATION VIEW
            </div>
            <div className='flex justify-evenly rounded-md text-center p-1 my-2 max-w-xl font-bold text-sm mx-auto bg-gray-500 text-[#026487]'>
                <p>T1, 100MVA</p>
                <p>T1, 100MVA</p>
                <p>T1, 100MVA</p>
            </div>
        </div>
        <div className='flex justify-between mx-24'>

        <Sub stations={stations} />
        <Sub stations={stationA} />
        </div>
    </div>    
  );
}

export default SubStation;
