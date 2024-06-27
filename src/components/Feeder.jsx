
function Feeder({ datas, filteredData }) {
        
  return (
    <div className="p-6">{
        datas && <div>{filteredData.map((data, index) => (
            <table key={index} className="rounded-sm shadow-sm bg-gray-300 w-full mb-4 text-center">
                <thead>
                <tr className="text-xl border-b-2 [&>th]:border-r-2">
                    <th>DATA</th>
                    <th>VALUES</th>
                </tr>
                </thead>
                <tbody>
                <tr className="tr">
                    <th>METER_NO</th>
                    <td>{data.meter_no}</td>
                </tr>
                <tr className="tr">
                    <th>INJECTION SUBSTATION</th>
                    <td>{data.injection_substation}</td>
                </tr>
                <tr className="tr">
                    <th>TRANSMISSION STATION</th>
                    <td>{data.transmission_station}</td>
                </tr>
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
                </tbody>
            </table>
            
        ))}</div>
        }
    </div>
  )
}

export default Feeder
