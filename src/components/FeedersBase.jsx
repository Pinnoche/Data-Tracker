

function FeedersBase({Feeder_33, trasmission_1, trasmission_2, trasmission_3, trasmission_4 }) {
  return (
    <div className="w-full">
          <div className="w-full flex flex-col items-center">
            <div className="bg-white max-w-xs px-4 py-2 rounded-md uppercase border text-sm text-center drop-shadow-md">
              {Feeder_33}
            </div>
          </div>
          <div className="h-12 max-w-2 border-l border-black mx-auto"></div>
          <div className="w-[92%] border-t border-black mx-auto"></div>
          <div className="flex justify-between max-w-[92%] mx-auto">
            <div className="h-12 border-l border-black"></div>
            <div className="h-12 border-l border-black"></div>
            <div className="h-12 border-l border-black"></div>
            <div className="h-12 border-l border-black"></div>
          </div>

          <div className="flex justify-between">
            <div className="bg-gray-100 max-w-xs uppercase font-normal text-xs drop-shadow-lg text-center py-3 px-4">
              {trasmission_1}
            </div>
            <div className="bg-gray-100 max-w-xs uppercase font-normal text-xs drop-shadow-lg text-center py-3 px-4">
              {trasmission_2}
            </div>
            <div className="bg-gray-100 max-w-xs uppercase font-normal text-xs drop-shadow-lg text-center py-3 px-4">
              {trasmission_3}
            </div>
            <div className="bg-gray-100 max-w-xs uppercase font-normal text-xs drop-shadow-lg text-center py-3 px-4">
              {trasmission_4}
            </div>
          </div>
        </div>
  )
}

export default FeedersBase
