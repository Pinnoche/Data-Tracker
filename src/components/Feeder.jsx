import { useState } from 'react';
import Band from './Band';
function Feeder({ filteredTsData, gotoTs }) {
    const [band, setBand] = useState(null);
    const [showBand, setShowBand] = useState(true);
    const filteredBandData =  filteredTsData.filter(tsData => tsData.band === band);
    const displayedBands = new Set();
    const handleBand = (band)=> {
        setBand(band);
        setShowBand(false);
    }
    
  return (
    <div className="p-6">
       
        {showBand && <div className='grid grid-cols-3 gap-4 cursor-pointer [&>p]:font-bold'>
                {filteredTsData && filteredTsData.map((tsData, index) => {
                if(!displayedBands.has(tsData.band)){
                    displayedBands.add(tsData.band);
                    return (
                      <div className='w-full flex justify-center'>
                        <div key={index} onClick={() => handleBand(tsData.band)} className='bg-gray-300 border-2 rounded-sm p-2 max-w-xs text-center font-semibold'>
                        <p>BAND {tsData.band} </p>
                        </div>
                      </div>
                    )
                }
                return null;
                    
                })}
      </div>}
      <Band filteredBandData={filteredBandData} displayedBands={displayedBands} gotoTs={gotoTs} />
       
    </div>
  )
}

export default Feeder
