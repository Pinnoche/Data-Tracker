import Triangle from "./Triangle";
import ShortVerticalLine from "./ShortVerticalLine";
import LongVerticalLine from "./LongVerticalLine";
import HorizontalLine from "./HorizontalLine";
import RectangularBox from "./RectangularBox";
import ArrowDown from './ArrowDown';
import BigGreenBox from "./BigGreenBox";

function Diagram({filteredTsData}) {
  const feederList = filteredTsData.map( data => {
    return data.feeder_11.split('_')[1]
  } );
   feederList.map()
  const feeder33 = filteredTsData.filter( data => data.feeder_33 === feederList )
  return (
    <div className="relative w-full mb-[70%]">
      
          <div className="absolute right-[14.5rem] min-w-14 max-w-28 break-words bg-gray-400 text-center text-lg font-semibold">H3</div>
          <h3 className="absolute right-[7rem] max-w-36 text-center top-10 text-green-400 text-sm">DisCo Voltage Level AEDC 33kV</h3>
          <div className="absolute right-64">
            <LongVerticalLine />
          </div>
          <div className="absolute top-16 w-full">
            <HorizontalLine />
          </div>
          <div className="absolute right-[2rem] top-16">
            <ShortVerticalLine />
          </div>
          <div className="absolute left-[2rem] top-[7.85rem]">
            <Triangle />
          </div>
          <h1 className="absolute top-[7.85rem] left-[3.8rem] font-bold text-xl">R5</h1>
          <div className="absolute right-[2rem] top-[7.3rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute top-40 w-[20%] left-4">
            <HorizontalLine />
          </div>
          <div className="absolute top-[14rem] left-8">
            <BigGreenBox />
          </div>
          <div className="absolute top-[14rem] left-[9.3rem]">
            <BigGreenBox />
          </div>
          <h3 className="absolute top-48 left-4 max-w-24 break-words text-center text-green-400 text-xs">DisCo Voltage Level AEDC 11kV</h3>
          <h3 className="absolute top-48 left-[8.5rem] max-w-24 break-words text-center text-green-400 text-xs">DisCo Voltage Level AEDC 11kV</h3>
          <div className="absolute top-40 left-4">
            <ShortVerticalLine />
          </div>
          <div className="absolute top-[14.5rem] left-1">
            <RectangularBox />
          </div>
          <div className="absolute top-40 left-[8.35rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute top-[14.5rem] left-[7.6rem]">
            <RectangularBox />
          </div>
          <div className="absolute top-[14rem] left-4">
            <LongVerticalLine />
          </div>
          <div className="absolute top-[14rem] left-[8.35rem]">
            <LongVerticalLine />
          </div>
          <div className="absolute top-[19.7rem] left-[0.625rem]">
            <ArrowDown />
          </div>
          <div className="absolute top-[19.7rem] left-[8rem]">
            <ArrowDown />
          </div>
          <h1 className="absolute top-[20.2rem] font-semibold max-w-[3rem] text-center text-sm break-words whitespace-normal">AT3_H3_R5_3A</h1>
          <h1 className="absolute top-[20.2rem] left-28 font-semibold max-w-[3rem] text-center text-sm break-words whitespace-normal">AT3_H3_R5_4A</h1>
          
          <div className="absolute right-[16rem] top-16">
            <ShortVerticalLine />
          </div>
          <div className="absolute right-[15.4rem] top-[7.85rem]">
            <Triangle />
          </div>
          <h1 className="absolute top-[7.85rem] right-[13rem] font-bold text-xl">R4</h1>
          <div className="absolute right-[16rem] top-[7.3rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute top-[10rem] right-[13.5rem] w-[20%]">
            <HorizontalLine />
          </div>
          <div className="absolute top-[10rem] left-[16rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute top-[14.5rem] left-[15.35rem]">
            <RectangularBox />
          </div>
          <div className="absolute top-[14rem] left-[16rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute top-[18.5rem] left-[15.65rem]">
            <ArrowDown />
          </div>
          <h1 className="absolute top-[19rem] left-[14.5rem] font-semibold max-w-[3rem] text-center text-sm break-words whitespace-normal">AT3_H3_R4_FD10</h1>
          <h3 className="absolute top-48 left-[16rem] max-w-24 break-words text-center text-green-400 text-xs">DisCo Voltage Level AEDC 11kV</h3>
          <div className="absolute top-[14rem] left-[17.1rem]">
            <BigGreenBox />
          </div>

          <div className="absolute left-[2.58rem] top-16">
            <ShortVerticalLine />
          </div>
          <div className="absolute right-[1.38rem] top-[7.85rem]">
            <Triangle />
          </div>
          <h1 className="absolute top-[7.85rem] right-[2.6rem] font-bold text-xl max-w-14">NAF Valley</h1>
          <div className="absolute left-[2.58rem] top-[7.3rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute top-[10rem] right-0 w-[20%]">
            <HorizontalLine />
          </div>
          <div className="absolute top-[10rem] right-[7.4rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute top-[14.5rem] right-[6.7rem]">
            <RectangularBox />
          </div>
          <div className="absolute top-[14rem] right-[7.4rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute top-[18.5rem] right-[7.05rem]">
            <ArrowDown />
          </div>
          <h1 className="absolute top-[19rem] right-[5rem] font-semibold max-w-[3rem] text-center text-sm break-words whitespace-normal">AT3_H3_NAF VALLEY_FD2</h1>
          <h3 className="absolute top-48 right-3 max-w-24 break-words text-center text-green-400 text-xs">DisCo Voltage Level AEDC 11kV</h3>
          <div className="absolute top-[14rem] right-6">
            <BigGreenBox />
          </div>
          
        </div>
  )
}

export default Diagram
