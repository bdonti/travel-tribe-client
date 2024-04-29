import { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";

const TouristSpots = () => {
  const [spots, setSpots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://tourism-management-server-kappa.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setIsLoading(false);
      });
  }, []);

  const sixSpots = spots.slice(0, 6);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl mt-10">Tourist Spots</h2>
      {isLoading ? (
        <p className="text-center mt-5">
          <span className="loading loading-ring loading-lg font-bold"></span>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sixSpots.map((spot) => (
            <TouristSpot key={spot._id} spot={spot}></TouristSpot>
          ))}
        </div>
      )}
    </div>
  );
};

export default TouristSpots;
