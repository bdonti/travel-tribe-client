import { useLoaderData } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaCalendar } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const SpotInfo = () => {
  const spot = useLoaderData();
  const {
    url,
    touristsSpotName,
    countryName,
    location,
    description,
    averageCost,
    season,
    travelTime,
    totalVisitors,
  } = spot;
  console.log(spot);
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-5">
        <div className="space-y-8 mt-8">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-96">
            <p className="font-bold">Country Name </p>
            <p className="font-medium">{countryName}</p>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-96">
            <p className="font-bold">Location </p>
            <p className="font-medium">{location}</p>
          </div>
        </div>
        <div>
          <img className="w-full rounded-lg" src={url} alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-center">{touristsSpotName}</h1>
          <p className="w-[305px] mx-auto lg:w-[600px]">{description}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10 gap-y-6 text-4xl">
          <div className="flex flex-col items-center space-y-4">
            <AiFillDollarCircle />
            <p>{averageCost} £</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <TiWeatherCloudy />
            <p>{season}</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaCalendar />
            <p>{travelTime} days</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <IoPeopleSharp />
            <p>{totalVisitors}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotInfo;
