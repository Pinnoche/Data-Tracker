import { useState } from "react";
function Feeder({ datas, filteredTsData, gotoTs }) {
    const [band, setBand] = useState(null);
    const displayedBands = new Set();
    const filteredBandData =  filteredTsData.filter(tsData => tsData.band === band);
  return (
    <div className="p-6">
        
            
        <div className='grid grid-cols-3 gap-4 cursor-pointer [&>p]:font-bold'>
                {datas && filteredTsData.map((tsData, index) => {
                if(!displayedBands.has(tsData.band)){
                    displayedBands.add(tsData.band);
                    return (
                        <div key={index} onClick={() => setBand(tsData.band)}>
                        <p>BAND {tsData.band} </p>
                        </div>
                    )
                }
                return null;
                    
                })}
      </div>
            
       
        {datas && <div>{filteredBandData.map((data, index) => (
        <table key={index} className="rounded-sm shadow-sm bg-gray-300 w-full mb-4 text-center">
                <thead>
                <tr className="text-xl border-b-2 [&>th]:border-r-2">
                    <th>DATA</th>
                    <th>VALUES</th>
                    <th className="text-green-400 cursor-default" onClick={() => gotoTs()}>Go Back</th>
                </tr>
                </thead>
                <tbody>
                    {data.feeder_11 && <tr className="tr">
                        <th>FEEDER 11</th>
                        <td>{data.feeder_11}</td>
                    </tr>}
                    {data.feeder_33 && <tr className="tr">
                        <th>FEEDER 33</th>
                        <td>{data.feeder_33}</td>
                    </tr>}
                {data.meter_no && <tr className="tr">
                    <th>METER_NO</th>
                    <td>{data.meter_no}</td>
                </tr>}
                {data.injection_substation && <tr className="tr">
                    <th>INJECTION SUBSTATION</th>
                    <td>{data.injection_substation}</td>
                </tr>}
                <tr className="tr">
                    <th>VOLTAGE LEVEL</th>
                    <td>{data.voltage_level}</td>
                </tr>
                 <tr className="tr">
                    <th>PHASE A VOLTAGE</th>
                    <td>{data.VA}V</td>
                </tr>
                <tr className="tr">
                    <th>PHASE B VOLTAGE</th>
                    <td>{data.VB}V</td>
                </tr>
                <tr className="tr">
                    <th>PHASE C VOLTAGE</th>
                    <td>{data.VC}V</td>
                </tr>
                <tr className="tr">
                    <th>PHASE A CURRENT</th>
                    <td>{data.IA}A</td>
                </tr>
                <tr className="tr">
                    <th>PHASE B CURRENT</th>
                    <td>{data.IB}A</td>
                </tr>
                <tr className="tr">
                    <th>PHASE C CURRENT</th>
                    <td>{data.IC}A</td>
                </tr>
                <tr className="tr">
                    <th>POWER FACTOR</th>
                    <td>{data.PF}</td>
                </tr>
                <tr className="tr">
                    <th>WATTS</th>
                    <td>{data.MW}MW</td>
                </tr>
                </tbody>
            </table>
             ))}</div>}
    </div>
  )
}

export default Feeder
